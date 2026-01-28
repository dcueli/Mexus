import { Injectable } from '@angular/core';
import { CallRecorder } from '../plugins/call-recorder.plugin';

@Injectable({ providedIn: 'root' })
export class CallRecorderService {
  start() {
    return CallRecorder.startRecording();
  }
  stop() {
    return CallRecorder.stopRecording();
  }
}

