#import "RCTBridgeModule.h"
#import "RCTEventEmitter.h"
#import <UIKit/UIKit.h>

@interface ImageLibraryManager : RCTEventEmitter <RCTBridgeModule, UINavigationControllerDelegate, UIImagePickerControllerDelegate>
@end
