package com.rnnyt;

import android.app.Activity;
import android.content.Intent;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

public class ImageLibraryManager extends ReactContextBaseJavaModule implements ActivityEventListener {

    private static final String START_EVENT = "ImageSelectionStarted";
    private static final String END_EVENT = "ImageSelectionEnded";

    private Callback mCallback;
    private Promise mPromise;
    private ReactContext mReactContext;

    public ImageLibraryManager(ReactApplicationContext reactContext) {
        super(reactContext);

        reactContext.addActivityEventListener(this);

        mReactContext = reactContext;
    }

    @Override
    public String getName() {
        return "ImageLibraryManager";
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        Map<String, Object> constants = new HashMap<>();
        constants.put("startEvent", START_EVENT);
        constants.put("endEvent", END_EVENT);
        return constants;
    }

    @ReactMethod
    public void selectImage(Callback callback) {
        mCallback = callback;
        openPicker();
    }

    @ReactMethod
    public void selectImagePromise(Promise promise) {
        mPromise = promise;
        openPicker();
    }

    private void openPicker() {
        mReactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(START_EVENT, null);

        Activity currentActivity = getCurrentActivity();

        Intent libraryIntent = new Intent(Intent.ACTION_PICK,
                android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI);

        currentActivity.startActivityForResult(libraryIntent, 1);
    }

    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
        String filePath = data.getDataString();

        if (mCallback != null) {
            mCallback.invoke(filePath);
        } else if (mPromise != null) {
            mPromise.resolve(filePath);
        }

        mReactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(END_EVENT, filePath);
    }

    @Override
    public void onNewIntent(Intent intent) {

    }
}
