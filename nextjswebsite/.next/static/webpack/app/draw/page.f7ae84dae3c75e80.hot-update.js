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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useDraw: function() { return /* binding */ useDraw; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nconst useDraw = function() {\n    let color = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : \"#000\";\n    _s();\n    const [isDrawing, setIsDrawing] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const [startPoint, setStartPoint] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    const [rectangles, setRectangles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const canvas = canvasRef.current;\n        const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext(\"2d\");\n        const drawRectangle1 = (rect)=>{\n            const width = rect.end.x - rect.start.x;\n            const height = rect.end.y - rect.start.y;\n            if (ctx) {\n                ctx.beginPath();\n                ctx.rect(rect.start.x, rect.start.y, width, height);\n                ctx.strokeStyle = color;\n                ctx.lineWidth = 5;\n                ctx.stroke();\n            }\n        };\n        // Redraw all rectangles\n        const redraw = ()=>{\n            if (!ctx) return;\n            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas\n            rectangles.forEach((rect)=>drawRectangle1(rect)); // Draw all rectangles\n        };\n        redraw();\n    }, [\n        rectangles,\n        color\n    ]); // Redraw when rectangles or color changes\n    const onMouseDown = (e)=>{\n        var _canvasRef_current;\n        const rect = (_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.getBoundingClientRect();\n        if (!rect) return;\n        const x = e.clientX - rect.left;\n        const y = e.clientY - rect.top;\n        setStartPoint({\n            x,\n            y\n        });\n        setIsDrawing(true);\n    };\n    const onMouseMove = (e)=>{\n        if (!isDrawing || !startPoint) return;\n        const rect = canvasRef.current.getBoundingClientRect();\n        const currentPoint = {\n            x: e.clientX - rect.left,\n            y: e.clientY - rect.top\n        };\n        const canvas = canvasRef.current;\n        const ctx = canvas.getContext(\"2d\");\n        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before redraw\n        // Redraw existing rectangles\n        rectangles.forEach((rect)=>drawRectangle(rect));\n        // Draw current rectangle\n        drawRectangle({\n            start: startPoint,\n            end: currentPoint\n        });\n    };\n    const onMouseUp = (e)=>{\n        if (!startPoint) return;\n        const rect = canvasRef.current.getBoundingClientRect();\n        const end = {\n            x: e.clientX - rect.left,\n            y: e.clientY - rect.top\n        };\n        setRectangles([\n            ...rectangles,\n            {\n                start: startPoint,\n                end\n            }\n        ]);\n        setIsDrawing(false);\n        setStartPoint(null);\n    };\n    const clear = ()=>{\n        const canvas = canvasRef.current;\n        if (canvas) {\n            const ctx = canvas.getContext(\"2d\");\n            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas\n            setRectangles([]); // Clear rectangles state\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const canvas = canvasRef.current;\n        canvas.addEventListener(\"mousemove\", onMouseMove);\n        canvas.addEventListener(\"mouseup\", onMouseUp);\n        return ()=>{\n            canvas.removeEventListener(\"mousemove\", onMouseMove);\n            canvas.removeEventListener(\"mouseup\", onMouseUp);\n        };\n    }, [\n        onMouseMove,\n        onMouseUp\n    ]);\n    return {\n        canvasRef,\n        onMouseDown,\n        clear\n    };\n};\n_s(useDraw, \"U450XA+OpI/x8iIaOVsgPQ7Pdac=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU07WUFBRUMsR0FBR1ksRUFBRUUsT0FBTyxHQUFHakIsS0FBS2tCLElBQUk7WUFBRVosR0FBR1MsRUFBRUksT0FBTyxHQUFHbkIsS0FBS29CLEdBQUc7UUFBQztRQUNoRTNCLGNBQWM7ZUFBSUQ7WUFBWTtnQkFBRVksT0FBT2Q7Z0JBQVlZO1lBQUk7U0FBRTtRQUN6RGIsYUFBYTtRQUNiRSxjQUFjO0lBQ2hCO0lBRUEsTUFBTWlDLFFBQVE7UUFDWixNQUFNN0IsU0FBU0QsVUFBVUUsT0FBTztRQUNoQyxJQUFJRCxRQUFRO1lBQ1IsTUFBTUUsTUFBTUYsT0FBT0csVUFBVSxDQUFDO1lBQzlCRCxJQUFJZSxTQUFTLENBQUMsR0FBRyxHQUFHakIsT0FBT00sS0FBSyxFQUFFTixPQUFPVSxNQUFNLEdBQUcsZUFBZTtZQUNqRVosY0FBYyxFQUFFLEdBQUcseUJBQXlCO1FBQ2hEO0lBQ0Y7SUFFQVYsZ0RBQVNBLENBQUM7UUFDUixNQUFNWSxTQUFTRCxVQUFVRSxPQUFPO1FBQ2hDRCxPQUFPOEIsZ0JBQWdCLENBQUMsYUFBYUo7UUFDckMxQixPQUFPOEIsZ0JBQWdCLENBQUMsV0FBV0Y7UUFFbkMsT0FBTztZQUNMNUIsT0FBTytCLG1CQUFtQixDQUFDLGFBQWFMO1lBQ3hDMUIsT0FBTytCLG1CQUFtQixDQUFDLFdBQVdIO1FBQ3hDO0lBQ0YsR0FBRztRQUFDRjtRQUFhRTtLQUFVO0lBRTNCLE9BQU87UUFBRTdCO1FBQVdvQjtRQUFhVTtJQUFNO0FBQ3pDLEVBQUU7R0FyRld0QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rcy91c2VEcmF3LnRzeD82NTYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IHVzZURyYXcgPSAoY29sb3IgPSAnIzAwMCcpID0+IHtcbiAgY29uc3QgW2lzRHJhd2luZywgc2V0SXNEcmF3aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3N0YXJ0UG9pbnQsIHNldFN0YXJ0UG9pbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtyZWN0YW5nbGVzLCBzZXRSZWN0YW5nbGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcz8uZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGNvbnN0IGRyYXdSZWN0YW5nbGUgPSAocmVjdDogYW55KSA9PiB7XG4gICAgICBjb25zdCB3aWR0aCA9IHJlY3QuZW5kLnggLSByZWN0LnN0YXJ0Lng7XG4gICAgICBjb25zdCBoZWlnaHQgPSByZWN0LmVuZC55IC0gcmVjdC5zdGFydC55O1xuICAgICAgaWYgKGN0eCkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5yZWN0KHJlY3Quc3RhcnQueCwgcmVjdC5zdGFydC55LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgICBcbiAgICB9O1xuXG4gICAgLy8gUmVkcmF3IGFsbCByZWN0YW5nbGVzXG4gICAgY29uc3QgcmVkcmF3ID0gKCkgPT4ge1xuICAgICAgaWYgKCFjdHgpIHJldHVybjtcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTsgLy8gQ2xlYXIgY2FudmFzXG4gICAgICByZWN0YW5nbGVzLmZvckVhY2gocmVjdCA9PiBkcmF3UmVjdGFuZ2xlKHJlY3QpKTsgLy8gRHJhdyBhbGwgcmVjdGFuZ2xlc1xuICAgIH07XG5cbiAgICByZWRyYXcoKTtcbiAgfSwgW3JlY3RhbmdsZXMsIGNvbG9yXSk7IC8vIFJlZHJhdyB3aGVuIHJlY3RhbmdsZXMgb3IgY29sb3IgY2hhbmdlc1xuXG4gIGNvbnN0IG9uTW91c2VEb3duID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBjYW52YXNSZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKCFyZWN0KSByZXR1cm47XG4gICAgY29uc3QgeCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICBjb25zdCB5ID0gZS5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgc2V0U3RhcnRQb2ludCh7IHgsIHkgfSk7XG4gICAgc2V0SXNEcmF3aW5nKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IG9uTW91c2VNb3ZlID0gKGUpID0+IHtcbiAgICBpZiAoIWlzRHJhd2luZyB8fCAhc3RhcnRQb2ludCkgcmV0dXJuO1xuICAgIGNvbnN0IHJlY3QgPSBjYW52YXNSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBjdXJyZW50UG9pbnQgPSB7IHg6IGUuY2xpZW50WCAtIHJlY3QubGVmdCwgeTogZS5jbGllbnRZIC0gcmVjdC50b3AgfTtcbiAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7IC8vIENsZWFyIGNhbnZhcyBiZWZvcmUgcmVkcmF3XG4gICAgLy8gUmVkcmF3IGV4aXN0aW5nIHJlY3RhbmdsZXNcbiAgICByZWN0YW5nbGVzLmZvckVhY2gocmVjdCA9PiBkcmF3UmVjdGFuZ2xlKHJlY3QpKTtcbiAgICAvLyBEcmF3IGN1cnJlbnQgcmVjdGFuZ2xlXG4gICAgZHJhd1JlY3RhbmdsZSh7IHN0YXJ0OiBzdGFydFBvaW50LCBlbmQ6IGN1cnJlbnRQb2ludCB9KTtcbiAgfTtcblxuICBjb25zdCBvbk1vdXNlVXAgPSAoZSkgPT4ge1xuICAgIGlmICghc3RhcnRQb2ludCkgcmV0dXJuO1xuICAgIGNvbnN0IHJlY3QgPSBjYW52YXNSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBlbmQgPSB7IHg6IGUuY2xpZW50WCAtIHJlY3QubGVmdCwgeTogZS5jbGllbnRZIC0gcmVjdC50b3AgfTtcbiAgICBzZXRSZWN0YW5nbGVzKFsuLi5yZWN0YW5nbGVzLCB7IHN0YXJ0OiBzdGFydFBvaW50LCBlbmQgfV0pO1xuICAgIHNldElzRHJhd2luZyhmYWxzZSk7XG4gICAgc2V0U3RhcnRQb2ludChudWxsKTtcbiAgfTtcblxuICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7IC8vIENsZWFyIGNhbnZhc1xuICAgICAgICBzZXRSZWN0YW5nbGVzKFtdKTsgLy8gQ2xlYXIgcmVjdGFuZ2xlcyBzdGF0ZVxuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gICAgfTtcbiAgfSwgW29uTW91c2VNb3ZlLCBvbk1vdXNlVXBdKTtcblxuICByZXR1cm4geyBjYW52YXNSZWYsIG9uTW91c2VEb3duLCBjbGVhciB9O1xufTsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VEcmF3IiwiY29sb3IiLCJpc0RyYXdpbmciLCJzZXRJc0RyYXdpbmciLCJzdGFydFBvaW50Iiwic2V0U3RhcnRQb2ludCIsInJlY3RhbmdsZXMiLCJzZXRSZWN0YW5nbGVzIiwiY2FudmFzUmVmIiwiY2FudmFzIiwiY3VycmVudCIsImN0eCIsImdldENvbnRleHQiLCJkcmF3UmVjdGFuZ2xlIiwicmVjdCIsIndpZHRoIiwiZW5kIiwieCIsInN0YXJ0IiwiaGVpZ2h0IiwieSIsImJlZ2luUGF0aCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlIiwicmVkcmF3IiwiY2xlYXJSZWN0IiwiZm9yRWFjaCIsIm9uTW91c2VEb3duIiwiZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50WSIsInRvcCIsIm9uTW91c2VNb3ZlIiwiY3VycmVudFBvaW50Iiwib25Nb3VzZVVwIiwiY2xlYXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./hooks/useDraw.tsx\n"));

/***/ })

});