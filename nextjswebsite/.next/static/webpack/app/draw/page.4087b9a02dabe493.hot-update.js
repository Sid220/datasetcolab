"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/draw/page",{

/***/ "(app-pages-browser)/./hooks/useDraw.tsx":
/*!***************************!*\
  !*** ./hooks/useDraw.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useDraw: function() { return /* binding */ useDraw; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* __next_internal_client_entry_do_not_use__ useDraw auto */ var _s = $RefreshSig$();\n\nconst useDraw = (color, img)=>{\n    _s();\n    const [isDrawing, setIsDrawing] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const [startPoint, setStartPoint] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    const [rectangles, setRectangles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    const drawBox = (start, end)=>{\n        const canvas = canvasRef.current;\n        const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext(\"2d\");\n        if (!ctx) return;\n        // Draw a single rectangle\n        const width = end.x - start.x;\n        const height = end.y - start.y;\n        ctx.beginPath();\n        ctx.rect(start.x, start.y, width, height);\n        ctx.strokeStyle = color;\n        ctx.lineWidth = 3;\n        ctx.stroke();\n        const img = new Image();\n        ctx.drawImage(img, 0, 0);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const canvas = canvasRef.current;\n        const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext(\"2d\");\n        if (!ctx) return;\n        // Function to redraw all rectangles\n        const redrawRectangles = ()=>{\n            if (!canvas) return;\n            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas first\n            rectangles.forEach((rectangle)=>{\n                drawBox(rectangle.start, rectangle.end);\n            });\n        };\n        redrawRectangles();\n    }, [\n        rectangles\n    ]); // Redraw when the rectangles array changes\n    const onMouseDown = (e)=>{\n        var _canvasRef_current;\n        const rect = (_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.getBoundingClientRect();\n        if (rect) {\n            const x = e.clientX - rect.left;\n            const y = e.clientY - rect.top;\n            setStartPoint({\n                x,\n                y\n            });\n            setIsDrawing(true);\n        }\n    };\n    const onMouseMove = (e)=>{\n        var _canvasRef_current;\n        if (!isDrawing || !startPoint) return;\n        const rect = (_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.getBoundingClientRect();\n        if (rect) {\n            const x = e.clientX - rect.left;\n            const y = e.clientY - rect.top;\n            // Draw all rectangles plus the current one being drawn\n            const canvas = canvasRef.current;\n            const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext(\"2d\");\n            if (!ctx || !canvas) return;\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\n            rectangles.forEach((rect)=>drawBox(rect.start, rect.end)); // Redraw existing rectangles\n            drawBox(startPoint, {\n                x,\n                y\n            }); // Draw the current rectangle dynamically\n        }\n    };\n    const onMouseUp = (e)=>{\n        var _canvasRef_current;\n        if (!startPoint) return;\n        const rect = (_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.getBoundingClientRect();\n        if (rect) {\n            const x = e.clientX - rect.left;\n            const y = e.clientY - rect.top;\n            setRectangles([\n                ...rectangles,\n                {\n                    start: startPoint,\n                    end: {\n                        x,\n                        y\n                    }\n                }\n            ]);\n            setIsDrawing(false);\n        }\n    };\n    const clear = ()=>{\n        const canvas = canvasRef.current;\n        const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext(\"2d\");\n        if (ctx && canvas) {\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\n            setRectangles([]); // Clear the rectangles array\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const canvas = canvasRef.current;\n        if (!canvas) return;\n        canvas.addEventListener(\"mousemove\", onMouseMove);\n        canvas.addEventListener(\"mouseup\", onMouseUp);\n        return ()=>{\n            canvas.removeEventListener(\"mousemove\", onMouseMove);\n            canvas.removeEventListener(\"mouseup\", onMouseUp);\n        };\n    }, [\n        isDrawing,\n        startPoint,\n        rectangles\n    ]); // Add rectangles to dependencies to ensure proper cleanup\n    return {\n        canvasRef,\n        onMouseDown,\n        clear\n    };\n};\n_s(useDraw, \"U450XA+OpI/x8iIaOVsgPQ7Pdac=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0g7UUFDeEM7SUFDRixHQUFHO1FBQUNyQztRQUFXRTtRQUFZRTtLQUFXLEdBQUcsMERBQTBEO0lBR25HLE9BQU87UUFBRUU7UUFBV3VCO1FBQWFTO0lBQU07QUFDeEMsRUFBRTtHQWpIV3pDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZURyYXcudHN4PzY1NjIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuLy8gRGVmaW5lIGEgdHlwZSBmb3IgdGhlIHJlY3RhbmdsZVxudHlwZSBSZWN0YW5nbGUgPSB7XG4gc3RhcnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcbiBlbmQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcbn07XG5cblxuZXhwb3J0IGNvbnN0IHVzZURyYXcgPSAoY29sb3I6IHN0cmluZywgaW1nOiBzdHJpbmcpID0+IHtcbiBjb25zdCBbaXNEcmF3aW5nLCBzZXRJc0RyYXdpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuIGNvbnN0IFtzdGFydFBvaW50LCBzZXRTdGFydFBvaW50XSA9IHVzZVN0YXRlPHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGw+KG51bGwpO1xuIGNvbnN0IFtyZWN0YW5nbGVzLCBzZXRSZWN0YW5nbGVzXSA9IHVzZVN0YXRlPFJlY3RhbmdsZVtdPihbXSk7XG4gY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcblxuXG4gY29uc3QgZHJhd0JveCA9IChzdGFydDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBlbmQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSkgPT4ge1xuICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICBjb25zdCBjdHggPSBjYW52YXM/LmdldENvbnRleHQoJzJkJyk7XG4gICBpZiAoIWN0eCkgcmV0dXJuO1xuXG5cbiAgIC8vIERyYXcgYSBzaW5nbGUgcmVjdGFuZ2xlXG4gICBjb25zdCB3aWR0aCA9IGVuZC54IC0gc3RhcnQueDtcbiAgIGNvbnN0IGhlaWdodCA9IGVuZC55IC0gc3RhcnQueTtcbiAgIGN0eC5iZWdpblBhdGgoKTtcbiAgIGN0eC5yZWN0KHN0YXJ0LngsIHN0YXJ0LnksIHdpZHRoLCBoZWlnaHQpO1xuICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICBjdHgubGluZVdpZHRoID0gMztcbiAgIGN0eC5zdHJva2UoKTtcbiAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuIH07XG5cblxuIHVzZUVmZmVjdCgoKSA9PiB7XG4gICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgIGNvbnN0IGN0eCA9IGNhbnZhcz8uZ2V0Q29udGV4dCgnMmQnKTtcbiAgIGlmICghY3R4KSByZXR1cm47XG5cblxuICAgLy8gRnVuY3Rpb24gdG8gcmVkcmF3IGFsbCByZWN0YW5nbGVzXG4gICBjb25zdCByZWRyYXdSZWN0YW5nbGVzID0gKCkgPT4ge1xuICAgICBpZiAoIWNhbnZhcykgcmV0dXJuO1xuICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7IC8vIENsZWFyIHRoZSBjYW52YXMgZmlyc3RcbiAgICAgcmVjdGFuZ2xlcy5mb3JFYWNoKHJlY3RhbmdsZSA9PiB7XG4gICAgICAgZHJhd0JveChyZWN0YW5nbGUuc3RhcnQsIHJlY3RhbmdsZS5lbmQpO1xuICAgICB9KTtcbiAgIH07XG5cblxuICAgcmVkcmF3UmVjdGFuZ2xlcygpO1xuIH0sIFtyZWN0YW5nbGVzXSk7IC8vIFJlZHJhdyB3aGVuIHRoZSByZWN0YW5nbGVzIGFycmF5IGNoYW5nZXNcblxuXG4gY29uc3Qgb25Nb3VzZURvd24gPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQ2FudmFzRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcbiAgIGNvbnN0IHJlY3QgPSBjYW52YXNSZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICBpZiAocmVjdCkge1xuICAgICBjb25zdCB4ID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICBjb25zdCB5ID0gZS5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgIHNldFN0YXJ0UG9pbnQoeyB4LCB5IH0pO1xuICAgICBzZXRJc0RyYXdpbmcodHJ1ZSk7XG4gICB9XG4gfTtcblxuXG4gY29uc3Qgb25Nb3VzZU1vdmUgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgaWYgKCFpc0RyYXdpbmcgfHwgIXN0YXJ0UG9pbnQpIHJldHVybjtcbiAgIGNvbnN0IHJlY3QgPSBjYW52YXNSZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICBpZiAocmVjdCkge1xuICAgICBjb25zdCB4ID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICBjb25zdCB5ID0gZS5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgIC8vIERyYXcgYWxsIHJlY3RhbmdsZXMgcGx1cyB0aGUgY3VycmVudCBvbmUgYmVpbmcgZHJhd25cbiAgICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgIGNvbnN0IGN0eCA9IGNhbnZhcz8uZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgaWYgKCFjdHggfHwgIWNhbnZhcykgcmV0dXJuO1xuICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgIHJlY3RhbmdsZXMuZm9yRWFjaChyZWN0ID0+IGRyYXdCb3gocmVjdC5zdGFydCwgcmVjdC5lbmQpKTsgLy8gUmVkcmF3IGV4aXN0aW5nIHJlY3RhbmdsZXNcbiAgICAgZHJhd0JveChzdGFydFBvaW50LCB7IHgsIHkgfSk7IC8vIERyYXcgdGhlIGN1cnJlbnQgcmVjdGFuZ2xlIGR5bmFtaWNhbGx5XG4gICB9XG4gfTtcblxuXG4gY29uc3Qgb25Nb3VzZVVwID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgIGlmICghc3RhcnRQb2ludCkgcmV0dXJuO1xuICAgY29uc3QgcmVjdCA9IGNhbnZhc1JlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgIGlmIChyZWN0KSB7XG4gICAgIGNvbnN0IHggPSBlLmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgIGNvbnN0IHkgPSBlLmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgc2V0UmVjdGFuZ2xlcyhbLi4ucmVjdGFuZ2xlcywgeyBzdGFydDogc3RhcnRQb2ludCwgZW5kOiB7IHgsIHkgfSB9XSk7XG4gICAgIHNldElzRHJhd2luZyhmYWxzZSk7XG4gICB9XG4gfTtcblxuXG4gY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgIGNvbnN0IGN0eCA9IGNhbnZhcz8uZ2V0Q29udGV4dCgnMmQnKTtcbiAgIGlmIChjdHggJiYgY2FudmFzKSB7XG4gICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgc2V0UmVjdGFuZ2xlcyhbXSk7IC8vIENsZWFyIHRoZSByZWN0YW5nbGVzIGFycmF5XG4gICB9XG4gfTtcblxuXG4gdXNlRWZmZWN0KCgpID0+IHtcbiAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgaWYgKCFjYW52YXMpIHJldHVybjtcblxuXG4gICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuXG5cbiAgIHJldHVybiAoKSA9PiB7XG4gICAgIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgIH07XG4gfSwgW2lzRHJhd2luZywgc3RhcnRQb2ludCwgcmVjdGFuZ2xlc10pOyAvLyBBZGQgcmVjdGFuZ2xlcyB0byBkZXBlbmRlbmNpZXMgdG8gZW5zdXJlIHByb3BlciBjbGVhbnVwXG5cblxuIHJldHVybiB7IGNhbnZhc1JlZiwgb25Nb3VzZURvd24sIGNsZWFyIH07XG59O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRHJhdyIsImNvbG9yIiwiaW1nIiwiaXNEcmF3aW5nIiwic2V0SXNEcmF3aW5nIiwic3RhcnRQb2ludCIsInNldFN0YXJ0UG9pbnQiLCJyZWN0YW5nbGVzIiwic2V0UmVjdGFuZ2xlcyIsImNhbnZhc1JlZiIsImRyYXdCb3giLCJzdGFydCIsImVuZCIsImNhbnZhcyIsImN1cnJlbnQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJ4IiwiaGVpZ2h0IiwieSIsImJlZ2luUGF0aCIsInJlY3QiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZSIsIkltYWdlIiwiZHJhd0ltYWdlIiwicmVkcmF3UmVjdGFuZ2xlcyIsImNsZWFyUmVjdCIsImZvckVhY2giLCJyZWN0YW5nbGUiLCJvbk1vdXNlRG93biIsImUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRYIiwibGVmdCIsImNsaWVudFkiLCJ0b3AiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsImNsZWFyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./hooks/useDraw.tsx\n"));

/***/ })

});