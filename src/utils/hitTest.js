"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleXRHitTest = void 0;
var hitTestSource;
var hitTestSourceRequested = false;
function handleXRHitTest(renderer, frame, onHitTestResultReady, onHitTestResultEmpty) {
    var referenceSpace = renderer.xr.getReferenceSpace();
    var session = renderer.xr.getSession();
    var xrHitPoseMatrix;
    if (session && hitTestSourceRequested === false) {
        session.requestReferenceSpace("viewer").then(function (referenceSpace) {
            if (session) {
                session
                    .requestHitTestSource({ space: referenceSpace })
                    .then(function (source) {
                    hitTestSource = source;
                });
            }
        });
        hitTestSourceRequested = true;
    }
    if (hitTestSource) {
        var hitTestResults = frame.getHitTestResults(hitTestSource);
        if (hitTestResults.length) {
            var hit = hitTestResults[0];
            if (hit && hit !== null && referenceSpace) {
                var xrHitPose = hit.getPose(referenceSpace);
                if (xrHitPose) {
                    xrHitPoseMatrix = xrHitPose.transform.matrix;
                    onHitTestResultReady(xrHitPoseMatrix);
                }
            }
        }
        else {
            onHitTestResultEmpty();
        }
    }
}
exports.handleXRHitTest = handleXRHitTest;
;
