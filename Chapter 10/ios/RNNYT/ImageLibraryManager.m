#import "ImageLibraryManager.h"

#import "RCTLog.h"
#import "RCTEventDispatcher.h"

@import MobileCoreServices;

static NSString *const StartEvent = @"ImageSelectionStarted";
static NSString *const EndEvent = @"ImageSelectionEnded";

@interface ImageLibraryManager ()

@property (nonatomic, strong) RCTResponseSenderBlock callback;
@property (nonatomic, strong) RCTPromiseResolveBlock resolve;
@property (nonatomic, strong) RCTPromiseRejectBlock reject;

@end

@implementation ImageLibraryManager

RCT_EXPORT_MODULE();

- (NSArray<NSString *> *)supportedEvents {
  return @[StartEvent, EndEvent];
}

- (NSDictionary *)constantsToExport
{
  return @{ @"startEvent": StartEvent,
            @"endEvent": EndEvent };
}

RCT_EXPORT_METHOD(selectImage:(RCTResponseSenderBlock)callback)
{
  RCTLogInfo(@"Selecting image...");
  self.callback = callback;

  [self openPicker];
}

RCT_EXPORT_METHOD(selectImagePromise:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  RCTLogInfo(@"Selecting image...");
  self.resolve = resolve;
  self.reject = reject;

  [self openPicker];
}

- (void)openPicker
{
  [self sendEventWithName:StartEvent body:nil];
  UIImagePickerController *picker = [[UIImagePickerController alloc] init];

  picker.sourceType = UIImagePickerControllerSourceTypePhotoLibrary;
  picker.mediaTypes = @[(NSString *)kUTTypeImage];
  picker.modalPresentationStyle = UIModalPresentationCurrentContext;

  picker.delegate = self;

  UIViewController *root = [[[[UIApplication sharedApplication] delegate] window] rootViewController];

  [root presentViewController:picker animated:YES completion:nil];
}

- (void)imagePickerController:(UIImagePickerController *)picker didFinishPickingMediaWithInfo:(NSDictionary *)info
{
  NSString *fileName = [[[NSUUID UUID] UUIDString] stringByAppendingString:@".jpg"];
  NSString *path = [[NSTemporaryDirectory()stringByStandardizingPath] stringByAppendingPathComponent:fileName];
  UIImage *image = [info objectForKey:UIImagePickerControllerOriginalImage];
  NSData *data = UIImageJPEGRepresentation(image, 0);
  [data writeToFile:path atomically:YES];
  NSURL *fileURL = [NSURL fileURLWithPath:path];
  NSString *filePath = [fileURL absoluteString];

  // Logging for demonstration purposes only
  RCTLog(@"%@", filePath);

  if (self.callback != nil) {
    self.callback(@[filePath]);
  } else if (self.resolve != nil) {
    self.resolve(filePath);
  }

  [self sendEventWithName:EndEvent body:filePath];
  [picker dismissViewControllerAnimated:YES completion:nil];
}


@end
