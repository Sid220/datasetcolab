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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useDraw: function() { return /* binding */ useDraw; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* __next_internal_client_entry_do_not_use__ useDraw auto */ var _s = $RefreshSig$();\n\nconst useDraw = (color)=>{\n    _s();\n    const [isDrawing, setIsDrawing] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const [startPoint, setStartPoint] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    const [rectangles, setRectangles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    const drawBox = (start, end)=>{\n        const canvas = canvasRef.current;\n        const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext(\"2d\");\n        if (!ctx) return;\n        // Draw a single rectangle\n        const width = end.x - start.x;\n        const height = end.y - start.y;\n        ctx.beginPath();\n        ctx.rect(start.x, start.y, width, height);\n        ctx.strokeStyle = color;\n        ctx.lineWidth = 3;\n        ctx.stroke();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const canvas = canvasRef.current;\n        const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext(\"2d\");\n        if (!ctx) return;\n        // Function to redraw all rectangles\n        const redrawRectangles = ()=>{\n            if (!canvas) return;\n            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas first\n            rectangles.forEach((rectangle)=>{\n                drawBox(rectangle.start, rectangle.end);\n            });\n        };\n        redrawRectangles();\n    }, [\n        rectangles\n    ]); // Redraw when the rectangles array changes\n    const onMouseDown = (e)=>{\n        var _canvasRef_current;\n        const rect = (_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.getBoundingClientRect();\n        if (rect) {\n            const x = e.clientX - rect.left;\n            const y = e.clientY - rect.top;\n            setStartPoint({\n                x,\n                y\n            });\n            setIsDrawing(true);\n        }\n    };\n    const onMouseMove = (e)=>{\n        var _canvasRef_current;\n        if (!isDrawing || !startPoint) return;\n        const rect = (_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.getBoundingClientRect();\n        if (rect) {\n            const x = e.clientX - rect.left;\n            const y = e.clientY - rect.top;\n            // Draw all rectangles plus the current one being drawn\n            const canvas = canvasRef.current;\n            const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext(\"2d\");\n            if (!ctx || !canvas) return;\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\n            rectangles.forEach((rect)=>drawBox(rect.start, rect.end)); // Redraw existing rectangles\n            drawBox(startPoint, {\n                x,\n                y\n            }); // Draw the current rectangle dynamically\n        }\n    };\n    const onMouseUp = (e)=>{\n        var _canvasRef_current;\n        if (!startPoint) return;\n        const rect = (_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.getBoundingClientRect();\n        if (rect) {\n            const x = e.clientX - rect.left;\n            const y = e.clientY - rect.top;\n            setRectangles([\n                ...rectangles,\n                {\n                    start: startPoint,\n                    end: {\n                        x,\n                        y\n                    }\n                }\n            ]);\n            setIsDrawing(false);\n        }\n    };\n    const clear = ()=>{\n        const canvas = canvasRef.current;\n        const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext(\"2d\");\n        if (ctx && canvas) {\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\n            setRectangles([]); // Clear the rectangles array\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const canvas = canvasRef.current;\n        if (!canvas) return;\n        canvas.addEventListener(\"mousemove\", onMouseMove);\n        canvas.addEventListener(\"mouseup\", onMouseUp);\n        return ()=>{\n            canvas.removeEventListener(\"mousemove\", onMouseMove);\n            canvas.removeEventListener(\"mouseup\", onMouseUp);\n        };\n    }, [\n        isDrawing,\n        startPoint,\n        rectangles\n    ]); // Add rectangles to dependencies to ensure proper cleanup\n    return {\n        canvasRef,\n        onMouseDown,\n        clear\n    };\n};\n_s(useDraw, \"U450XA+OpI/x8iIaOVsgPQ7Pdac=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2hvb2tzL3VzZURyYXcudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDb0Q7QUFVN0MsTUFBTUcsVUFBVSxDQUFDQzs7SUFDdkIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ0ssWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBa0M7SUFDOUUsTUFBTSxDQUFDTyxZQUFZQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFjLEVBQUU7SUFDNUQsTUFBTVMsWUFBWVYsNkNBQU1BLENBQW9CO0lBRzVDLE1BQU1XLFVBQVUsQ0FBQ0MsT0FBaUNDO1FBQ2hELE1BQU1DLFNBQVNKLFVBQVVLLE9BQU87UUFDaEMsTUFBTUMsTUFBTUYsbUJBQUFBLDZCQUFBQSxPQUFRRyxVQUFVLENBQUM7UUFDL0IsSUFBSSxDQUFDRCxLQUFLO1FBR1YsMEJBQTBCO1FBQzFCLE1BQU1FLFFBQVFMLElBQUlNLENBQUMsR0FBR1AsTUFBTU8sQ0FBQztRQUM3QixNQUFNQyxTQUFTUCxJQUFJUSxDQUFDLEdBQUdULE1BQU1TLENBQUM7UUFDOUJMLElBQUlNLFNBQVM7UUFDYk4sSUFBSU8sSUFBSSxDQUFDWCxNQUFNTyxDQUFDLEVBQUVQLE1BQU1TLENBQUMsRUFBRUgsT0FBT0U7UUFDbENKLElBQUlRLFdBQVcsR0FBR3JCO1FBQ2xCYSxJQUFJUyxTQUFTLEdBQUc7UUFDaEJULElBQUlVLE1BQU07SUFDWjtJQUdBM0IsZ0RBQVNBLENBQUM7UUFDUixNQUFNZSxTQUFTSixVQUFVSyxPQUFPO1FBQ2hDLE1BQU1DLE1BQU1GLG1CQUFBQSw2QkFBQUEsT0FBUUcsVUFBVSxDQUFDO1FBQy9CLElBQUksQ0FBQ0QsS0FBSztRQUdWLG9DQUFvQztRQUNwQyxNQUFNVyxtQkFBbUI7WUFDdkIsSUFBSSxDQUFDYixRQUFRO1lBQ2JFLElBQUlZLFNBQVMsQ0FBQyxHQUFHLEdBQUdkLE9BQU9JLEtBQUssRUFBRUosT0FBT00sTUFB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QjtRQUFhUztJQUFNO0FBQ3hDLEVBQUU7R0EvR1d0QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rcy91c2VEcmF3LnRzeD82NTYyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5cbi8vIERlZmluZSBhIHR5cGUgZm9yIHRoZSByZWN0YW5nbGVcbnR5cGUgUmVjdGFuZ2xlID0ge1xuIHN0YXJ0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XG4gZW5kOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XG59O1xuXG5cbmV4cG9ydCBjb25zdCB1c2VEcmF3ID0gKGNvbG9yOiBzdHJpbmcpID0+IHtcbiBjb25zdCBbaXNEcmF3aW5nLCBzZXRJc0RyYXdpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuIGNvbnN0IFtzdGFydFBvaW50LCBzZXRTdGFydFBvaW50XSA9IHVzZVN0YXRlPHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGw+KG51bGwpO1xuIGNvbnN0IFtyZWN0YW5nbGVzLCBzZXRSZWN0YW5nbGVzXSA9IHVzZVN0YXRlPFJlY3RhbmdsZVtdPihbXSk7XG4gY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcblxuXG4gY29uc3QgZHJhd0JveCA9IChzdGFydDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBlbmQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSkgPT4ge1xuICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICBjb25zdCBjdHggPSBjYW52YXM/LmdldENvbnRleHQoJzJkJyk7XG4gICBpZiAoIWN0eCkgcmV0dXJuO1xuXG5cbiAgIC8vIERyYXcgYSBzaW5nbGUgcmVjdGFuZ2xlXG4gICBjb25zdCB3aWR0aCA9IGVuZC54IC0gc3RhcnQueDtcbiAgIGNvbnN0IGhlaWdodCA9IGVuZC55IC0gc3RhcnQueTtcbiAgIGN0eC5iZWdpblBhdGgoKTtcbiAgIGN0eC5yZWN0KHN0YXJ0LngsIHN0YXJ0LnksIHdpZHRoLCBoZWlnaHQpO1xuICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICBjdHgubGluZVdpZHRoID0gMztcbiAgIGN0eC5zdHJva2UoKTtcbiB9O1xuXG5cbiB1c2VFZmZlY3QoKCkgPT4ge1xuICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICBjb25zdCBjdHggPSBjYW52YXM/LmdldENvbnRleHQoJzJkJyk7XG4gICBpZiAoIWN0eCkgcmV0dXJuO1xuXG5cbiAgIC8vIEZ1bmN0aW9uIHRvIHJlZHJhdyBhbGwgcmVjdGFuZ2xlc1xuICAgY29uc3QgcmVkcmF3UmVjdGFuZ2xlcyA9ICgpID0+IHtcbiAgICAgaWYgKCFjYW52YXMpIHJldHVybjtcbiAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpOyAvLyBDbGVhciB0aGUgY2FudmFzIGZpcnN0XG4gICAgIHJlY3RhbmdsZXMuZm9yRWFjaChyZWN0YW5nbGUgPT4ge1xuICAgICAgIGRyYXdCb3gocmVjdGFuZ2xlLnN0YXJ0LCByZWN0YW5nbGUuZW5kKTtcbiAgICAgfSk7XG4gICB9O1xuXG5cbiAgIHJlZHJhd1JlY3RhbmdsZXMoKTtcbiB9LCBbcmVjdGFuZ2xlc10pOyAvLyBSZWRyYXcgd2hlbiB0aGUgcmVjdGFuZ2xlcyBhcnJheSBjaGFuZ2VzXG5cblxuIGNvbnN0IG9uTW91c2VEb3duID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTENhbnZhc0VsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XG4gICBjb25zdCByZWN0ID0gY2FudmFzUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgaWYgKHJlY3QpIHtcbiAgICAgY29uc3QgeCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgY29uc3QgeSA9IGUuY2xpZW50WSAtIHJlY3QudG9wO1xuICAgICBzZXRTdGFydFBvaW50KHsgeCwgeSB9KTtcbiAgICAgc2V0SXNEcmF3aW5nKHRydWUpO1xuICAgfVxuIH07XG5cblxuIGNvbnN0IG9uTW91c2VNb3ZlID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgIGlmICghaXNEcmF3aW5nIHx8ICFzdGFydFBvaW50KSByZXR1cm47XG4gICBjb25zdCByZWN0ID0gY2FudmFzUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgaWYgKHJlY3QpIHtcbiAgICAgY29uc3QgeCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgY29uc3QgeSA9IGUuY2xpZW50WSAtIHJlY3QudG9wO1xuICAgICAvLyBEcmF3IGFsbCByZWN0YW5nbGVzIHBsdXMgdGhlIGN1cnJlbnQgb25lIGJlaW5nIGRyYXduXG4gICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgICBjb25zdCBjdHggPSBjYW52YXM/LmdldENvbnRleHQoJzJkJyk7XG4gICAgIGlmICghY3R4IHx8ICFjYW52YXMpIHJldHVybjtcbiAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICByZWN0YW5nbGVzLmZvckVhY2gocmVjdCA9PiBkcmF3Qm94KHJlY3Quc3RhcnQsIHJlY3QuZW5kKSk7IC8vIFJlZHJhdyBleGlzdGluZyByZWN0YW5nbGVzXG4gICAgIGRyYXdCb3goc3RhcnRQb2ludCwgeyB4LCB5IH0pOyAvLyBEcmF3IHRoZSBjdXJyZW50IHJlY3RhbmdsZSBkeW5hbWljYWxseVxuICAgfVxuIH07XG5cblxuIGNvbnN0IG9uTW91c2VVcCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICBpZiAoIXN0YXJ0UG9pbnQpIHJldHVybjtcbiAgIGNvbnN0IHJlY3QgPSBjYW52YXNSZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICBpZiAocmVjdCkge1xuICAgICBjb25zdCB4ID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICBjb25zdCB5ID0gZS5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgIHNldFJlY3RhbmdsZXMoWy4uLnJlY3RhbmdsZXMsIHsgc3RhcnQ6IHN0YXJ0UG9pbnQsIGVuZDogeyB4LCB5IH0gfV0pO1xuICAgICBzZXRJc0RyYXdpbmcoZmFsc2UpO1xuICAgfVxuIH07XG5cblxuIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICBjb25zdCBjdHggPSBjYW52YXM/LmdldENvbnRleHQoJzJkJyk7XG4gICBpZiAoY3R4ICYmIGNhbnZhcykge1xuICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgIHNldFJlY3RhbmdsZXMoW10pOyAvLyBDbGVhciB0aGUgcmVjdGFuZ2xlcyBhcnJheVxuICAgfVxuIH07XG5cblxuIHVzZUVmZmVjdCgoKSA9PiB7XG4gICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgIGlmICghY2FudmFzKSByZXR1cm47XG5cblxuICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcblxuXG4gICByZXR1cm4gKCkgPT4ge1xuICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gICB9O1xuIH0sIFtpc0RyYXdpbmcsIHN0YXJ0UG9pbnQsIHJlY3RhbmdsZXNdKTsgLy8gQWRkIHJlY3RhbmdsZXMgdG8gZGVwZW5kZW5jaWVzIHRvIGVuc3VyZSBwcm9wZXIgY2xlYW51cFxuXG5cbiByZXR1cm4geyBjYW52YXNSZWYsIG9uTW91c2VEb3duLCBjbGVhciB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZURyYXciLCJjb2xvciIsImlzRHJhd2luZyIsInNldElzRHJhd2luZyIsInN0YXJ0UG9pbnQiLCJzZXRTdGFydFBvaW50IiwicmVjdGFuZ2xlcyIsInNldFJlY3RhbmdsZXMiLCJjYW52YXNSZWYiLCJkcmF3Qm94Iiwic3RhcnQiLCJlbmQiLCJjYW52YXMiLCJjdXJyZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwieCIsImhlaWdodCIsInkiLCJiZWdpblBhdGgiLCJyZWN0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJyZWRyYXdSZWN0YW5nbGVzIiwiY2xlYXJSZWN0IiwiZm9yRWFjaCIsInJlY3RhbmdsZSIsIm9uTW91c2VEb3duIiwiZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50WSIsInRvcCIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZVVwIiwiY2xlYXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./hooks/useDraw.tsx\n"));

/***/ })

});