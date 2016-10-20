/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/bin/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _theater = __webpack_require__(1);
	
	var _Scene = __webpack_require__(2);
	
	var _Scene2 = _interopRequireDefault(_Scene);
	
	var _Geometry = __webpack_require__(4);
	
	var _Geometry2 = _interopRequireDefault(_Geometry);
	
	var _Material = __webpack_require__(5);
	
	var _Material2 = _interopRequireDefault(_Material);
	
	__webpack_require__(16);
	
	var _grass = __webpack_require__(20);
	
	var _grass2 = _interopRequireDefault(_grass);
	
	var _grass3 = __webpack_require__(21);
	
	var _grass4 = _interopRequireDefault(_grass3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var scene = new _Scene2.default(document.getElementById('gl'));
	var camera = new _theater.Camera();
	camera.moveTo(10, 10, 20);
	camera.lookAt(10, 0, 9);
	scene.addChild(camera);
	
	var points = [];
	for (var i = 0; i < 100; i++) {
	  points.push(0);points.push(i * 0.1);points.push(0);
	}
	
	var grassMaterial = new _Material2.default(scene, _grass2.default, _grass4.default);
	var grassGeometry = new _Geometry2.default(scene, scene.gl.LINE_STRIP, {
	  position: points
	});
	
	for (var y = 0; y < 10; y++) {
	  for (var x = 0; x < 10; x++) {
	    var grass = new _theater.Actor({
	      material: grassMaterial,
	      geometry: grassGeometry
	    });
	    grass.moveTo(x * 2, 0, y * 2);
	    scene.addChild(grass);
	  }
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "/dist/";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(1);
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.quat = exports.vec3 = exports.mat4 = exports.Actor = exports.Camera = exports.Scene = exports.SceneObj = exports.Pose = undefined;
		
		var _glMatrix = __webpack_require__(2);
		
		var _Pose = __webpack_require__(12);
		
		var _Pose2 = _interopRequireDefault(_Pose);
		
		var _SceneObj = __webpack_require__(13);
		
		var _SceneObj2 = _interopRequireDefault(_SceneObj);
		
		var _Scene = __webpack_require__(14);
		
		var _Scene2 = _interopRequireDefault(_Scene);
		
		var _Camera = __webpack_require__(15);
		
		var _Camera2 = _interopRequireDefault(_Camera);
		
		var _Actor = __webpack_require__(16);
		
		var _Actor2 = _interopRequireDefault(_Actor);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.Pose = _Pose2.default;
		exports.SceneObj = _SceneObj2.default;
		exports.Scene = _Scene2.default;
		exports.Camera = _Camera2.default;
		exports.Actor = _Actor2.default;
		exports.mat4 = _glMatrix.mat4;
		exports.vec3 = _glMatrix.vec3;
		exports.quat = _glMatrix.quat;
	
	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
	
		/**
		 * @fileoverview gl-matrix - High performance matrix and vector operations
		 * @author Brandon Jones
		 * @author Colin MacKenzie IV
		 * @version 2.3.2
		 */
		
		/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
		
		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:
		
		The above copyright notice and this permission notice shall be included in
		all copies or substantial portions of the Software.
		
		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
		THE SOFTWARE. */
		// END HEADER
		
		exports.glMatrix = __webpack_require__(3);
		exports.mat2 = __webpack_require__(4);
		exports.mat2d = __webpack_require__(5);
		exports.mat3 = __webpack_require__(6);
		exports.mat4 = __webpack_require__(7);
		exports.quat = __webpack_require__(8);
		exports.vec2 = __webpack_require__(11);
		exports.vec3 = __webpack_require__(9);
		exports.vec4 = __webpack_require__(10);
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
		
		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:
		
		The above copyright notice and this permission notice shall be included in
		all copies or substantial portions of the Software.
		
		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
		THE SOFTWARE. */
		
		/**
		 * @class Common utilities
		 * @name glMatrix
		 */
		var glMatrix = {};
		
		// Configuration Constants
		glMatrix.EPSILON = 0.000001;
		glMatrix.ARRAY_TYPE = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
		glMatrix.RANDOM = Math.random;
		glMatrix.ENABLE_SIMD = false;
		
		// Capability detection
		glMatrix.SIMD_AVAILABLE = (glMatrix.ARRAY_TYPE === Float32Array) && ('SIMD' in this);
		glMatrix.USE_SIMD = glMatrix.ENABLE_SIMD && glMatrix.SIMD_AVAILABLE;
		
		/**
		 * Sets the type of array used when creating new vectors and matrices
		 *
		 * @param {Type} type Array type, such as Float32Array or Array
		 */
		glMatrix.setMatrixArrayType = function(type) {
		    glMatrix.ARRAY_TYPE = type;
		}
		
		var degree = Math.PI / 180;
		
		/**
		* Convert Degree To Radian
		*
		* @param {Number} Angle in Degrees
		*/
		glMatrix.toRadian = function(a){
		     return a * degree;
		}
		
		/**
		 * Tests whether or not the arguments have approximately the same value, within an absolute
		 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less 
		 * than or equal to 1.0, and a relative tolerance is used for larger values)
		 * 
		 * @param {Number} a The first number to test.
		 * @param {Number} b The second number to test.
		 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
		 */
		glMatrix.equals = function(a, b) {
			return Math.abs(a - b) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a), Math.abs(b));
		}
		
		module.exports = glMatrix;
	
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
		
		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:
		
		The above copyright notice and this permission notice shall be included in
		all copies or substantial portions of the Software.
		
		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
		THE SOFTWARE. */
		
		var glMatrix = __webpack_require__(3);
		
		/**
		 * @class 2x2 Matrix
		 * @name mat2
		 */
		var mat2 = {};
		
		/**
		 * Creates a new identity mat2
		 *
		 * @returns {mat2} a new 2x2 matrix
		 */
		mat2.create = function() {
		    var out = new glMatrix.ARRAY_TYPE(4);
		    out[0] = 1;
		    out[1] = 0;
		    out[2] = 0;
		    out[3] = 1;
		    return out;
		};
		
		/**
		 * Creates a new mat2 initialized with values from an existing matrix
		 *
		 * @param {mat2} a matrix to clone
		 * @returns {mat2} a new 2x2 matrix
		 */
		mat2.clone = function(a) {
		    var out = new glMatrix.ARRAY_TYPE(4);
		    out[0] = a[0];
		    out[1] = a[1];
		    out[2] = a[2];
		    out[3] = a[3];
		    return out;
		};
		
		/**
		 * Copy the values from one mat2 to another
		 *
		 * @param {mat2} out the receiving matrix
		 * @param {mat2} a the source matrix
		 * @returns {mat2} out
		 */
		mat2.copy = function(out, a) {
		    out[0] = a[0];
		    out[1] = a[1];
		    out[2] = a[2];
		    out[3] = a[3];
		    return out;
		};
		
		/**
		 * Set a mat2 to the identity matrix
		 *
		 * @param {mat2} out the receiving matrix
		 * @returns {mat2} out
		 */
		mat2.identity = function(out) {
		    out[0] = 1;
		    out[1] = 0;
		    out[2] = 0;
		    out[3] = 1;
		    return out;
		};
		
		/**
		 * Create a new mat2 with the given values
		 *
		 * @param {Number} m00 Component in column 0, row 0 position (index 0)
		 * @param {Number} m01 Component in column 0, row 1 position (index 1)
		 * @param {Number} m10 Component in column 1, row 0 position (index 2)
		 * @param {Number} m11 Component in column 1, row 1 position (index 3)
		 * @returns {mat2} out A new 2x2 matrix
		 */
		mat2.fromValues = function(m00, m01, m10, m11) {
		    var out = new glMatrix.ARRAY_TYPE(4);
		    out[0] = m00;
		    out[1] = m01;
		    out[2] = m10;
		    out[3] = m11;
		    return out;
		};
		
		/**
		 * Set the components of a mat2 to the given values
		 *
		 * @param {mat2} out the receiving matrix
		 * @param {Number} m00 Component in column 0, row 0 position (index 0)
		 * @param {Number} m01 Component in column 0, row 1 position (index 1)
		 * @param {Number} m10 Component in column 1, row 0 position (index 2)
		 * @param {Number} m11 Component in column 1, row 1 position (index 3)
		 * @returns {mat2} out
		 */
		mat2.set = function(out, m00, m01, m10, m11) {
		    out[0] = m00;
		    out[1] = m01;
		    out[2] = m10;
		    out[3] = m11;
		    return out;
		};
		
		
		/**
		 * Transpose the values of a mat2
		 *
		 * @param {mat2} out the receiving matrix
		 * @param {mat2} a the source matrix
		 * @returns {mat2} out
		 */
		mat2.transpose = function(out, a) {
		    // If we are transposing ourselves we can skip a few steps but have to cache some values
		    if (out === a) {
		        var a1 = a[1];
		        out[1] = a[2];
		        out[2] = a1;
		    } else {
		        out[0] = a[0];
		        out[1] = a[2];
		        out[2] = a[1];
		        out[3] = a[3];
		    }
		    
		    return out;
		};
		
		/**
		 * Inverts a mat2
		 *
		 * @param {mat2} out the receiving matrix
		 * @param {mat2} a the source matrix
		 * @returns {mat2} out
		 */
		mat2.invert = function(out, a) {
		    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
		
		        // Calculate the determinant
		        det = a0 * a3 - a2 * a1;
		
		    if (!det) {
		        return null;
		    }
		    det = 1.0 / det;
		    
		    out[0] =  a3 * det;
		    out[1] = -a1 * det;
		    out[2] = -a2 * det;
		    out[3] =  a0 * det;
		
		    return out;
		};
		
		/**
		 * Calculates the adjugate of a mat2
		 *
		 * @param {mat2} out the receiving matrix
		 * @param {mat2} a the source matrix
		 * @returns {mat2} out
		 */
		mat2.adjoint = function(out, a) {
		    // Caching this value is nessecary if out == a
		    var a0 = a[0];
		    out[0] =  a[3];
		    out[1] = -a[1];
		    out[2] = -a[2];
		    out[3] =  a0;
		
		    return out;
		};
		
		/**
		 * Calculates the determinant of a mat2
		 *
		 * @param {mat2} a the source matrix
		 * @returns {Number} determinant of a
		 */
		mat2.determinant = function (a) {
		    return a[0] * a[3] - a[2] * a[1];
		};
		
		/**
		 * Multiplies two mat2's
		 *
		 * @param {mat2} out the receiving matrix
		 * @param {mat2} a the first operand
		 * @param {mat2} b the second operand
		 * @returns {mat2} out
		 */
		mat2.multiply = function (out, a, b) {
		    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
		    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
		    out[0] = a0 * b0 + a2 * b1;
		    out[1] = a1 * b0 + a3 * b1;
		    out[2] = a0 * b2 + a2 * b3;
		    out[3] = a1 * b2 + a3 * b3;
		    return out;
		};
		
		/**
		 * Alias for {@link mat2.multiply}
		 * @function
		 */
		mat2.mul = mat2.multiply;
		
		/**
		 * Rotates a mat2 by the given angle
		 *
		 * @param {mat2} out the receiving matrix
		 * @param {mat2} a the matrix to rotate
		 * @param {Number} rad the angle to rotate the matrix by
		 * @returns {mat2} out
		 */
		mat2.rotate = function (out, a, rad) {
		    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
		        s = Math.sin(rad),
		        c = Math.cos(rad);
		    out[0] = a0 *  c + a2 * s;
		    out[1] = a1 *  c + a3 * s;
		    out[2] = a0 * -s + a2 * c;
		    out[3] = a1 * -s + a3 * c;
		    return out;
		};
		
		/**
		 * Scales the mat2 by the dimensions in the given vec2
		 *
		 * @param {mat2} out the receiving matrix
		 * @param {mat2} a the matrix to rotate
		 * @param {vec2} v the vec2 to scale the matrix by
		 * @returns {mat2} out
		 **/
		mat2.scale = function(out, a, v) {
		    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
		        v0 = v[0], v1 = v[1];
		    out[0] = a0 * v0;
		    out[1] = a1 * v0;
		    out[2] = a2 * v1;
		    out[3] = a3 * v1;
		    return out;
		};
		
		/**
		 * Creates a matrix from a given angle
		 * This is equivalent to (but much faster than):
		 *
		 *     mat2.identity(dest);
		 *     mat2.rotate(dest, dest, rad);
		 *
		 * @param {mat2} out mat2 receiving operation result
		 * @param {Number} rad the angle to rotate the matrix by
		 * @returns {mat2} out
		 */
		mat2.fromRotation = function(out, rad) {
		    var s = Math.sin(rad),
		        c = Math.cos(rad);
		    out[0] = c;
		    out[1] = s;
		    out[2] = -s;
		    out[3] = c;
		    return out;
		}
		
		/**
		 * Creates a matrix from a vector scaling
		 * This is equivalent to (but much faster than):
		 *
		 *     mat2.identity(dest);
		 *     mat2.scale(dest, dest, vec);
		 *
		 * @param {mat2} out mat2 receiving operation result
		 * @param {vec2} v Scaling vector
		 * @returns {mat2} out
		 */
		mat2.fromScaling = function(out, v) {
		    out[0] = v[0];
		    out[1] = 0;
		    out[2] = 0;
		    out[3] = v[1];
		    return out;
		}
		
		/**
		 * Returns a string representation of a mat2
		 *
		 * @param {mat2} mat matrix to represent as a string
		 * @returns {String} string representation of the matrix
		 */
		mat2.str = function (a) {
		    return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
		};
		
		/**
		 * Returns Frobenius norm of a mat2
		 *
		 * @param {mat2} a the matrix to calculate Frobenius norm of
		 * @returns {Number} Frobenius norm
		 */
		mat2.frob = function (a) {
		    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2)))
		};
		
		/**
		 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
		 * @param {mat2} L the lower triangular matrix 
		 * @param {mat2} D the diagonal matrix 
		 * @param {mat2} U the upper triangular matrix 
		 * @param {mat2} a the input matrix to factorize
		 */
		
		mat2.LDU = function (L, D, U, a) { 
		    L[2] = a[2]/a[0]; 
		    U[0] = a[0]; 
		    U[1] = a[1]; 
		    U[3] = a[3] - L[2] * U[1]; 
		    return [L, D, U];       
		}; 
		
		/**
		 * Adds two mat2's
		 *
		 * @param {mat2} out the receiving matrix
		 * @param {mat2} a the first operand
		 * @param {mat2} b the second operand
		 * @returns {mat2} out
		 */
		mat2.add = function(out, a, b) {
		    out[0] = a[0] + b[0];
		    out[1] = a[1] + b[1];
		    out[2] = a[2] + b[2];
		    out[3] = a[3] + b[3];
		    return out;
		};
		
		/**
		 * Subtracts matrix b from matrix a
		 *
		 * @param {mat2} out the receiving matrix
		 * @param {mat2} a the first operand
		 * @param {mat2} b the second operand
		 * @returns {mat2} out
		 */
		mat2.subtract = function(out, a, b) {
		    out[0] = a[0] - b[0];
		    out[1] = a[1] - b[1];
		    out[2] = a[2] - b[2];
		    out[3] = a[3] - b[3];
		    return out;
		};
		
		/**
		 * Alias for {@link mat2.subtract}
		 * @function
		 */
		mat2.sub = mat2.subtract;
		
		/**
		 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
		 *
		 * @param {mat2} a The first matrix.
		 * @param {mat2} b The second matrix.
		 * @returns {Boolean} True if the matrices are equal, false otherwise.
		 */
		mat2.exactEquals = function (a, b) {
		    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
		};
		
		/**
		 * Returns whether or not the matrices have approximately the same elements in the same position.
		 *
		 * @param {mat2} a The first matrix.
		 * @param {mat2} b The second matrix.
		 * @returns {Boolean} True if the matrices are equal, false otherwise.
		 */
		mat2.equals = function (a, b) {
		    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
		    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
		    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
		            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
		            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
		            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)));
		};
		
		/**
		 * Multiply each element of the matrix by a scalar.
		 *
		 * @param {mat2} out the receiving matrix
		 * @param {mat2} a the matrix to scale
		 * @param {Number} b amount to scale the matrix's elements by
		 * @returns {mat2} out
		 */
		mat2.multiplyScalar = function(out, a, b) {
		    out[0] = a[0] * b;
		    out[1] = a[1] * b;
		    out[2] = a[2] * b;
		    out[3] = a[3] * b;
		    return out;
		};
		
		/**
		 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
		 *
		 * @param {mat2} out the receiving vector
		 * @param {mat2} a the first operand
		 * @param {mat2} b the second operand
		 * @param {Number} scale the amount to scale b's elements by before adding
		 * @returns {mat2} out
		 */
		mat2.multiplyScalarAndAdd = function(out, a, b, scale) {
		    out[0] = a[0] + (b[0] * scale);
		    out[1] = a[1] + (b[1] * scale);
		    out[2] = a[2] + (b[2] * scale);
		    out[3] = a[3] + (b[3] * scale);
		    return out;
		};
		
		module.exports = mat2;
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
		
		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:
		
		The above copyright notice and this permission notice shall be included in
		all copies or substantial portions of the Software.
		
		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
		THE SOFTWARE. */
		
		var glMatrix = __webpack_require__(3);
		
		/**
		 * @class 2x3 Matrix
		 * @name mat2d
		 * 
		 * @description 
		 * A mat2d contains six elements defined as:
		 * <pre>
		 * [a, c, tx,
		 *  b, d, ty]
		 * </pre>
		 * This is a short form for the 3x3 matrix:
		 * <pre>
		 * [a, c, tx,
		 *  b, d, ty,
		 *  0, 0, 1]
		 * </pre>
		 * The last row is ignored so the array is shorter and operations are faster.
		 */
		var mat2d = {};
		
		/**
		 * Creates a new identity mat2d
		 *
		 * @returns {mat2d} a new 2x3 matrix
		 */
		mat2d.create = function() {
		    var out = new glMatrix.ARRAY_TYPE(6);
		    out[0] = 1;
		    out[1] = 0;
		    out[2] = 0;
		    out[3] = 1;
		    out[4] = 0;
		    out[5] = 0;
		    return out;
		};
		
		/**
		 * Creates a new mat2d initialized with values from an existing matrix
		 *
		 * @param {mat2d} a matrix to clone
		 * @returns {mat2d} a new 2x3 matrix
		 */
		mat2d.clone = function(a) {
		    var out = new glMatrix.ARRAY_TYPE(6);
		    out[0] = a[0];
		    out[1] = a[1];
		    out[2] = a[2];
		    out[3] = a[3];
		    out[4] = a[4];
		    out[5] = a[5];
		    return out;
		};
		
		/**
		 * Copy the values from one mat2d to another
		 *
		 * @param {mat2d} out the receiving matrix
		 * @param {mat2d} a the source matrix
		 * @returns {mat2d} out
		 */
		mat2d.copy = function(out, a) {
		    out[0] = a[0];
		    out[1] = a[1];
		    out[2] = a[2];
		    out[3] = a[3];
		    out[4] = a[4];
		    out[5] = a[5];
		    return out;
		};
		
		/**
		 * Set a mat2d to the identity matrix
		 *
		 * @param {mat2d} out the receiving matrix
		 * @returns {mat2d} out
		 */
		mat2d.identity = function(out) {
		    out[0] = 1;
		    out[1] = 0;
		    out[2] = 0;
		    out[3] = 1;
		    out[4] = 0;
		    out[5] = 0;
		    return out;
		};
		
		/**
		 * Create a new mat2d with the given values
		 *
		 * @param {Number} a Component A (index 0)
		 * @param {Number} b Component B (index 1)
		 * @param {Number} c Component C (index 2)
		 * @param {Number} d Component D (index 3)
		 * @param {Number} tx Component TX (index 4)
		 * @param {Number} ty Component TY (index 5)
		 * @returns {mat2d} A new mat2d
		 */
		mat2d.fromValues = function(a, b, c, d, tx, ty) {
		    var out = new glMatrix.ARRAY_TYPE(6);
		    out[0] = a;
		    out[1] = b;
		    out[2] = c;
		    out[3] = d;
		    out[4] = tx;
		    out[5] = ty;
		    return out;
		};
		
		/**
		 * Set the components of a mat2d to the given values
		 *
		 * @param {mat2d} out the receiving matrix
		 * @param {Number} a Component A (index 0)
		 * @param {Number} b Component B (index 1)
		 * @param {Number} c Component C (index 2)
		 * @param {Number} d Component D (index 3)
		 * @param {Number} tx Component TX (index 4)
		 * @param {Number} ty Component TY (index 5)
		 * @returns {mat2d} out
		 */
		mat2d.set = function(out, a, b, c, d, tx, ty) {
		    out[0] = a;
		    out[1] = b;
		    out[2] = c;
		    out[3] = d;
		    out[4] = tx;
		    out[5] = ty;
		    return out;
		};
		
		/**
		 * Inverts a mat2d
		 *
		 * @param {mat2d} out the receiving matrix
		 * @param {mat2d} a the source matrix
		 * @returns {mat2d} out
		 */
		mat2d.invert = function(out, a) {
		    var aa = a[0], ab = a[1], ac = a[2], ad = a[3],
		        atx = a[4], aty = a[5];
		
		    var det = aa * ad - ab * ac;
		    if(!det){
		        return null;
		    }
		    det = 1.0 / det;
		
		    out[0] = ad * det;
		    out[1] = -ab * det;
		    out[2] = -ac * det;
		    out[3] = aa * det;
		    out[4] = (ac * aty - ad * atx) * det;
		    out[5] = (ab * atx - aa * aty) * det;
		    return out;
		};
		
		/**
		 * Calculates the determinant of a mat2d
		 *
		 * @param {mat2d} a the source matrix
		 * @returns {Number} determinant of a
		 */
		mat2d.determinant = function (a) {
		    return a[0] * a[3] - a[1] * a[2];
		};
		
		/**
		 * Multiplies two mat2d's
		 *
		 * @param {mat2d} out the receiving matrix
		 * @param {mat2d} a the first operand
		 * @param {mat2d} b the second operand
		 * @returns {mat2d} out
		 */
		mat2d.multiply = function (out, a, b) {
		    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
		        b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
		    out[0] = a0 * b0 + a2 * b1;
		    out[1] = a1 * b0 + a3 * b1;
		    out[2] = a0 * b2 + a2 * b3;
		    out[3] = a1 * b2 + a3 * b3;
		    out[4] = a0 * b4 + a2 * b5 + a4;
		    out[5] = a1 * b4 + a3 * b5 + a5;
		    return out;
		};
		
		/**
		 * Alias for {@link mat2d.multiply}
		 * @function
		 */
		mat2d.mul = mat2d.multiply;
		
		/**
		 * Rotates a mat2d by the given angle
		 *
		 * @param {mat2d} out the receiving matrix
		 * @param {mat2d} a the matrix to rotate
		 * @param {Number} rad the angle to rotate the matrix by
		 * @returns {mat2d} out
		 */
		mat2d.rotate = function (out, a, rad) {
		    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
		        s = Math.sin(rad),
		        c = Math.cos(rad);
		    out[0] = a0 *  c + a2 * s;
		    out[1] = a1 *  c + a3 * s;
		    out[2] = a0 * -s + a2 * c;
		    out[3] = a1 * -s + a3 * c;
		    out[4] = a4;
		    out[5] = a5;
		    return out;
		};
		
		/**
		 * Scales the mat2d by the dimensions in the given vec2
		 *
		 * @param {mat2d} out the receiving matrix
		 * @param {mat2d} a the matrix to translate
		 * @param {vec2} v the vec2 to scale the matrix by
		 * @returns {mat2d} out
		 **/
		mat2d.scale = function(out, a, v) {
		    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
		        v0 = v[0], v1 = v[1];
		    out[0] = a0 * v0;
		    out[1] = a1 * v0;
		    out[2] = a2 * v1;
		    out[3] = a3 * v1;
		    out[4] = a4;
		    out[5] = a5;
		    return out;
		};
		
		/**
		 * Translates the mat2d by the dimensions in the given vec2
		 *
		 * @param {mat2d} out the receiving matrix
		 * @param {mat2d} a the matrix to translate
		 * @param {vec2} v the vec2 to translate the matrix by
		 * @returns {mat2d} out
		 **/
		mat2d.translate = function(out, a, v) {
		    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
		        v0 = v[0], v1 = v[1];
		    out[0] = a0;
		    out[1] = a1;
		    out[2] = a2;
		    out[3] = a3;
		    out[4] = a0 * v0 + a2 * v1 + a4;
		    out[5] = a1 * v0 + a3 * v1 + a5;
		    return out;
		};
		
		/**
		 * Creates a matrix from a given angle
		 * This is equivalent to (but much faster than):
		 *
		 *     mat2d.identity(dest);
		 *     mat2d.rotate(dest, dest, rad);
		 *
		 * @param {mat2d} out mat2d receiving operation result
		 * @param {Number} rad the angle to rotate the matrix by
		 * @returns {mat2d} out
		 */
		mat2d.fromRotation = function(out, rad) {
		    var s = Math.sin(rad), c = Math.cos(rad);
		    out[0] = c;
		    out[1] = s;
		    out[2] = -s;
		    out[3] = c;
		    out[4] = 0;
		    out[5] = 0;
		    return out;
		}
		
		/**
		 * Creates a matrix from a vector scaling
		 * This is equivalent to (but much faster than):
		 *
		 *     mat2d.identity(dest);
		 *     mat2d.scale(dest, dest, vec);
		 *
		 * @param {mat2d} out mat2d receiving operation result
		 * @param {vec2} v Scaling vector
		 * @returns {mat2d} out
		 */
		mat2d.fromScaling = function(out, v) {
		    out[0] = v[0];
		    out[1] = 0;
		    out[2] = 0;
		    out[3] = v[1];
		    out[4] = 0;
		    out[5] = 0;
		    return out;
		}
		
		/**
		 * Creates a matrix from a vector translation
		 * This is equivalent to (but much faster than):
		 *
		 *     mat2d.identity(dest);
		 *     mat2d.translate(dest, dest, vec);
		 *
		 * @param {mat2d} out mat2d receiving operation result
		 * @param {vec2} v Translation vector
		 * @returns {mat2d} out
		 */
		mat2d.fromTranslation = function(out, v) {
		    out[0] = 1;
		    out[1] = 0;
		    out[2] = 0;
		    out[3] = 1;
		    out[4] = v[0];
		    out[5] = v[1];
		    return out;
		}
		
		/**
		 * Returns a string representation of a mat2d
		 *
		 * @param {mat2d} a matrix to represent as a string
		 * @returns {String} string representation of the matrix
		 */
		mat2d.str = function (a) {
		    return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + 
		                    a[3] + ', ' + a[4] + ', ' + a[5] + ')';
		};
		
		/**
		 * Returns Frobenius norm of a mat2d
		 *
		 * @param {mat2d} a the matrix to calculate Frobenius norm of
		 * @returns {Number} Frobenius norm
		 */
		mat2d.frob = function (a) { 
		    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1))
		}; 
		
		/**
		 * Adds two mat2d's
		 *
		 * @param {mat2d} out the receiving matrix
		 * @param {mat2d} a the first operand
		 * @param {mat2d} b the second operand
		 * @returns {mat2d} out
		 */
		mat2d.add = function(out, a, b) {
		    out[0] = a[0] + b[0];
		    out[1] = a[1] + b[1];
		    out[2] = a[2] + b[2];
		    out[3] = a[3] + b[3];
		    out[4] = a[4] + b[4];
		    out[5] = a[5] + b[5];
		    return out;
		};
		
		/**
		 * Subtracts matrix b from matrix a
		 *
		 * @param {mat2d} out the receiving matrix
		 * @param {mat2d} a the first operand
		 * @param {mat2d} b the second operand
		 * @returns {mat2d} out
		 */
		mat2d.subtract = function(out, a, b) {
		    out[0] = a[0] - b[0];
		    out[1] = a[1] - b[1];
		    out[2] = a[2] - b[2];
		    out[3] = a[3] - b[3];
		    out[4] = a[4] - b[4];
		    out[5] = a[5] - b[5];
		    return out;
		};
		
		/**
		 * Alias for {@link mat2d.subtract}
		 * @function
		 */
		mat2d.sub = mat2d.subtract;
		
		/**
		 * Multiply each element of the matrix by a scalar.
		 *
		 * @param {mat2d} out the receiving matrix
		 * @param {mat2d} a the matrix to scale
		 * @param {Number} b amount to scale the matrix's elements by
		 * @returns {mat2d} out
		 */
		mat2d.multiplyScalar = function(out, a, b) {
		    out[0] = a[0] * b;
		    out[1] = a[1] * b;
		    out[2] = a[2] * b;
		    out[3] = a[3] * b;
		    out[4] = a[4] * b;
		    out[5] = a[5] * b;
		    return out;
		};
		
		/**
		 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
		 *
		 * @param {mat2d} out the receiving vector
		 * @param {mat2d} a the first operand
		 * @param {mat2d} b the second operand
		 * @param {Number} scale the amount to scale b's elements by before adding
		 * @returns {mat2d} out
		 */
		mat2d.multiplyScalarAndAdd = function(out, a, b, scale) {
		    out[0] = a[0] + (b[0] * scale);
		    out[1] = a[1] + (b[1] * scale);
		    out[2] = a[2] + (b[2] * scale);
		    out[3] = a[3] + (b[3] * scale);
		    out[4] = a[4] + (b[4] * scale);
		    out[5] = a[5] + (b[5] * scale);
		    return out;
		};
		
		/**
		 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
		 *
		 * @param {mat2d} a The first matrix.
		 * @param {mat2d} b The second matrix.
		 * @returns {Boolean} True if the matrices are equal, false otherwise.
		 */
		mat2d.exactEquals = function (a, b) {
		    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
		};
		
		/**
		 * Returns whether or not the matrices have approximately the same elements in the same position.
		 *
		 * @param {mat2d} a The first matrix.
		 * @param {mat2d} b The second matrix.
		 * @returns {Boolean} True if the matrices are equal, false otherwise.
		 */
		mat2d.equals = function (a, b) {
		    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
		    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
		    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
		            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
		            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
		            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
		            Math.abs(a4 - b4) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
		            Math.abs(a5 - b5) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a5), Math.abs(b5)));
		};
		
		module.exports = mat2d;
	
	
	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
		
		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:
		
		The above copyright notice and this permission notice shall be included in
		all copies or substantial portions of the Software.
		
		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
		THE SOFTWARE. */
		
		var glMatrix = __webpack_require__(3);
		
		/**
		 * @class 3x3 Matrix
		 * @name mat3
		 */
		var mat3 = {};
		
		/**
		 * Creates a new identity mat3
		 *
		 * @returns {mat3} a new 3x3 matrix
		 */
		mat3.create = function() {
		    var out = new glMatrix.ARRAY_TYPE(9);
		    out[0] = 1;
		    out[1] = 0;
		    out[2] = 0;
		    out[3] = 0;
		    out[4] = 1;
		    out[5] = 0;
		    out[6] = 0;
		    out[7] = 0;
		    out[8] = 1;
		    return out;
		};
		
		/**
		 * Copies the upper-left 3x3 values into the given mat3.
		 *
		 * @param {mat3} out the receiving 3x3 matrix
		 * @param {mat4} a   the source 4x4 matrix
		 * @returns {mat3} out
		 */
		mat3.fromMat4 = function(out, a) {
		    out[0] = a[0];
		    out[1] = a[1];
		    out[2] = a[2];
		    out[3] = a[4];
		    out[4] = a[5];
		    out[5] = a[6];
		    out[6] = a[8];
		    out[7] = a[9];
		    out[8] = a[10];
		    return out;
		};
		
		/**
		 * Creates a new mat3 initialized with values from an existing matrix
		 *
		 * @param {mat3} a matrix to clone
		 * @returns {mat3} a new 3x3 matrix
		 */
		mat3.clone = function(a) {
		    var out = new glMatrix.ARRAY_TYPE(9);
		    out[0] = a[0];
		    out[1] = a[1];
		    out[2] = a[2];
		    out[3] = a[3];
		    out[4] = a[4];
		    out[5] = a[5];
		    out[6] = a[6];
		    out[7] = a[7];
		    out[8] = a[8];
		    return out;
		};
		
		/**
		 * Copy the values from one mat3 to another
		 *
		 * @param {mat3} out the receiving matrix
		 * @param {mat3} a the source matrix
		 * @returns {mat3} out
		 */
		mat3.copy = function(out, a) {
		    out[0] = a[0];
		    out[1] = a[1];
		    out[2] = a[2];
		    out[3] = a[3];
		    out[4] = a[4];
		    out[5] = a[5];
		    out[6] = a[6];
		    out[7] = a[7];
		    out[8] = a[8];
		    return out;
		};
		
		/**
		 * Create a new mat3 with the given values
		 *
		 * @param {Number} m00 Component in column 0, row 0 position (index 0)
		 * @param {Number} m01 Component in column 0, row 1 position (index 1)
		 * @param {Number} m02 Component in column 0, row 2 position (index 2)
		 * @param {Number} m10 Component in column 1, row 0 position (index 3)
		 * @param {Number} m11 Component in column 1, row 1 position (index 4)
		 * @param {Number} m12 Component in column 1, row 2 position (index 5)
		 * @param {Number} m20 Component in column 2, row 0 position (index 6)
		 * @param {Number} m21 Component in column 2, row 1 position (index 7)
		 * @param {Number} m22 Component in column 2, row 2 position (index 8)
		 * @returns {mat3} A new mat3
		 */
		mat3.fromValues = function(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
		    var out = new glMatrix.ARRAY_TYPE(9);
		    out[0] = m00;
		    out[1] = m01;
		    out[2] = m02;
		    out[3] = m10;
		    out[4] = m11;
		    out[5] = m12;
		    out[6] = m20;
		    out[7] = m21;
		    out[8] = m22;
		    return out;
		};
		
		/**
		 * Set the components of a mat3 to the given values
		 *
		 * @param {mat3} out the receiving matrix
		 * @param {Number} m00 Component in column 0, row 0 position (index 0)
		 * @param {Number} m01 Component in column 0, row 1 position (index 1)
		 * @param {Number} m02 Component in column 0, row 2 position (index 2)
		 * @param {Number} m10 Component in column 1, row 0 position (index 3)
		 * @param {Number} m11 Component in column 1, row 1 position (index 4)
		 * @param {Number} m12 Component in column 1, row 2 position (index 5)
		 * @param {Number} m20 Component in column 2, row 0 position (index 6)
		 * @param {Number} m21 Component in column 2, row 1 position (index 7)
		 * @param {Number} m22 Component in column 2, row 2 position (index 8)
		 * @returns {mat3} out
		 */
		mat3.set = function(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
		    out[0] = m00;
		    out[1] = m01;
		    out[2] = m02;
		    out[3] = m10;
		    out[4] = m11;
		    out[5] = m12;
		    out[6] = m20;
		    out[7] = m21;
		    out[8] = m22;
		    return out;
		};
		
		/**
		 * Set a mat3 to the identity matrix
		 *
		 * @param {mat3} out the receiving matrix
		 * @returns {mat3} out
		 */
		mat3.identity = function(out) {
		    out[0] = 1;
		    out[1] = 0;
		    out[2] = 0;
		    out[3] = 0;
		    out[4] = 1;
		    out[5] = 0;
		    out[6] = 0;
		    out[7] = 0;
		    out[8] = 1;
		    return out;
		};
		
		/**
		 * Transpose the values of a mat3
		 *
		 * @param {mat3} out the receiving matrix
		 * @param {mat3} a the source matrix
		 * @returns {mat3} out
		 */
		mat3.transpose = function(out, a) {
		    // If we are transposing ourselves we can skip a few steps but have to cache some values
		    if (out === a) {
		        var a01 = a[1], a02 = a[2], a12 = a[5];
		        out[1] = a[3];
		        out[2] = a[6];
		        out[3] = a01;
		        out[5] = a[7];
		        out[6] = a02;
		        out[7] = a12;
		    } else {
		        out[0] = a[0];
		        out[1] = a[3];
		        out[2] = a[6];
		        out[3] = a[1];
		        out[4] = a[4];
		        out[5] = a[7];
		        out[6] = a[2];
		        out[7] = a[5];
		        out[8] = a[8];
		    }
		    
		    return out;
		};
		
		/**
		 * Inverts a mat3
		 *
		 * @param {mat3} out the receiving matrix
		 * @param {mat3} a the source matrix
		 * @returns {mat3} out
		 */
		mat3.invert = function(out, a) {
		    var a00 = a[0], a01 = a[1], a02 = a[2],
		        a10 = a[3], a11 = a[4], a12 = a[5],
		        a20 = a[6], a21 = a[7], a22 = a[8],
		
		        b01 = a22 * a11 - a12 * a21,
		        b11 = -a22 * a10 + a12 * a20,
		        b21 = a21 * a10 - a11 * a20,
		
		        // Calculate the determinant
		        det = a00 * b01 + a01 * b11 + a02 * b21;
		
		    if (!det) { 
		        return null; 
		    }
		    det = 1.0 / det;
		
		    out[0] = b01 * det;
		    out[1] = (-a22 * a01 + a02 * a21) * det;
		    out[2] = (a12 * a01 - a02 * a11) * det;
		    out[3] = b11 * det;
		    out[4] = (a22 * a00 - a02 * a20) * det;
		    out[5] = (-a12 * a00 + a02 * a10) * det;
		    out[6] = b21 * det;
		    out[7] = (-a21 * a00 + a01 * a20) * det;
		    out[8] = (a11 * a00 - a01 * a10) * det;
		    return out;
		};
		
		/**
		 * Calculates the adjugate of a mat3
		 *
		 * @param {mat3} out the receiving matrix
		 * @param {mat3} a the source matrix
		 * @returns {mat3} out
		 */
		mat3.adjoint = function(out, a) {
		    var a00 = a[0], a01 = a[1], a02 = a[2],
		        a10 = a[3], a11 = a[4], a12 = a[5],
		        a20 = a[6], a21 = a[7], a22 = a[8];
		
		    out[0] = (a11 * a22 - a12 * a21);
		    out[1] = (a02 * a21 - a01 * a22);
		    out[2] = (a01 * a12 - a02 * a11);
		    out[3] = (a12 * a20 - a10 * a22);
		    out[4] = (a00 * a22 - a02 * a20);
		    out[5] = (a02 * a10 - a00 * a12);
		    out[6] = (a10 * a21 - a11 * a20);
		    out[7] = (a01 * a20 - a00 * a21);
		    out[8] = (a00 * a11 - a01 * a10);
		    return out;
		};
		
		/**
		 * Calculates the determinant of a mat3
		 *
		 * @param {mat3} a the source matrix
		 * @returns {Number} determinant of a
		 */
		mat3.determinant = function (a) {
		    var a00 = a[0], a01 = a[1], a02 = a[2],
		        a10 = a[3], a11 = a[4], a12 = a[5],
		        a20 = a[6], a21 = a[7], a22 = a[8];
		
		    return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
		};
		
		/**
		 * Multiplies two mat3's
		 *
		 * @param {mat3} out the receiving matrix
		 * @param {mat3} a the first operand
		 * @param {mat3} b the second operand
		 * @returns {mat3} out
		 */
		mat3.multiply = function (out, a, b) {
		    var a00 = a[0], a01 = a[1], a02 = a[2],
		        a10 = a[3], a11 = a[4], a12 = a[5],
		        a20 = a[6], a21 = a[7], a22 = a[8],
		
		        b00 = b[0], b01 = b[1], b02 = b[2],
		        b10 = b[3], b11 = b[4], b12 = b[5],
		        b20 = b[6], b21 = b[7], b22 = b[8];
		
		    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
		    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
		    out[2] = b00 * a02 + b01 * a12 + b02 * a22;
		
		    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
		    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
		    out[5] = b10 * a02 + b11 * a12 + b12 * a22;
		
		    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
		    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
		    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
		    return out;
		};
		
		/**
		 * Alias for {@link mat3.multiply}
		 * @function
		 */
		mat3.mul = mat3.multiply;
		
		/**
		 * Translate a mat3 by the given vector
		 *
		 * @param {mat3} out the receiving matrix
		 * @param {mat3} a the matrix to translate
		 * @param {vec2} v vector to translate by
		 * @returns {mat3} out
		 */
		mat3.translate = function(out, a, v) {
		    var a00 = a[0], a01 = a[1], a02 = a[2],
		        a10 = a[3], a11 = a[4], a12 = a[5],
		        a20 = a[6], a21 = a[7], a22 = a[8],
		        x = v[0], y = v[1];
		
		    out[0] = a00;
		    out[1] = a01;
		    out[2] = a02;
		
		    out[3] = a10;
		    out[4] = a11;
		    out[5] = a12;
		
		    out[6] = x * a00 + y * a10 + a20;
		    out[7] = x * a01 + y * a11 + a21;
		    out[8] = x * a02 + y * a12 + a22;
		    return out;
		};
		
		/**
		 * Rotates a mat3 by the given angle
		 *
		 * @param {mat3} out the receiving matrix
		 * @param {mat3} a the matrix to rotate
		 * @param {Number} rad the angle to rotate the matrix by
		 * @returns {mat3} out
		 */
		mat3.rotate = function (out, a, rad) {
		    var a00 = a[0], a01 = a[1], a02 = a[2],
		        a10 = a[3], a11 = a[4], a12 = a[5],
		        a20 = a[6], a21 = a[7], a22 = a[8],
		
		        s = Math.sin(rad),
		        c = Math.cos(rad);
		
		    out[0] = c * a00 + s * a10;
		    out[1] = c * a01 + s * a11;
		    out[2] = c * a02 + s * a12;
		
		    out[3] = c * a10 - s * a00;
		    out[4] = c * a11 - s * a01;
		    out[5] = c * a12 - s * a02;
		
		    out[6] = a20;
		    out[7] = a21;
		    out[8] = a22;
		    return out;
		};
		
		/**
		 * Scales the mat3 by the dimensions in the given vec2
		 *
		 * @param {mat3} out the receiving matrix
		 * @param {mat3} a the matrix to rotate
		 * @param {vec2} v the vec2 to scale the matrix by
		 * @returns {mat3} out
		 **/
		mat3.scale = function(out, a, v) {
		    var x = v[0], y = v[1];
		
		    out[0] = x * a[0];
		    out[1] = x * a[1];
		    out[2] = x * a[2];
		
		    out[3] = y * a[3];
		    out[4] = y * a[4];
		    out[5] = y * a[5];
		
		    out[6] = a[6];
		    out[7] = a[7];
		    out[8] = a[8];
		    return out;
		};
		
		/**
		 * Creates a matrix from a vector translation
		 * This is equivalent to (but much faster than):
		 *
		 *     mat3.identity(dest);
		 *     mat3.translate(dest, dest, vec);
		 *
		 * @param {mat3} out mat3 receiving operation result
		 * @param {vec2} v Translation vector
		 * @returns {mat3} out
		 */
		mat3.fromTranslation = function(out, v) {
		    out[0] = 1;
		    out[1] = 0;
		    out[2] = 0;
		    out[3] = 0;
		    out[4] = 1;
		    out[5] = 0;
		    out[6] = v[0];
		    out[7] = v[1];
		    out[8] = 1;
		    return out;
		}
		
		/**
		 * Creates a matrix from a given angle
		 * This is equivalent to (but much faster than):
		 *
		 *     mat3.identity(dest);
		 *     mat3.rotate(dest, dest, rad);
		 *
		 * @param {mat3} out mat3 receiving operation result
		 * @param {Number} rad the angle to rotate the matrix by
		 * @returns {mat3} out
		 */
		mat3.fromRotation = function(out, rad) {
		    var s = Math.sin(rad), c = Math.cos(rad);
		
		    out[0] = c;
		    out[1] = s;
		    out[2] = 0;
		
		    out[3] = -s;
		    out[4] = c;
		    out[5] = 0;
		
		    out[6] = 0;
		    out[7] = 0;
		    out[8] = 1;
		    return out;
		}
		
		/**
		 * Creates a matrix from a vector scaling
		 * This is equivalent to (but much faster than):
		 *
		 *     mat3.identity(dest);
		 *     mat3.scale(dest, dest, vec);
		 *
		 * @param {mat3} out mat3 receiving operation result
		 * @param {vec2} v Scaling vector
		 * @returns {mat3} out
		 */
		mat3.fromScaling = function(out, v) {
		    out[0] = v[0];
		    out[1] = 0;
		    out[2] = 0;
		
		    out[3] = 0;
		    out[4] = v[1];
		    out[5] = 0;
		
		    out[6] = 0;
		    out[7] = 0;
		    out[8] = 1;
		    return out;
		}
		
		/**
		 * Copies the values from a mat2d into a mat3
		 *
		 * @param {mat3} out the receiving matrix
		 * @param {mat2d} a the matrix to copy
		 * @returns {mat3} out
		 **/
		mat3.fromMat2d = function(out, a) {
		    out[0] = a[0];
		    out[1] = a[1];
		    out[2] = 0;
		
		    out[3] = a[2];
		    out[4] = a[3];
		    out[5] = 0;
		
		    out[6] = a[4];
		    out[7] = a[5];
		    out[8] = 1;
		    return out;
		};
		
		/**
		* Calculates a 3x3 matrix from the given quaternion
		*
		* @param {mat3} out mat3 receiving operation result
		* @param {quat} q Quaternion to create matrix from
		*
		* @returns {mat3} out
		*/
		mat3.fromQuat = function (out, q) {
		    var x = q[0], y = q[1], z = q[2], w = q[3],
		        x2 = x + x,
		        y2 = y + y,
		        z2 = z + z,
		
		        xx = x * x2,
		        yx = y * x2,
		        yy = y * y2,
		        zx = z * x2,
		        zy = z * y2,
		        zz = z * z2,
		        wx = w * x2,
		        wy = w * y2,
		        wz = w * z2;
		
		    out[0] = 1 - yy - zz;
		    out[3] = yx - wz;
		    out[6] = zx + wy;
		
		    out[1] = yx + wz;
		    out[4] = 1 - xx - zz;
		    out[7] = zy - wx;
		
		    out[2] = zx - wy;
		    out[5] = zy + wx;
		    out[8] = 1 - xx - yy;
		
		    return out;
		};
		
		/**
		* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
		*
		* @param {mat3} out mat3 receiving operation result
		* @param {mat4} a Mat4 to derive the normal matrix from
		*
		* @returns {mat3} out
		*/
		mat3.normalFromMat4 = function (out, a) {
		    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
		        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
		        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
		        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],
		
		        b00 = a00 * a11 - a01 * a10,
		        b01 = a00 * a12 - a02 * a10,
		        b02 = a00 * a13 - a03 * a10,
		        b03 = a01 * a12 - a02 * a11,
		        b04 = a01 * a13 - a03 * a11,
		        b05 = a02 * a13 - a03 * a12,
		        b06 = a20 * a31 - a21 * a30,
		        b07 = a20 * a32 - a22 * a30,
		        b08 = a20 * a33 - a23 * a30,
		        b09 = a21 * a32 - a22 * a31,
		        b10 = a21 * a33 - a23 * a31,
		        b11 = a22 * a33 - a23 * a32,
		
		        // Calculate the determinant
		        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
		
		    if (!det) { 
		        return null; 
		    }
		    det = 1.0 / det;
		
		    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
		    out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
		    out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
		
		    out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
		    out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
		    out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
		
		    out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
		    out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
		    out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
		
		    return out;
		};
		
		/**
		 * Returns a string representation of a mat3
		 *
		 * @param {mat3} mat matrix to represent as a string
		 * @returns {String} string representation of the matrix
		 */
		mat3.str = function (a) {
		    return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + 
		                    a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + 
		                    a[6] + ', ' + a[7] + ', ' + a[8] + ')';
		};
		
		/**
		 * Returns Frobenius norm of a mat3
		 *
		 * @param {mat3} a the matrix to calculate Frobenius norm of
		 * @returns {Number} Frobenius norm
		 */
		mat3.frob = function (a) {
		    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2)))
		};
		
		/**
		 * Adds two mat3's
		 *
		 * @param {mat3} out the receiving matrix
		 * @param {mat3} a the first operand
		 * @param {mat3} b the second operand
		 * @returns {mat3} out
		 */
		mat3.add = function(out, a, b) {
		    out[0] = a[0] + b[0];
		    out[1] = a[1] + b[1];
		    out[2] = a[2] + b[2];
		    out[3] = a[3] + b[3];
		    out[4] = a[4] + b[4];
		    out[5] = a[5] + b[5];
		    out[6] = a[6] + b[6];
		    out[7] = a[7] + b[7];
		    out[8] = a[8] + b[8];
		    return out;
		};
		
		/**
		 * Subtracts matrix b from matrix a
		 *
		 * @param {mat3} out the receiving matrix
		 * @param {mat3} a the first operand
		 * @param {mat3} b the second operand
		 * @returns {mat3} out
		 */
		mat3.subtract = function(out, a, b) {
		    out[0] = a[0] - b[0];
		    out[1] = a[1] - b[1];
		    out[2] = a[2] - b[2];
		    out[3] = a[3] - b[3];
		    out[4] = a[4] - b[4];
		    out[5] = a[5] - b[5];
		    out[6] = a[6] - b[6];
		    out[7] = a[7] - b[7];
		    out[8] = a[8] - b[8];
		    return out;
		};
		
		/**
		 * Alias for {@link mat3.subtract}
		 * @function
		 */
		mat3.sub = mat3.subtract;
		
		/**
		 * Multiply each element of the matrix by a scalar.
		 *
		 * @param {mat3} out the receiving matrix
		 * @param {mat3} a the matrix to scale
		 * @param {Number} b amount to scale the matrix's elements by
		 * @returns {mat3} out
		 */
		mat3.multiplyScalar = function(out, a, b) {
		    out[0] = a[0] * b;
		    out[1] = a[1] * b;
		    out[2] = a[2] * b;
		    out[3] = a[3] * b;
		    out[4] = a[4] * b;
		    out[5] = a[5] * b;
		    out[6] = a[6] * b;
		    out[7] = a[7] * b;
		    out[8] = a[8] * b;
		    return out;
		};
		
		/**
		 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
		 *
		 * @param {mat3} out the receiving vector
		 * @param {mat3} a the first operand
		 * @param {mat3} b the second operand
		 * @param {Number} scale the amount to scale b's elements by before adding
		 * @returns {mat3} out
		 */
		mat3.multiplyScalarAndAdd = function(out, a, b, scale) {
		    out[0] = a[0] + (b[0] * scale);
		    out[1] = a[1] + (b[1] * scale);
		    out[2] = a[2] + (b[2] * scale);
		    out[3] = a[3] + (b[3] * scale);
		    out[4] = a[4] + (b[4] * scale);
		    out[5] = a[5] + (b[5] * scale);
		    out[6] = a[6] + (b[6] * scale);
		    out[7] = a[7] + (b[7] * scale);
		    out[8] = a[8] + (b[8] * scale);
		    return out;
		};
		
		/*
		 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
		 *
		 * @param {mat3} a The first matrix.
		 * @param {mat3} b The second matrix.
		 * @returns {Boolean} True if the matrices are equal, false otherwise.
		 */
		mat3.exactEquals = function (a, b) {
		    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && 
		           a[3] === b[3] && a[4] === b[4] && a[5] === b[5] &&
		           a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
		};
		
		/**
		 * Returns whether or not the matrices have approximately the same elements in the same position.
		 *
		 * @param {mat3} a The first matrix.
		 * @param {mat3} b The second matrix.
		 * @returns {Boolean} True if the matrices are equal, false otherwise.
		 */
		mat3.equals = function (a, b) {
		    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7], a8 = a[8];
		    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = a[6], b7 = b[7], b8 = b[8];
		    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
		            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
		            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
		            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
		            Math.abs(a4 - b4) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
		            Math.abs(a5 - b5) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
		            Math.abs(a6 - b6) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
		            Math.abs(a7 - b7) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
		            Math.abs(a8 - b8) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a8), Math.abs(b8)));
		};
		
		
		module.exports = mat3;
	
	
	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
		
		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:
		
		The above copyright notice and this permission notice shall be included in
		all copies or substantial portions of the Software.
		
		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
		THE SOFTWARE. */
		
		var glMatrix = __webpack_require__(3);
		
		/**
		 * @class 4x4 Matrix
		 * @name mat4
		 */
		var mat4 = {
		  scalar: {},
		  SIMD: {},
		};
		
		/**
		 * Creates a new identity mat4
		 *
		 * @returns {mat4} a new 4x4 matrix
		 */
		mat4.create = function() {
		    var out = new glMatrix.ARRAY_TYPE(16);
		    out[0] = 1;
		    out[1] = 0;
		    out[2] = 0;
		    out[3] = 0;
		    out[4] = 0;
		    out[5] = 1;
		    out[6] = 0;
		    out[7] = 0;
		    out[8] = 0;
		    out[9] = 0;
		    out[10] = 1;
		    out[11] = 0;
		    out[12] = 0;
		    out[13] = 0;
		    out[14] = 0;
		    out[15] = 1;
		    return out;
		};
		
		/**
		 * Creates a new mat4 initialized with values from an existing matrix
		 *
		 * @param {mat4} a matrix to clone
		 * @returns {mat4} a new 4x4 matrix
		 */
		mat4.clone = function(a) {
		    var out = new glMatrix.ARRAY_TYPE(16);
		    out[0] = a[0];
		    out[1] = a[1];
		    out[2] = a[2];
		    out[3] = a[3];
		    out[4] = a[4];
		    out[5] = a[5];
		    out[6] = a[6];
		    out[7] = a[7];
		    out[8] = a[8];
		    out[9] = a[9];
		    out[10] = a[10];
		    out[11] = a[11];
		    out[12] = a[12];
		    out[13] = a[13];
		    out[14] = a[14];
		    out[15] = a[15];
		    return out;
		};
		
		/**
		 * Copy the values from one mat4 to another
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the source matrix
		 * @returns {mat4} out
		 */
		mat4.copy = function(out, a) {
		    out[0] = a[0];
		    out[1] = a[1];
		    out[2] = a[2];
		    out[3] = a[3];
		    out[4] = a[4];
		    out[5] = a[5];
		    out[6] = a[6];
		    out[7] = a[7];
		    out[8] = a[8];
		    out[9] = a[9];
		    out[10] = a[10];
		    out[11] = a[11];
		    out[12] = a[12];
		    out[13] = a[13];
		    out[14] = a[14];
		    out[15] = a[15];
		    return out;
		};
		
		/**
		 * Create a new mat4 with the given values
		 *
		 * @param {Number} m00 Component in column 0, row 0 position (index 0)
		 * @param {Number} m01 Component in column 0, row 1 position (index 1)
		 * @param {Number} m02 Component in column 0, row 2 position (index 2)
		 * @param {Number} m03 Component in column 0, row 3 position (index 3)
		 * @param {Number} m10 Component in column 1, row 0 position (index 4)
		 * @param {Number} m11 Component in column 1, row 1 position (index 5)
		 * @param {Number} m12 Component in column 1, row 2 position (index 6)
		 * @param {Number} m13 Component in column 1, row 3 position (index 7)
		 * @param {Number} m20 Component in column 2, row 0 position (index 8)
		 * @param {Number} m21 Component in column 2, row 1 position (index 9)
		 * @param {Number} m22 Component in column 2, row 2 position (index 10)
		 * @param {Number} m23 Component in column 2, row 3 position (index 11)
		 * @param {Number} m30 Component in column 3, row 0 position (index 12)
		 * @param {Number} m31 Component in column 3, row 1 position (index 13)
		 * @param {Number} m32 Component in column 3, row 2 position (index 14)
		 * @param {Number} m33 Component in column 3, row 3 position (index 15)
		 * @returns {mat4} A new mat4
		 */
		mat4.fromValues = function(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
		    var out = new glMatrix.ARRAY_TYPE(16);
		    out[0] = m00;
		    out[1] = m01;
		    out[2] = m02;
		    out[3] = m03;
		    out[4] = m10;
		    out[5] = m11;
		    out[6] = m12;
		    out[7] = m13;
		    out[8] = m20;
		    out[9] = m21;
		    out[10] = m22;
		    out[11] = m23;
		    out[12] = m30;
		    out[13] = m31;
		    out[14] = m32;
		    out[15] = m33;
		    return out;
		};
		
		/**
		 * Set the components of a mat4 to the given values
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {Number} m00 Component in column 0, row 0 position (index 0)
		 * @param {Number} m01 Component in column 0, row 1 position (index 1)
		 * @param {Number} m02 Component in column 0, row 2 position (index 2)
		 * @param {Number} m03 Component in column 0, row 3 position (index 3)
		 * @param {Number} m10 Component in column 1, row 0 position (index 4)
		 * @param {Number} m11 Component in column 1, row 1 position (index 5)
		 * @param {Number} m12 Component in column 1, row 2 position (index 6)
		 * @param {Number} m13 Component in column 1, row 3 position (index 7)
		 * @param {Number} m20 Component in column 2, row 0 position (index 8)
		 * @param {Number} m21 Component in column 2, row 1 position (index 9)
		 * @param {Number} m22 Component in column 2, row 2 position (index 10)
		 * @param {Number} m23 Component in column 2, row 3 position (index 11)
		 * @param {Number} m30 Component in column 3, row 0 position (index 12)
		 * @param {Number} m31 Component in column 3, row 1 position (index 13)
		 * @param {Number} m32 Component in column 3, row 2 position (index 14)
		 * @param {Number} m33 Component in column 3, row 3 position (index 15)
		 * @returns {mat4} out
		 */
		mat4.set = function(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
		    out[0] = m00;
		    out[1] = m01;
		    out[2] = m02;
		    out[3] = m03;
		    out[4] = m10;
		    out[5] = m11;
		    out[6] = m12;
		    out[7] = m13;
		    out[8] = m20;
		    out[9] = m21;
		    out[10] = m22;
		    out[11] = m23;
		    out[12] = m30;
		    out[13] = m31;
		    out[14] = m32;
		    out[15] = m33;
		    return out;
		};
		
		
		/**
		 * Set a mat4 to the identity matrix
		 *
		 * @param {mat4} out the receiving matrix
		 * @returns {mat4} out
		 */
		mat4.identity = function(out) {
		    out[0] = 1;
		    out[1] = 0;
		    out[2] = 0;
		    out[3] = 0;
		    out[4] = 0;
		    out[5] = 1;
		    out[6] = 0;
		    out[7] = 0;
		    out[8] = 0;
		    out[9] = 0;
		    out[10] = 1;
		    out[11] = 0;
		    out[12] = 0;
		    out[13] = 0;
		    out[14] = 0;
		    out[15] = 1;
		    return out;
		};
		
		/**
		 * Transpose the values of a mat4 not using SIMD
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the source matrix
		 * @returns {mat4} out
		 */
		mat4.scalar.transpose = function(out, a) {
		    // If we are transposing ourselves we can skip a few steps but have to cache some values
		    if (out === a) {
		        var a01 = a[1], a02 = a[2], a03 = a[3],
		            a12 = a[6], a13 = a[7],
		            a23 = a[11];
		
		        out[1] = a[4];
		        out[2] = a[8];
		        out[3] = a[12];
		        out[4] = a01;
		        out[6] = a[9];
		        out[7] = a[13];
		        out[8] = a02;
		        out[9] = a12;
		        out[11] = a[14];
		        out[12] = a03;
		        out[13] = a13;
		        out[14] = a23;
		    } else {
		        out[0] = a[0];
		        out[1] = a[4];
		        out[2] = a[8];
		        out[3] = a[12];
		        out[4] = a[1];
		        out[5] = a[5];
		        out[6] = a[9];
		        out[7] = a[13];
		        out[8] = a[2];
		        out[9] = a[6];
		        out[10] = a[10];
		        out[11] = a[14];
		        out[12] = a[3];
		        out[13] = a[7];
		        out[14] = a[11];
		        out[15] = a[15];
		    }
		
		    return out;
		};
		
		/**
		 * Transpose the values of a mat4 using SIMD
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the source matrix
		 * @returns {mat4} out
		 */
		mat4.SIMD.transpose = function(out, a) {
		    var a0, a1, a2, a3,
		        tmp01, tmp23,
		        out0, out1, out2, out3;
		
		    a0 = SIMD.Float32x4.load(a, 0);
		    a1 = SIMD.Float32x4.load(a, 4);
		    a2 = SIMD.Float32x4.load(a, 8);
		    a3 = SIMD.Float32x4.load(a, 12);
		
		    tmp01 = SIMD.Float32x4.shuffle(a0, a1, 0, 1, 4, 5);
		    tmp23 = SIMD.Float32x4.shuffle(a2, a3, 0, 1, 4, 5);
		    out0  = SIMD.Float32x4.shuffle(tmp01, tmp23, 0, 2, 4, 6);
		    out1  = SIMD.Float32x4.shuffle(tmp01, tmp23, 1, 3, 5, 7);
		    SIMD.Float32x4.store(out, 0,  out0);
		    SIMD.Float32x4.store(out, 4,  out1);
		
		    tmp01 = SIMD.Float32x4.shuffle(a0, a1, 2, 3, 6, 7);
		    tmp23 = SIMD.Float32x4.shuffle(a2, a3, 2, 3, 6, 7);
		    out2  = SIMD.Float32x4.shuffle(tmp01, tmp23, 0, 2, 4, 6);
		    out3  = SIMD.Float32x4.shuffle(tmp01, tmp23, 1, 3, 5, 7);
		    SIMD.Float32x4.store(out, 8,  out2);
		    SIMD.Float32x4.store(out, 12, out3);
		
		    return out;
		};
		
		/**
		 * Transpse a mat4 using SIMD if available and enabled
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the source matrix
		 * @returns {mat4} out
		 */
		mat4.transpose = glMatrix.USE_SIMD ? mat4.SIMD.transpose : mat4.scalar.transpose;
		
		/**
		 * Inverts a mat4 not using SIMD
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the source matrix
		 * @returns {mat4} out
		 */
		mat4.scalar.invert = function(out, a) {
		    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
		        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
		        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
		        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],
		
		        b00 = a00 * a11 - a01 * a10,
		        b01 = a00 * a12 - a02 * a10,
		        b02 = a00 * a13 - a03 * a10,
		        b03 = a01 * a12 - a02 * a11,
		        b04 = a01 * a13 - a03 * a11,
		        b05 = a02 * a13 - a03 * a12,
		        b06 = a20 * a31 - a21 * a30,
		        b07 = a20 * a32 - a22 * a30,
		        b08 = a20 * a33 - a23 * a30,
		        b09 = a21 * a32 - a22 * a31,
		        b10 = a21 * a33 - a23 * a31,
		        b11 = a22 * a33 - a23 * a32,
		
		        // Calculate the determinant
		        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
		
		    if (!det) {
		        return null;
		    }
		    det = 1.0 / det;
		
		    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
		    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
		    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
		    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
		    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
		    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
		    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
		    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
		    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
		    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
		    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
		    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
		    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
		    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
		    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
		    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
		
		    return out;
		};
		
		/**
		 * Inverts a mat4 using SIMD
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the source matrix
		 * @returns {mat4} out
		 */
		mat4.SIMD.invert = function(out, a) {
		  var row0, row1, row2, row3,
		      tmp1,
		      minor0, minor1, minor2, minor3,
		      det,
		      a0 = SIMD.Float32x4.load(a, 0),
		      a1 = SIMD.Float32x4.load(a, 4),
		      a2 = SIMD.Float32x4.load(a, 8),
		      a3 = SIMD.Float32x4.load(a, 12);
		
		  // Compute matrix adjugate
		  tmp1 = SIMD.Float32x4.shuffle(a0, a1, 0, 1, 4, 5);
		  row1 = SIMD.Float32x4.shuffle(a2, a3, 0, 1, 4, 5);
		  row0 = SIMD.Float32x4.shuffle(tmp1, row1, 0, 2, 4, 6);
		  row1 = SIMD.Float32x4.shuffle(row1, tmp1, 1, 3, 5, 7);
		  tmp1 = SIMD.Float32x4.shuffle(a0, a1, 2, 3, 6, 7);
		  row3 = SIMD.Float32x4.shuffle(a2, a3, 2, 3, 6, 7);
		  row2 = SIMD.Float32x4.shuffle(tmp1, row3, 0, 2, 4, 6);
		  row3 = SIMD.Float32x4.shuffle(row3, tmp1, 1, 3, 5, 7);
		
		  tmp1   = SIMD.Float32x4.mul(row2, row3);
		  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
		  minor0 = SIMD.Float32x4.mul(row1, tmp1);
		  minor1 = SIMD.Float32x4.mul(row0, tmp1);
		  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
		  minor0 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row1, tmp1), minor0);
		  minor1 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor1);
		  minor1 = SIMD.Float32x4.swizzle(minor1, 2, 3, 0, 1);
		
		  tmp1   = SIMD.Float32x4.mul(row1, row2);
		  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
		  minor0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor0);
		  minor3 = SIMD.Float32x4.mul(row0, tmp1);
		  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
		  minor0 = SIMD.Float32x4.sub(minor0, SIMD.Float32x4.mul(row3, tmp1));
		  minor3 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor3);
		  minor3 = SIMD.Float32x4.swizzle(minor3, 2, 3, 0, 1);
		
		  tmp1   = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(row1, 2, 3, 0, 1), row3);
		  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
		  row2   = SIMD.Float32x4.swizzle(row2, 2, 3, 0, 1);
		  minor0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row2, tmp1), minor0);
		  minor2 = SIMD.Float32x4.mul(row0, tmp1);
		  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
		  minor0 = SIMD.Float32x4.sub(minor0, SIMD.Float32x4.mul(row2, tmp1));
		  minor2 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor2);
		  minor2 = SIMD.Float32x4.swizzle(minor2, 2, 3, 0, 1);
		
		  tmp1   = SIMD.Float32x4.mul(row0, row1);
		  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
		  minor2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor2);
		  minor3 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row2, tmp1), minor3);
		  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
		  minor2 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row3, tmp1), minor2);
		  minor3 = SIMD.Float32x4.sub(minor3, SIMD.Float32x4.mul(row2, tmp1));
		
		  tmp1   = SIMD.Float32x4.mul(row0, row3);
		  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
		  minor1 = SIMD.Float32x4.sub(minor1, SIMD.Float32x4.mul(row2, tmp1));
		  minor2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row1, tmp1), minor2);
		  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
		  minor1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row2, tmp1), minor1);
		  minor2 = SIMD.Float32x4.sub(minor2, SIMD.Float32x4.mul(row1, tmp1));
		
		  tmp1   = SIMD.Float32x4.mul(row0, row2);
		  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
		  minor1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor1);
		  minor3 = SIMD.Float32x4.sub(minor3, SIMD.Float32x4.mul(row1, tmp1));
		  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
		  minor1 = SIMD.Float32x4.sub(minor1, SIMD.Float32x4.mul(row3, tmp1));
		  minor3 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row1, tmp1), minor3);
		
		  // Compute matrix determinant
		  det   = SIMD.Float32x4.mul(row0, minor0);
		  det   = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(det, 2, 3, 0, 1), det);
		  det   = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(det, 1, 0, 3, 2), det);
		  tmp1  = SIMD.Float32x4.reciprocalApproximation(det);
		  det   = SIMD.Float32x4.sub(
		               SIMD.Float32x4.add(tmp1, tmp1),
		               SIMD.Float32x4.mul(det, SIMD.Float32x4.mul(tmp1, tmp1)));
		  det   = SIMD.Float32x4.swizzle(det, 0, 0, 0, 0);
		  if (!det) {
		      return null;
		  }
		
		  // Compute matrix inverse
		  SIMD.Float32x4.store(out, 0,  SIMD.Float32x4.mul(det, minor0));
		  SIMD.Float32x4.store(out, 4,  SIMD.Float32x4.mul(det, minor1));
		  SIMD.Float32x4.store(out, 8,  SIMD.Float32x4.mul(det, minor2));
		  SIMD.Float32x4.store(out, 12, SIMD.Float32x4.mul(det, minor3));
		  return out;
		}
		
		/**
		 * Inverts a mat4 using SIMD if available and enabled
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the source matrix
		 * @returns {mat4} out
		 */
		mat4.invert = glMatrix.USE_SIMD ? mat4.SIMD.invert : mat4.scalar.invert;
		
		/**
		 * Calculates the adjugate of a mat4 not using SIMD
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the source matrix
		 * @returns {mat4} out
		 */
		mat4.scalar.adjoint = function(out, a) {
		    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
		        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
		        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
		        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
		
		    out[0]  =  (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
		    out[1]  = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
		    out[2]  =  (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
		    out[3]  = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
		    out[4]  = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
		    out[5]  =  (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
		    out[6]  = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
		    out[7]  =  (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
		    out[8]  =  (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
		    out[9]  = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
		    out[10] =  (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
		    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
		    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
		    out[13] =  (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
		    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
		    out[15] =  (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
		    return out;
		};
		
		/**
		 * Calculates the adjugate of a mat4 using SIMD
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the source matrix
		 * @returns {mat4} out
		 */
		mat4.SIMD.adjoint = function(out, a) {
		  var a0, a1, a2, a3;
		  var row0, row1, row2, row3;
		  var tmp1;
		  var minor0, minor1, minor2, minor3;
		
		  var a0 = SIMD.Float32x4.load(a, 0);
		  var a1 = SIMD.Float32x4.load(a, 4);
		  var a2 = SIMD.Float32x4.load(a, 8);
		  var a3 = SIMD.Float32x4.load(a, 12);
		
		  // Transpose the source matrix.  Sort of.  Not a true transpose operation
		  tmp1 = SIMD.Float32x4.shuffle(a0, a1, 0, 1, 4, 5);
		  row1 = SIMD.Float32x4.shuffle(a2, a3, 0, 1, 4, 5);
		  row0 = SIMD.Float32x4.shuffle(tmp1, row1, 0, 2, 4, 6);
		  row1 = SIMD.Float32x4.shuffle(row1, tmp1, 1, 3, 5, 7);
		
		  tmp1 = SIMD.Float32x4.shuffle(a0, a1, 2, 3, 6, 7);
		  row3 = SIMD.Float32x4.shuffle(a2, a3, 2, 3, 6, 7);
		  row2 = SIMD.Float32x4.shuffle(tmp1, row3, 0, 2, 4, 6);
		  row3 = SIMD.Float32x4.shuffle(row3, tmp1, 1, 3, 5, 7);
		
		  tmp1   = SIMD.Float32x4.mul(row2, row3);
		  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
		  minor0 = SIMD.Float32x4.mul(row1, tmp1);
		  minor1 = SIMD.Float32x4.mul(row0, tmp1);
		  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
		  minor0 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row1, tmp1), minor0);
		  minor1 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor1);
		  minor1 = SIMD.Float32x4.swizzle(minor1, 2, 3, 0, 1);
		
		  tmp1   = SIMD.Float32x4.mul(row1, row2);
		  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
		  minor0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor0);
		  minor3 = SIMD.Float32x4.mul(row0, tmp1);
		  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
		  minor0 = SIMD.Float32x4.sub(minor0, SIMD.Float32x4.mul(row3, tmp1));
		  minor3 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor3);
		  minor3 = SIMD.Float32x4.swizzle(minor3, 2, 3, 0, 1);
		
		  tmp1   = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(row1, 2, 3, 0, 1), row3);
		  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
		  row2   = SIMD.Float32x4.swizzle(row2, 2, 3, 0, 1);
		  minor0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row2, tmp1), minor0);
		  minor2 = SIMD.Float32x4.mul(row0, tmp1);
		  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
		  minor0 = SIMD.Float32x4.sub(minor0, SIMD.Float32x4.mul(row2, tmp1));
		  minor2 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor2);
		  minor2 = SIMD.Float32x4.swizzle(minor2, 2, 3, 0, 1);
		
		  tmp1   = SIMD.Float32x4.mul(row0, row1);
		  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
		  minor2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor2);
		  minor3 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row2, tmp1), minor3);
		  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
		  minor2 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row3, tmp1), minor2);
		  minor3 = SIMD.Float32x4.sub(minor3, SIMD.Float32x4.mul(row2, tmp1));
		
		  tmp1   = SIMD.Float32x4.mul(row0, row3);
		  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
		  minor1 = SIMD.Float32x4.sub(minor1, SIMD.Float32x4.mul(row2, tmp1));
		  minor2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row1, tmp1), minor2);
		  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
		  minor1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row2, tmp1), minor1);
		  minor2 = SIMD.Float32x4.sub(minor2, SIMD.Float32x4.mul(row1, tmp1));
		
		  tmp1   = SIMD.Float32x4.mul(row0, row2);
		  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
		  minor1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor1);
		  minor3 = SIMD.Float32x4.sub(minor3, SIMD.Float32x4.mul(row1, tmp1));
		  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
		  minor1 = SIMD.Float32x4.sub(minor1, SIMD.Float32x4.mul(row3, tmp1));
		  minor3 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row1, tmp1), minor3);
		
		  SIMD.Float32x4.store(out, 0,  minor0);
		  SIMD.Float32x4.store(out, 4,  minor1);
		  SIMD.Float32x4.store(out, 8,  minor2);
		  SIMD.Float32x4.store(out, 12, minor3);
		  return out;
		};
		
		/**
		 * Calculates the adjugate of a mat4 using SIMD if available and enabled
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the source matrix
		 * @returns {mat4} out
		 */
		 mat4.adjoint = glMatrix.USE_SIMD ? mat4.SIMD.adjoint : mat4.scalar.adjoint;
		
		/**
		 * Calculates the determinant of a mat4
		 *
		 * @param {mat4} a the source matrix
		 * @returns {Number} determinant of a
		 */
		mat4.determinant = function (a) {
		    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
		        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
		        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
		        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],
		
		        b00 = a00 * a11 - a01 * a10,
		        b01 = a00 * a12 - a02 * a10,
		        b02 = a00 * a13 - a03 * a10,
		        b03 = a01 * a12 - a02 * a11,
		        b04 = a01 * a13 - a03 * a11,
		        b05 = a02 * a13 - a03 * a12,
		        b06 = a20 * a31 - a21 * a30,
		        b07 = a20 * a32 - a22 * a30,
		        b08 = a20 * a33 - a23 * a30,
		        b09 = a21 * a32 - a22 * a31,
		        b10 = a21 * a33 - a23 * a31,
		        b11 = a22 * a33 - a23 * a32;
		
		    // Calculate the determinant
		    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
		};
		
		/**
		 * Multiplies two mat4's explicitly using SIMD
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the first operand, must be a Float32Array
		 * @param {mat4} b the second operand, must be a Float32Array
		 * @returns {mat4} out
		 */
		mat4.SIMD.multiply = function (out, a, b) {
		    var a0 = SIMD.Float32x4.load(a, 0);
		    var a1 = SIMD.Float32x4.load(a, 4);
		    var a2 = SIMD.Float32x4.load(a, 8);
		    var a3 = SIMD.Float32x4.load(a, 12);
		
		    var b0 = SIMD.Float32x4.load(b, 0);
		    var out0 = SIMD.Float32x4.add(
		                   SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0, 0, 0, 0, 0), a0),
		                   SIMD.Float32x4.add(
		                       SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0, 1, 1, 1, 1), a1),
		                       SIMD.Float32x4.add(
		                           SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0, 2, 2, 2, 2), a2),
		                           SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0, 3, 3, 3, 3), a3))));
		    SIMD.Float32x4.store(out, 0, out0);
		
		    var b1 = SIMD.Float32x4.load(b, 4);
		    var out1 = SIMD.Float32x4.add(
		                   SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1, 0, 0, 0, 0), a0),
		                   SIMD.Float32x4.add(
		                       SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1, 1, 1, 1, 1), a1),
		                       SIMD.Float32x4.add(
		                           SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1, 2, 2, 2, 2), a2),
		                           SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1, 3, 3, 3, 3), a3))));
		    SIMD.Float32x4.store(out, 4, out1);
		
		    var b2 = SIMD.Float32x4.load(b, 8);
		    var out2 = SIMD.Float32x4.add(
		                   SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2, 0, 0, 0, 0), a0),
		                   SIMD.Float32x4.add(
		                       SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2, 1, 1, 1, 1), a1),
		                       SIMD.Float32x4.add(
		                               SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2, 2, 2, 2, 2), a2),
		                               SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2, 3, 3, 3, 3), a3))));
		    SIMD.Float32x4.store(out, 8, out2);
		
		    var b3 = SIMD.Float32x4.load(b, 12);
		    var out3 = SIMD.Float32x4.add(
		                   SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3, 0, 0, 0, 0), a0),
		                   SIMD.Float32x4.add(
		                        SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3, 1, 1, 1, 1), a1),
		                        SIMD.Float32x4.add(
		                            SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3, 2, 2, 2, 2), a2),
		                            SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3, 3, 3, 3, 3), a3))));
		    SIMD.Float32x4.store(out, 12, out3);
		
		    return out;
		};
		
		/**
		 * Multiplies two mat4's explicitly not using SIMD
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the first operand
		 * @param {mat4} b the second operand
		 * @returns {mat4} out
		 */
		mat4.scalar.multiply = function (out, a, b) {
		    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
		        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
		        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
		        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
		
		    // Cache only the current line of the second matrix
		    var b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
		    out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
		    out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
		    out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
		    out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
		
		    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
		    out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
		    out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
		    out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
		    out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
		
		    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
		    out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
		    out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
		    out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
		    out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
		
		    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
		    out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
		    out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
		    out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
		    out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
		    return out;
		};
		
		/**
		 * Multiplies two mat4's using SIMD if available and enabled
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the first operand
		 * @param {mat4} b the second operand
		 * @returns {mat4} out
		 */
		mat4.multiply = glMatrix.USE_SIMD ? mat4.SIMD.multiply : mat4.scalar.multiply;
		
		/**
		 * Alias for {@link mat4.multiply}
		 * @function
		 */
		mat4.mul = mat4.multiply;
		
		/**
		 * Translate a mat4 by the given vector not using SIMD
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the matrix to translate
		 * @param {vec3} v vector to translate by
		 * @returns {mat4} out
		 */
		mat4.scalar.translate = function (out, a, v) {
		    var x = v[0], y = v[1], z = v[2],
		        a00, a01, a02, a03,
		        a10, a11, a12, a13,
		        a20, a21, a22, a23;
		
		    if (a === out) {
		        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
		        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
		        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
		        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
		    } else {
		        a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
		        a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
		        a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];
		
		        out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
		        out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
		        out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;
		
		        out[12] = a00 * x + a10 * y + a20 * z + a[12];
		        out[13] = a01 * x + a11 * y + a21 * z + a[13];
		        out[14] = a02 * x + a12 * y + a22 * z + a[14];
		        out[15] = a03 * x + a13 * y + a23 * z + a[15];
		    }
		
		    return out;
		};
		
		/**
		 * Translates a mat4 by the given vector using SIMD
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the matrix to translate
		 * @param {vec3} v vector to translate by
		 * @returns {mat4} out
		 */
		mat4.SIMD.translate = function (out, a, v) {
		    var a0 = SIMD.Float32x4.load(a, 0),
		        a1 = SIMD.Float32x4.load(a, 4),
		        a2 = SIMD.Float32x4.load(a, 8),
		        a3 = SIMD.Float32x4.load(a, 12),
		        vec = SIMD.Float32x4(v[0], v[1], v[2] , 0);
		
		    if (a !== out) {
		        out[0] = a[0]; out[1] = a[1]; out[2] = a[2]; out[3] = a[3];
		        out[4] = a[4]; out[5] = a[5]; out[6] = a[6]; out[7] = a[7];
		        out[8] = a[8]; out[9] = a[9]; out[10] = a[10]; out[11] = a[11];
		    }
		
		    a0 = SIMD.Float32x4.mul(a0, SIMD.Float32x4.swizzle(vec, 0, 0, 0, 0));
		    a1 = SIMD.Float32x4.mul(a1, SIMD.Float32x4.swizzle(vec, 1, 1, 1, 1));
		    a2 = SIMD.Float32x4.mul(a2, SIMD.Float32x4.swizzle(vec, 2, 2, 2, 2));
		
		    var t0 = SIMD.Float32x4.add(a0, SIMD.Float32x4.add(a1, SIMD.Float32x4.add(a2, a3)));
		    SIMD.Float32x4.store(out, 12, t0);
		
		    return out;
		};
		
		/**
		 * Translates a mat4 by the given vector using SIMD if available and enabled
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the matrix to translate
		 * @param {vec3} v vector to translate by
		 * @returns {mat4} out
		 */
		mat4.translate = glMatrix.USE_SIMD ? mat4.SIMD.translate : mat4.scalar.translate;
		
		/**
		 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the matrix to scale
		 * @param {vec3} v the vec3 to scale the matrix by
		 * @returns {mat4} out
		 **/
		mat4.scalar.scale = function(out, a, v) {
		    var x = v[0], y = v[1], z = v[2];
		
		    out[0] = a[0] * x;
		    out[1] = a[1] * x;
		    out[2] = a[2] * x;
		    out[3] = a[3] * x;
		    out[4] = a[4] * y;
		    out[5] = a[5] * y;
		    out[6] = a[6] * y;
		    out[7] = a[7] * y;
		    out[8] = a[8] * z;
		    out[9] = a[9] * z;
		    out[10] = a[10] * z;
		    out[11] = a[11] * z;
		    out[12] = a[12];
		    out[13] = a[13];
		    out[14] = a[14];
		    out[15] = a[15];
		    return out;
		};
		
		/**
		 * Scales the mat4 by the dimensions in the given vec3 using vectorization
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the matrix to scale
		 * @param {vec3} v the vec3 to scale the matrix by
		 * @returns {mat4} out
		 **/
		mat4.SIMD.scale = function(out, a, v) {
		    var a0, a1, a2;
		    var vec = SIMD.Float32x4(v[0], v[1], v[2], 0);
		
		    a0 = SIMD.Float32x4.load(a, 0);
		    SIMD.Float32x4.store(
		        out, 0, SIMD.Float32x4.mul(a0, SIMD.Float32x4.swizzle(vec, 0, 0, 0, 0)));
		
		    a1 = SIMD.Float32x4.load(a, 4);
		    SIMD.Float32x4.store(
		        out, 4, SIMD.Float32x4.mul(a1, SIMD.Float32x4.swizzle(vec, 1, 1, 1, 1)));
		
		    a2 = SIMD.Float32x4.load(a, 8);
		    SIMD.Float32x4.store(
		        out, 8, SIMD.Float32x4.mul(a2, SIMD.Float32x4.swizzle(vec, 2, 2, 2, 2)));
		
		    out[12] = a[12];
		    out[13] = a[13];
		    out[14] = a[14];
		    out[15] = a[15];
		    return out;
		};
		
		/**
		 * Scales the mat4 by the dimensions in the given vec3 using SIMD if available and enabled
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the matrix to scale
		 * @param {vec3} v the vec3 to scale the matrix by
		 * @returns {mat4} out
		 */
		mat4.scale = glMatrix.USE_SIMD ? mat4.SIMD.scale : mat4.scalar.scale;
		
		/**
		 * Rotates a mat4 by the given angle around the given axis
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the matrix to rotate
		 * @param {Number} rad the angle to rotate the matrix by
		 * @param {vec3} axis the axis to rotate around
		 * @returns {mat4} out
		 */
		mat4.rotate = function (out, a, rad, axis) {
		    var x = axis[0], y = axis[1], z = axis[2],
		        len = Math.sqrt(x * x + y * y + z * z),
		        s, c, t,
		        a00, a01, a02, a03,
		        a10, a11, a12, a13,
		        a20, a21, a22, a23,
		        b00, b01, b02,
		        b10, b11, b12,
		        b20, b21, b22;
		
		    if (Math.abs(len) < glMatrix.EPSILON) { return null; }
		
		    len = 1 / len;
		    x *= len;
		    y *= len;
		    z *= len;
		
		    s = Math.sin(rad);
		    c = Math.cos(rad);
		    t = 1 - c;
		
		    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
		    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
		    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];
		
		    // Construct the elements of the rotation matrix
		    b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
		    b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
		    b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;
		
		    // Perform rotation-specific matrix multiplication
		    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
		    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
		    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
		    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
		    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
		    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
		    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
		    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
		    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
		    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
		    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
		    out[11] = a03 * b20 + a13 * b21 + a23 * b22;
		
		    if (a !== out) { // If the source and destination differ, copy the unchanged last row
		        out[12] = a[12];
		        out[13] = a[13];
		        out[14] = a[14];
		        out[15] = a[15];
		    }
		    return out;
		};
		
		/**
		 * Rotates a matrix by the given angle around the X axis not using SIMD
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the matrix to rotate
		 * @param {Number} rad the angle to rotate the matrix by
		 * @returns {mat4} out
		 */
		mat4.scalar.rotateX = function (out, a, rad) {
		    var s = Math.sin(rad),
		        c = Math.cos(rad),
		        a10 = a[4],
		        a11 = a[5],
		        a12 = a[6],
		        a13 = a[7],
		        a20 = a[8],
		        a21 = a[9],
		        a22 = a[10],
		        a23 = a[11];
		
		    if (a !== out) { // If the source and destination differ, copy the unchanged rows
		        out[0]  = a[0];
		        out[1]  = a[1];
		        out[2]  = a[2];
		        out[3]  = a[3];
		        out[12] = a[12];
		        out[13] = a[13];
		        out[14] = a[14];
		        out[15] = a[15];
		    }
		
		    // Perform axis-specific matrix multiplication
		    out[4] = a10 * c + a20 * s;
		    out[5] = a11 * c + a21 * s;
		    out[6] = a12 * c + a22 * s;
		    out[7] = a13 * c + a23 * s;
		    out[8] = a20 * c - a10 * s;
		    out[9] = a21 * c - a11 * s;
		    out[10] = a22 * c - a12 * s;
		    out[11] = a23 * c - a13 * s;
		    return out;
		};
		
		/**
		 * Rotates a matrix by the given angle around the X axis using SIMD
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the matrix to rotate
		 * @param {Number} rad the angle to rotate the matrix by
		 * @returns {mat4} out
		 */
		mat4.SIMD.rotateX = function (out, a, rad) {
		    var s = SIMD.Float32x4.splat(Math.sin(rad)),
		        c = SIMD.Float32x4.splat(Math.cos(rad));
		
		    if (a !== out) { // If the source and destination differ, copy the unchanged rows
		      out[0]  = a[0];
		      out[1]  = a[1];
		      out[2]  = a[2];
		      out[3]  = a[3];
		      out[12] = a[12];
		      out[13] = a[13];
		      out[14] = a[14];
		      out[15] = a[15];
		    }
		
		    // Perform axis-specific matrix multiplication
		    var a_1 = SIMD.Float32x4.load(a, 4);
		    var a_2 = SIMD.Float32x4.load(a, 8);
		    SIMD.Float32x4.store(out, 4,
		                         SIMD.Float32x4.add(SIMD.Float32x4.mul(a_1, c), SIMD.Float32x4.mul(a_2, s)));
		    SIMD.Float32x4.store(out, 8,
		                         SIMD.Float32x4.sub(SIMD.Float32x4.mul(a_2, c), SIMD.Float32x4.mul(a_1, s)));
		    return out;
		};
		
		/**
		 * Rotates a matrix by the given angle around the X axis using SIMD if availabe and enabled
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the matrix to rotate
		 * @param {Number} rad the angle to rotate the matrix by
		 * @returns {mat4} out
		 */
		mat4.rotateX = glMatrix.USE_SIMD ? mat4.SIMD.rotateX : mat4.scalar.rotateX;
		
		/**
		 * Rotates a matrix by the given angle around the Y axis not using SIMD
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the matrix to rotate
		 * @param {Number} rad the angle to rotate the matrix by
		 * @returns {mat4} out
		 */
		mat4.scalar.rotateY = function (out, a, rad) {
		    var s = Math.sin(rad),
		        c = Math.cos(rad),
		        a00 = a[0],
		        a01 = a[1],
		        a02 = a[2],
		        a03 = a[3],
		        a20 = a[8],
		        a21 = a[9],
		        a22 = a[10],
		        a23 = a[11];
		
		    if (a !== out) { // If the source and destination differ, copy the unchanged rows
		        out[4]  = a[4];
		        out[5]  = a[5];
		        out[6]  = a[6];
		        out[7]  = a[7];
		        out[12] = a[12];
		        out[13] = a[13];
		        out[14] = a[14];
		        out[15] = a[15];
		    }
		
		    // Perform axis-specific matrix multiplication
		    out[0] = a00 * c - a20 * s;
		    out[1] = a01 * c - a21 * s;
		    out[2] = a02 * c - a22 * s;
		    out[3] = a03 * c - a23 * s;
		    out[8] = a00 * s + a20 * c;
		    out[9] = a01 * s + a21 * c;
		    out[10] = a02 * s + a22 * c;
		    out[11] = a03 * s + a23 * c;
		    return out;
		};
		
		/**
		 * Rotates a matrix by the given angle around the Y axis using SIMD
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the matrix to rotate
		 * @param {Number} rad the angle to rotate the matrix by
		 * @returns {mat4} out
		 */
		mat4.SIMD.rotateY = function (out, a, rad) {
		    var s = SIMD.Float32x4.splat(Math.sin(rad)),
		        c = SIMD.Float32x4.splat(Math.cos(rad));
		
		    if (a !== out) { // If the source and destination differ, copy the unchanged rows
		        out[4]  = a[4];
		        out[5]  = a[5];
		        out[6]  = a[6];
		        out[7]  = a[7];
		        out[12] = a[12];
		        out[13] = a[13];
		        out[14] = a[14];
		        out[15] = a[15];
		    }
		
		    // Perform axis-specific matrix multiplication
		    var a_0 = SIMD.Float32x4.load(a, 0);
		    var a_2 = SIMD.Float32x4.load(a, 8);
		    SIMD.Float32x4.store(out, 0,
		                         SIMD.Float32x4.sub(SIMD.Float32x4.mul(a_0, c), SIMD.Float32x4.mul(a_2, s)));
		    SIMD.Float32x4.store(out, 8,
		                         SIMD.Float32x4.add(SIMD.Float32x4.mul(a_0, s), SIMD.Float32x4.mul(a_2, c)));
		    return out;
		};
		
		/**
		 * Rotates a matrix by the given angle around the Y axis if SIMD available and enabled
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the matrix to rotate
		 * @param {Number} rad the angle to rotate the matrix by
		 * @returns {mat4} out
		 */
		 mat4.rotateY = glMatrix.USE_SIMD ? mat4.SIMD.rotateY : mat4.scalar.rotateY;
		
		/**
		 * Rotates a matrix by the given angle around the Z axis not using SIMD
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the matrix to rotate
		 * @param {Number} rad the angle to rotate the matrix by
		 * @returns {mat4} out
		 */
		mat4.scalar.rotateZ = function (out, a, rad) {
		    var s = Math.sin(rad),
		        c = Math.cos(rad),
		        a00 = a[0],
		        a01 = a[1],
		        a02 = a[2],
		        a03 = a[3],
		        a10 = a[4],
		        a11 = a[5],
		        a12 = a[6],
		        a13 = a[7];
		
		    if (a !== out) { // If the source and destination differ, copy the unchanged last row
		        out[8]  = a[8];
		        out[9]  = a[9];
		        out[10] = a[10];
		        out[11] = a[11];
		        out[12] = a[12];
		        out[13] = a[13];
		        out[14] = a[14];
		        out[15] = a[15];
		    }
		
		    // Perform axis-specific matrix multiplication
		    out[0] = a00 * c + a10 * s;
		    out[1] = a01 * c + a11 * s;
		    out[2] = a02 * c + a12 * s;
		    out[3] = a03 * c + a13 * s;
		    out[4] = a10 * c - a00 * s;
		    out[5] = a11 * c - a01 * s;
		    out[6] = a12 * c - a02 * s;
		    out[7] = a13 * c - a03 * s;
		    return out;
		};
		
		/**
		 * Rotates a matrix by the given angle around the Z axis using SIMD
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the matrix to rotate
		 * @param {Number} rad the angle to rotate the matrix by
		 * @returns {mat4} out
		 */
		mat4.SIMD.rotateZ = function (out, a, rad) {
		    var s = SIMD.Float32x4.splat(Math.sin(rad)),
		        c = SIMD.Float32x4.splat(Math.cos(rad));
		
		    if (a !== out) { // If the source and destination differ, copy the unchanged last row
		        out[8]  = a[8];
		        out[9]  = a[9];
		        out[10] = a[10];
		        out[11] = a[11];
		        out[12] = a[12];
		        out[13] = a[13];
		        out[14] = a[14];
		        out[15] = a[15];
		    }
		
		    // Perform axis-specific matrix multiplication
		    var a_0 = SIMD.Float32x4.load(a, 0);
		    var a_1 = SIMD.Float32x4.load(a, 4);
		    SIMD.Float32x4.store(out, 0,
		                         SIMD.Float32x4.add(SIMD.Float32x4.mul(a_0, c), SIMD.Float32x4.mul(a_1, s)));
		    SIMD.Float32x4.store(out, 4,
		                         SIMD.Float32x4.sub(SIMD.Float32x4.mul(a_1, c), SIMD.Float32x4.mul(a_0, s)));
		    return out;
		};
		
		/**
		 * Rotates a matrix by the given angle around the Z axis if SIMD available and enabled
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the matrix to rotate
		 * @param {Number} rad the angle to rotate the matrix by
		 * @returns {mat4} out
		 */
		 mat4.rotateZ = glMatrix.USE_SIMD ? mat4.SIMD.rotateZ : mat4.scalar.rotateZ;
		
		/**
		 * Creates a matrix from a vector translation
		 * This is equivalent to (but much faster than):
		 *
		 *     mat4.identity(dest);
		 *     mat4.translate(dest, dest, vec);
		 *
		 * @param {mat4} out mat4 receiving operation result
		 * @param {vec3} v Translation vector
		 * @returns {mat4} out
		 */
		mat4.fromTranslation = function(out, v) {
		    out[0] = 1;
		    out[1] = 0;
		    out[2] = 0;
		    out[3] = 0;
		    out[4] = 0;
		    out[5] = 1;
		    out[6] = 0;
		    out[7] = 0;
		    out[8] = 0;
		    out[9] = 0;
		    out[10] = 1;
		    out[11] = 0;
		    out[12] = v[0];
		    out[13] = v[1];
		    out[14] = v[2];
		    out[15] = 1;
		    return out;
		}
		
		/**
		 * Creates a matrix from a vector scaling
		 * This is equivalent to (but much faster than):
		 *
		 *     mat4.identity(dest);
		 *     mat4.scale(dest, dest, vec);
		 *
		 * @param {mat4} out mat4 receiving operation result
		 * @param {vec3} v Scaling vector
		 * @returns {mat4} out
		 */
		mat4.fromScaling = function(out, v) {
		    out[0] = v[0];
		    out[1] = 0;
		    out[2] = 0;
		    out[3] = 0;
		    out[4] = 0;
		    out[5] = v[1];
		    out[6] = 0;
		    out[7] = 0;
		    out[8] = 0;
		    out[9] = 0;
		    out[10] = v[2];
		    out[11] = 0;
		    out[12] = 0;
		    out[13] = 0;
		    out[14] = 0;
		    out[15] = 1;
		    return out;
		}
		
		/**
		 * Creates a matrix from a given angle around a given axis
		 * This is equivalent to (but much faster than):
		 *
		 *     mat4.identity(dest);
		 *     mat4.rotate(dest, dest, rad, axis);
		 *
		 * @param {mat4} out mat4 receiving operation result
		 * @param {Number} rad the angle to rotate the matrix by
		 * @param {vec3} axis the axis to rotate around
		 * @returns {mat4} out
		 */
		mat4.fromRotation = function(out, rad, axis) {
		    var x = axis[0], y = axis[1], z = axis[2],
		        len = Math.sqrt(x * x + y * y + z * z),
		        s, c, t;
		
		    if (Math.abs(len) < glMatrix.EPSILON) { return null; }
		
		    len = 1 / len;
		    x *= len;
		    y *= len;
		    z *= len;
		
		    s = Math.sin(rad);
		    c = Math.cos(rad);
		    t = 1 - c;
		
		    // Perform rotation-specific matrix multiplication
		    out[0] = x * x * t + c;
		    out[1] = y * x * t + z * s;
		    out[2] = z * x * t - y * s;
		    out[3] = 0;
		    out[4] = x * y * t - z * s;
		    out[5] = y * y * t + c;
		    out[6] = z * y * t + x * s;
		    out[7] = 0;
		    out[8] = x * z * t + y * s;
		    out[9] = y * z * t - x * s;
		    out[10] = z * z * t + c;
		    out[11] = 0;
		    out[12] = 0;
		    out[13] = 0;
		    out[14] = 0;
		    out[15] = 1;
		    return out;
		}
		
		/**
		 * Creates a matrix from the given angle around the X axis
		 * This is equivalent to (but much faster than):
		 *
		 *     mat4.identity(dest);
		 *     mat4.rotateX(dest, dest, rad);
		 *
		 * @param {mat4} out mat4 receiving operation result
		 * @param {Number} rad the angle to rotate the matrix by
		 * @returns {mat4} out
		 */
		mat4.fromXRotation = function(out, rad) {
		    var s = Math.sin(rad),
		        c = Math.cos(rad);
		
		    // Perform axis-specific matrix multiplication
		    out[0]  = 1;
		    out[1]  = 0;
		    out[2]  = 0;
		    out[3]  = 0;
		    out[4] = 0;
		    out[5] = c;
		    out[6] = s;
		    out[7] = 0;
		    out[8] = 0;
		    out[9] = -s;
		    out[10] = c;
		    out[11] = 0;
		    out[12] = 0;
		    out[13] = 0;
		    out[14] = 0;
		    out[15] = 1;
		    return out;
		}
		
		/**
		 * Creates a matrix from the given angle around the Y axis
		 * This is equivalent to (but much faster than):
		 *
		 *     mat4.identity(dest);
		 *     mat4.rotateY(dest, dest, rad);
		 *
		 * @param {mat4} out mat4 receiving operation result
		 * @param {Number} rad the angle to rotate the matrix by
		 * @returns {mat4} out
		 */
		mat4.fromYRotation = function(out, rad) {
		    var s = Math.sin(rad),
		        c = Math.cos(rad);
		
		    // Perform axis-specific matrix multiplication
		    out[0]  = c;
		    out[1]  = 0;
		    out[2]  = -s;
		    out[3]  = 0;
		    out[4] = 0;
		    out[5] = 1;
		    out[6] = 0;
		    out[7] = 0;
		    out[8] = s;
		    out[9] = 0;
		    out[10] = c;
		    out[11] = 0;
		    out[12] = 0;
		    out[13] = 0;
		    out[14] = 0;
		    out[15] = 1;
		    return out;
		}
		
		/**
		 * Creates a matrix from the given angle around the Z axis
		 * This is equivalent to (but much faster than):
		 *
		 *     mat4.identity(dest);
		 *     mat4.rotateZ(dest, dest, rad);
		 *
		 * @param {mat4} out mat4 receiving operation result
		 * @param {Number} rad the angle to rotate the matrix by
		 * @returns {mat4} out
		 */
		mat4.fromZRotation = function(out, rad) {
		    var s = Math.sin(rad),
		        c = Math.cos(rad);
		
		    // Perform axis-specific matrix multiplication
		    out[0]  = c;
		    out[1]  = s;
		    out[2]  = 0;
		    out[3]  = 0;
		    out[4] = -s;
		    out[5] = c;
		    out[6] = 0;
		    out[7] = 0;
		    out[8] = 0;
		    out[9] = 0;
		    out[10] = 1;
		    out[11] = 0;
		    out[12] = 0;
		    out[13] = 0;
		    out[14] = 0;
		    out[15] = 1;
		    return out;
		}
		
		/**
		 * Creates a matrix from a quaternion rotation and vector translation
		 * This is equivalent to (but much faster than):
		 *
		 *     mat4.identity(dest);
		 *     mat4.translate(dest, vec);
		 *     var quatMat = mat4.create();
		 *     quat4.toMat4(quat, quatMat);
		 *     mat4.multiply(dest, quatMat);
		 *
		 * @param {mat4} out mat4 receiving operation result
		 * @param {quat4} q Rotation quaternion
		 * @param {vec3} v Translation vector
		 * @returns {mat4} out
		 */
		mat4.fromRotationTranslation = function (out, q, v) {
		    // Quaternion math
		    var x = q[0], y = q[1], z = q[2], w = q[3],
		        x2 = x + x,
		        y2 = y + y,
		        z2 = z + z,
		
		        xx = x * x2,
		        xy = x * y2,
		        xz = x * z2,
		        yy = y * y2,
		        yz = y * z2,
		        zz = z * z2,
		        wx = w * x2,
		        wy = w * y2,
		        wz = w * z2;
		
		    out[0] = 1 - (yy + zz);
		    out[1] = xy + wz;
		    out[2] = xz - wy;
		    out[3] = 0;
		    out[4] = xy - wz;
		    out[5] = 1 - (xx + zz);
		    out[6] = yz + wx;
		    out[7] = 0;
		    out[8] = xz + wy;
		    out[9] = yz - wx;
		    out[10] = 1 - (xx + yy);
		    out[11] = 0;
		    out[12] = v[0];
		    out[13] = v[1];
		    out[14] = v[2];
		    out[15] = 1;
		
		    return out;
		};
		
		/**
		 * Returns the translation vector component of a transformation
		 *  matrix. If a matrix is built with fromRotationTranslation,
		 *  the returned vector will be the same as the translation vector
		 *  originally supplied.
		 * @param  {vec3} out Vector to receive translation component
		 * @param  {mat4} mat Matrix to be decomposed (input)
		 * @return {vec3} out
		 */
		mat4.getTranslation = function (out, mat) {
		  out[0] = mat[12];
		  out[1] = mat[13];
		  out[2] = mat[14];
		
		  return out;
		};
		
		/**
		 * Returns a quaternion representing the rotational component
		 *  of a transformation matrix. If a matrix is built with
		 *  fromRotationTranslation, the returned quaternion will be the
		 *  same as the quaternion originally supplied.
		 * @param {quat} out Quaternion to receive the rotation component
		 * @param {mat4} mat Matrix to be decomposed (input)
		 * @return {quat} out
		 */
		mat4.getRotation = function (out, mat) {
		  // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
		  var trace = mat[0] + mat[5] + mat[10];
		  var S = 0;
		
		  if (trace > 0) { 
		    S = Math.sqrt(trace + 1.0) * 2;
		    out[3] = 0.25 * S;
		    out[0] = (mat[6] - mat[9]) / S;
		    out[1] = (mat[8] - mat[2]) / S; 
		    out[2] = (mat[1] - mat[4]) / S; 
		  } else if ((mat[0] > mat[5])&(mat[0] > mat[10])) { 
		    S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
		    out[3] = (mat[6] - mat[9]) / S;
		    out[0] = 0.25 * S;
		    out[1] = (mat[1] + mat[4]) / S; 
		    out[2] = (mat[8] + mat[2]) / S; 
		  } else if (mat[5] > mat[10]) { 
		    S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
		    out[3] = (mat[8] - mat[2]) / S;
		    out[0] = (mat[1] + mat[4]) / S; 
		    out[1] = 0.25 * S;
		    out[2] = (mat[6] + mat[9]) / S; 
		  } else { 
		    S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
		    out[3] = (mat[1] - mat[4]) / S;
		    out[0] = (mat[8] + mat[2]) / S;
		    out[1] = (mat[6] + mat[9]) / S;
		    out[2] = 0.25 * S;
		  }
		
		  return out;
		};
		
		/**
		 * Creates a matrix from a quaternion rotation, vector translation and vector scale
		 * This is equivalent to (but much faster than):
		 *
		 *     mat4.identity(dest);
		 *     mat4.translate(dest, vec);
		 *     var quatMat = mat4.create();
		 *     quat4.toMat4(quat, quatMat);
		 *     mat4.multiply(dest, quatMat);
		 *     mat4.scale(dest, scale)
		 *
		 * @param {mat4} out mat4 receiving operation result
		 * @param {quat4} q Rotation quaternion
		 * @param {vec3} v Translation vector
		 * @param {vec3} s Scaling vector
		 * @returns {mat4} out
		 */
		mat4.fromRotationTranslationScale = function (out, q, v, s) {
		    // Quaternion math
		    var x = q[0], y = q[1], z = q[2], w = q[3],
		        x2 = x + x,
		        y2 = y + y,
		        z2 = z + z,
		
		        xx = x * x2,
		        xy = x * y2,
		        xz = x * z2,
		        yy = y * y2,
		        yz = y * z2,
		        zz = z * z2,
		        wx = w * x2,
		        wy = w * y2,
		        wz = w * z2,
		        sx = s[0],
		        sy = s[1],
		        sz = s[2];
		
		    out[0] = (1 - (yy + zz)) * sx;
		    out[1] = (xy + wz) * sx;
		    out[2] = (xz - wy) * sx;
		    out[3] = 0;
		    out[4] = (xy - wz) * sy;
		    out[5] = (1 - (xx + zz)) * sy;
		    out[6] = (yz + wx) * sy;
		    out[7] = 0;
		    out[8] = (xz + wy) * sz;
		    out[9] = (yz - wx) * sz;
		    out[10] = (1 - (xx + yy)) * sz;
		    out[11] = 0;
		    out[12] = v[0];
		    out[13] = v[1];
		    out[14] = v[2];
		    out[15] = 1;
		
		    return out;
		};
		
		/**
		 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
		 * This is equivalent to (but much faster than):
		 *
		 *     mat4.identity(dest);
		 *     mat4.translate(dest, vec);
		 *     mat4.translate(dest, origin);
		 *     var quatMat = mat4.create();
		 *     quat4.toMat4(quat, quatMat);
		 *     mat4.multiply(dest, quatMat);
		 *     mat4.scale(dest, scale)
		 *     mat4.translate(dest, negativeOrigin);
		 *
		 * @param {mat4} out mat4 receiving operation result
		 * @param {quat4} q Rotation quaternion
		 * @param {vec3} v Translation vector
		 * @param {vec3} s Scaling vector
		 * @param {vec3} o The origin vector around which to scale and rotate
		 * @returns {mat4} out
		 */
		mat4.fromRotationTranslationScaleOrigin = function (out, q, v, s, o) {
		  // Quaternion math
		  var x = q[0], y = q[1], z = q[2], w = q[3],
		      x2 = x + x,
		      y2 = y + y,
		      z2 = z + z,
		
		      xx = x * x2,
		      xy = x * y2,
		      xz = x * z2,
		      yy = y * y2,
		      yz = y * z2,
		      zz = z * z2,
		      wx = w * x2,
		      wy = w * y2,
		      wz = w * z2,
		
		      sx = s[0],
		      sy = s[1],
		      sz = s[2],
		
		      ox = o[0],
		      oy = o[1],
		      oz = o[2];
		
		  out[0] = (1 - (yy + zz)) * sx;
		  out[1] = (xy + wz) * sx;
		  out[2] = (xz - wy) * sx;
		  out[3] = 0;
		  out[4] = (xy - wz) * sy;
		  out[5] = (1 - (xx + zz)) * sy;
		  out[6] = (yz + wx) * sy;
		  out[7] = 0;
		  out[8] = (xz + wy) * sz;
		  out[9] = (yz - wx) * sz;
		  out[10] = (1 - (xx + yy)) * sz;
		  out[11] = 0;
		  out[12] = v[0] + ox - (out[0] * ox + out[4] * oy + out[8] * oz);
		  out[13] = v[1] + oy - (out[1] * ox + out[5] * oy + out[9] * oz);
		  out[14] = v[2] + oz - (out[2] * ox + out[6] * oy + out[10] * oz);
		  out[15] = 1;
		
		  return out;
		};
		
		/**
		 * Calculates a 4x4 matrix from the given quaternion
		 *
		 * @param {mat4} out mat4 receiving operation result
		 * @param {quat} q Quaternion to create matrix from
		 *
		 * @returns {mat4} out
		 */
		mat4.fromQuat = function (out, q) {
		    var x = q[0], y = q[1], z = q[2], w = q[3],
		        x2 = x + x,
		        y2 = y + y,
		        z2 = z + z,
		
		        xx = x * x2,
		        yx = y * x2,
		        yy = y * y2,
		        zx = z * x2,
		        zy = z * y2,
		        zz = z * z2,
		        wx = w * x2,
		        wy = w * y2,
		        wz = w * z2;
		
		    out[0] = 1 - yy - zz;
		    out[1] = yx + wz;
		    out[2] = zx - wy;
		    out[3] = 0;
		
		    out[4] = yx - wz;
		    out[5] = 1 - xx - zz;
		    out[6] = zy + wx;
		    out[7] = 0;
		
		    out[8] = zx + wy;
		    out[9] = zy - wx;
		    out[10] = 1 - xx - yy;
		    out[11] = 0;
		
		    out[12] = 0;
		    out[13] = 0;
		    out[14] = 0;
		    out[15] = 1;
		
		    return out;
		};
		
		/**
		 * Generates a frustum matrix with the given bounds
		 *
		 * @param {mat4} out mat4 frustum matrix will be written into
		 * @param {Number} left Left bound of the frustum
		 * @param {Number} right Right bound of the frustum
		 * @param {Number} bottom Bottom bound of the frustum
		 * @param {Number} top Top bound of the frustum
		 * @param {Number} near Near bound of the frustum
		 * @param {Number} far Far bound of the frustum
		 * @returns {mat4} out
		 */
		mat4.frustum = function (out, left, right, bottom, top, near, far) {
		    var rl = 1 / (right - left),
		        tb = 1 / (top - bottom),
		        nf = 1 / (near - far);
		    out[0] = (near * 2) * rl;
		    out[1] = 0;
		    out[2] = 0;
		    out[3] = 0;
		    out[4] = 0;
		    out[5] = (near * 2) * tb;
		    out[6] = 0;
		    out[7] = 0;
		    out[8] = (right + left) * rl;
		    out[9] = (top + bottom) * tb;
		    out[10] = (far + near) * nf;
		    out[11] = -1;
		    out[12] = 0;
		    out[13] = 0;
		    out[14] = (far * near * 2) * nf;
		    out[15] = 0;
		    return out;
		};
		
		/**
		 * Generates a perspective projection matrix with the given bounds
		 *
		 * @param {mat4} out mat4 frustum matrix will be written into
		 * @param {number} fovy Vertical field of view in radians
		 * @param {number} aspect Aspect ratio. typically viewport width/height
		 * @param {number} near Near bound of the frustum
		 * @param {number} far Far bound of the frustum
		 * @returns {mat4} out
		 */
		mat4.perspective = function (out, fovy, aspect, near, far) {
		    var f = 1.0 / Math.tan(fovy / 2),
		        nf = 1 / (near - far);
		    out[0] = f / aspect;
		    out[1] = 0;
		    out[2] = 0;
		    out[3] = 0;
		    out[4] = 0;
		    out[5] = f;
		    out[6] = 0;
		    out[7] = 0;
		    out[8] = 0;
		    out[9] = 0;
		    out[10] = (far + near) * nf;
		    out[11] = -1;
		    out[12] = 0;
		    out[13] = 0;
		    out[14] = (2 * far * near) * nf;
		    out[15] = 0;
		    return out;
		};
		
		/**
		 * Generates a perspective projection matrix with the given field of view.
		 * This is primarily useful for generating projection matrices to be used
		 * with the still experiemental WebVR API.
		 *
		 * @param {mat4} out mat4 frustum matrix will be written into
		 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
		 * @param {number} near Near bound of the frustum
		 * @param {number} far Far bound of the frustum
		 * @returns {mat4} out
		 */
		mat4.perspectiveFromFieldOfView = function (out, fov, near, far) {
		    var upTan = Math.tan(fov.upDegrees * Math.PI/180.0),
		        downTan = Math.tan(fov.downDegrees * Math.PI/180.0),
		        leftTan = Math.tan(fov.leftDegrees * Math.PI/180.0),
		        rightTan = Math.tan(fov.rightDegrees * Math.PI/180.0),
		        xScale = 2.0 / (leftTan + rightTan),
		        yScale = 2.0 / (upTan + downTan);
		
		    out[0] = xScale;
		    out[1] = 0.0;
		    out[2] = 0.0;
		    out[3] = 0.0;
		    out[4] = 0.0;
		    out[5] = yScale;
		    out[6] = 0.0;
		    out[7] = 0.0;
		    out[8] = -((leftTan - rightTan) * xScale * 0.5);
		    out[9] = ((upTan - downTan) * yScale * 0.5);
		    out[10] = far / (near - far);
		    out[11] = -1.0;
		    out[12] = 0.0;
		    out[13] = 0.0;
		    out[14] = (far * near) / (near - far);
		    out[15] = 0.0;
		    return out;
		}
		
		/**
		 * Generates a orthogonal projection matrix with the given bounds
		 *
		 * @param {mat4} out mat4 frustum matrix will be written into
		 * @param {number} left Left bound of the frustum
		 * @param {number} right Right bound of the frustum
		 * @param {number} bottom Bottom bound of the frustum
		 * @param {number} top Top bound of the frustum
		 * @param {number} near Near bound of the frustum
		 * @param {number} far Far bound of the frustum
		 * @returns {mat4} out
		 */
		mat4.ortho = function (out, left, right, bottom, top, near, far) {
		    var lr = 1 / (left - right),
		        bt = 1 / (bottom - top),
		        nf = 1 / (near - far);
		    out[0] = -2 * lr;
		    out[1] = 0;
		    out[2] = 0;
		    out[3] = 0;
		    out[4] = 0;
		    out[5] = -2 * bt;
		    out[6] = 0;
		    out[7] = 0;
		    out[8] = 0;
		    out[9] = 0;
		    out[10] = 2 * nf;
		    out[11] = 0;
		    out[12] = (left + right) * lr;
		    out[13] = (top + bottom) * bt;
		    out[14] = (far + near) * nf;
		    out[15] = 1;
		    return out;
		};
		
		/**
		 * Generates a look-at matrix with the given eye position, focal point, and up axis
		 *
		 * @param {mat4} out mat4 frustum matrix will be written into
		 * @param {vec3} eye Position of the viewer
		 * @param {vec3} center Point the viewer is looking at
		 * @param {vec3} up vec3 pointing up
		 * @returns {mat4} out
		 */
		mat4.lookAt = function (out, eye, center, up) {
		    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
		        eyex = eye[0],
		        eyey = eye[1],
		        eyez = eye[2],
		        upx = up[0],
		        upy = up[1],
		        upz = up[2],
		        centerx = center[0],
		        centery = center[1],
		        centerz = center[2];
		
		    if (Math.abs(eyex - centerx) < glMatrix.EPSILON &&
		        Math.abs(eyey - centery) < glMatrix.EPSILON &&
		        Math.abs(eyez - centerz) < glMatrix.EPSILON) {
		        return mat4.identity(out);
		    }
		
		    z0 = eyex - centerx;
		    z1 = eyey - centery;
		    z2 = eyez - centerz;
		
		    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
		    z0 *= len;
		    z1 *= len;
		    z2 *= len;
		
		    x0 = upy * z2 - upz * z1;
		    x1 = upz * z0 - upx * z2;
		    x2 = upx * z1 - upy * z0;
		    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
		    if (!len) {
		        x0 = 0;
		        x1 = 0;
		        x2 = 0;
		    } else {
		        len = 1 / len;
		        x0 *= len;
		        x1 *= len;
		        x2 *= len;
		    }
		
		    y0 = z1 * x2 - z2 * x1;
		    y1 = z2 * x0 - z0 * x2;
		    y2 = z0 * x1 - z1 * x0;
		
		    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
		    if (!len) {
		        y0 = 0;
		        y1 = 0;
		        y2 = 0;
		    } else {
		        len = 1 / len;
		        y0 *= len;
		        y1 *= len;
		        y2 *= len;
		    }
		
		    out[0] = x0;
		    out[1] = y0;
		    out[2] = z0;
		    out[3] = 0;
		    out[4] = x1;
		    out[5] = y1;
		    out[6] = z1;
		    out[7] = 0;
		    out[8] = x2;
		    out[9] = y2;
		    out[10] = z2;
		    out[11] = 0;
		    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
		    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
		    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
		    out[15] = 1;
		
		    return out;
		};
		
		/**
		 * Returns a string representation of a mat4
		 *
		 * @param {mat4} mat matrix to represent as a string
		 * @returns {String} string representation of the matrix
		 */
		mat4.str = function (a) {
		    return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
		                    a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' +
		                    a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' +
		                    a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
		};
		
		/**
		 * Returns Frobenius norm of a mat4
		 *
		 * @param {mat4} a the matrix to calculate Frobenius norm of
		 * @returns {Number} Frobenius norm
		 */
		mat4.frob = function (a) {
		    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2) ))
		};
		
		/**
		 * Adds two mat4's
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the first operand
		 * @param {mat4} b the second operand
		 * @returns {mat4} out
		 */
		mat4.add = function(out, a, b) {
		    out[0] = a[0] + b[0];
		    out[1] = a[1] + b[1];
		    out[2] = a[2] + b[2];
		    out[3] = a[3] + b[3];
		    out[4] = a[4] + b[4];
		    out[5] = a[5] + b[5];
		    out[6] = a[6] + b[6];
		    out[7] = a[7] + b[7];
		    out[8] = a[8] + b[8];
		    out[9] = a[9] + b[9];
		    out[10] = a[10] + b[10];
		    out[11] = a[11] + b[11];
		    out[12] = a[12] + b[12];
		    out[13] = a[13] + b[13];
		    out[14] = a[14] + b[14];
		    out[15] = a[15] + b[15];
		    return out;
		};
		
		/**
		 * Subtracts matrix b from matrix a
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the first operand
		 * @param {mat4} b the second operand
		 * @returns {mat4} out
		 */
		mat4.subtract = function(out, a, b) {
		    out[0] = a[0] - b[0];
		    out[1] = a[1] - b[1];
		    out[2] = a[2] - b[2];
		    out[3] = a[3] - b[3];
		    out[4] = a[4] - b[4];
		    out[5] = a[5] - b[5];
		    out[6] = a[6] - b[6];
		    out[7] = a[7] - b[7];
		    out[8] = a[8] - b[8];
		    out[9] = a[9] - b[9];
		    out[10] = a[10] - b[10];
		    out[11] = a[11] - b[11];
		    out[12] = a[12] - b[12];
		    out[13] = a[13] - b[13];
		    out[14] = a[14] - b[14];
		    out[15] = a[15] - b[15];
		    return out;
		};
		
		/**
		 * Alias for {@link mat4.subtract}
		 * @function
		 */
		mat4.sub = mat4.subtract;
		
		/**
		 * Multiply each element of the matrix by a scalar.
		 *
		 * @param {mat4} out the receiving matrix
		 * @param {mat4} a the matrix to scale
		 * @param {Number} b amount to scale the matrix's elements by
		 * @returns {mat4} out
		 */
		mat4.multiplyScalar = function(out, a, b) {
		    out[0] = a[0] * b;
		    out[1] = a[1] * b;
		    out[2] = a[2] * b;
		    out[3] = a[3] * b;
		    out[4] = a[4] * b;
		    out[5] = a[5] * b;
		    out[6] = a[6] * b;
		    out[7] = a[7] * b;
		    out[8] = a[8] * b;
		    out[9] = a[9] * b;
		    out[10] = a[10] * b;
		    out[11] = a[11] * b;
		    out[12] = a[12] * b;
		    out[13] = a[13] * b;
		    out[14] = a[14] * b;
		    out[15] = a[15] * b;
		    return out;
		};
		
		/**
		 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
		 *
		 * @param {mat4} out the receiving vector
		 * @param {mat4} a the first operand
		 * @param {mat4} b the second operand
		 * @param {Number} scale the amount to scale b's elements by before adding
		 * @returns {mat4} out
		 */
		mat4.multiplyScalarAndAdd = function(out, a, b, scale) {
		    out[0] = a[0] + (b[0] * scale);
		    out[1] = a[1] + (b[1] * scale);
		    out[2] = a[2] + (b[2] * scale);
		    out[3] = a[3] + (b[3] * scale);
		    out[4] = a[4] + (b[4] * scale);
		    out[5] = a[5] + (b[5] * scale);
		    out[6] = a[6] + (b[6] * scale);
		    out[7] = a[7] + (b[7] * scale);
		    out[8] = a[8] + (b[8] * scale);
		    out[9] = a[9] + (b[9] * scale);
		    out[10] = a[10] + (b[10] * scale);
		    out[11] = a[11] + (b[11] * scale);
		    out[12] = a[12] + (b[12] * scale);
		    out[13] = a[13] + (b[13] * scale);
		    out[14] = a[14] + (b[14] * scale);
		    out[15] = a[15] + (b[15] * scale);
		    return out;
		};
		
		/**
		 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
		 *
		 * @param {mat4} a The first matrix.
		 * @param {mat4} b The second matrix.
		 * @returns {Boolean} True if the matrices are equal, false otherwise.
		 */
		mat4.exactEquals = function (a, b) {
		    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && 
		           a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && 
		           a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] &&
		           a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
		};
		
		/**
		 * Returns whether or not the matrices have approximately the same elements in the same position.
		 *
		 * @param {mat4} a The first matrix.
		 * @param {mat4} b The second matrix.
		 * @returns {Boolean} True if the matrices are equal, false otherwise.
		 */
		mat4.equals = function (a, b) {
		    var a0  = a[0],  a1  = a[1],  a2  = a[2],  a3  = a[3],
		        a4  = a[4],  a5  = a[5],  a6  = a[6],  a7  = a[7], 
		        a8  = a[8],  a9  = a[9],  a10 = a[10], a11 = a[11], 
		        a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];
		
		    var b0  = b[0],  b1  = b[1],  b2  = b[2],  b3  = b[3],
		        b4  = b[4],  b5  = b[5],  b6  = b[6],  b7  = b[7], 
		        b8  = b[8],  b9  = b[9],  b10 = b[10], b11 = b[11], 
		        b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
		
		    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
		            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
		            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
		            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
		            Math.abs(a4 - b4) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
		            Math.abs(a5 - b5) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
		            Math.abs(a6 - b6) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
		            Math.abs(a7 - b7) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
		            Math.abs(a8 - b8) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a8), Math.abs(b8)) &&
		            Math.abs(a9 - b9) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a9), Math.abs(b9)) &&
		            Math.abs(a10 - b10) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a10), Math.abs(b10)) &&
		            Math.abs(a11 - b11) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a11), Math.abs(b11)) &&
		            Math.abs(a12 - b12) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a12), Math.abs(b12)) &&
		            Math.abs(a13 - b13) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a13), Math.abs(b13)) &&
		            Math.abs(a14 - b14) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a14), Math.abs(b14)) &&
		            Math.abs(a15 - b15) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a15), Math.abs(b15)));
		};
		
		
		
		module.exports = mat4;
	
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
		
		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:
		
		The above copyright notice and this permission notice shall be included in
		all copies or substantial portions of the Software.
		
		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
		THE SOFTWARE. */
		
		var glMatrix = __webpack_require__(3);
		var mat3 = __webpack_require__(6);
		var vec3 = __webpack_require__(9);
		var vec4 = __webpack_require__(10);
		
		/**
		 * @class Quaternion
		 * @name quat
		 */
		var quat = {};
		
		/**
		 * Creates a new identity quat
		 *
		 * @returns {quat} a new quaternion
		 */
		quat.create = function() {
		    var out = new glMatrix.ARRAY_TYPE(4);
		    out[0] = 0;
		    out[1] = 0;
		    out[2] = 0;
		    out[3] = 1;
		    return out;
		};
		
		/**
		 * Sets a quaternion to represent the shortest rotation from one
		 * vector to another.
		 *
		 * Both vectors are assumed to be unit length.
		 *
		 * @param {quat} out the receiving quaternion.
		 * @param {vec3} a the initial vector
		 * @param {vec3} b the destination vector
		 * @returns {quat} out
		 */
		quat.rotationTo = (function() {
		    var tmpvec3 = vec3.create();
		    var xUnitVec3 = vec3.fromValues(1,0,0);
		    var yUnitVec3 = vec3.fromValues(0,1,0);
		
		    return function(out, a, b) {
		        var dot = vec3.dot(a, b);
		        if (dot < -0.999999) {
		            vec3.cross(tmpvec3, xUnitVec3, a);
		            if (vec3.length(tmpvec3) < 0.000001)
		                vec3.cross(tmpvec3, yUnitVec3, a);
		            vec3.normalize(tmpvec3, tmpvec3);
		            quat.setAxisAngle(out, tmpvec3, Math.PI);
		            return out;
		        } else if (dot > 0.999999) {
		            out[0] = 0;
		            out[1] = 0;
		            out[2] = 0;
		            out[3] = 1;
		            return out;
		        } else {
		            vec3.cross(tmpvec3, a, b);
		            out[0] = tmpvec3[0];
		            out[1] = tmpvec3[1];
		            out[2] = tmpvec3[2];
		            out[3] = 1 + dot;
		            return quat.normalize(out, out);
		        }
		    };
		})();
		
		/**
		 * Sets the specified quaternion with values corresponding to the given
		 * axes. Each axis is a vec3 and is expected to be unit length and
		 * perpendicular to all other specified axes.
		 *
		 * @param {vec3} view  the vector representing the viewing direction
		 * @param {vec3} right the vector representing the local "right" direction
		 * @param {vec3} up    the vector representing the local "up" direction
		 * @returns {quat} out
		 */
		quat.setAxes = (function() {
		    var matr = mat3.create();
		
		    return function(out, view, right, up) {
		        matr[0] = right[0];
		        matr[3] = right[1];
		        matr[6] = right[2];
		
		        matr[1] = up[0];
		        matr[4] = up[1];
		        matr[7] = up[2];
		
		        matr[2] = -view[0];
		        matr[5] = -view[1];
		        matr[8] = -view[2];
		
		        return quat.normalize(out, quat.fromMat3(out, matr));
		    };
		})();
		
		/**
		 * Creates a new quat initialized with values from an existing quaternion
		 *
		 * @param {quat} a quaternion to clone
		 * @returns {quat} a new quaternion
		 * @function
		 */
		quat.clone = vec4.clone;
		
		/**
		 * Creates a new quat initialized with the given values
		 *
		 * @param {Number} x X component
		 * @param {Number} y Y component
		 * @param {Number} z Z component
		 * @param {Number} w W component
		 * @returns {quat} a new quaternion
		 * @function
		 */
		quat.fromValues = vec4.fromValues;
		
		/**
		 * Copy the values from one quat to another
		 *
		 * @param {quat} out the receiving quaternion
		 * @param {quat} a the source quaternion
		 * @returns {quat} out
		 * @function
		 */
		quat.copy = vec4.copy;
		
		/**
		 * Set the components of a quat to the given values
		 *
		 * @param {quat} out the receiving quaternion
		 * @param {Number} x X component
		 * @param {Number} y Y component
		 * @param {Number} z Z component
		 * @param {Number} w W component
		 * @returns {quat} out
		 * @function
		 */
		quat.set = vec4.set;
		
		/**
		 * Set a quat to the identity quaternion
		 *
		 * @param {quat} out the receiving quaternion
		 * @returns {quat} out
		 */
		quat.identity = function(out) {
		    out[0] = 0;
		    out[1] = 0;
		    out[2] = 0;
		    out[3] = 1;
		    return out;
		};
		
		/**
		 * Sets a quat from the given angle and rotation axis,
		 * then returns it.
		 *
		 * @param {quat} out the receiving quaternion
		 * @param {vec3} axis the axis around which to rotate
		 * @param {Number} rad the angle in radians
		 * @returns {quat} out
		 **/
		quat.setAxisAngle = function(out, axis, rad) {
		    rad = rad * 0.5;
		    var s = Math.sin(rad);
		    out[0] = s * axis[0];
		    out[1] = s * axis[1];
		    out[2] = s * axis[2];
		    out[3] = Math.cos(rad);
		    return out;
		};
		
		/**
		 * Gets the rotation axis and angle for a given
		 *  quaternion. If a quaternion is created with
		 *  setAxisAngle, this method will return the same
		 *  values as providied in the original parameter list
		 *  OR functionally equivalent values.
		 * Example: The quaternion formed by axis [0, 0, 1] and
		 *  angle -90 is the same as the quaternion formed by
		 *  [0, 0, 1] and 270. This method favors the latter.
		 * @param  {vec3} out_axis  Vector receiving the axis of rotation
		 * @param  {quat} q     Quaternion to be decomposed
		 * @return {Number}     Angle, in radians, of the rotation
		 */
		quat.getAxisAngle = function(out_axis, q) {
		    var rad = Math.acos(q[3]) * 2.0;
		    var s = Math.sin(rad / 2.0);
		    if (s != 0.0) {
		        out_axis[0] = q[0] / s;
		        out_axis[1] = q[1] / s;
		        out_axis[2] = q[2] / s;
		    } else {
		        // If s is zero, return any axis (no rotation - axis does not matter)
		        out_axis[0] = 1;
		        out_axis[1] = 0;
		        out_axis[2] = 0;
		    }
		    return rad;
		};
		
		/**
		 * Adds two quat's
		 *
		 * @param {quat} out the receiving quaternion
		 * @param {quat} a the first operand
		 * @param {quat} b the second operand
		 * @returns {quat} out
		 * @function
		 */
		quat.add = vec4.add;
		
		/**
		 * Multiplies two quat's
		 *
		 * @param {quat} out the receiving quaternion
		 * @param {quat} a the first operand
		 * @param {quat} b the second operand
		 * @returns {quat} out
		 */
		quat.multiply = function(out, a, b) {
		    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
		        bx = b[0], by = b[1], bz = b[2], bw = b[3];
		
		    out[0] = ax * bw + aw * bx + ay * bz - az * by;
		    out[1] = ay * bw + aw * by + az * bx - ax * bz;
		    out[2] = az * bw + aw * bz + ax * by - ay * bx;
		    out[3] = aw * bw - ax * bx - ay * by - az * bz;
		    return out;
		};
		
		/**
		 * Alias for {@link quat.multiply}
		 * @function
		 */
		quat.mul = quat.multiply;
		
		/**
		 * Scales a quat by a scalar number
		 *
		 * @param {quat} out the receiving vector
		 * @param {quat} a the vector to scale
		 * @param {Number} b amount to scale the vector by
		 * @returns {quat} out
		 * @function
		 */
		quat.scale = vec4.scale;
		
		/**
		 * Rotates a quaternion by the given angle about the X axis
		 *
		 * @param {quat} out quat receiving operation result
		 * @param {quat} a quat to rotate
		 * @param {number} rad angle (in radians) to rotate
		 * @returns {quat} out
		 */
		quat.rotateX = function (out, a, rad) {
		    rad *= 0.5; 
		
		    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
		        bx = Math.sin(rad), bw = Math.cos(rad);
		
		    out[0] = ax * bw + aw * bx;
		    out[1] = ay * bw + az * bx;
		    out[2] = az * bw - ay * bx;
		    out[3] = aw * bw - ax * bx;
		    return out;
		};
		
		/**
		 * Rotates a quaternion by the given angle about the Y axis
		 *
		 * @param {quat} out quat receiving operation result
		 * @param {quat} a quat to rotate
		 * @param {number} rad angle (in radians) to rotate
		 * @returns {quat} out
		 */
		quat.rotateY = function (out, a, rad) {
		    rad *= 0.5; 
		
		    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
		        by = Math.sin(rad), bw = Math.cos(rad);
		
		    out[0] = ax * bw - az * by;
		    out[1] = ay * bw + aw * by;
		    out[2] = az * bw + ax * by;
		    out[3] = aw * bw - ay * by;
		    return out;
		};
		
		/**
		 * Rotates a quaternion by the given angle about the Z axis
		 *
		 * @param {quat} out quat receiving operation result
		 * @param {quat} a quat to rotate
		 * @param {number} rad angle (in radians) to rotate
		 * @returns {quat} out
		 */
		quat.rotateZ = function (out, a, rad) {
		    rad *= 0.5; 
		
		    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
		        bz = Math.sin(rad), bw = Math.cos(rad);
		
		    out[0] = ax * bw + ay * bz;
		    out[1] = ay * bw - ax * bz;
		    out[2] = az * bw + aw * bz;
		    out[3] = aw * bw - az * bz;
		    return out;
		};
		
		/**
		 * Calculates the W component of a quat from the X, Y, and Z components.
		 * Assumes that quaternion is 1 unit in length.
		 * Any existing W component will be ignored.
		 *
		 * @param {quat} out the receiving quaternion
		 * @param {quat} a quat to calculate W component of
		 * @returns {quat} out
		 */
		quat.calculateW = function (out, a) {
		    var x = a[0], y = a[1], z = a[2];
		
		    out[0] = x;
		    out[1] = y;
		    out[2] = z;
		    out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
		    return out;
		};
		
		/**
		 * Calculates the dot product of two quat's
		 *
		 * @param {quat} a the first operand
		 * @param {quat} b the second operand
		 * @returns {Number} dot product of a and b
		 * @function
		 */
		quat.dot = vec4.dot;
		
		/**
		 * Performs a linear interpolation between two quat's
		 *
		 * @param {quat} out the receiving quaternion
		 * @param {quat} a the first operand
		 * @param {quat} b the second operand
		 * @param {Number} t interpolation amount between the two inputs
		 * @returns {quat} out
		 * @function
		 */
		quat.lerp = vec4.lerp;
		
		/**
		 * Performs a spherical linear interpolation between two quat
		 *
		 * @param {quat} out the receiving quaternion
		 * @param {quat} a the first operand
		 * @param {quat} b the second operand
		 * @param {Number} t interpolation amount between the two inputs
		 * @returns {quat} out
		 */
		quat.slerp = function (out, a, b, t) {
		    // benchmarks:
		    //    http://jsperf.com/quaternion-slerp-implementations
		
		    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
		        bx = b[0], by = b[1], bz = b[2], bw = b[3];
		
		    var        omega, cosom, sinom, scale0, scale1;
		
		    // calc cosine
		    cosom = ax * bx + ay * by + az * bz + aw * bw;
		    // adjust signs (if necessary)
		    if ( cosom < 0.0 ) {
		        cosom = -cosom;
		        bx = - bx;
		        by = - by;
		        bz = - bz;
		        bw = - bw;
		    }
		    // calculate coefficients
		    if ( (1.0 - cosom) > 0.000001 ) {
		        // standard case (slerp)
		        omega  = Math.acos(cosom);
		        sinom  = Math.sin(omega);
		        scale0 = Math.sin((1.0 - t) * omega) / sinom;
		        scale1 = Math.sin(t * omega) / sinom;
		    } else {        
		        // "from" and "to" quaternions are very close 
		        //  ... so we can do a linear interpolation
		        scale0 = 1.0 - t;
		        scale1 = t;
		    }
		    // calculate final values
		    out[0] = scale0 * ax + scale1 * bx;
		    out[1] = scale0 * ay + scale1 * by;
		    out[2] = scale0 * az + scale1 * bz;
		    out[3] = scale0 * aw + scale1 * bw;
		    
		    return out;
		};
		
		/**
		 * Performs a spherical linear interpolation with two control points
		 *
		 * @param {quat} out the receiving quaternion
		 * @param {quat} a the first operand
		 * @param {quat} b the second operand
		 * @param {quat} c the third operand
		 * @param {quat} d the fourth operand
		 * @param {Number} t interpolation amount
		 * @returns {quat} out
		 */
		quat.sqlerp = (function () {
		  var temp1 = quat.create();
		  var temp2 = quat.create();
		  
		  return function (out, a, b, c, d, t) {
		    quat.slerp(temp1, a, d, t);
		    quat.slerp(temp2, b, c, t);
		    quat.slerp(out, temp1, temp2, 2 * t * (1 - t));
		    
		    return out;
		  };
		}());
		
		/**
		 * Calculates the inverse of a quat
		 *
		 * @param {quat} out the receiving quaternion
		 * @param {quat} a quat to calculate inverse of
		 * @returns {quat} out
		 */
		quat.invert = function(out, a) {
		    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
		        dot = a0*a0 + a1*a1 + a2*a2 + a3*a3,
		        invDot = dot ? 1.0/dot : 0;
		    
		    // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0
		
		    out[0] = -a0*invDot;
		    out[1] = -a1*invDot;
		    out[2] = -a2*invDot;
		    out[3] = a3*invDot;
		    return out;
		};
		
		/**
		 * Calculates the conjugate of a quat
		 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
		 *
		 * @param {quat} out the receiving quaternion
		 * @param {quat} a quat to calculate conjugate of
		 * @returns {quat} out
		 */
		quat.conjugate = function (out, a) {
		    out[0] = -a[0];
		    out[1] = -a[1];
		    out[2] = -a[2];
		    out[3] = a[3];
		    return out;
		};
		
		/**
		 * Calculates the length of a quat
		 *
		 * @param {quat} a vector to calculate length of
		 * @returns {Number} length of a
		 * @function
		 */
		quat.length = vec4.length;
		
		/**
		 * Alias for {@link quat.length}
		 * @function
		 */
		quat.len = quat.length;
		
		/**
		 * Calculates the squared length of a quat
		 *
		 * @param {quat} a vector to calculate squared length of
		 * @returns {Number} squared length of a
		 * @function
		 */
		quat.squaredLength = vec4.squaredLength;
		
		/**
		 * Alias for {@link quat.squaredLength}
		 * @function
		 */
		quat.sqrLen = quat.squaredLength;
		
		/**
		 * Normalize a quat
		 *
		 * @param {quat} out the receiving quaternion
		 * @param {quat} a quaternion to normalize
		 * @returns {quat} out
		 * @function
		 */
		quat.normalize = vec4.normalize;
		
		/**
		 * Creates a quaternion from the given 3x3 rotation matrix.
		 *
		 * NOTE: The resultant quaternion is not normalized, so you should be sure
		 * to renormalize the quaternion yourself where necessary.
		 *
		 * @param {quat} out the receiving quaternion
		 * @param {mat3} m rotation matrix
		 * @returns {quat} out
		 * @function
		 */
		quat.fromMat3 = function(out, m) {
		    // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
		    // article "Quaternion Calculus and Fast Animation".
		    var fTrace = m[0] + m[4] + m[8];
		    var fRoot;
		
		    if ( fTrace > 0.0 ) {
		        // |w| > 1/2, may as well choose w > 1/2
		        fRoot = Math.sqrt(fTrace + 1.0);  // 2w
		        out[3] = 0.5 * fRoot;
		        fRoot = 0.5/fRoot;  // 1/(4w)
		        out[0] = (m[5]-m[7])*fRoot;
		        out[1] = (m[6]-m[2])*fRoot;
		        out[2] = (m[1]-m[3])*fRoot;
		    } else {
		        // |w| <= 1/2
		        var i = 0;
		        if ( m[4] > m[0] )
		          i = 1;
		        if ( m[8] > m[i*3+i] )
		          i = 2;
		        var j = (i+1)%3;
		        var k = (i+2)%3;
		        
		        fRoot = Math.sqrt(m[i*3+i]-m[j*3+j]-m[k*3+k] + 1.0);
		        out[i] = 0.5 * fRoot;
		        fRoot = 0.5 / fRoot;
		        out[3] = (m[j*3+k] - m[k*3+j]) * fRoot;
		        out[j] = (m[j*3+i] + m[i*3+j]) * fRoot;
		        out[k] = (m[k*3+i] + m[i*3+k]) * fRoot;
		    }
		    
		    return out;
		};
		
		/**
		 * Returns a string representation of a quatenion
		 *
		 * @param {quat} vec vector to represent as a string
		 * @returns {String} string representation of the vector
		 */
		quat.str = function (a) {
		    return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
		};
		
		/**
		 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
		 *
		 * @param {quat} a The first quaternion.
		 * @param {quat} b The second quaternion.
		 * @returns {Boolean} True if the vectors are equal, false otherwise.
		 */
		quat.exactEquals = vec4.exactEquals;
		
		/**
		 * Returns whether or not the quaternions have approximately the same elements in the same position.
		 *
		 * @param {quat} a The first vector.
		 * @param {quat} b The second vector.
		 * @returns {Boolean} True if the vectors are equal, false otherwise.
		 */
		quat.equals = vec4.equals;
		
		module.exports = quat;
	
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
		
		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:
		
		The above copyright notice and this permission notice shall be included in
		all copies or substantial portions of the Software.
		
		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
		THE SOFTWARE. */
		
		var glMatrix = __webpack_require__(3);
		
		/**
		 * @class 3 Dimensional Vector
		 * @name vec3
		 */
		var vec3 = {};
		
		/**
		 * Creates a new, empty vec3
		 *
		 * @returns {vec3} a new 3D vector
		 */
		vec3.create = function() {
		    var out = new glMatrix.ARRAY_TYPE(3);
		    out[0] = 0;
		    out[1] = 0;
		    out[2] = 0;
		    return out;
		};
		
		/**
		 * Creates a new vec3 initialized with values from an existing vector
		 *
		 * @param {vec3} a vector to clone
		 * @returns {vec3} a new 3D vector
		 */
		vec3.clone = function(a) {
		    var out = new glMatrix.ARRAY_TYPE(3);
		    out[0] = a[0];
		    out[1] = a[1];
		    out[2] = a[2];
		    return out;
		};
		
		/**
		 * Creates a new vec3 initialized with the given values
		 *
		 * @param {Number} x X component
		 * @param {Number} y Y component
		 * @param {Number} z Z component
		 * @returns {vec3} a new 3D vector
		 */
		vec3.fromValues = function(x, y, z) {
		    var out = new glMatrix.ARRAY_TYPE(3);
		    out[0] = x;
		    out[1] = y;
		    out[2] = z;
		    return out;
		};
		
		/**
		 * Copy the values from one vec3 to another
		 *
		 * @param {vec3} out the receiving vector
		 * @param {vec3} a the source vector
		 * @returns {vec3} out
		 */
		vec3.copy = function(out, a) {
		    out[0] = a[0];
		    out[1] = a[1];
		    out[2] = a[2];
		    return out;
		};
		
		/**
		 * Set the components of a vec3 to the given values
		 *
		 * @param {vec3} out the receiving vector
		 * @param {Number} x X component
		 * @param {Number} y Y component
		 * @param {Number} z Z component
		 * @returns {vec3} out
		 */
		vec3.set = function(out, x, y, z) {
		    out[0] = x;
		    out[1] = y;
		    out[2] = z;
		    return out;
		};
		
		/**
		 * Adds two vec3's
		 *
		 * @param {vec3} out the receiving vector
		 * @param {vec3} a the first operand
		 * @param {vec3} b the second operand
		 * @returns {vec3} out
		 */
		vec3.add = function(out, a, b) {
		    out[0] = a[0] + b[0];
		    out[1] = a[1] + b[1];
		    out[2] = a[2] + b[2];
		    return out;
		};
		
		/**
		 * Subtracts vector b from vector a
		 *
		 * @param {vec3} out the receiving vector
		 * @param {vec3} a the first operand
		 * @param {vec3} b the second operand
		 * @returns {vec3} out
		 */
		vec3.subtract = function(out, a, b) {
		    out[0] = a[0] - b[0];
		    out[1] = a[1] - b[1];
		    out[2] = a[2] - b[2];
		    return out;
		};
		
		/**
		 * Alias for {@link vec3.subtract}
		 * @function
		 */
		vec3.sub = vec3.subtract;
		
		/**
		 * Multiplies two vec3's
		 *
		 * @param {vec3} out the receiving vector
		 * @param {vec3} a the first operand
		 * @param {vec3} b the second operand
		 * @returns {vec3} out
		 */
		vec3.multiply = function(out, a, b) {
		    out[0] = a[0] * b[0];
		    out[1] = a[1] * b[1];
		    out[2] = a[2] * b[2];
		    return out;
		};
		
		/**
		 * Alias for {@link vec3.multiply}
		 * @function
		 */
		vec3.mul = vec3.multiply;
		
		/**
		 * Divides two vec3's
		 *
		 * @param {vec3} out the receiving vector
		 * @param {vec3} a the first operand
		 * @param {vec3} b the second operand
		 * @returns {vec3} out
		 */
		vec3.divide = function(out, a, b) {
		    out[0] = a[0] / b[0];
		    out[1] = a[1] / b[1];
		    out[2] = a[2] / b[2];
		    return out;
		};
		
		/**
		 * Alias for {@link vec3.divide}
		 * @function
		 */
		vec3.div = vec3.divide;
		
		/**
		 * Math.ceil the components of a vec3
		 *
		 * @param {vec3} out the receiving vector
		 * @param {vec3} a vector to ceil
		 * @returns {vec3} out
		 */
		vec3.ceil = function (out, a) {
		    out[0] = Math.ceil(a[0]);
		    out[1] = Math.ceil(a[1]);
		    out[2] = Math.ceil(a[2]);
		    return out;
		};
		
		/**
		 * Math.floor the components of a vec3
		 *
		 * @param {vec3} out the receiving vector
		 * @param {vec3} a vector to floor
		 * @returns {vec3} out
		 */
		vec3.floor = function (out, a) {
		    out[0] = Math.floor(a[0]);
		    out[1] = Math.floor(a[1]);
		    out[2] = Math.floor(a[2]);
		    return out;
		};
		
		/**
		 * Returns the minimum of two vec3's
		 *
		 * @param {vec3} out the receiving vector
		 * @param {vec3} a the first operand
		 * @param {vec3} b the second operand
		 * @returns {vec3} out
		 */
		vec3.min = function(out, a, b) {
		    out[0] = Math.min(a[0], b[0]);
		    out[1] = Math.min(a[1], b[1]);
		    out[2] = Math.min(a[2], b[2]);
		    return out;
		};
		
		/**
		 * Returns the maximum of two vec3's
		 *
		 * @param {vec3} out the receiving vector
		 * @param {vec3} a the first operand
		 * @param {vec3} b the second operand
		 * @returns {vec3} out
		 */
		vec3.max = function(out, a, b) {
		    out[0] = Math.max(a[0], b[0]);
		    out[1] = Math.max(a[1], b[1]);
		    out[2] = Math.max(a[2], b[2]);
		    return out;
		};
		
		/**
		 * Math.round the components of a vec3
		 *
		 * @param {vec3} out the receiving vector
		 * @param {vec3} a vector to round
		 * @returns {vec3} out
		 */
		vec3.round = function (out, a) {
		    out[0] = Math.round(a[0]);
		    out[1] = Math.round(a[1]);
		    out[2] = Math.round(a[2]);
		    return out;
		};
		
		/**
		 * Scales a vec3 by a scalar number
		 *
		 * @param {vec3} out the receiving vector
		 * @param {vec3} a the vector to scale
		 * @param {Number} b amount to scale the vector by
		 * @returns {vec3} out
		 */
		vec3.scale = function(out, a, b) {
		    out[0] = a[0] * b;
		    out[1] = a[1] * b;
		    out[2] = a[2] * b;
		    return out;
		};
		
		/**
		 * Adds two vec3's after scaling the second operand by a scalar value
		 *
		 * @param {vec3} out the receiving vector
		 * @param {vec3} a the first operand
		 * @param {vec3} b the second operand
		 * @param {Number} scale the amount to scale b by before adding
		 * @returns {vec3} out
		 */
		vec3.scaleAndAdd = function(out, a, b, scale) {
		    out[0] = a[0] + (b[0] * scale);
		    out[1] = a[1] + (b[1] * scale);
		    out[2] = a[2] + (b[2] * scale);
		    return out;
		};
		
		/**
		 * Calculates the euclidian distance between two vec3's
		 *
		 * @param {vec3} a the first operand
		 * @param {vec3} b the second operand
		 * @returns {Number} distance between a and b
		 */
		vec3.distance = function(a, b) {
		    var x = b[0] - a[0],
		        y = b[1] - a[1],
		        z = b[2] - a[2];
		    return Math.sqrt(x*x + y*y + z*z);
		};
		
		/**
		 * Alias for {@link vec3.distance}
		 * @function
		 */
		vec3.dist = vec3.distance;
		
		/**
		 * Calculates the squared euclidian distance between two vec3's
		 *
		 * @param {vec3} a the first operand
		 * @param {vec3} b the second operand
		 * @returns {Number} squared distance between a and b
		 */
		vec3.squaredDistance = function(a, b) {
		    var x = b[0] - a[0],
		        y = b[1] - a[1],
		        z = b[2] - a[2];
		    return x*x + y*y + z*z;
		};
		
		/**
		 * Alias for {@link vec3.squaredDistance}
		 * @function
		 */
		vec3.sqrDist = vec3.squaredDistance;
		
		/**
		 * Calculates the length of a vec3
		 *
		 * @param {vec3} a vector to calculate length of
		 * @returns {Number} length of a
		 */
		vec3.length = function (a) {
		    var x = a[0],
		        y = a[1],
		        z = a[2];
		    return Math.sqrt(x*x + y*y + z*z);
		};
		
		/**
		 * Alias for {@link vec3.length}
		 * @function
		 */
		vec3.len = vec3.length;
		
		/**
		 * Calculates the squared length of a vec3
		 *
		 * @param {vec3} a vector to calculate squared length of
		 * @returns {Number} squared length of a
		 */
		vec3.squaredLength = function (a) {
		    var x = a[0],
		        y = a[1],
		        z = a[2];
		    return x*x + y*y + z*z;
		};
		
		/**
		 * Alias for {@link vec3.squaredLength}
		 * @function
		 */
		vec3.sqrLen = vec3.squaredLength;
		
		/**
		 * Negates the components of a vec3
		 *
		 * @param {vec3} out the receiving vector
		 * @param {vec3} a vector to negate
		 * @returns {vec3} out
		 */
		vec3.negate = function(out, a) {
		    out[0] = -a[0];
		    out[1] = -a[1];
		    out[2] = -a[2];
		    return out;
		};
		
		/**
		 * Returns the inverse of the components of a vec3
		 *
		 * @param {vec3} out the receiving vector
		 * @param {vec3} a vector to invert
		 * @returns {vec3} out
		 */
		vec3.inverse = function(out, a) {
		  out[0] = 1.0 / a[0];
		  out[1] = 1.0 / a[1];
		  out[2] = 1.0 / a[2];
		  return out;
		};
		
		/**
		 * Normalize a vec3
		 *
		 * @param {vec3} out the receiving vector
		 * @param {vec3} a vector to normalize
		 * @returns {vec3} out
		 */
		vec3.normalize = function(out, a) {
		    var x = a[0],
		        y = a[1],
		        z = a[2];
		    var len = x*x + y*y + z*z;
		    if (len > 0) {
		        //TODO: evaluate use of glm_invsqrt here?
		        len = 1 / Math.sqrt(len);
		        out[0] = a[0] * len;
		        out[1] = a[1] * len;
		        out[2] = a[2] * len;
		    }
		    return out;
		};
		
		/**
		 * Calculates the dot product of two vec3's
		 *
		 * @param {vec3} a the first operand
		 * @param {vec3} b the second operand
		 * @returns {Number} dot product of a and b
		 */
		vec3.dot = function (a, b) {
		    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
		};
		
		/**
		 * Computes the cross product of two vec3's
		 *
		 * @param {vec3} out the receiving vector
		 * @param {vec3} a the first operand
		 * @param {vec3} b the second operand
		 * @returns {vec3} out
		 */
		vec3.cross = function(out, a, b) {
		    var ax = a[0], ay = a[1], az = a[2],
		        bx = b[0], by = b[1], bz = b[2];
		
		    out[0] = ay * bz - az * by;
		    out[1] = az * bx - ax * bz;
		    out[2] = ax * by - ay * bx;
		    return out;
		};
		
		/**
		 * Performs a linear interpolation between two vec3's
		 *
		 * @param {vec3} out the receiving vector
		 * @param {vec3} a the first operand
		 * @param {vec3} b the second operand
		 * @param {Number} t interpolation amount between the two inputs
		 * @returns {vec3} out
		 */
		vec3.lerp = function (out, a, b, t) {
		    var ax = a[0],
		        ay = a[1],
		        az = a[2];
		    out[0] = ax + t * (b[0] - ax);
		    out[1] = ay + t * (b[1] - ay);
		    out[2] = az + t * (b[2] - az);
		    return out;
		};
		
		/**
		 * Performs a hermite interpolation with two control points
		 *
		 * @param {vec3} out the receiving vector
		 * @param {vec3} a the first operand
		 * @param {vec3} b the second operand
		 * @param {vec3} c the third operand
		 * @param {vec3} d the fourth operand
		 * @param {Number} t interpolation amount between the two inputs
		 * @returns {vec3} out
		 */
		vec3.hermite = function (out, a, b, c, d, t) {
		  var factorTimes2 = t * t,
		      factor1 = factorTimes2 * (2 * t - 3) + 1,
		      factor2 = factorTimes2 * (t - 2) + t,
		      factor3 = factorTimes2 * (t - 1),
		      factor4 = factorTimes2 * (3 - 2 * t);
		  
		  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
		  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
		  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
		  
		  return out;
		};
		
		/**
		 * Performs a bezier interpolation with two control points
		 *
		 * @param {vec3} out the receiving vector
		 * @param {vec3} a the first operand
		 * @param {vec3} b the second operand
		 * @param {vec3} c the third operand
		 * @param {vec3} d the fourth operand
		 * @param {Number} t interpolation amount between the two inputs
		 * @returns {vec3} out
		 */
		vec3.bezier = function (out, a, b, c, d, t) {
		  var inverseFactor = 1 - t,
		      inverseFactorTimesTwo = inverseFactor * inverseFactor,
		      factorTimes2 = t * t,
		      factor1 = inverseFactorTimesTwo * inverseFactor,
		      factor2 = 3 * t * inverseFactorTimesTwo,
		      factor3 = 3 * factorTimes2 * inverseFactor,
		      factor4 = factorTimes2 * t;
		  
		  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
		  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
		  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
		  
		  return out;
		};
		
		/**
		 * Generates a random vector with the given scale
		 *
		 * @param {vec3} out the receiving vector
		 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
		 * @returns {vec3} out
		 */
		vec3.random = function (out, scale) {
		    scale = scale || 1.0;
		
		    var r = glMatrix.RANDOM() * 2.0 * Math.PI;
		    var z = (glMatrix.RANDOM() * 2.0) - 1.0;
		    var zScale = Math.sqrt(1.0-z*z) * scale;
		
		    out[0] = Math.cos(r) * zScale;
		    out[1] = Math.sin(r) * zScale;
		    out[2] = z * scale;
		    return out;
		};
		
		/**
		 * Transforms the vec3 with a mat4.
		 * 4th vector component is implicitly '1'
		 *
		 * @param {vec3} out the receiving vector
		 * @param {vec3} a the vector to transform
		 * @param {mat4} m matrix to transform with
		 * @returns {vec3} out
		 */
		vec3.transformMat4 = function(out, a, m) {
		    var x = a[0], y = a[1], z = a[2],
		        w = m[3] * x + m[7] * y + m[11] * z + m[15];
		    w = w || 1.0;
		    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
		    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
		    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
		    return out;
		};
		
		/**
		 * Transforms the vec3 with a mat3.
		 *
		 * @param {vec3} out the receiving vector
		 * @param {vec3} a the vector to transform
		 * @param {mat4} m the 3x3 matrix to transform with
		 * @returns {vec3} out
		 */
		vec3.transformMat3 = function(out, a, m) {
		    var x = a[0], y = a[1], z = a[2];
		    out[0] = x * m[0] + y * m[3] + z * m[6];
		    out[1] = x * m[1] + y * m[4] + z * m[7];
		    out[2] = x * m[2] + y * m[5] + z * m[8];
		    return out;
		};
		
		/**
		 * Transforms the vec3 with a quat
		 *
		 * @param {vec3} out the receiving vector
		 * @param {vec3} a the vector to transform
		 * @param {quat} q quaternion to transform with
		 * @returns {vec3} out
		 */
		vec3.transformQuat = function(out, a, q) {
		    // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations
		
		    var x = a[0], y = a[1], z = a[2],
		        qx = q[0], qy = q[1], qz = q[2], qw = q[3],
		
		        // calculate quat * vec
		        ix = qw * x + qy * z - qz * y,
		        iy = qw * y + qz * x - qx * z,
		        iz = qw * z + qx * y - qy * x,
		        iw = -qx * x - qy * y - qz * z;
		
		    // calculate result * inverse quat
		    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
		    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
		    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
		    return out;
		};
		
		/**
		 * Rotate a 3D vector around the x-axis
		 * @param {vec3} out The receiving vec3
		 * @param {vec3} a The vec3 point to rotate
		 * @param {vec3} b The origin of the rotation
		 * @param {Number} c The angle of rotation
		 * @returns {vec3} out
		 */
		vec3.rotateX = function(out, a, b, c){
		   var p = [], r=[];
			  //Translate point to the origin
			  p[0] = a[0] - b[0];
			  p[1] = a[1] - b[1];
		  	p[2] = a[2] - b[2];
		
			  //perform rotation
			  r[0] = p[0];
			  r[1] = p[1]*Math.cos(c) - p[2]*Math.sin(c);
			  r[2] = p[1]*Math.sin(c) + p[2]*Math.cos(c);
		
			  //translate to correct position
			  out[0] = r[0] + b[0];
			  out[1] = r[1] + b[1];
			  out[2] = r[2] + b[2];
		
		  	return out;
		};
		
		/**
		 * Rotate a 3D vector around the y-axis
		 * @param {vec3} out The receiving vec3
		 * @param {vec3} a The vec3 point to rotate
		 * @param {vec3} b The origin of the rotation
		 * @param {Number} c The angle of rotation
		 * @returns {vec3} out
		 */
		vec3.rotateY = function(out, a, b, c){
		  	var p = [], r=[];
		  	//Translate point to the origin
		  	p[0] = a[0] - b[0];
		  	p[1] = a[1] - b[1];
		  	p[2] = a[2] - b[2];
		  
		  	//perform rotation
		  	r[0] = p[2]*Math.sin(c) + p[0]*Math.cos(c);
		  	r[1] = p[1];
		  	r[2] = p[2]*Math.cos(c) - p[0]*Math.sin(c);
		  
		  	//translate to correct position
		  	out[0] = r[0] + b[0];
		  	out[1] = r[1] + b[1];
		  	out[2] = r[2] + b[2];
		  
		  	return out;
		};
		
		/**
		 * Rotate a 3D vector around the z-axis
		 * @param {vec3} out The receiving vec3
		 * @param {vec3} a The vec3 point to rotate
		 * @param {vec3} b The origin of the rotation
		 * @param {Number} c The angle of rotation
		 * @returns {vec3} out
		 */
		vec3.rotateZ = function(out, a, b, c){
		  	var p = [], r=[];
		  	//Translate point to the origin
		  	p[0] = a[0] - b[0];
		  	p[1] = a[1] - b[1];
		  	p[2] = a[2] - b[2];
		  
		  	//perform rotation
		  	r[0] = p[0]*Math.cos(c) - p[1]*Math.sin(c);
		  	r[1] = p[0]*Math.sin(c) + p[1]*Math.cos(c);
		  	r[2] = p[2];
		  
		  	//translate to correct position
		  	out[0] = r[0] + b[0];
		  	out[1] = r[1] + b[1];
		  	out[2] = r[2] + b[2];
		  
		  	return out;
		};
		
		/**
		 * Perform some operation over an array of vec3s.
		 *
		 * @param {Array} a the array of vectors to iterate over
		 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
		 * @param {Number} offset Number of elements to skip at the beginning of the array
		 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
		 * @param {Function} fn Function to call for each vector in the array
		 * @param {Object} [arg] additional argument to pass to fn
		 * @returns {Array} a
		 * @function
		 */
		vec3.forEach = (function() {
		    var vec = vec3.create();
		
		    return function(a, stride, offset, count, fn, arg) {
		        var i, l;
		        if(!stride) {
		            stride = 3;
		        }
		
		        if(!offset) {
		            offset = 0;
		        }
		        
		        if(count) {
		            l = Math.min((count * stride) + offset, a.length);
		        } else {
		            l = a.length;
		        }
		
		        for(i = offset; i < l; i += stride) {
		            vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2];
		            fn(vec, vec, arg);
		            a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2];
		        }
		        
		        return a;
		    };
		})();
		
		/**
		 * Get the angle between two 3D vectors
		 * @param {vec3} a The first operand
		 * @param {vec3} b The second operand
		 * @returns {Number} The angle in radians
		 */
		vec3.angle = function(a, b) {
		   
		    var tempA = vec3.fromValues(a[0], a[1], a[2]);
		    var tempB = vec3.fromValues(b[0], b[1], b[2]);
		 
		    vec3.normalize(tempA, tempA);
		    vec3.normalize(tempB, tempB);
		 
		    var cosine = vec3.dot(tempA, tempB);
		
		    if(cosine > 1.0){
		        return 0;
		    } else {
		        return Math.acos(cosine);
		    }     
		};
		
		/**
		 * Returns a string representation of a vector
		 *
		 * @param {vec3} vec vector to represent as a string
		 * @returns {String} string representation of the vector
		 */
		vec3.str = function (a) {
		    return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
		};
		
		/**
		 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
		 *
		 * @param {vec3} a The first vector.
		 * @param {vec3} b The second vector.
		 * @returns {Boolean} True if the vectors are equal, false otherwise.
		 */
		vec3.exactEquals = function (a, b) {
		    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
		};
		
		/**
		 * Returns whether or not the vectors have approximately the same elements in the same position.
		 *
		 * @param {vec3} a The first vector.
		 * @param {vec3} b The second vector.
		 * @returns {Boolean} True if the vectors are equal, false otherwise.
		 */
		vec3.equals = function (a, b) {
		    var a0 = a[0], a1 = a[1], a2 = a[2];
		    var b0 = b[0], b1 = b[1], b2 = b[2];
		    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
		            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
		            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)));
		};
		
		module.exports = vec3;
	
	
	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
		
		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:
		
		The above copyright notice and this permission notice shall be included in
		all copies or substantial portions of the Software.
		
		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
		THE SOFTWARE. */
		
		var glMatrix = __webpack_require__(3);
		
		/**
		 * @class 4 Dimensional Vector
		 * @name vec4
		 */
		var vec4 = {};
		
		/**
		 * Creates a new, empty vec4
		 *
		 * @returns {vec4} a new 4D vector
		 */
		vec4.create = function() {
		    var out = new glMatrix.ARRAY_TYPE(4);
		    out[0] = 0;
		    out[1] = 0;
		    out[2] = 0;
		    out[3] = 0;
		    return out;
		};
		
		/**
		 * Creates a new vec4 initialized with values from an existing vector
		 *
		 * @param {vec4} a vector to clone
		 * @returns {vec4} a new 4D vector
		 */
		vec4.clone = function(a) {
		    var out = new glMatrix.ARRAY_TYPE(4);
		    out[0] = a[0];
		    out[1] = a[1];
		    out[2] = a[2];
		    out[3] = a[3];
		    return out;
		};
		
		/**
		 * Creates a new vec4 initialized with the given values
		 *
		 * @param {Number} x X component
		 * @param {Number} y Y component
		 * @param {Number} z Z component
		 * @param {Number} w W component
		 * @returns {vec4} a new 4D vector
		 */
		vec4.fromValues = function(x, y, z, w) {
		    var out = new glMatrix.ARRAY_TYPE(4);
		    out[0] = x;
		    out[1] = y;
		    out[2] = z;
		    out[3] = w;
		    return out;
		};
		
		/**
		 * Copy the values from one vec4 to another
		 *
		 * @param {vec4} out the receiving vector
		 * @param {vec4} a the source vector
		 * @returns {vec4} out
		 */
		vec4.copy = function(out, a) {
		    out[0] = a[0];
		    out[1] = a[1];
		    out[2] = a[2];
		    out[3] = a[3];
		    return out;
		};
		
		/**
		 * Set the components of a vec4 to the given values
		 *
		 * @param {vec4} out the receiving vector
		 * @param {Number} x X component
		 * @param {Number} y Y component
		 * @param {Number} z Z component
		 * @param {Number} w W component
		 * @returns {vec4} out
		 */
		vec4.set = function(out, x, y, z, w) {
		    out[0] = x;
		    out[1] = y;
		    out[2] = z;
		    out[3] = w;
		    return out;
		};
		
		/**
		 * Adds two vec4's
		 *
		 * @param {vec4} out the receiving vector
		 * @param {vec4} a the first operand
		 * @param {vec4} b the second operand
		 * @returns {vec4} out
		 */
		vec4.add = function(out, a, b) {
		    out[0] = a[0] + b[0];
		    out[1] = a[1] + b[1];
		    out[2] = a[2] + b[2];
		    out[3] = a[3] + b[3];
		    return out;
		};
		
		/**
		 * Subtracts vector b from vector a
		 *
		 * @param {vec4} out the receiving vector
		 * @param {vec4} a the first operand
		 * @param {vec4} b the second operand
		 * @returns {vec4} out
		 */
		vec4.subtract = function(out, a, b) {
		    out[0] = a[0] - b[0];
		    out[1] = a[1] - b[1];
		    out[2] = a[2] - b[2];
		    out[3] = a[3] - b[3];
		    return out;
		};
		
		/**
		 * Alias for {@link vec4.subtract}
		 * @function
		 */
		vec4.sub = vec4.subtract;
		
		/**
		 * Multiplies two vec4's
		 *
		 * @param {vec4} out the receiving vector
		 * @param {vec4} a the first operand
		 * @param {vec4} b the second operand
		 * @returns {vec4} out
		 */
		vec4.multiply = function(out, a, b) {
		    out[0] = a[0] * b[0];
		    out[1] = a[1] * b[1];
		    out[2] = a[2] * b[2];
		    out[3] = a[3] * b[3];
		    return out;
		};
		
		/**
		 * Alias for {@link vec4.multiply}
		 * @function
		 */
		vec4.mul = vec4.multiply;
		
		/**
		 * Divides two vec4's
		 *
		 * @param {vec4} out the receiving vector
		 * @param {vec4} a the first operand
		 * @param {vec4} b the second operand
		 * @returns {vec4} out
		 */
		vec4.divide = function(out, a, b) {
		    out[0] = a[0] / b[0];
		    out[1] = a[1] / b[1];
		    out[2] = a[2] / b[2];
		    out[3] = a[3] / b[3];
		    return out;
		};
		
		/**
		 * Alias for {@link vec4.divide}
		 * @function
		 */
		vec4.div = vec4.divide;
		
		/**
		 * Math.ceil the components of a vec4
		 *
		 * @param {vec4} out the receiving vector
		 * @param {vec4} a vector to ceil
		 * @returns {vec4} out
		 */
		vec4.ceil = function (out, a) {
		    out[0] = Math.ceil(a[0]);
		    out[1] = Math.ceil(a[1]);
		    out[2] = Math.ceil(a[2]);
		    out[3] = Math.ceil(a[3]);
		    return out;
		};
		
		/**
		 * Math.floor the components of a vec4
		 *
		 * @param {vec4} out the receiving vector
		 * @param {vec4} a vector to floor
		 * @returns {vec4} out
		 */
		vec4.floor = function (out, a) {
		    out[0] = Math.floor(a[0]);
		    out[1] = Math.floor(a[1]);
		    out[2] = Math.floor(a[2]);
		    out[3] = Math.floor(a[3]);
		    return out;
		};
		
		/**
		 * Returns the minimum of two vec4's
		 *
		 * @param {vec4} out the receiving vector
		 * @param {vec4} a the first operand
		 * @param {vec4} b the second operand
		 * @returns {vec4} out
		 */
		vec4.min = function(out, a, b) {
		    out[0] = Math.min(a[0], b[0]);
		    out[1] = Math.min(a[1], b[1]);
		    out[2] = Math.min(a[2], b[2]);
		    out[3] = Math.min(a[3], b[3]);
		    return out;
		};
		
		/**
		 * Returns the maximum of two vec4's
		 *
		 * @param {vec4} out the receiving vector
		 * @param {vec4} a the first operand
		 * @param {vec4} b the second operand
		 * @returns {vec4} out
		 */
		vec4.max = function(out, a, b) {
		    out[0] = Math.max(a[0], b[0]);
		    out[1] = Math.max(a[1], b[1]);
		    out[2] = Math.max(a[2], b[2]);
		    out[3] = Math.max(a[3], b[3]);
		    return out;
		};
		
		/**
		 * Math.round the components of a vec4
		 *
		 * @param {vec4} out the receiving vector
		 * @param {vec4} a vector to round
		 * @returns {vec4} out
		 */
		vec4.round = function (out, a) {
		    out[0] = Math.round(a[0]);
		    out[1] = Math.round(a[1]);
		    out[2] = Math.round(a[2]);
		    out[3] = Math.round(a[3]);
		    return out;
		};
		
		/**
		 * Scales a vec4 by a scalar number
		 *
		 * @param {vec4} out the receiving vector
		 * @param {vec4} a the vector to scale
		 * @param {Number} b amount to scale the vector by
		 * @returns {vec4} out
		 */
		vec4.scale = function(out, a, b) {
		    out[0] = a[0] * b;
		    out[1] = a[1] * b;
		    out[2] = a[2] * b;
		    out[3] = a[3] * b;
		    return out;
		};
		
		/**
		 * Adds two vec4's after scaling the second operand by a scalar value
		 *
		 * @param {vec4} out the receiving vector
		 * @param {vec4} a the first operand
		 * @param {vec4} b the second operand
		 * @param {Number} scale the amount to scale b by before adding
		 * @returns {vec4} out
		 */
		vec4.scaleAndAdd = function(out, a, b, scale) {
		    out[0] = a[0] + (b[0] * scale);
		    out[1] = a[1] + (b[1] * scale);
		    out[2] = a[2] + (b[2] * scale);
		    out[3] = a[3] + (b[3] * scale);
		    return out;
		};
		
		/**
		 * Calculates the euclidian distance between two vec4's
		 *
		 * @param {vec4} a the first operand
		 * @param {vec4} b the second operand
		 * @returns {Number} distance between a and b
		 */
		vec4.distance = function(a, b) {
		    var x = b[0] - a[0],
		        y = b[1] - a[1],
		        z = b[2] - a[2],
		        w = b[3] - a[3];
		    return Math.sqrt(x*x + y*y + z*z + w*w);
		};
		
		/**
		 * Alias for {@link vec4.distance}
		 * @function
		 */
		vec4.dist = vec4.distance;
		
		/**
		 * Calculates the squared euclidian distance between two vec4's
		 *
		 * @param {vec4} a the first operand
		 * @param {vec4} b the second operand
		 * @returns {Number} squared distance between a and b
		 */
		vec4.squaredDistance = function(a, b) {
		    var x = b[0] - a[0],
		        y = b[1] - a[1],
		        z = b[2] - a[2],
		        w = b[3] - a[3];
		    return x*x + y*y + z*z + w*w;
		};
		
		/**
		 * Alias for {@link vec4.squaredDistance}
		 * @function
		 */
		vec4.sqrDist = vec4.squaredDistance;
		
		/**
		 * Calculates the length of a vec4
		 *
		 * @param {vec4} a vector to calculate length of
		 * @returns {Number} length of a
		 */
		vec4.length = function (a) {
		    var x = a[0],
		        y = a[1],
		        z = a[2],
		        w = a[3];
		    return Math.sqrt(x*x + y*y + z*z + w*w);
		};
		
		/**
		 * Alias for {@link vec4.length}
		 * @function
		 */
		vec4.len = vec4.length;
		
		/**
		 * Calculates the squared length of a vec4
		 *
		 * @param {vec4} a vector to calculate squared length of
		 * @returns {Number} squared length of a
		 */
		vec4.squaredLength = function (a) {
		    var x = a[0],
		        y = a[1],
		        z = a[2],
		        w = a[3];
		    return x*x + y*y + z*z + w*w;
		};
		
		/**
		 * Alias for {@link vec4.squaredLength}
		 * @function
		 */
		vec4.sqrLen = vec4.squaredLength;
		
		/**
		 * Negates the components of a vec4
		 *
		 * @param {vec4} out the receiving vector
		 * @param {vec4} a vector to negate
		 * @returns {vec4} out
		 */
		vec4.negate = function(out, a) {
		    out[0] = -a[0];
		    out[1] = -a[1];
		    out[2] = -a[2];
		    out[3] = -a[3];
		    return out;
		};
		
		/**
		 * Returns the inverse of the components of a vec4
		 *
		 * @param {vec4} out the receiving vector
		 * @param {vec4} a vector to invert
		 * @returns {vec4} out
		 */
		vec4.inverse = function(out, a) {
		  out[0] = 1.0 / a[0];
		  out[1] = 1.0 / a[1];
		  out[2] = 1.0 / a[2];
		  out[3] = 1.0 / a[3];
		  return out;
		};
		
		/**
		 * Normalize a vec4
		 *
		 * @param {vec4} out the receiving vector
		 * @param {vec4} a vector to normalize
		 * @returns {vec4} out
		 */
		vec4.normalize = function(out, a) {
		    var x = a[0],
		        y = a[1],
		        z = a[2],
		        w = a[3];
		    var len = x*x + y*y + z*z + w*w;
		    if (len > 0) {
		        len = 1 / Math.sqrt(len);
		        out[0] = x * len;
		        out[1] = y * len;
		        out[2] = z * len;
		        out[3] = w * len;
		    }
		    return out;
		};
		
		/**
		 * Calculates the dot product of two vec4's
		 *
		 * @param {vec4} a the first operand
		 * @param {vec4} b the second operand
		 * @returns {Number} dot product of a and b
		 */
		vec4.dot = function (a, b) {
		    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
		};
		
		/**
		 * Performs a linear interpolation between two vec4's
		 *
		 * @param {vec4} out the receiving vector
		 * @param {vec4} a the first operand
		 * @param {vec4} b the second operand
		 * @param {Number} t interpolation amount between the two inputs
		 * @returns {vec4} out
		 */
		vec4.lerp = function (out, a, b, t) {
		    var ax = a[0],
		        ay = a[1],
		        az = a[2],
		        aw = a[3];
		    out[0] = ax + t * (b[0] - ax);
		    out[1] = ay + t * (b[1] - ay);
		    out[2] = az + t * (b[2] - az);
		    out[3] = aw + t * (b[3] - aw);
		    return out;
		};
		
		/**
		 * Generates a random vector with the given scale
		 *
		 * @param {vec4} out the receiving vector
		 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
		 * @returns {vec4} out
		 */
		vec4.random = function (out, scale) {
		    scale = scale || 1.0;
		
		    //TODO: This is a pretty awful way of doing this. Find something better.
		    out[0] = glMatrix.RANDOM();
		    out[1] = glMatrix.RANDOM();
		    out[2] = glMatrix.RANDOM();
		    out[3] = glMatrix.RANDOM();
		    vec4.normalize(out, out);
		    vec4.scale(out, out, scale);
		    return out;
		};
		
		/**
		 * Transforms the vec4 with a mat4.
		 *
		 * @param {vec4} out the receiving vector
		 * @param {vec4} a the vector to transform
		 * @param {mat4} m matrix to transform with
		 * @returns {vec4} out
		 */
		vec4.transformMat4 = function(out, a, m) {
		    var x = a[0], y = a[1], z = a[2], w = a[3];
		    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
		    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
		    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
		    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
		    return out;
		};
		
		/**
		 * Transforms the vec4 with a quat
		 *
		 * @param {vec4} out the receiving vector
		 * @param {vec4} a the vector to transform
		 * @param {quat} q quaternion to transform with
		 * @returns {vec4} out
		 */
		vec4.transformQuat = function(out, a, q) {
		    var x = a[0], y = a[1], z = a[2],
		        qx = q[0], qy = q[1], qz = q[2], qw = q[3],
		
		        // calculate quat * vec
		        ix = qw * x + qy * z - qz * y,
		        iy = qw * y + qz * x - qx * z,
		        iz = qw * z + qx * y - qy * x,
		        iw = -qx * x - qy * y - qz * z;
		
		    // calculate result * inverse quat
		    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
		    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
		    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
		    out[3] = a[3];
		    return out;
		};
		
		/**
		 * Perform some operation over an array of vec4s.
		 *
		 * @param {Array} a the array of vectors to iterate over
		 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
		 * @param {Number} offset Number of elements to skip at the beginning of the array
		 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
		 * @param {Function} fn Function to call for each vector in the array
		 * @param {Object} [arg] additional argument to pass to fn
		 * @returns {Array} a
		 * @function
		 */
		vec4.forEach = (function() {
		    var vec = vec4.create();
		
		    return function(a, stride, offset, count, fn, arg) {
		        var i, l;
		        if(!stride) {
		            stride = 4;
		        }
		
		        if(!offset) {
		            offset = 0;
		        }
		        
		        if(count) {
		            l = Math.min((count * stride) + offset, a.length);
		        } else {
		            l = a.length;
		        }
		
		        for(i = offset; i < l; i += stride) {
		            vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2]; vec[3] = a[i+3];
		            fn(vec, vec, arg);
		            a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2]; a[i+3] = vec[3];
		        }
		        
		        return a;
		    };
		})();
		
		/**
		 * Returns a string representation of a vector
		 *
		 * @param {vec4} vec vector to represent as a string
		 * @returns {String} string representation of the vector
		 */
		vec4.str = function (a) {
		    return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
		};
		
		/**
		 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
		 *
		 * @param {vec4} a The first vector.
		 * @param {vec4} b The second vector.
		 * @returns {Boolean} True if the vectors are equal, false otherwise.
		 */
		vec4.exactEquals = function (a, b) {
		    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
		};
		
		/**
		 * Returns whether or not the vectors have approximately the same elements in the same position.
		 *
		 * @param {vec4} a The first vector.
		 * @param {vec4} b The second vector.
		 * @returns {Boolean} True if the vectors are equal, false otherwise.
		 */
		vec4.equals = function (a, b) {
		    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
		    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
		    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
		            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
		            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
		            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)));
		};
		
		module.exports = vec4;
	
	
	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
		
		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:
		
		The above copyright notice and this permission notice shall be included in
		all copies or substantial portions of the Software.
		
		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
		THE SOFTWARE. */
		
		var glMatrix = __webpack_require__(3);
		
		/**
		 * @class 2 Dimensional Vector
		 * @name vec2
		 */
		var vec2 = {};
		
		/**
		 * Creates a new, empty vec2
		 *
		 * @returns {vec2} a new 2D vector
		 */
		vec2.create = function() {
		    var out = new glMatrix.ARRAY_TYPE(2);
		    out[0] = 0;
		    out[1] = 0;
		    return out;
		};
		
		/**
		 * Creates a new vec2 initialized with values from an existing vector
		 *
		 * @param {vec2} a vector to clone
		 * @returns {vec2} a new 2D vector
		 */
		vec2.clone = function(a) {
		    var out = new glMatrix.ARRAY_TYPE(2);
		    out[0] = a[0];
		    out[1] = a[1];
		    return out;
		};
		
		/**
		 * Creates a new vec2 initialized with the given values
		 *
		 * @param {Number} x X component
		 * @param {Number} y Y component
		 * @returns {vec2} a new 2D vector
		 */
		vec2.fromValues = function(x, y) {
		    var out = new glMatrix.ARRAY_TYPE(2);
		    out[0] = x;
		    out[1] = y;
		    return out;
		};
		
		/**
		 * Copy the values from one vec2 to another
		 *
		 * @param {vec2} out the receiving vector
		 * @param {vec2} a the source vector
		 * @returns {vec2} out
		 */
		vec2.copy = function(out, a) {
		    out[0] = a[0];
		    out[1] = a[1];
		    return out;
		};
		
		/**
		 * Set the components of a vec2 to the given values
		 *
		 * @param {vec2} out the receiving vector
		 * @param {Number} x X component
		 * @param {Number} y Y component
		 * @returns {vec2} out
		 */
		vec2.set = function(out, x, y) {
		    out[0] = x;
		    out[1] = y;
		    return out;
		};
		
		/**
		 * Adds two vec2's
		 *
		 * @param {vec2} out the receiving vector
		 * @param {vec2} a the first operand
		 * @param {vec2} b the second operand
		 * @returns {vec2} out
		 */
		vec2.add = function(out, a, b) {
		    out[0] = a[0] + b[0];
		    out[1] = a[1] + b[1];
		    return out;
		};
		
		/**
		 * Subtracts vector b from vector a
		 *
		 * @param {vec2} out the receiving vector
		 * @param {vec2} a the first operand
		 * @param {vec2} b the second operand
		 * @returns {vec2} out
		 */
		vec2.subtract = function(out, a, b) {
		    out[0] = a[0] - b[0];
		    out[1] = a[1] - b[1];
		    return out;
		};
		
		/**
		 * Alias for {@link vec2.subtract}
		 * @function
		 */
		vec2.sub = vec2.subtract;
		
		/**
		 * Multiplies two vec2's
		 *
		 * @param {vec2} out the receiving vector
		 * @param {vec2} a the first operand
		 * @param {vec2} b the second operand
		 * @returns {vec2} out
		 */
		vec2.multiply = function(out, a, b) {
		    out[0] = a[0] * b[0];
		    out[1] = a[1] * b[1];
		    return out;
		};
		
		/**
		 * Alias for {@link vec2.multiply}
		 * @function
		 */
		vec2.mul = vec2.multiply;
		
		/**
		 * Divides two vec2's
		 *
		 * @param {vec2} out the receiving vector
		 * @param {vec2} a the first operand
		 * @param {vec2} b the second operand
		 * @returns {vec2} out
		 */
		vec2.divide = function(out, a, b) {
		    out[0] = a[0] / b[0];
		    out[1] = a[1] / b[1];
		    return out;
		};
		
		/**
		 * Alias for {@link vec2.divide}
		 * @function
		 */
		vec2.div = vec2.divide;
		
		/**
		 * Math.ceil the components of a vec2
		 *
		 * @param {vec2} out the receiving vector
		 * @param {vec2} a vector to ceil
		 * @returns {vec2} out
		 */
		vec2.ceil = function (out, a) {
		    out[0] = Math.ceil(a[0]);
		    out[1] = Math.ceil(a[1]);
		    return out;
		};
		
		/**
		 * Math.floor the components of a vec2
		 *
		 * @param {vec2} out the receiving vector
		 * @param {vec2} a vector to floor
		 * @returns {vec2} out
		 */
		vec2.floor = function (out, a) {
		    out[0] = Math.floor(a[0]);
		    out[1] = Math.floor(a[1]);
		    return out;
		};
		
		/**
		 * Returns the minimum of two vec2's
		 *
		 * @param {vec2} out the receiving vector
		 * @param {vec2} a the first operand
		 * @param {vec2} b the second operand
		 * @returns {vec2} out
		 */
		vec2.min = function(out, a, b) {
		    out[0] = Math.min(a[0], b[0]);
		    out[1] = Math.min(a[1], b[1]);
		    return out;
		};
		
		/**
		 * Returns the maximum of two vec2's
		 *
		 * @param {vec2} out the receiving vector
		 * @param {vec2} a the first operand
		 * @param {vec2} b the second operand
		 * @returns {vec2} out
		 */
		vec2.max = function(out, a, b) {
		    out[0] = Math.max(a[0], b[0]);
		    out[1] = Math.max(a[1], b[1]);
		    return out;
		};
		
		/**
		 * Math.round the components of a vec2
		 *
		 * @param {vec2} out the receiving vector
		 * @param {vec2} a vector to round
		 * @returns {vec2} out
		 */
		vec2.round = function (out, a) {
		    out[0] = Math.round(a[0]);
		    out[1] = Math.round(a[1]);
		    return out;
		};
		
		/**
		 * Scales a vec2 by a scalar number
		 *
		 * @param {vec2} out the receiving vector
		 * @param {vec2} a the vector to scale
		 * @param {Number} b amount to scale the vector by
		 * @returns {vec2} out
		 */
		vec2.scale = function(out, a, b) {
		    out[0] = a[0] * b;
		    out[1] = a[1] * b;
		    return out;
		};
		
		/**
		 * Adds two vec2's after scaling the second operand by a scalar value
		 *
		 * @param {vec2} out the receiving vector
		 * @param {vec2} a the first operand
		 * @param {vec2} b the second operand
		 * @param {Number} scale the amount to scale b by before adding
		 * @returns {vec2} out
		 */
		vec2.scaleAndAdd = function(out, a, b, scale) {
		    out[0] = a[0] + (b[0] * scale);
		    out[1] = a[1] + (b[1] * scale);
		    return out;
		};
		
		/**
		 * Calculates the euclidian distance between two vec2's
		 *
		 * @param {vec2} a the first operand
		 * @param {vec2} b the second operand
		 * @returns {Number} distance between a and b
		 */
		vec2.distance = function(a, b) {
		    var x = b[0] - a[0],
		        y = b[1] - a[1];
		    return Math.sqrt(x*x + y*y);
		};
		
		/**
		 * Alias for {@link vec2.distance}
		 * @function
		 */
		vec2.dist = vec2.distance;
		
		/**
		 * Calculates the squared euclidian distance between two vec2's
		 *
		 * @param {vec2} a the first operand
		 * @param {vec2} b the second operand
		 * @returns {Number} squared distance between a and b
		 */
		vec2.squaredDistance = function(a, b) {
		    var x = b[0] - a[0],
		        y = b[1] - a[1];
		    return x*x + y*y;
		};
		
		/**
		 * Alias for {@link vec2.squaredDistance}
		 * @function
		 */
		vec2.sqrDist = vec2.squaredDistance;
		
		/**
		 * Calculates the length of a vec2
		 *
		 * @param {vec2} a vector to calculate length of
		 * @returns {Number} length of a
		 */
		vec2.length = function (a) {
		    var x = a[0],
		        y = a[1];
		    return Math.sqrt(x*x + y*y);
		};
		
		/**
		 * Alias for {@link vec2.length}
		 * @function
		 */
		vec2.len = vec2.length;
		
		/**
		 * Calculates the squared length of a vec2
		 *
		 * @param {vec2} a vector to calculate squared length of
		 * @returns {Number} squared length of a
		 */
		vec2.squaredLength = function (a) {
		    var x = a[0],
		        y = a[1];
		    return x*x + y*y;
		};
		
		/**
		 * Alias for {@link vec2.squaredLength}
		 * @function
		 */
		vec2.sqrLen = vec2.squaredLength;
		
		/**
		 * Negates the components of a vec2
		 *
		 * @param {vec2} out the receiving vector
		 * @param {vec2} a vector to negate
		 * @returns {vec2} out
		 */
		vec2.negate = function(out, a) {
		    out[0] = -a[0];
		    out[1] = -a[1];
		    return out;
		};
		
		/**
		 * Returns the inverse of the components of a vec2
		 *
		 * @param {vec2} out the receiving vector
		 * @param {vec2} a vector to invert
		 * @returns {vec2} out
		 */
		vec2.inverse = function(out, a) {
		  out[0] = 1.0 / a[0];
		  out[1] = 1.0 / a[1];
		  return out;
		};
		
		/**
		 * Normalize a vec2
		 *
		 * @param {vec2} out the receiving vector
		 * @param {vec2} a vector to normalize
		 * @returns {vec2} out
		 */
		vec2.normalize = function(out, a) {
		    var x = a[0],
		        y = a[1];
		    var len = x*x + y*y;
		    if (len > 0) {
		        //TODO: evaluate use of glm_invsqrt here?
		        len = 1 / Math.sqrt(len);
		        out[0] = a[0] * len;
		        out[1] = a[1] * len;
		    }
		    return out;
		};
		
		/**
		 * Calculates the dot product of two vec2's
		 *
		 * @param {vec2} a the first operand
		 * @param {vec2} b the second operand
		 * @returns {Number} dot product of a and b
		 */
		vec2.dot = function (a, b) {
		    return a[0] * b[0] + a[1] * b[1];
		};
		
		/**
		 * Computes the cross product of two vec2's
		 * Note that the cross product must by definition produce a 3D vector
		 *
		 * @param {vec3} out the receiving vector
		 * @param {vec2} a the first operand
		 * @param {vec2} b the second operand
		 * @returns {vec3} out
		 */
		vec2.cross = function(out, a, b) {
		    var z = a[0] * b[1] - a[1] * b[0];
		    out[0] = out[1] = 0;
		    out[2] = z;
		    return out;
		};
		
		/**
		 * Performs a linear interpolation between two vec2's
		 *
		 * @param {vec2} out the receiving vector
		 * @param {vec2} a the first operand
		 * @param {vec2} b the second operand
		 * @param {Number} t interpolation amount between the two inputs
		 * @returns {vec2} out
		 */
		vec2.lerp = function (out, a, b, t) {
		    var ax = a[0],
		        ay = a[1];
		    out[0] = ax + t * (b[0] - ax);
		    out[1] = ay + t * (b[1] - ay);
		    return out;
		};
		
		/**
		 * Generates a random vector with the given scale
		 *
		 * @param {vec2} out the receiving vector
		 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
		 * @returns {vec2} out
		 */
		vec2.random = function (out, scale) {
		    scale = scale || 1.0;
		    var r = glMatrix.RANDOM() * 2.0 * Math.PI;
		    out[0] = Math.cos(r) * scale;
		    out[1] = Math.sin(r) * scale;
		    return out;
		};
		
		/**
		 * Transforms the vec2 with a mat2
		 *
		 * @param {vec2} out the receiving vector
		 * @param {vec2} a the vector to transform
		 * @param {mat2} m matrix to transform with
		 * @returns {vec2} out
		 */
		vec2.transformMat2 = function(out, a, m) {
		    var x = a[0],
		        y = a[1];
		    out[0] = m[0] * x + m[2] * y;
		    out[1] = m[1] * x + m[3] * y;
		    return out;
		};
		
		/**
		 * Transforms the vec2 with a mat2d
		 *
		 * @param {vec2} out the receiving vector
		 * @param {vec2} a the vector to transform
		 * @param {mat2d} m matrix to transform with
		 * @returns {vec2} out
		 */
		vec2.transformMat2d = function(out, a, m) {
		    var x = a[0],
		        y = a[1];
		    out[0] = m[0] * x + m[2] * y + m[4];
		    out[1] = m[1] * x + m[3] * y + m[5];
		    return out;
		};
		
		/**
		 * Transforms the vec2 with a mat3
		 * 3rd vector component is implicitly '1'
		 *
		 * @param {vec2} out the receiving vector
		 * @param {vec2} a the vector to transform
		 * @param {mat3} m matrix to transform with
		 * @returns {vec2} out
		 */
		vec2.transformMat3 = function(out, a, m) {
		    var x = a[0],
		        y = a[1];
		    out[0] = m[0] * x + m[3] * y + m[6];
		    out[1] = m[1] * x + m[4] * y + m[7];
		    return out;
		};
		
		/**
		 * Transforms the vec2 with a mat4
		 * 3rd vector component is implicitly '0'
		 * 4th vector component is implicitly '1'
		 *
		 * @param {vec2} out the receiving vector
		 * @param {vec2} a the vector to transform
		 * @param {mat4} m matrix to transform with
		 * @returns {vec2} out
		 */
		vec2.transformMat4 = function(out, a, m) {
		    var x = a[0], 
		        y = a[1];
		    out[0] = m[0] * x + m[4] * y + m[12];
		    out[1] = m[1] * x + m[5] * y + m[13];
		    return out;
		};
		
		/**
		 * Perform some operation over an array of vec2s.
		 *
		 * @param {Array} a the array of vectors to iterate over
		 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
		 * @param {Number} offset Number of elements to skip at the beginning of the array
		 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
		 * @param {Function} fn Function to call for each vector in the array
		 * @param {Object} [arg] additional argument to pass to fn
		 * @returns {Array} a
		 * @function
		 */
		vec2.forEach = (function() {
		    var vec = vec2.create();
		
		    return function(a, stride, offset, count, fn, arg) {
		        var i, l;
		        if(!stride) {
		            stride = 2;
		        }
		
		        if(!offset) {
		            offset = 0;
		        }
		        
		        if(count) {
		            l = Math.min((count * stride) + offset, a.length);
		        } else {
		            l = a.length;
		        }
		
		        for(i = offset; i < l; i += stride) {
		            vec[0] = a[i]; vec[1] = a[i+1];
		            fn(vec, vec, arg);
		            a[i] = vec[0]; a[i+1] = vec[1];
		        }
		        
		        return a;
		    };
		})();
		
		/**
		 * Returns a string representation of a vector
		 *
		 * @param {vec2} vec vector to represent as a string
		 * @returns {String} string representation of the vector
		 */
		vec2.str = function (a) {
		    return 'vec2(' + a[0] + ', ' + a[1] + ')';
		};
		
		/**
		 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
		 *
		 * @param {vec2} a The first vector.
		 * @param {vec2} b The second vector.
		 * @returns {Boolean} True if the vectors are equal, false otherwise.
		 */
		vec2.exactEquals = function (a, b) {
		    return a[0] === b[0] && a[1] === b[1];
		};
		
		/**
		 * Returns whether or not the vectors have approximately the same elements in the same position.
		 *
		 * @param {vec2} a The first vector.
		 * @param {vec2} b The second vector.
		 * @returns {Boolean} True if the vectors are equal, false otherwise.
		 */
		vec2.equals = function (a, b) {
		    var a0 = a[0], a1 = a[1];
		    var b0 = b[0], b1 = b[1];
		    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
		            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)));
		};
		
		module.exports = vec2;
	
	
	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
		
		var _glMatrix = __webpack_require__(2);
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		
		var Pose = function () {
		  function Pose() {
		    _classCallCheck(this, Pose);
		
		    this.orientation = _glMatrix.quat.create();
		    this.position = _glMatrix.vec3.create();
		    this.scale = _glMatrix.vec3.fromValues(1.0, 1.0, 1.0);
		    this.matrix = _glMatrix.mat4.create();
		  }
		
		  _createClass(Pose, [{
		    key: 'updateMatrix',
		    value: function updateMatrix() {
		      _glMatrix.mat4.fromRotationTranslationScale(this.matrix, this.orientation, this.position, this.scale);
		    }
		  }]);
		
		  return Pose;
		}();
		
		exports.default = Pose;
	
	/***/ },
	/* 13 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
		
		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		
		var SceneObj = function () {
		  function SceneObj() {
		    _classCallCheck(this, SceneObj);
		
		    this.scene = null;
		    this.parent = null;
		    this.children = null;
		  }
		
		  _createClass(SceneObj, [{
		    key: 'addChild',
		    value: function addChild(child) {
		      if (child.parent !== null) {
		        throw new Error('child already parented');
		      }
		      this.children = this.children || [];
		      child.scene = this.scene;
		      child.parent = this;
		      this.children.push(child);
		    }
		  }, {
		    key: 'removeChild',
		    value: function removeChild(child) {
		      if (child.parent !== this) {
		        throw new Error('not yo babies momma');
		      }
		      child.scene = null;
		      child.parent = null;
		      var index = this.children.indexOf(child);
		      if (index >= 0) {
		        this.children.splice(index, 1);
		      }
		    }
		  }, {
		    key: 'traverse',
		    value: function traverse(methodOrCallback) {
		      var callback = methodOrCallback;
		      if (typeof callback === 'string') {
		        callback = function callbackWrapper(obj) {
		          if (obj[methodOrCallback]) {
		            for (var _len2 = arguments.length, rest2 = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		              rest2[_key2 - 1] = arguments[_key2];
		            }
		
		            obj[methodOrCallback].apply(obj, rest2);
		          }
		        };
		      }
		      var stack = [this];
		
		      for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		        rest[_key - 1] = arguments[_key];
		      }
		
		      while (stack.length > 0) {
		        var next = stack.pop();
		        callback.apply(undefined, [next].concat(rest));
		        if (next.children) {
		          stack.push.apply(stack, _toConsumableArray(next.children));
		        }
		      }
		    }
		  }]);
		
		  return SceneObj;
		}();
		
		exports.default = SceneObj;
	
	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
		
		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
		
		var _glMatrix = __webpack_require__(2);
		
		var _SceneObj2 = __webpack_require__(13);
		
		var _SceneObj3 = _interopRequireDefault(_SceneObj2);
		
		var _Camera = __webpack_require__(15);
		
		var _Camera2 = _interopRequireDefault(_Camera);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		
		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
		
		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
		
		var Scene = function (_SceneObj) {
		  _inherits(Scene, _SceneObj);
		
		  function Scene() {
		    _classCallCheck(this, Scene);
		
		    var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this));
		
		    _this.camera = null;
		    _this.modelMatrix = _glMatrix.mat4.create();
		    return _this;
		  }
		
		  _createClass(Scene, [{
		    key: 'addChild',
		    value: function addChild(child) {
		      _get(Scene.prototype.__proto__ || Object.getPrototypeOf(Scene.prototype), 'addChild', this).call(this, child);
		      // If you add a camera, and we don't already have one, use it.
		      if (!this.camera && child instanceof _Camera2.default) {
		        this.camera = child;
		      }
		    }
		  }, {
		    key: 'tick',
		    value: function tick(time) {
		      this.updateScene(time);
		      this.drawScene(time);
		    }
		  }, {
		    key: 'updateScene',
		    value: function updateScene(time) {
		      this.traverse('update', time);
		    }
		  }, {
		    key: 'drawScene',
		    value: function drawScene(time) {
		      if (this.camera) {
		        this.traverse('draw', time, this.camera);
		      }
		    }
		  }]);
		
		  return Scene;
		}(_SceneObj3.default);
		
		exports.default = Scene;
	
	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
		
		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
		
		var _glMatrix = __webpack_require__(2);
		
		var _Actor2 = __webpack_require__(16);
		
		var _Actor3 = _interopRequireDefault(_Actor2);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		
		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
		
		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
		
		var Camera = function (_Actor) {
		  _inherits(Camera, _Actor);
		
		  function Camera() {
		    _classCallCheck(this, Camera);
		
		    var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this));
		
		    _this.viewMatrix = _glMatrix.mat4.create();
		    _this.projMatrix = _glMatrix.mat4.create();
		    _this.fov = Math.PI / 2.0;
		    _this.near = 1.0;
		    _this.far = 1000.0;
		    _this.viewportWidth = 512;
		    _this.viewportHeight = 512;
		    _this.updateProjection();
		    return _this;
		  }
		
		  _createClass(Camera, [{
		    key: 'updateProjection',
		    value: function updateProjection() {
		      _glMatrix.mat4.perspective(this.projMatrix, this.fov, this.viewportWidth / this.viewportHeight, this.near, this.far);
		    }
		  }, {
		    key: 'updateMatrix',
		    value: function updateMatrix() {
		      _get(Camera.prototype.__proto__ || Object.getPrototypeOf(Camera.prototype), 'updateMatrix', this).call(this);
		      _glMatrix.mat4.invert(this.viewMatrix, this.modelMatrix);
		    }
		  }]);
		
		  return Camera;
		}(_Actor3.default);
		
		exports.default = Camera;
	
	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
		
		var _glMatrix = __webpack_require__(2);
		
		var _SceneObj2 = __webpack_require__(13);
		
		var _SceneObj3 = _interopRequireDefault(_SceneObj2);
		
		var _Pose = __webpack_require__(12);
		
		var _Pose2 = _interopRequireDefault(_Pose);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		
		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
		
		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
		
		var Actor = function (_SceneObj) {
		  _inherits(Actor, _SceneObj);
		
		  function Actor(init) {
		    _classCallCheck(this, Actor);
		
		    var _this = _possibleConstructorReturn(this, (Actor.__proto__ || Object.getPrototypeOf(Actor)).call(this));
		
		    _this.pose = new _Pose2.default();
		    _this.modelMatrix = _glMatrix.mat4.create();
		    _this.material = init && init.material || null;
		    _this.geometry = init && init.geometry || null;
		    return _this;
		  }
		
		  _createClass(Actor, [{
		    key: 'update',
		    value: function update(time) {
		      this.updateAnimations(time);
		      this.updateMatrix();
		    }
		    // eslint-disable-next-line class-methods-use-this
		
		  }, {
		    key: 'updateAnimations',
		    value: function updateAnimations() /* time */{
		      // todo
		    }
		  }, {
		    key: 'updateMatrix',
		    value: function updateMatrix() {
		      this.pose.updateMatrix();
		      if (this.parent) {
		        _glMatrix.mat4.multiply(this.modelMatrix, this.parent.modelMatrix, this.pose.matrix);
		      } else {
		        _glMatrix.mat4.copy(this.modelMatrix, this.pose.matrix);
		      }
		    }
		  }, {
		    key: 'draw',
		    value: function draw(time, camera) {
		      if (this.material && this.geometry) {
		        this.geometry.draw(this.material, {
		          time: time,
		          modelMatrix: this.modelMatrix,
		          viewMatrix: camera.viewMatrix,
		          projMatrix: camera.projMatrix
		        });
		      }
		    }
		  }, {
		    key: 'moveTo',
		    value: function moveTo(x, y, z) {
		      _glMatrix.vec3.set(this.pose.position, x, y, z);
		    }
		  }, {
		    key: 'lookAt',
		    value: function lookAt(x, y, z) {
		      _glMatrix.mat4.lookAt(this.pose.matrix, this.pose.position, _glMatrix.vec3.fromValues(x, y, z), _glMatrix.vec3.fromValues(0, 1, 0));
		      _glMatrix.mat4.getRotation(this.pose.orientation, this.pose.matrix);
		      _glMatrix.quat.invert(this.pose.orientation, this.pose.orientation);
		    }
		  }]);
		
		  return Actor;
		}(_SceneObj3.default);
		
		exports.default = Actor;
	
	/***/ }
	/******/ ])}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));;
	//# sourceMappingURL=theater.js.map

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _twgl = __webpack_require__(3);
	
	var _twgl2 = _interopRequireDefault(_twgl);
	
	var _theater = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var WGLScene = function (_Scene) {
	  _inherits(WGLScene, _Scene);
	
	  function WGLScene(canvas) {
	    _classCallCheck(this, WGLScene);
	
	    var _this = _possibleConstructorReturn(this, (WGLScene.__proto__ || Object.getPrototypeOf(WGLScene)).call(this));
	
	    _twgl2.default.setDefaults({ attribPrefix: 'a_' });
	    var gl = _twgl2.default.getWebGLContext(canvas);
	    _this.gl = gl;
	    gl.clearColor(0.0, 0.0, 0.0, 1.0);
	    // gl.enable(gl.DEPTH_TEST);
	
	    var animationFrame = function animationFrame(time) {
	      _twgl2.default.resizeCanvasToDisplaySize(gl.canvas);
	      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
	      // eslint-disable-next-line no-bitwise
	      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	      _this.tick(time);
	      requestAnimationFrame(animationFrame);
	    };
	    requestAnimationFrame(animationFrame);
	    return _this;
	  }
	
	  return WGLScene;
	}(_theater.Scene);
	
	exports.default = WGLScene;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * @license twgl.js 1.9.0 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
	 * Available via the MIT license.
	 * see: http://github.com/greggman/twgl.js for details
	 */
	/**
	 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
	 * Available via the MIT or new BSD license.
	 * see: http://github.com/jrburke/almond for details
	 */
	(function (root, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } if (typeof module !== 'undefined' && module.exports) {
	        module.exports = factory();
	    } else {
	        root.twgl = factory();
	    }
	}(this, function () {
	
	/**
	 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
	 * Available via the MIT or new BSD license.
	 * see: http://github.com/jrburke/almond for details
	 */
	//Going sloppy to avoid 'use strict' string cost, but strict practices should
	//be followed.
	/*jslint sloppy: true */
	/*global setTimeout: false */
	
	var notrequirebecasebrowserifymessesupjs, notrequirebecasebrowserifymessesup, define;
	(function (undef) {
	    var main, req, makeMap, handlers,
	        defined = {},
	        waiting = {},
	        config = {},
	        defining = {},
	        hasOwn = Object.prototype.hasOwnProperty,
	        aps = [].slice,
	        jsSuffixRegExp = /\.js$/;
	
	    function hasProp(obj, prop) {
	        return hasOwn.call(obj, prop);
	    }
	
	    /**
	     * Given a relative module name, like ./something, normalize it to
	     * a real name that can be mapped to a path.
	     * @param {String} name the relative name
	     * @param {String} baseName a real name that the name arg is relative
	     * to.
	     * @returns {String} normalized name
	     */
	    function normalize(name, baseName) {
	        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
	            foundI, foundStarMap, starI, i, j, part,
	            baseParts = baseName && baseName.split("/"),
	            map = config.map,
	            starMap = (map && map['*']) || {};
	
	        //Adjust any relative paths.
	        if (name && name.charAt(0) === ".") {
	            //If have a base name, try to normalize against it,
	            //otherwise, assume it is a top-level notrequirebecasebrowserifymessesup that will
	            //be relative to baseUrl in the end.
	            if (baseName) {
	                name = name.split('/');
	                lastIndex = name.length - 1;
	
	                // Node .js allowance:
	                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
	                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
	                }
	
	                //Lop off the last part of baseParts, so that . matches the
	                //"directory" and not name of the baseName's module. For instance,
	                //baseName of "one/two/three", maps to "one/two/three.js", but we
	                //want the directory, "one/two" for this normalization.
	                name = baseParts.slice(0, baseParts.length - 1).concat(name);
	
	                //start trimDots
	                for (i = 0; i < name.length; i += 1) {
	                    part = name[i];
	                    if (part === ".") {
	                        name.splice(i, 1);
	                        i -= 1;
	                    } else if (part === "..") {
	                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {
	                            //End of the line. Keep at least one non-dot
	                            //path segment at the front so it can be mapped
	                            //correctly to disk. Otherwise, there is likely
	                            //no path mapping for a path starting with '..'.
	                            //This can still fail, but catches the most reasonable
	                            //uses of ..
	                            break;
	                        } else if (i > 0) {
	                            name.splice(i - 1, 2);
	                            i -= 2;
	                        }
	                    }
	                }
	                //end trimDots
	
	                name = name.join("/");
	            } else if (name.indexOf('./') === 0) {
	                // No baseName, so this is ID is resolved relative
	                // to baseUrl, pull off the leading dot.
	                name = name.substring(2);
	            }
	        }
	
	        //Apply map config if available.
	        if ((baseParts || starMap) && map) {
	            nameParts = name.split('/');
	
	            for (i = nameParts.length; i > 0; i -= 1) {
	                nameSegment = nameParts.slice(0, i).join("/");
	
	                if (baseParts) {
	                    //Find the longest baseName segment match in the config.
	                    //So, do joins on the biggest to smallest lengths of baseParts.
	                    for (j = baseParts.length; j > 0; j -= 1) {
	                        mapValue = map[baseParts.slice(0, j).join('/')];
	
	                        //baseName segment has  config, find if it has one for
	                        //this name.
	                        if (mapValue) {
	                            mapValue = mapValue[nameSegment];
	                            if (mapValue) {
	                                //Match, update name to the new value.
	                                foundMap = mapValue;
	                                foundI = i;
	                                break;
	                            }
	                        }
	                    }
	                }
	
	                if (foundMap) {
	                    break;
	                }
	
	                //Check for a star map match, but just hold on to it,
	                //if there is a shorter segment match later in a matching
	                //config, then favor over this star map.
	                if (!foundStarMap && starMap && starMap[nameSegment]) {
	                    foundStarMap = starMap[nameSegment];
	                    starI = i;
	                }
	            }
	
	            if (!foundMap && foundStarMap) {
	                foundMap = foundStarMap;
	                foundI = starI;
	            }
	
	            if (foundMap) {
	                nameParts.splice(0, foundI, foundMap);
	                name = nameParts.join('/');
	            }
	        }
	
	        return name;
	    }
	
	    function makeRequire(relName, forceSync) {
	        return function () {
	            //A version of a notrequirebecasebrowserifymessesup function that passes a moduleName
	            //value for items that may need to
	            //look up paths relative to the moduleName
	            var args = aps.call(arguments, 0);
	
	            //If first arg is not notrequirebecasebrowserifymessesup('string'), and there is only
	            //one arg, it is the array form without a callback. Insert
	            //a null so that the following concat is correct.
	            if (typeof args[0] !== 'string' && args.length === 1) {
	                args.push(null);
	            }
	            return req.apply(undef, args.concat([relName, forceSync]));
	        };
	    }
	
	    function makeNormalize(relName) {
	        return function (name) {
	            return normalize(name, relName);
	        };
	    }
	
	    function makeLoad(depName) {
	        return function (value) {
	            defined[depName] = value;
	        };
	    }
	
	    function callDep(name) {
	        if (hasProp(waiting, name)) {
	            var args = waiting[name];
	            delete waiting[name];
	            defining[name] = true;
	            main.apply(undef, args);
	        }
	
	        if (!hasProp(defined, name) && !hasProp(defining, name)) {
	            throw new Error('No ' + name);
	        }
	        return defined[name];
	    }
	
	    //Turns a plugin!resource to [plugin, resource]
	    //with the plugin being undefined if the name
	    //did not have a plugin prefix.
	    function splitPrefix(name) {
	        var prefix,
	            index = name ? name.indexOf('!') : -1;
	        if (index > -1) {
	            prefix = name.substring(0, index);
	            name = name.substring(index + 1, name.length);
	        }
	        return [prefix, name];
	    }
	
	    /**
	     * Makes a name map, normalizing the name, and using a plugin
	     * for normalization if necessary. Grabs a ref to plugin
	     * too, as an optimization.
	     */
	    makeMap = function (name, relName) {
	        var plugin,
	            parts = splitPrefix(name),
	            prefix = parts[0];
	
	        name = parts[1];
	
	        if (prefix) {
	            prefix = normalize(prefix, relName);
	            plugin = callDep(prefix);
	        }
	
	        //Normalize according
	        if (prefix) {
	            if (plugin && plugin.normalize) {
	                name = plugin.normalize(name, makeNormalize(relName));
	            } else {
	                name = normalize(name, relName);
	            }
	        } else {
	            name = normalize(name, relName);
	            parts = splitPrefix(name);
	            prefix = parts[0];
	            name = parts[1];
	            if (prefix) {
	                plugin = callDep(prefix);
	            }
	        }
	
	        //Using ridiculous property names for space reasons
	        return {
	            f: prefix ? prefix + '!' + name : name, //fullName
	            n: name,
	            pr: prefix,
	            p: plugin
	        };
	    };
	
	    function makeConfig(name) {
	        return function () {
	            return (config && config.config && config.config[name]) || {};
	        };
	    }
	
	    handlers = {
	        notrequirebecasebrowserifymessesup: function (name) {
	            return makeRequire(name);
	        },
	        exports: function (name) {
	            var e = defined[name];
	            if (typeof e !== 'undefined') {
	                return e;
	            } else {
	                return (defined[name] = {});
	            }
	        },
	        module: function (name) {
	            return {
	                id: name,
	                uri: '',
	                exports: defined[name],
	                config: makeConfig(name)
	            };
	        }
	    };
	
	    main = function (name, deps, callback, relName) {
	        var cjsModule, depName, ret, map, i,
	            args = [],
	            callbackType = typeof callback,
	            usingExports;
	
	        //Use name if no relName
	        relName = relName || name;
	
	        //Call the callback to define the module, if necessary.
	        if (callbackType === 'undefined' || callbackType === 'function') {
	            //Pull out the defined dependencies and pass the ordered
	            //values to the callback.
	            //Default to [notrequirebecasebrowserifymessesup, exports, module] if no deps
	            deps = !deps.length && callback.length ? ['notrequirebecasebrowserifymessesup', 'exports', 'module'] : deps;
	            for (i = 0; i < deps.length; i += 1) {
	                map = makeMap(deps[i], relName);
	                depName = map.f;
	
	                //Fast path CommonJS standard dependencies.
	                if (depName === "notrequirebecasebrowserifymessesup") {
	                    args[i] = handlers.notrequirebecasebrowserifymessesup(name);
	                } else if (depName === "exports") {
	                    //CommonJS module spec 1.1
	                    args[i] = handlers.exports(name);
	                    usingExports = true;
	                } else if (depName === "module") {
	                    //CommonJS module spec 1.1
	                    cjsModule = args[i] = handlers.module(name);
	                } else if (hasProp(defined, depName) ||
	                           hasProp(waiting, depName) ||
	                           hasProp(defining, depName)) {
	                    args[i] = callDep(depName);
	                } else if (map.p) {
	                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
	                    args[i] = defined[depName];
	                } else {
	                    throw new Error(name + ' missing ' + depName);
	                }
	            }
	
	            ret = callback ? callback.apply(defined[name], args) : undefined;
	
	            if (name) {
	                //If setting exports via "module" is in play,
	                //favor that over return value and exports. After that,
	                //favor a non-undefined return value over exports use.
	                if (cjsModule && cjsModule.exports !== undef &&
	                        cjsModule.exports !== defined[name]) {
	                    defined[name] = cjsModule.exports;
	                } else if (ret !== undef || !usingExports) {
	                    //Use the return value from the function.
	                    defined[name] = ret;
	                }
	            }
	        } else if (name) {
	            //May just be an object definition for the module. Only
	            //worry about defining if have a module name.
	            defined[name] = callback;
	        }
	    };
	
	    notrequirebecasebrowserifymessesupjs = notrequirebecasebrowserifymessesup = req = function (deps, callback, relName, forceSync, alt) {
	        if (typeof deps === "string") {
	            if (handlers[deps]) {
	                //callback in this case is really relName
	                return handlers[deps](callback);
	            }
	            //Just return the module wanted. In this scenario, the
	            //deps arg is the module name, and second arg (if passed)
	            //is just the relName.
	            //Normalize module name, if it contains . or ..
	            return callDep(makeMap(deps, callback).f);
	        } else if (!deps.splice) {
	            //deps is a config object, not an array.
	            config = deps;
	            if (config.deps) {
	                req(config.deps, config.callback);
	            }
	            if (!callback) {
	                return;
	            }
	
	            if (callback.splice) {
	                //callback is an array, which means it is a dependency list.
	                //Adjust args if there are dependencies
	                deps = callback;
	                callback = relName;
	                relName = null;
	            } else {
	                deps = undef;
	            }
	        }
	
	        //Support notrequirebecasebrowserifymessesup(['a'])
	        callback = callback || function () {};
	
	        //If relName is a function, it is an errback handler,
	        //so remove it.
	        if (typeof relName === 'function') {
	            relName = forceSync;
	            forceSync = alt;
	        }
	
	        //Simulate async callback;
	        if (forceSync) {
	            main(undef, deps, callback, relName);
	        } else {
	            //Using a non-zero value because of concern for what old browsers
	            //do, and latest browsers "upgrade" to 4 if lower value is used:
	            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
	            //If want a value immediately, use notrequirebecasebrowserifymessesup('id') instead -- something
	            //that works in almond on the global level, but not guaranteed and
	            //unlikely to work in other AMD implementations.
	            setTimeout(function () {
	                main(undef, deps, callback, relName);
	            }, 4);
	        }
	
	        return req;
	    };
	
	    /**
	     * Just drops the config on the floor, but returns req in case
	     * the config return value is used.
	     */
	    req.config = function (cfg) {
	        return req(cfg);
	    };
	
	    /**
	     * Expose module registry for debugging and tooling
	     */
	    notrequirebecasebrowserifymessesupjs._defined = defined;
	
	    define = function (name, deps, callback) {
	        if (typeof name !== 'string') {
	            throw new Error('See almond README: incorrect module build, no module name');
	        }
	
	        //This module may not have dependencies
	        if (!deps.splice) {
	            //deps is not an array, so probably means
	            //an object literal or factory function for
	            //the value. Adjust args.
	            callback = deps;
	            deps = [];
	        }
	
	        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
	            waiting[name] = [name, deps, callback];
	        }
	    };
	
	    define.amd = {
	        jQuery: true
	    };
	}());
	
	define("node_modules/almond/almond.js", function(){});
	
	/*
	 * Copyright 2015, Gregg Tavares.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are
	 * met:
	 *
	 *     * Redistributions of source code must retain the above copyright
	 * notice, this list of conditions and the following disclaimer.
	 *     * Redistributions in binary form must reproduce the above
	 * copyright notice, this list of conditions and the following disclaimer
	 * in the documentation and/or other materials provided with the
	 * distribution.
	 *     * Neither the name of Gregg Tavares. nor the names of his
	 * contributors may be used to endorse or promote products derived from
	 * this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */
	define('twgl/typedarrays',[], function() {
	  
	
	  /**
	   * Low level shader typed array related functions
	   *
	   * You should generally not need to use these functions. They are provided
	   * for those cases where you're doing something out of the ordinary
	   * and you need lower level access.
	   *
	   * For backward compatibily they are available at both `twgl.typedArray` and `twgl`
	   * itself
	   *
	   * See {@link module:twgl} for core functions
	   *
	   * @module twgl/typedArray
	   */
	
	
	  // make sure we don't see a global gl
	  var gl = undefined;  // eslint-disable-line
	
	  /* DataType */
	  var BYTE                           = 0x1400;
	  var UNSIGNED_BYTE                  = 0x1401;
	  var SHORT                          = 0x1402;
	  var UNSIGNED_SHORT                 = 0x1403;
	  var INT                            = 0x1404;
	  var UNSIGNED_INT                   = 0x1405;
	  var FLOAT                          = 0x1406;
	
	  /**
	   * Get the GL type for a typedArray
	   * @param {ArrayBuffer|ArrayBufferView} typedArray a typedArray
	   * @return {number} the GL type for array. For example pass in an `Int8Array` and `gl.BYTE` will
	   *   be returned. Pass in a `Uint32Array` and `gl.UNSIGNED_INT` will be returned
	   * @memberOf module:twgl/typedArray
	   */
	  function getGLTypeForTypedArray(typedArray) {
	    if (typedArray instanceof Int8Array)         { return BYTE; }           // eslint-disable-line
	    if (typedArray instanceof Uint8Array)        { return UNSIGNED_BYTE; }  // eslint-disable-line
	    if (typedArray instanceof Uint8ClampedArray) { return UNSIGNED_BYTE; }  // eslint-disable-line
	    if (typedArray instanceof Int16Array)        { return SHORT; }          // eslint-disable-line
	    if (typedArray instanceof Uint16Array)       { return UNSIGNED_SHORT; } // eslint-disable-line
	    if (typedArray instanceof Int32Array)        { return INT; }            // eslint-disable-line
	    if (typedArray instanceof Uint32Array)       { return UNSIGNED_INT; }   // eslint-disable-line
	    if (typedArray instanceof Float32Array)      { return FLOAT; }          // eslint-disable-line
	    throw "unsupported typed array type";
	  }
	
	  /**
	   * Get the typed array constructor for a given GL type
	   * @param {number} type the GL type. (eg: `gl.UNSIGNED_INT`)
	   * @return {function} the constructor for a the corresponding typed array. (eg. `Uint32Array`).
	   * @memberOf module:twgl/typedArray
	   */
	  function getTypedArrayTypeForGLType(type) {
	    switch (type) {
	      case BYTE:           return Int8Array;     // eslint-disable-line
	      case UNSIGNED_BYTE:  return Uint8Array;    // eslint-disable-line
	      case SHORT:          return Int16Array;    // eslint-disable-line
	      case UNSIGNED_SHORT: return Uint16Array;   // eslint-disable-line
	      case INT:            return Int32Array;    // eslint-disable-line
	      case UNSIGNED_INT:   return Uint32Array;   // eslint-disable-line
	      case FLOAT:          return Float32Array;  // eslint-disable-line
	      default:
	        throw "unknown gl type";
	    }
	  }
	
	  function isArrayBuffer(a) {
	    return a && a.buffer && a.buffer instanceof ArrayBuffer;
	  }
	
	  // Using quotes prevents Uglify from changing the names.
	  return {
	    "getGLTypeForTypedArray": getGLTypeForTypedArray,
	    "getTypedArrayTypeForGLType": getTypedArrayTypeForGLType,
	    "isArrayBuffer": isArrayBuffer,
	  };
	});
	
	
	/*
	 * Copyright 2015, Gregg Tavares.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are
	 * met:
	 *
	 *     * Redistributions of source code must retain the above copyright
	 * notice, this list of conditions and the following disclaimer.
	 *     * Redistributions in binary form must reproduce the above
	 * copyright notice, this list of conditions and the following disclaimer
	 * in the documentation and/or other materials provided with the
	 * distribution.
	 *     * Neither the name of Gregg Tavares. nor the names of his
	 * contributors may be used to endorse or promote products derived from
	 * this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */
	
	define('twgl/utils',[], function() {
	  
	
	  /**
	   * Copy an object 1 level deep
	   * @param {object} src object to copy
	   * @return {object} the copy
	   */
	  function shallowCopy(src) {
	    var dst = {};
	    Object.keys(src).forEach(function(key) {
	      dst[key] = src[key];
	    });
	    return dst;
	  }
	
	  /**
	   * Copy named properties
	   *
	   * @param {string[]} names names of properties to copy
	   * @param {object} src object to copy properties from
	   * @param {object} dst object to copy properties to
	   */
	  function copyNamedProperties(names, src, dst) {
	    names.forEach(function(name) {
	      var value = src[name];
	      if (value !== undefined) {
	        dst[name] = value;
	      }
	    });
	  }
	
	  /**
	   * Copies properties from source to dest only if a matching key is in dest
	   *
	   * @param {Object.<string, ?>} src the source
	   * @param {Object.<string, ?>} dst the dest
	   */
	  function copyExistingProperties(src, dst) {
	    Object.keys(dst).forEach(function(key) {
	      if (dst.hasOwnProperty(key) && src.hasOwnProperty(key)) {
	        dst[key] = src[key];
	      }
	    });
	  }
	
	  /**
	   * Gets the gl version as a number
	   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
	   * @return {number} version of gl
	   */
	  function getVersionAsNumber(gl) {
	    return parseFloat(gl.getParameter(gl.VERSION).substr(6));
	  }
	
	  /**
	   * Check if context is WebGL 2.0
	   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
	   * @return {bool} true if it's WebGL 2.0
	   * @memberOf module:twgl
	   */
	  function isWebGL2(gl) {
	    return gl.getParameter(gl.VERSION).indexOf("WebGL 2.0") === 0;
	  }
	
	  /**
	   * Check if context is WebGL 1.0
	   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
	   * @return {bool} true if it's WebGL 1.0
	   * @memberOf module:twgl
	   */
	  function isWebGL1(gl) {
	    var version = getVersionAsNumber(gl);
	    return version <= 1.0 && version > 0.0;  // because as of 2016/5 Edge returns 0.96
	  }
	
	  var error =
	      (    window.console
	        && window.console.error
	        && typeof window.console.error === "function"
	      )
	      ? window.console.error.bind(window.console)
	      : function() { };
	
	  var warn =
	      (    window.console
	        && window.console.warn
	        && typeof window.console.warn === "function"
	      )
	      ? window.console.warn.bind(window.console)
	      : function() { };
	
	  return {
	    copyExistingProperties: copyExistingProperties,
	    copyNamedProperties: copyNamedProperties,
	    shallowCopy: shallowCopy,
	    isWebGL1: isWebGL1,
	    isWebGL2: isWebGL2,
	    error: error,
	    warn: warn,
	  };
	});
	
	
	/*
	 * Copyright 2015, Gregg Tavares.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are
	 * met:
	 *
	 *     * Redistributions of source code must retain the above copyright
	 * notice, this list of conditions and the following disclaimer.
	 *     * Redistributions in binary form must reproduce the above
	 * copyright notice, this list of conditions and the following disclaimer
	 * in the documentation and/or other materials provided with the
	 * distribution.
	 *     * Neither the name of Gregg Tavares. nor the names of his
	 * contributors may be used to endorse or promote products derived from
	 * this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */
	
	define('twgl/attributes',[
	    './typedarrays',
	    './utils',
	  ], function(
	    typedArrays,
	    utils) {
	  
	
	  /**
	   * Low level attribute and buffer related functions
	   *
	   * You should generally not need to use these functions. They are provided
	   * for those cases where you're doing something out of the ordinary
	   * and you need lower level access.
	   *
	   * For backward compatibily they are available at both `twgl.attributes` and `twgl`
	   * itself
	   *
	   * See {@link module:twgl} for core functions
	   *
	   * @module twgl/attributes
	   */
	
	  // make sure we don't see a global gl
	  var gl = undefined;  // eslint-disable-line
	  var defaults = {
	    attribPrefix: "",
	  };
	
	  /**
	   * Sets the default attrib prefix
	   *
	   * When writing shaders I prefer to name attributes with `a_`, uniforms with `u_` and varyings with `v_`
	   * as it makes it clear where they came from. But, when building geometry I prefer using unprefixed names.
	   *
	   * In otherwords I'll create arrays of geometry like this
	   *
	   *     var arrays = {
	   *       position: ...
	   *       normal: ...
	   *       texcoord: ...
	   *     };
	   *
	   * But need those mapped to attributes and my attributes start with `a_`.
	   *
	   * @deprecated see {@link module:twgl.setDefaults}
	   * @param {string} prefix prefix for attribs
	   * @memberOf module:twgl/attributes
	   */
	  function setAttributePrefix(prefix) {
	    defaults.attribPrefix = prefix;
	  }
	
	  function setDefaults(newDefaults) {
	    utils.copyExistingProperties(newDefaults, defaults);
	  }
	
	  function setBufferFromTypedArray(gl, type, buffer, array, drawType) {
	    gl.bindBuffer(type, buffer);
	    gl.bufferData(type, array, drawType || gl.STATIC_DRAW);
	  }
	
	  /**
	   * Given typed array creates a WebGLBuffer and copies the typed array
	   * into it.
	   *
	   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
	   * @param {ArrayBuffer|ArrayBufferView|WebGLBuffer} typedArray the typed array. Note: If a WebGLBuffer is passed in it will just be returned. No action will be taken
	   * @param {number} [type] the GL bind type for the buffer. Default = `gl.ARRAY_BUFFER`.
	   * @param {number} [drawType] the GL draw type for the buffer. Default = 'gl.STATIC_DRAW`.
	   * @return {WebGLBuffer} the created WebGLBuffer
	   * @memberOf module:twgl/attributes
	   */
	  function createBufferFromTypedArray(gl, typedArray, type, drawType) {
	    if (typedArray instanceof WebGLBuffer) {
	      return typedArray;
	    }
	    type = type || gl.ARRAY_BUFFER;
	    var buffer = gl.createBuffer();
	    setBufferFromTypedArray(gl, type, buffer, typedArray, drawType);
	    return buffer;
	  }
	
	  function isIndices(name) {
	    return name === "indices";
	  }
	
	  // This is really just a guess. Though I can't really imagine using
	  // anything else? Maybe for some compression?
	  function getNormalizationForTypedArray(typedArray) {
	    if (typedArray instanceof Int8Array)    { return true; }  // eslint-disable-line
	    if (typedArray instanceof Uint8Array)   { return true; }  // eslint-disable-line
	    return false;
	  }
	
	  function getArray(array) {
	    return array.length ? array : array.data;
	  }
	
	  function guessNumComponentsFromName(name, length) {
	    var numComponents;
	    if (name.indexOf("coord") >= 0) {
	      numComponents = 2;
	    } else if (name.indexOf("color") >= 0) {
	      numComponents = 4;
	    } else {
	      numComponents = 3;  // position, normals, indices ...
	    }
	
	    if (length % numComponents > 0) {
	      throw "can not guess numComponents. You should specify it.";
	    }
	
	    return numComponents;
	  }
	
	  function getNumComponents(array, arrayName) {
	    return array.numComponents || array.size || guessNumComponentsFromName(arrayName, getArray(array).length);
	  }
	
	  function makeTypedArray(array, name) {
	    if (typedArrays.isArrayBuffer(array)) {
	      return array;
	    }
	
	    if (typedArrays.isArrayBuffer(array.data)) {
	      return array.data;
	    }
	
	    if (Array.isArray(array)) {
	      array = {
	        data: array,
	      };
	    }
	
	    var Type = array.type;
	    if (!Type) {
	      if (name === "indices") {
	        Type = Uint16Array;
	      } else {
	        Type = Float32Array;
	      }
	    }
	    return new Type(array.data);
	  }
	
	  /**
	   * The info for an attribute. This is effectively just the arguments to `gl.vertexAttribPointer` plus the WebGLBuffer
	   * for the attribute.
	   *
	   * @typedef {Object} AttribInfo
	   * @property {number} [numComponents] the number of components for this attribute.
	   * @property {number} [size] synonym for `numComponents`.
	   * @property {number} [type] the type of the attribute (eg. `gl.FLOAT`, `gl.UNSIGNED_BYTE`, etc...) Default = `gl.FLOAT`
	   * @property {boolean} [normalized] whether or not to normalize the data. Default = false
	   * @property {number} [offset] offset into buffer in bytes. Default = 0
	   * @property {number} [stride] the stride in bytes per element. Default = 0
	   * @property {WebGLBuffer} buffer the buffer that contains the data for this attribute
	   * @property {number} [drawType] the draw type passed to gl.bufferData. Default = gl.STATIC_DRAW
	   * @memberOf module:twgl
	   */
	
	  /**
	   * Use this type of array spec when TWGL can't guess the type or number of compoments of an array
	   * @typedef {Object} FullArraySpec
	   * @property {(number[]|ArrayBuffer)} data The data of the array.
	   * @property {number} [numComponents] number of components for `vertexAttribPointer`. Default is based on the name of the array.
	   *    If `coord` is in the name assumes `numComponents = 2`.
	   *    If `color` is in the name assumes `numComponents = 4`.
	   *    otherwise assumes `numComponents = 3`
	   * @property {constructor} type The type. This is only used if `data` is a JavaScript array. It is the constructor for the typedarray. (eg. `Uint8Array`).
	   * For example if you want colors in a `Uint8Array` you might have a `FullArraySpec` like `{ type: Uint8Array, data: [255,0,255,255, ...], }`.
	   * @property {number} [size] synonym for `numComponents`.
	   * @property {boolean} [normalize] normalize for `vertexAttribPointer`. Default is true if type is `Int8Array` or `Uint8Array` otherwise false.
	   * @property {number} [stride] stride for `vertexAttribPointer`. Default = 0
	   * @property {number} [offset] offset for `vertexAttribPointer`. Default = 0
	   * @property {string} [attrib] name of attribute this array maps to. Defaults to same name as array prefixed by the default attribPrefix.
	   * @property {string} [name] synonym for `attrib`.
	   * @property {string} [attribName] synonym for `attrib`.
	   * @memberOf module:twgl
	   */
	
	  /**
	   * An individual array in {@link module:twgl.Arrays}
	   *
	   * When passed to {@link module:twgl.createBufferInfoFromArrays} if an ArraySpec is `number[]` or `ArrayBuffer`
	   * the types will be guessed based on the name. `indices` will be `Uint16Array`, everything else will
	   * be `Float32Array`
	   *
	   * @typedef {(number[]|ArrayBuffer|module:twgl.FullArraySpec)} ArraySpec
	   * @memberOf module:twgl
	   */
	
	  /**
	   * This is a JavaScript object of arrays by name. The names should match your shader's attributes. If your
	   * attributes have a common prefix you can specify it by calling {@link module:twgl.setAttributePrefix}.
	   *
	   *     Bare JavaScript Arrays
	   *
	   *         var arrays = {
	   *            position: [-1, 1, 0],
	   *            normal: [0, 1, 0],
	   *            ...
	   *         }
	   *
	   *     Bare TypedArrays
	   *
	   *         var arrays = {
	   *            position: new Float32Array([-1, 1, 0]),
	   *            color: new Uint8Array([255, 128, 64, 255]),
	   *            ...
	   *         }
	   *
	   * *   Will guess at `numComponents` if not specified based on name.
	   *
	   *     If `coord` is in the name assumes `numComponents = 2`
	   *
	   *     If `color` is in the name assumes `numComponents = 4`
	   *
	   *     otherwise assumes `numComponents = 3`
	   *
	   * Objects with various fields. See {@link module:twgl.FullArraySpec}.
	   *
	   *     var arrays = {
	   *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
	   *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
	   *       normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
	   *       indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
	   *     };
	   *
	   * @typedef {Object.<string, module:twgl.ArraySpec>} Arrays
	   * @memberOf module:twgl
	   */
	
	
	  /**
	   * Creates a set of attribute data and WebGLBuffers from set of arrays
	   *
	   * Given
	   *
	   *      var arrays = {
	   *        position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
	   *        texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
	   *        normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
	   *        color:    { numComponents: 4, data: [255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 255], type: Uint8Array, },
	   *        indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
	   *      };
	   *
	   * returns something like
	   *
	   *      var attribs = {
	   *        position: { numComponents: 3, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
	   *        texcoord: { numComponents: 2, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
	   *        normal:   { numComponents: 3, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
	   *        color:    { numComponents: 4, type: gl.UNSIGNED_BYTE, normalize: true,  buffer: WebGLBuffer, },
	   *      };
	   *
	   * notes:
	   *
	   * *   Arrays can take various forms
	   *
	   *     Bare JavaScript Arrays
	   *
	   *         var arrays = {
	   *            position: [-1, 1, 0],
	   *            normal: [0, 1, 0],
	   *            ...
	   *         }
	   *
	   *     Bare TypedArrays
	   *
	   *         var arrays = {
	   *            position: new Float32Array([-1, 1, 0]),
	   *            color: new Uint8Array([255, 128, 64, 255]),
	   *            ...
	   *         }
	   *
	   * *   Will guess at `numComponents` if not specified based on name.
	   *
	   *     If `coord` is in the name assumes `numComponents = 2`
	   *
	   *     If `color` is in the name assumes `numComponents = 4`
	   *
	   *     otherwise assumes `numComponents = 3`
	   *
	   * @param {WebGLRenderingContext} gl The webgl rendering context.
	   * @param {module:twgl.Arrays} arrays The arrays
	   * @return {Object.<string, module:twgl.AttribInfo>} the attribs
	   * @memberOf module:twgl/attributes
	   */
	  function createAttribsFromArrays(gl, arrays) {
	    var attribs = {};
	    Object.keys(arrays).forEach(function(arrayName) {
	      if (!isIndices(arrayName)) {
	        var array = arrays[arrayName];
	        var attribName = array.attrib || array.name || array.attribName || (defaults.attribPrefix + arrayName);
	        var typedArray = makeTypedArray(array, arrayName);
	        attribs[attribName] = {
	          buffer:        createBufferFromTypedArray(gl, typedArray, undefined, array.drawType),
	          numComponents: getNumComponents(array, arrayName),
	          type:          typedArrays.getGLTypeForTypedArray(typedArray),
	          normalize:     array.normalize !== undefined ? array.normalize : getNormalizationForTypedArray(typedArray),
	          stride:        array.stride || 0,
	          offset:        array.offset || 0,
	          drawType:      array.drawType,
	        };
	      }
	    });
	    return attribs;
	  }
	
	  /**
	   * Sets the contents of a buffer attached to an attribInfo
	   *
	   * This is helper function to dynamically update a buffer.
	   *
	   * Let's say you make a bufferInfo
	   *
	   *     var arrays = {
	   *        position: new Float32Array([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]),
	   *        texcoord: new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]),
	   *        normal:   new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
	   *        indices:  new Uint16Array([0, 1, 2, 1, 2, 3]),
	   *     };
	   *     var bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);
	   *
	   *  And you want to dynamically upate the positions. You could do this
	   *
	   *     // assuming arrays.position has already been updated with new data.
	   *     twgl.setAttribInfoBufferFromArray(gl, bufferInfo.attribs.position, arrays.position);
	   *
	   * @param {WebGLRenderingContext} gl
	   * @param {AttribInfo} attribInfo The attribInfo who's buffer contents to set. NOTE: If you have an attribute prefix
	   *   the name of the attribute will include the prefix.
	   * @param {ArraySpec} array Note: it is arguably ineffient to pass in anything but a typed array because anything
	   *    else will have to be converted to a typed array before it can be used by WebGL. During init time that
	   *    inefficiency is usually not important but if you're updating data dynamically best to be efficient.
	   * @param {number} [offset] an optional offset into the buffer. This is only an offset into the WebGL buffer
	   *    not the array. To pass in an offset into the array itself use a typed array and create an `ArrayBufferView`
	   *    for the portion of the array you want to use.
	   *
	   *        var someArray = new Float32Array(1000); // an array with 1000 floats
	   *        var someSubArray = new Float32Array(someArray.buffer, offsetInBytes, sizeInUnits); // a view into someArray
	   *
	   *    Now you can pass `someSubArray` into setAttribInfoBufferFromArray`
	   * @memberOf module:twgl/attributes
	   */
	  function setAttribInfoBufferFromArray(gl, attribInfo, array, offset) {
	    array = makeTypedArray(array);
	    if (offset) {
	      gl.bindBuffer(gl.ARRAY_BUFFER, attribInfo.buffer);
	      gl.bufferSubData(gl.ARRAY_BUFFER, offset, array);
	    } else {
	      setBufferFromTypedArray(gl, gl.ARRAY_BUFFER, attribInfo.buffer, array, attribInfo.drawType);
	    }
	  }
	
	  /**
	   * tries to get the number of elements from a set of arrays.
	   */
	
	  var getNumElementsFromNonIndexedArrays = (function() {
	    var positionKeys = ['position', 'positions', 'a_position'];
	
	    return function getNumElementsFromNonIndexedArrays(arrays) {
	      var key;
	      for (var ii = 0; ii < positionKeys.length; ++ii) {
	        key = positionKeys[ii];
	        if (key in arrays) {
	          break;
	        }
	      }
	      if (ii === positionKeys.length) {
	        key = Object.keys(arrays)[0];
	      }
	      var array = arrays[key];
	      var length = getArray(array).length;
	      var numComponents = getNumComponents(array, key);
	      var numElements = length / numComponents;
	      if (length % numComponents > 0) {
	        throw "numComponents " + numComponents + " not correct for length " + length;
	      }
	      return numElements;
	    };
	  }());
	
	  /**
	   * @typedef {Object} BufferInfo
	   * @property {number} numElements The number of elements to pass to `gl.drawArrays` or `gl.drawElements`.
	   * @property {number} [elementType] The type of indices `UNSIGNED_BYTE`, `UNSIGNED_SHORT` etc..
	   * @property {WebGLBuffer} [indices] The indices `ELEMENT_ARRAY_BUFFER` if any indices exist.
	   * @property {Object.<string, module:twgl.AttribInfo>} [attribs] The attribs approriate to call `setAttributes`
	   * @memberOf module:twgl
	   */
	
	  /**
	   * @typedef {Object} VertexArrayInfo
	   * @property {number} numElements The number of elements to pass to `gl.drawArrays` or `gl.drawElements`.
	   * @property {number} [elementType] The type of indices `UNSIGNED_BYTE`, `UNSIGNED_SHORT` etc..
	   * @property {WebGLVertexArrayObject> [vertexArrayObject] a vertex array object
	   * @memberOf module:twgl
	   */
	
	  /**
	   * Creates a BufferInfo from an object of arrays.
	   *
	   * This can be passed to {@link module:twgl.setBuffersAndAttributes} and to
	   * {@link module:twgl:drawBufferInfo}.
	   *
	   * Given an object like
	   *
	   *     var arrays = {
	   *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
	   *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
	   *       normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
	   *       indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
	   *     };
	   *
	   *  Creates an BufferInfo like this
	   *
	   *     bufferInfo = {
	   *       numElements: 4,        // or whatever the number of elements is
	   *       indices: WebGLBuffer,  // this property will not exist if there are no indices
	   *       attribs: {
	   *         a_position: { buffer: WebGLBuffer, numComponents: 3, },
	   *         a_normal:   { buffer: WebGLBuffer, numComponents: 3, },
	   *         a_texcoord: { buffer: WebGLBuffer, numComponents: 2, },
	   *       },
	   *     };
	   *
	   *  The properties of arrays can be JavaScript arrays in which case the number of components
	   *  will be guessed.
	   *
	   *     var arrays = {
	   *        position: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0],
	   *        texcoord: [0, 0, 0, 1, 1, 0, 1, 1],
	   *        normal:   [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
	   *        indices:  [0, 1, 2, 1, 2, 3],
	   *     };
	   *
	   *  They can also by TypedArrays
	   *
	   *     var arrays = {
	   *        position: new Float32Array([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]),
	   *        texcoord: new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]),
	   *        normal:   new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
	   *        indices:  new Uint16Array([0, 1, 2, 1, 2, 3]),
	   *     };
	   *
	   *  Or augmentedTypedArrays
	   *
	   *     var positions = createAugmentedTypedArray(3, 4);
	   *     var texcoords = createAugmentedTypedArray(2, 4);
	   *     var normals   = createAugmentedTypedArray(3, 4);
	   *     var indices   = createAugmentedTypedArray(3, 2, Uint16Array);
	   *
	   *     positions.push([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]);
	   *     texcoords.push([0, 0, 0, 1, 1, 0, 1, 1]);
	   *     normals.push([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);
	   *     indices.push([0, 1, 2, 1, 2, 3]);
	   *
	   *     var arrays = {
	   *        position: positions,
	   *        texcoord: texcoords,
	   *        normal:   normals,
	   *        indices:  indices,
	   *     };
	   *
	   * For the last example it is equivalent to
	   *
	   *     var bufferInfo = {
	   *       attribs: {
	   *         a_position: { numComponents: 3, buffer: gl.createBuffer(), },
	   *         a_texcoods: { numComponents: 2, buffer: gl.createBuffer(), },
	   *         a_normals: { numComponents: 3, buffer: gl.createBuffer(), },
	   *       },
	   *       indices: gl.createBuffer(),
	   *       numElements: 6,
	   *     };
	   *
	   *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.a_position.buffer);
	   *     gl.bufferData(gl.ARRAY_BUFFER, arrays.position, gl.STATIC_DRAW);
	   *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.a_texcoord.buffer);
	   *     gl.bufferData(gl.ARRAY_BUFFER, arrays.texcoord, gl.STATIC_DRAW);
	   *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.a_normal.buffer);
	   *     gl.bufferData(gl.ARRAY_BUFFER, arrays.normal, gl.STATIC_DRAW);
	   *     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufferInfo.indices);
	   *     gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, arrays.indices, gl.STATIC_DRAW);
	   *
	   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
	   * @param {module:twgl.Arrays} arrays Your data
	   * @return {module:twgl.BufferInfo} A BufferInfo
	   * @memberOf module:twgl/attributes
	   */
	  function createBufferInfoFromArrays(gl, arrays) {
	    var bufferInfo = {
	      attribs: createAttribsFromArrays(gl, arrays),
	    };
	    var indices = arrays.indices;
	    if (indices) {
	      indices = makeTypedArray(indices, "indices");
	      bufferInfo.indices = createBufferFromTypedArray(gl, indices, gl.ELEMENT_ARRAY_BUFFER);
	      bufferInfo.numElements = indices.length;
	      bufferInfo.elementType = typedArrays.getGLTypeForTypedArray(indices);
	    } else {
	      bufferInfo.numElements = getNumElementsFromNonIndexedArrays(arrays);
	    }
	
	    return bufferInfo;
	  }
	
	  /**
	   * Creates a buffer from an array, typed array, or array spec
	   *
	   * Given something like this
	   *
	   *     [1, 2, 3],
	   *
	   * or
	   *
	   *     new Uint16Array([1,2,3]);
	   *
	   * or
	   *
	   *     {
	   *        data: [1, 2, 3],
	   *        type: Uint8Array,
	   *     }
	   *
	   * returns a WebGLBuffer that constains the given data.
	   *
	   * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
	   * @param {module:twgl.ArraySpec} array an array, typed array, or array spec.
	   * @param {string} arrayName name of array. Used to guess the type if type can not be dervied other wise.
	   * @return {WebGLBuffer} a WebGLBuffer containing the data in array.
	   * @memberOf module:twgl/attributes
	   */
	  function createBufferFromArray(gl, array, arrayName) {
	    var type = arrayName === "indices" ? gl.ELEMENT_ARRAY_BUFFER : gl.ARRAY_BUFFER;
	    var typedArray = makeTypedArray(array, arrayName);
	    return createBufferFromTypedArray(gl, typedArray, type);
	  }
	
	  /**
	   * Creates buffers from arrays or typed arrays
	   *
	   * Given something like this
	   *
	   *     var arrays = {
	   *        positions: [1, 2, 3],
	   *        normals: [0, 0, 1],
	   *     }
	   *
	   * returns something like
	   *
	   *     buffers = {
	   *       positions: WebGLBuffer,
	   *       normals: WebGLBuffer,
	   *     }
	   *
	   * If the buffer is named 'indices' it will be made an ELEMENT_ARRAY_BUFFER.
	   *
	   * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
	   * @param {module:twgl.Arrays} arrays
	   * @return {Object<string, WebGLBuffer>} returns an object with one WebGLBuffer per array
	   * @memberOf module:twgl/attributes
	   */
	  function createBuffersFromArrays(gl, arrays) {
	    var buffers = { };
	    Object.keys(arrays).forEach(function(key) {
	      buffers[key] = createBufferFromArray(gl, arrays[key], key);
	    });
	
	    return buffers;
	  }
	
	  /**
	   * Creates a BufferInfo from an object of arrays.
	   *
	   * This can be passed to {@link module:twgl.setBuffersAndAttributes} and to
	   * {@link module:twgl:drawBufferInfo}.
	   *
	   * > **IMPORTANT:** Vertex Array Objects are **not** a direct analog for a BufferInfo. Vertex Array Objects
	   *   assign buffers to specific attributes at creation time. That means they can only be used with programs
	   *   who's attributes use the same attribute locations for the same purposes.
	   *
	   * > Bind your attribute locations by passing an array of attribute names to {@link module:twgl.createProgramInfo}
	   *   or use WebGL 2's GLSL ES 3's `layout(location = <num>)` to make sure locations match.
	   *
	   * also
	   *
	   * > **IMPORTANT:** After calling twgl.setBuffersAndAttribute with a BufferInfo that uses a Vertex Array Object
	   *   that Vertex Array Object will be bound. That means **ANY MANIPULATION OF ELEMENT_ARRAY_BUFFER or ATTRIBUTES**
	   *   will affect the Vertex Array Object state.
	   *
	   * > Call `gl.bindVertexArray(null)` to get back manipulating the global attributes and ELEMENT_ARRAY_BUFFER.
	   *
	   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
	   * @param {module:twgl.ProgramInfo|module:twgl.ProgramInfo[]} programInfo a programInfo or array of programInfos
	   *
	   *    You need to make sure every attribute that will be used is bound. So for example assume shader 1
	   *    uses attributes A, B, C and shader 2 uses attributes A, B, D. If you only pass in the programInfo
	   *    for shader 1 then only attributes A, B, and C will have their attributes set because TWGL doesn't
	   *    now attribute D's location.
	   *
	   *    So, you can pass in both shader 1 and shader 2's programInfo
	   *
	   * @return {module:twgl.VertexArrayInfo} The created VertexArrayInfo
	   *
	   * @memberOf module:twgl/attributes
	   */
	  function createVertexArrayInfo(gl, programInfos, bufferInfo) {
	    var vao = gl.createVertexArray();
	    gl.bindVertexArray(vao);
	    if (!programInfos.length) {
	      programInfos = [programInfos];
	    }
	    programInfos.forEach(function(programInfo) {
	      twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
	    });
	    gl.bindVertexArray(null);
	    return {
	      numElements: bufferInfo.numElements,
	      elementType: bufferInfo.elementType,
	      vertexArrayObject: vao,
	    };
	  }
	
	  // Using quotes prevents Uglify from changing the names.
	  // No speed diff AFAICT.
	  return {
	    "createAttribsFromArrays": createAttribsFromArrays,
	    "createBuffersFromArrays": createBuffersFromArrays,
	    "createBufferFromArray": createBufferFromArray,
	    "createBufferFromTypedArray": createBufferFromTypedArray,
	    "createBufferInfoFromArrays": createBufferInfoFromArrays,
	    "setAttribInfoBufferFromArray": setAttribInfoBufferFromArray,
	
	    "createVertexArrayInfo": createVertexArrayInfo,
	
	    "setAttributePrefix": setAttributePrefix,
	
	    "setDefaults_": setDefaults,
	    "getNumComponents_": getNumComponents,
	    "getArray_": getArray,
	  };
	
	});
	
	
	/*
	 * Copyright 2015, Gregg Tavares.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are
	 * met:
	 *
	 *     * Redistributions of source code must retain the above copyright
	 * notice, this list of conditions and the following disclaimer.
	 *     * Redistributions in binary form must reproduce the above
	 * copyright notice, this list of conditions and the following disclaimer
	 * in the documentation and/or other materials provided with the
	 * distribution.
	 *     * Neither the name of Gregg Tavares. nor the names of his
	 * contributors may be used to endorse or promote products derived from
	 * this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */
	
	define('twgl/programs',[
	    './utils',
	  ], function(
	    utils) {
	  
	
	  /**
	   * Low level shader program related functions
	   *
	   * You should generally not need to use these functions. They are provided
	   * for those cases where you're doing something out of the ordinary
	   * and you need lower level access.
	   *
	   * For backward compatibily they are available at both `twgl.programs` and `twgl`
	   * itself
	   *
	   * See {@link module:twgl} for core functions
	   *
	   * @module twgl/programs
	   */
	
	  var error = utils.error;
	  var warn = utils.warn;
	
	  var FLOAT                         = 0x1406;
	  var FLOAT_VEC2                    = 0x8B50;
	  var FLOAT_VEC3                    = 0x8B51;
	  var FLOAT_VEC4                    = 0x8B52;
	  var INT                           = 0x1404;
	  var INT_VEC2                      = 0x8B53;
	  var INT_VEC3                      = 0x8B54;
	  var INT_VEC4                      = 0x8B55;
	  var BOOL                          = 0x8B56;
	  var BOOL_VEC2                     = 0x8B57;
	  var BOOL_VEC3                     = 0x8B58;
	  var BOOL_VEC4                     = 0x8B59;
	  var FLOAT_MAT2                    = 0x8B5A;
	  var FLOAT_MAT3                    = 0x8B5B;
	  var FLOAT_MAT4                    = 0x8B5C;
	  var SAMPLER_2D                    = 0x8B5E;
	  var SAMPLER_CUBE                  = 0x8B60;
	  var SAMPLER_3D                    = 0x8B5F;
	  var SAMPLER_2D_SHADOW             = 0x8B62;
	  var FLOAT_MAT2x3                  = 0x8B65;
	  var FLOAT_MAT2x4                  = 0x8B66;
	  var FLOAT_MAT3x2                  = 0x8B67;
	  var FLOAT_MAT3x4                  = 0x8B68;
	  var FLOAT_MAT4x2                  = 0x8B69;
	  var FLOAT_MAT4x3                  = 0x8B6A;
	  var SAMPLER_2D_ARRAY              = 0x8DC1;
	  var SAMPLER_2D_ARRAY_SHADOW       = 0x8DC4;
	  var SAMPLER_CUBE_SHADOW           = 0x8DC5;
	  var UNSIGNED_INT                  = 0x1405;
	  var UNSIGNED_INT_VEC2             = 0x8DC6;
	  var UNSIGNED_INT_VEC3             = 0x8DC7;
	  var UNSIGNED_INT_VEC4             = 0x8DC8;
	  var INT_SAMPLER_2D                = 0x8DCA;
	  var INT_SAMPLER_3D                = 0x8DCB;
	  var INT_SAMPLER_CUBE              = 0x8DCC;
	  var INT_SAMPLER_2D_ARRAY          = 0x8DCF;
	  var UNSIGNED_INT_SAMPLER_2D       = 0x8DD2;
	  var UNSIGNED_INT_SAMPLER_3D       = 0x8DD3;
	  var UNSIGNED_INT_SAMPLER_CUBE     = 0x8DD4;
	  var UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8DD7;
	
	  var TEXTURE_2D                    = 0x0DE1;
	  var TEXTURE_CUBE_MAP              = 0x8513;
	  var TEXTURE_3D                    = 0x806F;
	  var TEXTURE_2D_ARRAY              = 0x8C1A;
	
	  var typeMap = {};
	
	  /**
	   * Returns the corresponding bind point for a given sampler type
	   */
	  function getBindPointForSamplerType(gl, type) {
	    return typeMap[type].bindPoint;
	  }
	
	  // This kind of sucks! If you could compose functions as in `var fn = gl[name];`
	  // this code could be a lot smaller but that is sadly really slow (T_T)
	
	  function floatSetter(gl, location) {
	    return function(v) {
	      gl.uniform1f(location, v);
	    };
	  }
	
	  function floatArraySetter(gl, location) {
	    return function(v) {
	      gl.uniform1fv(location, v);
	    };
	  }
	
	  function floatVec2Setter(gl, location) {
	    return function(v) {
	      gl.uniform2fv(location, v);
	    };
	  }
	
	  function floatVec3Setter(gl, location) {
	    return function(v) {
	      gl.uniform3fv(location, v);
	    };
	  }
	
	  function floatVec4Setter(gl, location) {
	    return function(v) {
	      gl.uniform4fv(location, v);
	    };
	  }
	
	  function intSetter(gl, location) {
	    return function(v) {
	      gl.uniform1i(location, v);
	    };
	  }
	
	  function intArraySetter(gl, location) {
	    return function(v) {
	      gl.uniform1iv(location, v);
	    };
	  }
	
	  function intVec2Setter(gl, location) {
	    return function(v) {
	      gl.uniform2iv(location, v);
	    };
	  }
	
	  function intVec3Setter(gl, location) {
	    return function(v) {
	      gl.uniform3iv(location, v);
	    };
	  }
	
	  function intVec4Setter(gl, location) {
	    return function(v) {
	      gl.uniform4iv(location, v);
	    };
	  }
	
	  function uintSetter(gl, location) {
	    return function(v) {
	      gl.uniform1ui(location, v);
	    };
	  }
	
	  function uintArraySetter(gl, location) {
	    return function(v) {
	      gl.uniform1uiv(location, v);
	    };
	  }
	
	  function uintVec2Setter(gl, location) {
	    return function(v) {
	      gl.uniform2uiv(location, v);
	    };
	  }
	
	  function uintVec3Setter(gl, location) {
	    return function(v) {
	      gl.uniform3uiv(location, v);
	    };
	  }
	
	  function uintVec4Setter(gl, location) {
	    return function(v) {
	      gl.uniform4uiv(location, v);
	    };
	  }
	
	  function floatMat2Setter(gl, location) {
	    return function(v) {
	      gl.uniformMatrix2fv(location, false, v);
	    };
	  }
	
	  function floatMat3Setter(gl, location) {
	    return function(v) {
	      gl.uniformMatrix3fv(location, false, v);
	    };
	  }
	
	  function floatMat4Setter(gl, location) {
	    return function(v) {
	      gl.uniformMatrix4fv(location, false, v);
	    };
	  }
	
	  function floatMat23Setter(gl, location) {
	    return function(v) {
	      gl.uniformMatrix2x3fv(location, false, v);
	    };
	  }
	
	  function floatMat32Setter(gl, location) {
	    return function(v) {
	      gl.uniformMatrix3x2fv(location, false, v);
	    };
	  }
	
	  function floatMat24Setter(gl, location) {
	    return function(v) {
	      gl.uniformMatrix2x4fv(location, false, v);
	    };
	  }
	
	  function floatMat42Setter(gl, location) {
	    return function(v) {
	      gl.uniformMatrix4x2fv(location, false, v);
	    };
	  }
	
	  function floatMat34Setter(gl, location) {
	    return function(v) {
	      gl.uniformMatrix3x4fv(location, false, v);
	    };
	  }
	
	  function floatMat43Setter(gl, location) {
	    return function(v) {
	      gl.uniformMatrix4x3fv(location, false, v);
	    };
	  }
	
	  function samplerSetter(gl, type, unit, location) {
	    var bindPoint = getBindPointForSamplerType(gl, type);
	    return function(texture) {
	      gl.uniform1i(location, unit);
	      gl.activeTexture(gl.TEXTURE0 + unit);
	      gl.bindTexture(bindPoint, texture);
	    };
	  }
	
	  function samplerArraySetter(gl, type, unit, location, size) {
	    var bindPoint = getBindPointForSamplerType(gl, type);
	    var units = new Int32Array(size);
	    for (var ii = 0; ii < size; ++ii) {
	      units[ii] = unit + ii;
	    }
	
	    return function(textures) {
	      gl.uniform1iv(location, units);
	      textures.forEach(function(texture, index) {
	        gl.activeTexture(gl.TEXTURE0 + units[index]);
	        gl.bindTexture(bindPoint, texture);
	      });
	    };
	  }
	
	  typeMap[FLOAT]                         = { Type: Float32Array, size:  4, setter: floatSetter,      arraySetter: floatArraySetter, };
	  typeMap[FLOAT_VEC2]                    = { Type: Float32Array, size:  8, setter: floatVec2Setter,  };
	  typeMap[FLOAT_VEC3]                    = { Type: Float32Array, size: 12, setter: floatVec3Setter,  };
	  typeMap[FLOAT_VEC4]                    = { Type: Float32Array, size: 16, setter: floatVec4Setter,  };
	  typeMap[INT]                           = { Type: Int32Array,   size:  4, setter: intSetter,        arraySetter: intArraySetter, };
	  typeMap[INT_VEC2]                      = { Type: Int32Array,   size:  8, setter: intVec2Setter,    };
	  typeMap[INT_VEC3]                      = { Type: Int32Array,   size: 12, setter: intVec3Setter,    };
	  typeMap[INT_VEC4]                      = { Type: Int32Array,   size: 16, setter: intVec4Setter,    };
	  typeMap[UNSIGNED_INT]                  = { Type: Uint32Array,  size:  4, setter: uintSetter,       arraySetter: uintArraySetter, };
	  typeMap[UNSIGNED_INT_VEC2]             = { Type: Uint32Array,  size:  8, setter: uintVec2Setter,   };
	  typeMap[UNSIGNED_INT_VEC3]             = { Type: Uint32Array,  size: 12, setter: uintVec3Setter,   };
	  typeMap[UNSIGNED_INT_VEC4]             = { Type: Uint32Array,  size: 16, setter: uintVec4Setter,   };
	  typeMap[BOOL]                          = { Type: Uint32Array,  size:  4, setter: intSetter,        arraySetter: intArraySetter, };
	  typeMap[BOOL_VEC2]                     = { Type: Uint32Array,  size:  8, setter: intVec2Setter,    };
	  typeMap[BOOL_VEC3]                     = { Type: Uint32Array,  size: 12, setter: intVec3Setter,    };
	  typeMap[BOOL_VEC4]                     = { Type: Uint32Array,  size: 16, setter: intVec4Setter,    };
	  typeMap[FLOAT_MAT2]                    = { Type: Float32Array, size: 16, setter: floatMat2Setter,  };
	  typeMap[FLOAT_MAT3]                    = { Type: Float32Array, size: 36, setter: floatMat3Setter,  };
	  typeMap[FLOAT_MAT4]                    = { Type: Float32Array, size: 64, setter: floatMat4Setter,  };
	  typeMap[FLOAT_MAT2x3]                  = { Type: Float32Array, size: 24, setter: floatMat23Setter, };
	  typeMap[FLOAT_MAT2x4]                  = { Type: Float32Array, size: 32, setter: floatMat24Setter, };
	  typeMap[FLOAT_MAT3x2]                  = { Type: Float32Array, size: 24, setter: floatMat32Setter, };
	  typeMap[FLOAT_MAT3x4]                  = { Type: Float32Array, size: 48, setter: floatMat34Setter, };
	  typeMap[FLOAT_MAT4x2]                  = { Type: Float32Array, size: 32, setter: floatMat42Setter, };
	  typeMap[FLOAT_MAT4x3]                  = { Type: Float32Array, size: 48, setter: floatMat43Setter, };
	  typeMap[SAMPLER_2D]                    = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D,       };
	  typeMap[SAMPLER_CUBE]                  = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP, };
	  typeMap[SAMPLER_3D]                    = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_3D,       };
	  typeMap[SAMPLER_2D_SHADOW]             = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D,       };
	  typeMap[SAMPLER_2D_ARRAY]              = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY, };
	  typeMap[SAMPLER_2D_ARRAY_SHADOW]       = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY, };
	  typeMap[SAMPLER_CUBE_SHADOW]           = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP, };
	  typeMap[INT_SAMPLER_2D]                = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D,       };
	  typeMap[INT_SAMPLER_3D]                = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_3D,       };
	  typeMap[INT_SAMPLER_CUBE]              = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP, };
	  typeMap[INT_SAMPLER_2D_ARRAY]          = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY, };
	  typeMap[UNSIGNED_INT_SAMPLER_2D]       = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D,       };
	  typeMap[UNSIGNED_INT_SAMPLER_3D]       = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_3D,       };
	  typeMap[UNSIGNED_INT_SAMPLER_CUBE]     = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP, };
	  typeMap[UNSIGNED_INT_SAMPLER_2D_ARRAY] = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY, };
	
	  var attrTypeMap = {};
	  attrTypeMap[FLOAT_MAT2] = { size:  4, count: 2, };
	  attrTypeMap[FLOAT_MAT3] = { size:  9, count: 3, };
	  attrTypeMap[FLOAT_MAT4] = { size: 16, count: 4, };
	
	  // make sure we don't see a global gl
	  var gl = undefined;  // eslint-disable-line
	
	  /**
	   * Error Callback
	   * @callback ErrorCallback
	   * @param {string} msg error message.
	   * @param {number} [lineOffset] amount to add to line number
	   * @memberOf module:twgl
	   */
	
	  function addLineNumbers(src, lineOffset) {
	    lineOffset = lineOffset || 0;
	    ++lineOffset;
	
	    return src.split("\n").map(function(line, ndx) {
	      return (ndx + lineOffset) + ": " + line;
	    }).join("\n");
	  }
	
	  var spaceRE = /^[ \t]*\n/;
	
	  /**
	   * Loads a shader.
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
	   * @param {string} shaderSource The shader source.
	   * @param {number} shaderType The type of shader.
	   * @param {module:twgl.ErrorCallback} opt_errorCallback callback for errors.
	   * @return {WebGLShader} The created shader.
	   */
	  function loadShader(gl, shaderSource, shaderType, opt_errorCallback) {
	    var errFn = opt_errorCallback || error;
	    // Create the shader object
	    var shader = gl.createShader(shaderType);
	
	    // Remove the first end of line because WebGL 2.0 notrequirebecasebrowserifymessesups
	    // #version 300 es
	    // as the first line. No whitespace allowed before that line
	    // so
	    //
	    // <script>
	    // #version 300 es
	    // </script>
	    //
	    // Has one line before it which is invalid according to GLSL ES 3.00
	    //
	    var lineOffset = 0;
	    if (spaceRE.test(shaderSource)) {
	      lineOffset = 1;
	      shaderSource = shaderSource.replace(spaceRE, '');
	    }
	
	    // Load the shader source
	    gl.shaderSource(shader, shaderSource);
	
	    // Compile the shader
	    gl.compileShader(shader);
	
	    // Check the compile status
	    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
	    if (!compiled) {
	      // Something went wrong during compilation; get the error
	      var lastError = gl.getShaderInfoLog(shader);
	      errFn(addLineNumbers(shaderSource, lineOffset) + "\n*** Error compiling shader: " + lastError);
	      gl.deleteShader(shader);
	      return null;
	    }
	
	    return shader;
	  }
	
	  /**
	   * Creates a program, attaches shaders, binds attrib locations, links the
	   * program and calls useProgram.
	   *
	   * NOTE: There are 3 signatures for this function
	   *
	   *     twgl.createProgram(gl, [vs, fs], opt_errFunc);
	   *     twgl.createProgram(gl, [vs, fs], opt_attribs, opt_errFunc);
	   *     twgl.createProgram(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
	   *
	   * @param {WebGLShader[]} shaders The shaders to attach
	   * @param {string[]} [opt_attribs] An array of attribs names. Locations will be assigned by index if not passed in
	   * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
	   * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
	   *        on error. If you want something else pass an callback. It's passed an error message.
	   * @return {WebGLProgram?} the created program or null if error.
	   * @memberOf module:twgl/programs
	   */
	  function createProgram(
	      gl, shaders, opt_attribs, opt_locations, opt_errorCallback) {
	    if (typeof opt_locations === 'function') {
	      opt_errorCallback = opt_locations;
	      opt_locations = undefined;
	    }
	    if (typeof opt_attribs === 'function') {
	      opt_errorCallback = opt_attribs;
	      opt_attribs = undefined;
	    }
	    var errFn = opt_errorCallback || error;
	    var program = gl.createProgram();
	    shaders.forEach(function(shader) {
	      gl.attachShader(program, shader);
	    });
	    if (opt_attribs) {
	      opt_attribs.forEach(function(attrib,  ndx) {
	        gl.bindAttribLocation(
	            program,
	            opt_locations ? opt_locations[ndx] : ndx,
	            attrib);
	      });
	    }
	    gl.linkProgram(program);
	
	    // Check the link status
	    var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
	    if (!linked) {
	        // something went wrong with the link
	        var lastError = gl.getProgramInfoLog(program);
	        errFn("Error in program linking:" + lastError);
	
	        gl.deleteProgram(program);
	        return null;
	    }
	    return program;
	  }
	
	  /**
	   * Loads a shader from a script tag.
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
	   * @param {string} scriptId The id of the script tag.
	   * @param {number} [opt_shaderType] The type of shader. If not passed in it will
	   *     be derived from the type of the script tag.
	   * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors.
	   * @return {WebGLShader?} The created shader or null if error.
	   */
	  function createShaderFromScript(
	      gl, scriptId, opt_shaderType, opt_errorCallback) {
	    var shaderSource = "";
	    var shaderType;
	    var shaderScript = document.getElementById(scriptId);
	    if (!shaderScript) {
	      throw "*** Error: unknown script element" + scriptId;
	    }
	    shaderSource = shaderScript.text;
	
	    if (!opt_shaderType) {
	      if (shaderScript.type === "x-shader/x-vertex") {
	        shaderType = gl.VERTEX_SHADER;
	      } else if (shaderScript.type === "x-shader/x-fragment") {
	        shaderType = gl.FRAGMENT_SHADER;
	      } else if (shaderType !== gl.VERTEX_SHADER && shaderType !== gl.FRAGMENT_SHADER) {
	        throw "*** Error: unknown shader type";
	      }
	    }
	
	    return loadShader(
	        gl, shaderSource, opt_shaderType ? opt_shaderType : shaderType,
	        opt_errorCallback);
	  }
	
	  var defaultShaderType = [
	    "VERTEX_SHADER",
	    "FRAGMENT_SHADER",
	  ];
	
	  /**
	   * Creates a program from 2 script tags.
	   *
	   * NOTE: There are 3 signatures for this function
	   *
	   *     twgl.createProgramFromScripts(gl, [vs, fs], opt_errFunc);
	   *     twgl.createProgramFromScripts(gl, [vs, fs], opt_attribs, opt_errFunc);
	   *     twgl.createProgramFromScripts(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext
	   *        to use.
	   * @param {string[]} shaderScriptIds Array of ids of the script
	   *        tags for the shaders. The first is assumed to be the
	   *        vertex shader, the second the fragment shader.
	   * @param {string[]} [opt_attribs] An array of attribs names. Locations will be assigned by index if not passed in
	   * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
	   * @param {module:twgl.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
	   *        on error. If you want something else pass an callback. It's passed an error message.
	   * @return {WebGLProgram} The created program.
	   * @memberOf module:twgl/programs
	   */
	  function createProgramFromScripts(
	      gl, shaderScriptIds, opt_attribs, opt_locations, opt_errorCallback) {
	    var shaders = [];
	    for (var ii = 0; ii < shaderScriptIds.length; ++ii) {
	      var shader = createShaderFromScript(
	          gl, shaderScriptIds[ii], gl[defaultShaderType[ii]], opt_errorCallback);
	      if (!shader) {
	        return null;
	      }
	      shaders.push(shader);
	    }
	    return createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback);
	  }
	
	  /**
	   * Creates a program from 2 sources.
	   *
	   * NOTE: There are 3 signatures for this function
	   *
	   *     twgl.createProgramFromSource(gl, [vs, fs], opt_errFunc);
	   *     twgl.createProgramFromSource(gl, [vs, fs], opt_attribs, opt_errFunc);
	   *     twgl.createProgramFromSource(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext
	   *        to use.
	   * @param {string[]} shaderSourcess Array of sources for the
	   *        shaders. The first is assumed to be the vertex shader,
	   *        the second the fragment shader.
	   * @param {string[]} [opt_attribs] An array of attribs names. Locations will be assigned by index if not passed in
	   * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
	   * @param {module:twgl.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
	   *        on error. If you want something else pass an callback. It's passed an error message.
	   * @return {WebGLProgram} The created program.
	   * @memberOf module:twgl/programs
	   */
	  function createProgramFromSources(
	      gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
	    var shaders = [];
	    for (var ii = 0; ii < shaderSources.length; ++ii) {
	      var shader = loadShader(
	          gl, shaderSources[ii], gl[defaultShaderType[ii]], opt_errorCallback);
	      if (!shader) {
	        return null;
	      }
	      shaders.push(shader);
	    }
	    return createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback);
	  }
	
	  /**
	   * Creates setter functions for all uniforms of a shader
	   * program.
	   *
	   * @see {@link module:twgl.setUniforms}
	   *
	   * @param {WebGLProgram} program the program to create setters for.
	   * @returns {Object.<string, function>} an object with a setter by name for each uniform
	   * @memberOf module:twgl/programs
	   */
	  function createUniformSetters(gl, program) {
	    var textureUnit = 0;
	
	    /**
	     * Creates a setter for a uniform of the given program with it's
	     * location embedded in the setter.
	     * @param {WebGLProgram} program
	     * @param {WebGLUniformInfo} uniformInfo
	     * @returns {function} the created setter.
	     */
	    function createUniformSetter(program, uniformInfo) {
	      var location = gl.getUniformLocation(program, uniformInfo.name);
	      var isArray = (uniformInfo.size > 1 && uniformInfo.name.substr(-3) === "[0]");
	      var type = uniformInfo.type;
	      var typeInfo = typeMap[type];
	      if (!typeInfo) {
	        throw ("unknown type: 0x" + type.toString(16)); // we should never get here.
	      }
	      if (typeInfo.bindPoint) {
	        // it's a sampler
	        var unit = textureUnit;
	        textureUnit += uniformInfo.size;
	
	        if (isArray) {
	          return typeInfo.arraySetter(gl, type, unit, location, uniformInfo.size);
	        } else {
	          return typeInfo.setter(gl, type, unit, location, uniformInfo.size);
	        }
	      } else {
	        if (typeInfo.arraySetter && isArray) {
	          return typeInfo.arraySetter(gl, location);
	        } else {
	          return typeInfo.setter(gl, location);
	        }
	      }
	    }
	
	    var uniformSetters = { };
	    var numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
	
	    for (var ii = 0; ii < numUniforms; ++ii) {
	      var uniformInfo = gl.getActiveUniform(program, ii);
	      if (!uniformInfo) {
	        break;
	      }
	      var name = uniformInfo.name;
	      // remove the array suffix.
	      if (name.substr(-3) === "[0]") {
	        name = name.substr(0, name.length - 3);
	      }
	      var setter = createUniformSetter(program, uniformInfo);
	      uniformSetters[name] = setter;
	    }
	    return uniformSetters;
	  }
	
	  /**
	   * @typedef {Object} UniformData
	   * @property {number} type The WebGL type enum for this uniform
	   * @property {number} size The number of elements for this uniform
	   * @property {number} blockNdx The block index this uniform appears in
	   * @property {number} offset The byte offset in the block for this uniform's value
	   * @memberOf module:twgl
	   */
	
	  /**
	   * The specification for one UniformBlockObject
	   *
	   * @typedef {Object} BlockSpec
	   * @property {number} index The index of the block.
	   * @property {number} size The size in bytes needed for the block
	   * @property {number[]} uniformIndices The indices of the uniforms used by the block. These indices
	   *    correspond to entries in a UniformData array in the {@link module:twgl.UniformBlockSpec}.
	   * @property {bool} usedByVertexShader Self explanitory
	   * @property {bool} usedByFragmentShader Self explanitory
	   * @property {bool} used Self explanitory
	   * @memberOf module:twgl
	   */
	
	  /**
	   * A `UniformBlockSpec` represents the data needed to create and bind
	   * UniformBlockObjects for a given program
	   *
	   * @typedef {Object} UniformBlockSpec
	   * @property {Object.<string, module:twgl.BlockSpec> blockSpecs The BlockSpec for each block by block name
	   * @property {UniformData[]} uniformData An array of data for each uniform by uniform index.
	   * @memberOf module:twgl
	   */
	
	  /**
	   * Creates a UniformBlockSpec for the given program.
	   *
	   * A UniformBlockSpec represents the data needed to create and bind
	   * UniformBlockObjects
	   *
	   * @param {WebGL2RenderingContext} gl A WebGL2 Rendering Context
	   * @param {WebGLProgram} program A WebGLProgram for a successfully linked program
	   * @return {module:twgl.UniformBlockSpec} The created UniformBlockSpec
	   * @memberOf module:twgl/programs
	   */
	  function createUniformBlockSpecFromProgram(gl, program) {
	    var numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
	    var uniformData = [];
	    var uniformIndices = [];
	
	    for (var ii = 0; ii < numUniforms; ++ii) {
	      uniformIndices.push(ii);
	      uniformData.push({});
	      var uniformInfo = gl.getActiveUniform(program, ii);
	      if (!uniformInfo) {
	        break;
	      }
	      // REMOVE [0]?
	      uniformData[ii].name = uniformInfo.name;
	    }
	
	    [
	      [ "UNIFORM_TYPE", "type" ],
	      [ "UNIFORM_SIZE", "size" ],  // num elements
	      [ "UNIFORM_BLOCK_INDEX", "blockNdx" ],
	      [ "UNIFORM_OFFSET", "offset", ],
	    ].forEach(function(pair) {
	      var pname = pair[0];
	      var key = pair[1];
	      gl.getActiveUniforms(program, uniformIndices, gl[pname]).forEach(function(value, ndx) {
	        uniformData[ndx][key] = value;
	      });
	    });
	
	    var blockSpecs = {};
	
	    var numUniformBlocks = gl.getProgramParameter(program, gl.ACTIVE_UNIFORM_BLOCKS);
	    for (ii = 0; ii < numUniformBlocks; ++ii) {
	      var name = gl.getActiveUniformBlockName(program, ii);
	      var blockSpec = {
	        index: ii,
	        usedByVertexShader: gl.getActiveUniformBlockParameter(program, ii, gl.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER),
	        usedByFragmentShader: gl.getActiveUniformBlockParameter(program, ii, gl.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER),
	        size: gl.getActiveUniformBlockParameter(program, ii, gl.UNIFORM_BLOCK_DATA_SIZE),
	        uniformIndices: gl.getActiveUniformBlockParameter(program, ii, gl.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES),
	      };
	      blockSpec.used = blockSpec.usedByVertexSahder || blockSpec.usedByFragmentShader;
	      blockSpecs[name] = blockSpec;
	    }
	
	    return {
	      blockSpecs: blockSpecs,
	      uniformData: uniformData,
	    };
	  }
	
	  var arraySuffixRE = /\[\d+\]\.$/;  // better way to check?
	
	  /**
	   * Represents a UniformBlockObject including an ArrayBuffer with all the uniform values
	   * and a corresponding WebGLBuffer to hold those values on the GPU
	   *
	   * @typedef {Object} UniformBlockInfo
	   * @property {string} name The name of the block
	   * @property {ArrayBuffer} array The array buffer that contains the uniform values
	   * @property {Float32Array} asFloat A float view on the array buffer. This is useful
	   *    inspecting the contents of the buffer in the debugger.
	   * @property {WebGLBuffer} buffer A WebGL buffer that will hold a copy of the uniform values for rendering.
	   * @property {number} [offset] offset into buffer
	   * @property {Object.<string, ArrayBufferView>} uniforms A uniform name to ArrayBufferView map.
	   *   each Uniform has a correctly typed `ArrayBufferView` into array at the correct offset
	   *   and length of that uniform. So for example a float uniform would have a 1 float `Float32Array`
	   *   view. A single mat4 would have a 16 element `Float32Array` view. An ivec2 would have an
	   *   `Int32Array` view, etc.
	   * @memberOf module:twgl
	   */
	
	  /**
	   * Creates a `UniformBlockInfo` for the specified block
	   *
	   * Note: **If the blockName matches no existing blocks a warning is printed to the console and a dummy
	   * `UniformBlockInfo` is returned**. This is because when debugging GLSL
	   * it is common to comment out large portions of a shader or for example set
	   * the final output to a constant. When that happens blocks get optimized out.
	   * If this function did not create dummy blocks your code would crash when debugging.
	   *
	   * @param {WebGL2RenderingContext} gl A WebGL2RenderingContext
	   * @param {WebGLProgram} program A WebGLProgram
	   * @param {module:twgl.UniformBlockSpec} uinformBlockSpec. A UniformBlockSpec as returned
	   *     from {@link module:twgl.createUniformBlockSpecFromProgram}.
	   * @param {string} blockName The name of the block.
	   * @return {module:twgl.UniformBlockInfo} The created UniformBlockInfo
	   * @memberOf module:twgl/programs
	   */
	  function createUniformBlockInfoFromProgram(gl, program, uniformBlockSpec, blockName) {
	    var blockSpecs = uniformBlockSpec.blockSpecs;
	    var uniformData = uniformBlockSpec.uniformData;
	    var blockSpec = blockSpecs[blockName];
	    if (!blockSpec) {
	      warn("no uniform block object named:", blockName);
	      return {
	        name: blockName,
	        uniforms: {},
	      };
	    }
	    var array = new ArrayBuffer(blockSpec.size);
	    var buffer = gl.createBuffer();
	    var uniformBufferIndex = blockSpec.index;
	    gl.bindBuffer(gl.UNIFORM_BUFFER, buffer);
	    gl.uniformBlockBinding(program, blockSpec.index, uniformBufferIndex);
	
	    var prefix = blockName + ".";
	    if (arraySuffixRE.test(prefix)) {
	      prefix = prefix.replace(arraySuffixRE, ".");
	    }
	    var uniforms = {};
	    blockSpec.uniformIndices.forEach(function(uniformNdx) {
	      var data = uniformData[uniformNdx];
	      var typeInfo = typeMap[data.type];
	      var Type = typeInfo.Type;
	      var length = data.size * typeInfo.size;
	      var name = data.name;
	      if (name.substr(0, prefix.length) === prefix) {
	        name = name.substr(prefix.length);
	      }
	      uniforms[name] = new Type(array, data.offset, length / Type.BYTES_PER_ELEMENT);
	    });
	    return {
	      name: blockName,
	      array: array,
	      asFloat: new Float32Array(array),  // for debugging
	      buffer: buffer,
	      uniforms: uniforms,
	    };
	  }
	
	  /**
	   * Creates a `UniformBlockInfo` for the specified block
	   *
	   * Note: **If the blockName matches no existing blocks a warning is printed to the console and a dummy
	   * `UniformBlockInfo` is returned**. This is because when debugging GLSL
	   * it is common to comment out large portions of a shader or for example set
	   * the final output to a constant. When that happens blocks get optimized out.
	   * If this function did not create dummy blocks your code would crash when debugging.
	   *
	   * @param {WebGL2RenderingContext} gl A WebGL2RenderingContext
	   * @param {module:twgl.ProgramInfo} programInfo a `ProgramInfo`
	   *     as returned from {@link module:twgl.createProgramInfo}
	   * @param {string} blockName The name of the block.
	   * @return {module:twgl.UniformBlockInfo} The created UniformBlockInfo
	   * @memberOf module:twgl/programs
	   */
	  function createUniformBlockInfo(gl, programInfo, blockName) {
	    return createUniformBlockInfoFromProgram(gl, programInfo.program, programInfo.uniformBlockSpec, blockName);
	  }
	
	  /**
	   * Binds a unform block to the matching uniform block point.
	   * Matches by blocks by name so blocks must have the same name not just the same
	   * structure.
	   *
	   * If you have changed any values and you upload the valus into the corresponding WebGLBuffer
	   * call {@link module:twgl.setUniformBlock} instead.
	   *
	   * @param {WebGL2RenderingContext} gl A WebGL 2 rendering context.
	   * @param {(module:twgl.ProgramInfo|module:twgl.UniformBlockSpec)} programInfo a `ProgramInfo`
	   *     as returned from {@link module:twgl.createProgramInfo} or or `UniformBlockSpec` as
	   *     returned from {@link module:twgl.createUniformBlockSpecFromProgram}.
	   * @param {module:twgl.UniformBlockInfo} uniformBlockInfo a `UniformBlockInfo` as returned from
	   *     {@link module:twgl.createUniformBlockInfo}.
	   * @return {bool} true if buffer was bound. If the programInfo has no block with the same block name
	   *     no buffer is bound.
	   * @memberOf module:twgl/programs
	   */
	  function bindUniformBlock(gl, programInfo, uniformBlockInfo) {
	    var uniformBlockSpec = programInfo.uniformBlockSpec || programInfo;
	    var blockSpec = uniformBlockSpec.blockSpecs[uniformBlockInfo.name];
	    if (blockSpec) {
	      var bufferBindIndex = blockSpec.index;
	      gl.bindBufferRange(gl.UNIFORM_BUFFER, bufferBindIndex, uniformBlockInfo.buffer, uniformBlockInfo.offset || 0, uniformBlockInfo.array.byteLength);
	      return true;
	    }
	    return false;
	  }
	
	  /**
	   * Uploads the current uniform values to the corresponding WebGLBuffer
	   * and binds that buffer to the program's corresponding bind point for the uniform block object.
	   *
	   * If you haven't changed any values and you only need to bind the uniform block object
	   * call {@link module:twgl.bindUniformBlock} instead.
	   *
	   * @param {WebGL2RenderingContext} gl A WebGL 2 rendering context.
	   * @param {(module:twgl.ProgramInfo|module:twgl.UniformBlockSpec)} programInfo a `ProgramInfo`
	   *     as returned from {@link module:twgl.createProgramInfo} or or `UniformBlockSpec` as
	   *     returned from {@link module:twgl.createUniformBlockSpecFromProgram}.
	   * @param {module:twgl.UniformBlockInfo} uniformBlockInfo a `UniformBlockInfo` as returned from
	   *     {@link module:twgl.createUniformBlockInfo}.
	   * @memberOf module:twgl/programs
	   */
	  function setUniformBlock(gl, programInfo, uniformBlockInfo) {
	    if (bindUniformBlock(gl, programInfo, uniformBlockInfo)) {
	      gl.bufferData(gl.UNIFORM_BUFFER, uniformBlockInfo.array, gl.DYNAMIC_DRAW);
	    }
	  }
	
	  /**
	   * Sets values of a uniform block object
	   *
	   * @param {module:twgl.UniformBlockInfo} uniformBlockInfo A UniformBlockInfo as returned by {@link module:twgl.createUniformBlockInfo}.
	   * @param {Object.<string, ?>} values A uniform name to value map where the value is correct for the given
	   *    type of uniform. So for example given a block like
	   *
	   *       uniform SomeBlock {
	   *         float someFloat;
	   *         vec2 someVec2;
	   *         vec3 someVec3Array[2];
	   *         int someInt;
	   *       }
	   *
	   *  You can set the values of the uniform block with
	   *
	   *       twgl.setBlockUniforms(someBlockInfo, {
	   *          someFloat: 12.3,
	   *          someVec2: [1, 2],
	   *          someVec3Array: [1, 2, 3, 4, 5, 6],
	   *          someInt: 5,
	   *       }
	   *
	   *  Arrays can be JavaScript arrays or typed arrays
	   *
	   *  Any name that doesn't match will be ignored
	   * @memberOf module:twgl/programs
	   */
	  function setBlockUniforms(uniformBlockInfo, values) {
	    var uniforms = uniformBlockInfo.uniforms;
	    for (var name in values) {
	      var array = uniforms[name];
	      if (array) {
	        var value = values[name];
	        if (value.length) {
	          array.set(value);
	        } else {
	          array[0] = value;
	        }
	      }
	    }
	  }
	
	  /**
	   * Set uniforms and binds related textures.
	   *
	   * example:
	   *
	   *     var programInfo = createProgramInfo(
	   *         gl, ["some-vs", "some-fs"]);
	   *
	   *     var tex1 = gl.createTexture();
	   *     var tex2 = gl.createTexture();
	   *
	   *     ... assume we setup the textures with data ...
	   *
	   *     var uniforms = {
	   *       u_someSampler: tex1,
	   *       u_someOtherSampler: tex2,
	   *       u_someColor: [1,0,0,1],
	   *       u_somePosition: [0,1,1],
	   *       u_someMatrix: [
	   *         1,0,0,0,
	   *         0,1,0,0,
	   *         0,0,1,0,
	   *         0,0,0,0,
	   *       ],
	   *     };
	   *
	   *     gl.useProgram(program);
	   *
	   * This will automatically bind the textures AND set the
	   * uniforms.
	   *
	   *     twgl.setUniforms(programInfo, uniforms);
	   *
	   * For the example above it is equivalent to
	   *
	   *     var texUnit = 0;
	   *     gl.activeTexture(gl.TEXTURE0 + texUnit);
	   *     gl.bindTexture(gl.TEXTURE_2D, tex1);
	   *     gl.uniform1i(u_someSamplerLocation, texUnit++);
	   *     gl.activeTexture(gl.TEXTURE0 + texUnit);
	   *     gl.bindTexture(gl.TEXTURE_2D, tex2);
	   *     gl.uniform1i(u_someSamplerLocation, texUnit++);
	   *     gl.uniform4fv(u_someColorLocation, [1, 0, 0, 1]);
	   *     gl.uniform3fv(u_somePositionLocation, [0, 1, 1]);
	   *     gl.uniformMatrix4fv(u_someMatrix, false, [
	   *         1,0,0,0,
	   *         0,1,0,0,
	   *         0,0,1,0,
	   *         0,0,0,0,
	   *       ]);
	   *
	   * Note it is perfectly reasonable to call `setUniforms` multiple times. For example
	   *
	   *     var uniforms = {
	   *       u_someSampler: tex1,
	   *       u_someOtherSampler: tex2,
	   *     };
	   *
	   *     var moreUniforms {
	   *       u_someColor: [1,0,0,1],
	   *       u_somePosition: [0,1,1],
	   *       u_someMatrix: [
	   *         1,0,0,0,
	   *         0,1,0,0,
	   *         0,0,1,0,
	   *         0,0,0,0,
	   *       ],
	   *     };
	   *
	   *     twgl.setUniforms(programInfo, uniforms);
	   *     twgl.setUniforms(programInfo, moreUniforms);
	   *
	   * @param {(module:twgl.ProgramInfo|Object.<string, function>)} setters a `ProgramInfo` as returned from `createProgramInfo` or the setters returned from
	   *        `createUniformSetters`.
	   * @param {Object.<string, ?>} values an object with values for the
	   *        uniforms.
	   *   You can pass multiple objects by putting them in an array or by calling with more arguments.For example
	   *
	   *     var sharedUniforms = {
	   *       u_fogNear: 10,
	   *       u_projection: ...
	   *       ...
	   *     };
	   *
	   *     var localUniforms = {
	   *       u_world: ...
	   *       u_diffuseColor: ...
	   *     };
	   *
	   *     twgl.setUniforms(programInfo, sharedUniforms, localUniforms);
	   *
	   *     // is the same as
	   *
	   *     twgl.setUniforms(programInfo, [sharedUniforms, localUniforms]);
	   *
	   *     // is the same as
	   *
	   *     twgl.setUniforms(programInfo, sharedUniforms);
	   *     twgl.setUniforms(programInfo, localUniforms};
	   *
	   * @memberOf module:twgl/programs
	   */
	  function setUniforms(setters, values) {  // eslint-disable-line
	    var actualSetters = setters.uniformSetters || setters;
	    var numArgs = arguments.length;
	    for (var andx = 1; andx < numArgs; ++andx) {
	      var vals = arguments[andx];
	      if (Array.isArray(vals)) {
	        var numValues = vals.length;
	        for (var ii = 0; ii < numValues; ++ii) {
	          setUniforms(actualSetters, vals[ii]);
	        }
	      } else {
	        for (var name in vals) {
	          var setter = actualSetters[name];
	          if (setter) {
	            setter(vals[name]);
	          }
	        }
	      }
	    }
	  }
	
	  /**
	   * Creates setter functions for all attributes of a shader
	   * program. You can pass this to {@link module:twgl.setBuffersAndAttributes} to set all your buffers and attributes.
	   *
	   * @see {@link module:twgl.setAttributes} for example
	   * @param {WebGLProgram} program the program to create setters for.
	   * @return {Object.<string, function>} an object with a setter for each attribute by name.
	   * @memberOf module:twgl/programs
	   */
	  function createAttributeSetters(gl, program) {
	    var attribSetters = {
	    };
	
	    function createAttribSetter(index) {
	      return function(b) {
	        gl.bindBuffer(gl.ARRAY_BUFFER, b.buffer);
	        gl.enableVertexAttribArray(index);
	        gl.vertexAttribPointer(
	            index, b.numComponents || b.size, b.type || gl.FLOAT, b.normalize || false, b.stride || 0, b.offset || 0);
	      };
	    }
	
	    function createMatAttribSetter(index, typeInfo) {
	      var defaultSize = typeInfo.size;
	      var count = typeInfo.count;
	
	      return function(b) {
	        gl.bindBuffer(gl.ARRAY_BUFFER, b.buffer);
	        var numComponents = b.size || b.numComponents || defaultSize;
	        var size = numComponents / count;
	        var type = b.type || gl.FLOAT;
	        var typeInfo = typeMap[type];
	        var stride = typeInfo.size * numComponents;
	        var normalize = b.normalize || false;
	        var offset = b.offset || 0;
	        var rowOffset = stride / count;
	        for (var i = 0; i < count; ++i) {
	          gl.enableVertexAttribArray(index + i);
	          gl.vertexAttribPointer(
	              index + i, size, type, normalize, stride, offset + rowOffset * i);
	        }
	      };
	    }
	
	    var numAttribs = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
	    for (var ii = 0; ii < numAttribs; ++ii) {
	      var attribInfo = gl.getActiveAttrib(program, ii);
	      if (!attribInfo) {
	        break;
	      }
	      var index = gl.getAttribLocation(program, attribInfo.name);
	      var typeInfo = attrTypeMap[attribInfo.type];
	      if (typeInfo) {
	        attribSetters[attribInfo.name] = createMatAttribSetter(index, typeInfo);
	      } else {
	        attribSetters[attribInfo.name] = createAttribSetter(index);
	      }
	    }
	
	    return attribSetters;
	  }
	
	  /**
	   * Sets attributes and binds buffers (deprecated... use {@link module:twgl.setBuffersAndAttributes})
	   *
	   * Example:
	   *
	   *     var program = createProgramFromScripts(
	   *         gl, ["some-vs", "some-fs");
	   *
	   *     var attribSetters = createAttributeSetters(program);
	   *
	   *     var positionBuffer = gl.createBuffer();
	   *     var texcoordBuffer = gl.createBuffer();
	   *
	   *     var attribs = {
	   *       a_position: {buffer: positionBuffer, numComponents: 3},
	   *       a_texcoord: {buffer: texcoordBuffer, numComponents: 2},
	   *     };
	   *
	   *     gl.useProgram(program);
	   *
	   * This will automatically bind the buffers AND set the
	   * attributes.
	   *
	   *     setAttributes(attribSetters, attribs);
	   *
	   * Properties of attribs. For each attrib you can add
	   * properties:
	   *
	   * *   type: the type of data in the buffer. Default = gl.FLOAT
	   * *   normalize: whether or not to normalize the data. Default = false
	   * *   stride: the stride. Default = 0
	   * *   offset: offset into the buffer. Default = 0
	   *
	   * For example if you had 3 value float positions, 2 value
	   * float texcoord and 4 value uint8 colors you'd setup your
	   * attribs like this
	   *
	   *     var attribs = {
	   *       a_position: {buffer: positionBuffer, numComponents: 3},
	   *       a_texcoord: {buffer: texcoordBuffer, numComponents: 2},
	   *       a_color: {
	   *         buffer: colorBuffer,
	   *         numComponents: 4,
	   *         type: gl.UNSIGNED_BYTE,
	   *         normalize: true,
	   *       },
	   *     };
	   *
	   * @param {Object.<string, function>} setters Attribute setters as returned from createAttributeSetters
	   * @param {Object.<string, module:twgl.AttribInfo>} buffers AttribInfos mapped by attribute name.
	   * @memberOf module:twgl/programs
	   * @deprecated use {@link module:twgl.setBuffersAndAttributes}
	   */
	  function setAttributes(setters, buffers) {
	    for (var name in buffers) {
	      var setter = setters[name];
	      if (setter) {
	        setter(buffers[name]);
	      }
	    }
	  }
	
	  /**
	   * Sets attributes and buffers including the `ELEMENT_ARRAY_BUFFER` if appropriate
	   *
	   * Example:
	   *
	   *     var programInfo = createProgramInfo(
	   *         gl, ["some-vs", "some-fs");
	   *
	   *     var arrays = {
	   *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
	   *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
	   *     };
	   *
	   *     var bufferInfo = createBufferInfoFromArrays(gl, arrays);
	   *
	   *     gl.useProgram(programInfo.program);
	   *
	   * This will automatically bind the buffers AND set the
	   * attributes.
	   *
	   *     setBuffersAndAttributes(gl, programInfo, bufferInfo);
	   *
	   * For the example above it is equivilent to
	   *
	   *     gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
	   *     gl.enableVertexAttribArray(a_positionLocation);
	   *     gl.vertexAttribPointer(a_positionLocation, 3, gl.FLOAT, false, 0, 0);
	   *     gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
	   *     gl.enableVertexAttribArray(a_texcoordLocation);
	   *     gl.vertexAttribPointer(a_texcoordLocation, 4, gl.FLOAT, false, 0, 0);
	   *
	   * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
	   * @param {(module:twgl.ProgramInfo|Object.<string, function>)} setters A `ProgramInfo` as returned from {@link module:twgl.createProgrmaInfo} or Attribute setters as returned from {@link module:twgl.createAttributeSetters}
	   * @param {(module:twgl.BufferInfo|module:twgl.vertexArrayInfo)} buffers a `BufferInfo` as returned from {@link module:twgl.createBufferInfoFromArrays}.
	   *   or a `VertexArrayInfo` as returned from {@link module:twgl.createVertexArrayInfo}
	   * @memberOf module:twgl/programs
	   */
	  function setBuffersAndAttributes(gl, programInfo, buffers) {
	    if (buffers.vertexArrayObject) {
	      gl.bindVertexArray(buffers.vertexArrayObject);
	    } else {
	      setAttributes(programInfo.attribSetters || programInfo, buffers.attribs);
	      if (buffers.indices) {
	        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
	      }
	    }
	  }
	
	  /**
	   * @typedef {Object} ProgramInfo
	   * @property {WebGLProgram} program A shader program
	   * @property {Object<string, function>} uniformSetters object of setters as returned from createUniformSetters,
	   * @property {Object<string, function>} attribSetters object of setters as returned from createAttribSetters,
	   * @memberOf module:twgl
	   */
	
	  /**
	   * Creates a ProgramInfo from an existing program.
	   *
	   * A ProgramInfo contains
	   *
	   *     programInfo = {
	   *        program: WebGLProgram,
	   *        uniformSetters: object of setters as returned from createUniformSetters,
	   *        attribSetters: object of setters as returned from createAttribSetters,
	   *     }
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext
	   *        to use.
	   * @param {WebGLProgram} program an existing WebGLProgram.
	   * @return {module:twgl.ProgramInfo} The created ProgramInfo.
	   * @memberOf module:twgl/programs
	   */
	  function createProgramInfoFromProgram(gl, program) {
	    var uniformSetters = createUniformSetters(gl, program);
	    var attribSetters = createAttributeSetters(gl, program);
	    var programInfo = {
	      program: program,
	      uniformSetters: uniformSetters,
	      attribSetters: attribSetters,
	    };
	
	    if (utils.isWebGL2(gl)) {
	      programInfo.uniformBlockSpec = createUniformBlockSpecFromProgram(gl, program);
	    }
	
	    return programInfo;
	  }
	
	  /**
	   * Creates a ProgramInfo from 2 sources.
	   *
	   * A ProgramInfo contains
	   *
	   *     programInfo = {
	   *        program: WebGLProgram,
	   *        uniformSetters: object of setters as returned from createUniformSetters,
	   *        attribSetters: object of setters as returned from createAttribSetters,
	   *     }
	   *
	   * NOTE: There are 3 signatures for this function
	   *
	   *     twgl.createProgramInfo(gl, [vs, fs], opt_errFunc);
	   *     twgl.createProgramInfo(gl, [vs, fs], opt_attribs, opt_errFunc);
	   *     twgl.createProgramInfo(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext
	   *        to use.
	   * @param {string[]} shaderSourcess Array of sources for the
	   *        shaders or ids. The first is assumed to be the vertex shader,
	   *        the second the fragment shader.
	   * @param {string[]} [opt_attribs] An array of attribs names. Locations will be assigned by index if not passed in
	   * @param {number[]} [opt_locations] The locations for the attributes. A parallel array to opt_attribs letting you assign locations.
	   * @param {module:twgl.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
	   *        on error. If you want something else pass an callback. It's passed an error message.
	   * @return {module:twgl.ProgramInfo?} The created ProgramInfo or null if it failed to link or compile
	   * @memberOf module:twgl/programs
	   */
	  function createProgramInfo(
	      gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
	    if (typeof opt_locations === 'function') {
	      opt_errorCallback = opt_locations;
	      opt_locations = undefined;
	    }
	    if (typeof opt_attribs === 'function') {
	      opt_errorCallback = opt_attribs;
	      opt_attribs = undefined;
	    }
	    var errFn = opt_errorCallback || error;
	    var good = true;
	    shaderSources = shaderSources.map(function(source) {
	      // Lets assume if there is no \n it's an id
	      if (source.indexOf("\n") < 0) {
	        var script = document.getElementById(source);
	        if (!script) {
	          errFn("no element with id: " + source);
	          good = false;
	        } else {
	          source = script.text;
	        }
	      }
	      return source;
	    });
	    if (!good) {
	      return null;
	    }
	    var program = createProgramFromSources(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback);
	    if (!program) {
	      return null;
	    }
	    return createProgramInfoFromProgram(gl, program);
	  }
	
	  // Using quotes prevents Uglify from changing the names.
	  // No speed diff AFAICT.
	  return {
	    "createAttributeSetters": createAttributeSetters,
	
	    "createProgram": createProgram,
	    "createProgramFromScripts": createProgramFromScripts,
	    "createProgramFromSources": createProgramFromSources,
	    "createProgramInfo": createProgramInfo,
	    "createProgramInfoFromProgram": createProgramInfoFromProgram,
	    "createUniformSetters": createUniformSetters,
	    "createUniformBlockSpecFromProgram": createUniformBlockSpecFromProgram,
	    "createUniformBlockInfoFromProgram": createUniformBlockInfoFromProgram,
	    "createUniformBlockInfo": createUniformBlockInfo,
	
	    "setAttributes": setAttributes,
	    "setBuffersAndAttributes": setBuffersAndAttributes,
	    "setUniforms": setUniforms,
	    "setUniformBlock": setUniformBlock,
	    "setBlockUniforms": setBlockUniforms,
	    "bindUniformBlock": bindUniformBlock,
	  };
	
	});
	
	
	/*
	 * Copyright 2015, Gregg Tavares.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are
	 * met:
	 *
	 *     * Redistributions of source code must retain the above copyright
	 * notice, this list of conditions and the following disclaimer.
	 *     * Redistributions in binary form must reproduce the above
	 * copyright notice, this list of conditions and the following disclaimer
	 * in the documentation and/or other materials provided with the
	 * distribution.
	 *     * Neither the name of Gregg Tavares. nor the names of his
	 * contributors may be used to endorse or promote products derived from
	 * this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */
	
	define('twgl/draw',[
	    './programs',
	  ], function(
	    programs) {
	  
	
	  /**
	   * Drawing related functions
	   *
	   * For backward compatibily they are available at both `twgl.draw` and `twgl`
	   * itself
	   *
	   * See {@link module:twgl} for core functions
	   *
	   * @module twgl/draw
	   */
	
	  /**
	   * Calls `gl.drawElements` or `gl.drawArrays`, whichever is appropriate
	   *
	   * normally you'd call `gl.drawElements` or `gl.drawArrays` yourself
	   * but calling this means if you switch from indexed data to non-indexed
	   * data you don't have to remember to update your draw call.
	   *
	   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
	   * @param {enum} type eg (gl.TRIANGLES, gl.LINES, gl.POINTS, gl.TRIANGLE_STRIP, ...)
	   * @param {(module:twgl.BufferInfo|module:twgl.VertexArrayInfo)} bufferInfo A BufferInfo as returned from {@link module:twgl.createBufferInfoFromArrays} or
	   *   a VertexArrayInfo as returned from {@link module:twgl.createVertexArrayInfo}
	   * @param {number} [count] An optional count. Defaults to bufferInfo.numElements
	   * @param {number} [offset] An optional offset. Defaults to 0.
	   * @memberOf module:twgl/draw
	   */
	  function drawBufferInfo(gl, type, bufferInfo, count, offset) {
	    var indices = bufferInfo.indices;
	    var elementType = bufferInfo.elementType;
	    var numElements = count === undefined ? bufferInfo.numElements : count;
	    offset = offset === undefined ? 0 : offset;
	    if (elementType || indices) {
	      gl.drawElements(type, numElements, elementType === undefined ? gl.UNSIGNED_SHORT : bufferInfo.elementType, offset);
	    } else {
	      gl.drawArrays(type, offset, numElements);
	    }
	  }
	
	  /**
	   * A DrawObject is useful for putting objects in to an array and passing them to {@link module:twgl.drawObjectList}.
	   *
	   * You need either a `BufferInfo` or a `VertexArrayInfo`.
	   *
	   * @typedef {Object} DrawObject
	   * @property {boolean} [active] whether or not to draw. Default = `true` (must be `false` to be not true). In otherwords `undefined` = `true`
	   * @property {number} [type] type to draw eg. `gl.TRIANGLES`, `gl.LINES`, etc...
	   * @property {module:twgl.ProgramInfo} programInfo A ProgramInfo as returned from {@link module:twgl.createProgramInfo}
	   * @property {module:twgl.BufferInfo} [bufferInfo] A BufferInfo as returned from {@link module:twgl.createBufferInfoFromArrays}
	   * @property {module:twgl.VertexArrayInfo} [vertexArrayInfo] A VertexArrayInfo as returned from {@link module:twgl.createVertexArrayInfo}
	   * @property {Object<string, ?>} uniforms The values for the uniforms.
	   *   You can pass multiple objects by putting them in an array. For example
	   *
	   *     var sharedUniforms = {
	   *       u_fogNear: 10,
	   *       u_projection: ...
	   *       ...
	   *     };
	   *
	   *     var localUniforms = {
	   *       u_world: ...
	   *       u_diffuseColor: ...
	   *     };
	   *
	   *     var drawObj = {
	   *       ...
	   *       uniforms: [sharedUniforms, localUniforms],
	   *     };
	   *
	   * @property {number} [offset] the offset to pass to `gl.drawArrays` or `gl.drawElements`. Defaults to 0.
	   * @property {number} [count] the count to pass to `gl.drawArrays` or `gl.drawElemnts`. Defaults to bufferInfo.numElements.
	   * @memberOf module:twgl
	   */
	
	  /**
	   * Draws a list of objects
	   * @param {DrawObject[]} objectsToDraw an array of objects to draw.
	   * @memberOf module:twgl/draw
	   */
	  function drawObjectList(gl, objectsToDraw) {
	    var lastUsedProgramInfo = null;
	    var lastUsedBufferInfo = null;
	
	    objectsToDraw.forEach(function(object) {
	      if (object.active === false) {
	        return;
	      }
	
	      var programInfo = object.programInfo;
	      var bufferInfo = object.vertexArrayInfo || object.bufferInfo;
	      var bindBuffers = false;
	      var type = object.type === undefined ? gl.TRIANGLES : object.type;
	
	      if (programInfo !== lastUsedProgramInfo) {
	        lastUsedProgramInfo = programInfo;
	        gl.useProgram(programInfo.program);
	
	        // We have to rebind buffers when changing programs because we
	        // only bind buffers the program uses. So if 2 programs use the same
	        // bufferInfo but the 1st one uses only positions the when the
	        // we switch to the 2nd one some of the attributes will not be on.
	        bindBuffers = true;
	      }
	
	      // Setup all the needed attributes.
	      if (bindBuffers || bufferInfo !== lastUsedBufferInfo) {
	        if (lastUsedBufferInfo && lastUsedBufferInfo.vertexArrayObject && !bufferInfo.vertexArrayObject) {
	          gl.bindVertexArray(null);
	        }
	        lastUsedBufferInfo = bufferInfo;
	        programs.setBuffersAndAttributes(gl, programInfo, bufferInfo);
	      }
	
	      // Set the uniforms.
	      programs.setUniforms(programInfo, object.uniforms);
	
	      // Draw
	      drawBufferInfo(gl, type, bufferInfo, object.count, object.offset);
	    });
	
	    if (lastUsedBufferInfo.vertexArrayObject) {
	      gl.bindVertexArray(null);
	    }
	  }
	
	  // Using quotes prevents Uglify from changing the names.
	  // No speed diff AFAICT.
	  return {
	    "drawBufferInfo": drawBufferInfo,
	    "drawObjectList": drawObjectList,
	  };
	
	});
	
	
	/*
	 * Copyright 2015, Gregg Tavares.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are
	 * met:
	 *
	 *     * Redistributions of source code must retain the above copyright
	 * notice, this list of conditions and the following disclaimer.
	 *     * Redistributions in binary form must reproduce the above
	 * copyright notice, this list of conditions and the following disclaimer
	 * in the documentation and/or other materials provided with the
	 * distribution.
	 *     * Neither the name of Gregg Tavares. nor the names of his
	 * contributors may be used to endorse or promote products derived from
	 * this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */
	
	define('twgl/textures',[
	    './typedarrays',
	    './utils',
	  ], function(
	    typedArrays,
	    utils) {
	  
	
	  /**
	   * Low level texture related functions
	   *
	   * You should generally not need to use these functions. They are provided
	   * for those cases where you're doing something out of the ordinary
	   * and you need lower level access.
	   *
	   * For backward compatibily they are available at both `twgl.textures` and `twgl`
	   * itself
	   *
	   * See {@link module:twgl} for core functions
	   *
	   * @module twgl/textures
	   */
	
	  // make sure we don't see a global gl
	  var gl = undefined;  // eslint-disable-line
	  var defaults = {
	    textureColor: new Uint8Array([128, 192, 255, 255]),
	    textureOptions: {},
	    crossOrigin: undefined,
	  };
	  var isArrayBuffer = typedArrays.isArrayBuffer;
	
	  /* PixelFormat */
	  var ALPHA                          = 0x1906;
	  var RGB                            = 0x1907;
	  var RGBA                           = 0x1908;
	  var LUMINANCE                      = 0x1909;
	  var LUMINANCE_ALPHA                = 0x190A;
	
	  /* TextureWrapMode */
	  var REPEAT                         = 0x2901;  // eslint-disable-line
	  var MIRRORED_REPEAT                = 0x8370;  // eslint-disable-line
	
	  /* TextureMagFilter */
	  var NEAREST                        = 0x2600;  // eslint-disable-line
	
	  /* TextureMinFilter */
	  var NEAREST_MIPMAP_NEAREST         = 0x2700;  // eslint-disable-line
	  var LINEAR_MIPMAP_NEAREST          = 0x2701;  // eslint-disable-line
	  var NEAREST_MIPMAP_LINEAR          = 0x2702;  // eslint-disable-line
	  var LINEAR_MIPMAP_LINEAR           = 0x2703;  // eslint-disable-line
	
	  /**
	   * Sets the default texture color.
	   *
	   * The default texture color is used when loading textures from
	   * urls. Because the URL will be loaded async we'd like to be
	   * able to use the texture immediately. By putting a 1x1 pixel
	   * color in the texture we can start using the texture before
	   * the URL has loaded.
	   *
	   * @param {number[]} color Array of 4 values in the range 0 to 1
	   * @deprecated see {@link module:twgl.setDefaults}
	   * @memberOf module:twgl/textures
	   */
	  function setDefaultTextureColor(color) {
	    defaults.textureColor = new Uint8Array([color[0] * 255, color[1] * 255, color[2] * 255, color[3] * 255]);
	  }
	
	  function setDefaults(newDefaults) {
	    utils.copyExistingProperties(newDefaults, defaults);
	    if (newDefaults.textureColor) {
	      setDefaultTextureColor(newDefaults.textureColor);
	    }
	  }
	
	  /**
	   * Gets a string for gl enum
	   *
	   * Note: Several enums are the same. Without more
	   * context (which function) it's impossible to always
	   * give the correct enum.
	   *
	   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
	   * @param {number} value the value of the enum you want to look up.
	   */
	  var glEnumToString = (function() {
	    var enums;
	
	    function init(gl) {
	      if (!enums) {
	        enums = {};
	        Object.keys(gl).forEach(function(key) {
	          if (typeof gl[key] === 'number') {
	            enums[gl[key]] = key;
	          }
	        });
	      }
	    }
	
	    return function glEnumToString(gl, value) {
	      init();
	      return enums[value] || ("0x" + value.toString(16));
	    };
	  }());
	
	  /**
	   * A function to generate the source for a texture.
	   * @callback TextureFunc
	   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
	   * @param {module:twgl.TextureOptions} options the texture options
	   * @return {*} Returns any of the things documentented for `src` for {@link module:twgl.TextureOptions}.
	   * @memberOf module:twgl
	   */
	
	  /**
	   * Texture options passed to most texture functions. Each function will use whatever options
	   * are appropriate for its needs. This lets you pass the same options to all functions.
	   *
	   * @typedef {Object} TextureOptions
	   * @property {number} [target] the type of texture `gl.TEXTURE_2D` or `gl.TEXTURE_CUBE_MAP`. Defaults to `gl.TEXTURE_2D`.
	   * @property {number} [width] the width of the texture. Only used if src is an array or typed array or null.
	   * @property {number} [height] the height of a texture. Only used if src is an array or typed array or null.
	   * @property {number} [depth] the depth of a texture. Only used if src is an array or type array or null and target is `TEXTURE_3D` .
	   * @property {number} [min] the min filter setting (eg. `gl.LINEAR`). Defaults to `gl.NEAREST_MIPMAP_LINEAR`
	   *     or if texture is not a power of 2 on both dimensions then defaults to `gl.LINEAR`.
	   * @property {number} [mag] the mag filter setting (eg. `gl.LINEAR`). Defaults to `gl.LINEAR`
	   * @property {number} [internalFormat] internal format for texture. Defaults to `gl.RGBA`
	   * @property {number} [format] format for texture. Defaults to `gl.RGBA`.
	   * @property {number} [type] type for texture. Defaults to `gl.UNSIGNED_BYTE` unless `src` is ArrayBuffer. If `src`
	   *     is ArrayBuffer defaults to type that matches ArrayBuffer type.
	   * @property {number} [wrap] Texture wrapping for both S and T (and R if TEXTURE_3D). Defaults to `gl.REPEAT` for 2D unless src is WebGL1 and src not npot and `gl.CLAMP_TO_EDGE` for cube
	   * @property {number} [wrapS] Texture wrapping for S. Defaults to `gl.REPEAT` and `gl.CLAMP_TO_EDGE` for cube. If set takes precedence over `wrap`.
	   * @property {number} [wrapT] Texture wrapping for T. Defaults to `gl.REPEAT` and `gl.CLAMP_TO_EDGE` for cube. If set takes precedence over `wrap`.
	   * @property {number} [wrapR] Texture wrapping for R. Defaults to `gl.REPEAT` and `gl.CLAMP_TO_EDGE` for cube. If set takes precedence over `wrap`.
	   * @property {number} [minLod] TEXTURE_MIN_LOD setting
	   * @property {number} [maxLod] TEXTURE_MAX_LOD setting
	   * @property {number} [baseLevel] TEXTURE_BASE_LEVEL setting
	   * @property {number} [maxLevel] TEXTURE_MAX_LEVEL setting
	   * @property {number} [unpackAlignment] The `gl.UNPACK_ALIGNMENT` used when uploading an array. Defaults to 1.
	   * @property {number} [premultiplyAlpha] Whether or not to premultiply alpha. Defaults to whatever the current setting is.
	   *     This lets you set it once before calling `twgl.createTexture` or `twgl.createTextures` and only override
	   *     the current setting for specific textures.
	   * @property {number} [flipY] Whether or not to flip the texture vertically on upload. Defaults to whatever the current setting is.
	   *     This lets you set it once before calling `twgl.createTexture` or `twgl.createTextures` and only override
	   *     the current setting for specific textures.
	   * @property {number} [colorspaceConversion] Whether or not to let the browser do colorspace conversion of the texture on upload. Defaults to whatever the current setting is.
	   *     This lets you set it once before calling `twgl.createTexture` or `twgl.createTextures` and only override
	   *     the current setting for specific textures.
	   * @property {(number[]|ArrayBuffer)} color color used as temporary 1x1 pixel color for textures loaded async when src is a string.
	   *    If it's a JavaScript array assumes color is 0 to 1 like most GL colors as in `[1, 0, 0, 1] = red=1, green=0, blue=0, alpha=0`.
	   *    Defaults to `[0.5, 0.75, 1, 1]`. See {@link module:twgl.setDefaultTextureColor}. If `false` texture is set. Can be used to re-load a texture
	   * @property {boolean} [auto] If not `false` then texture working filtering is set automatically for non-power of 2 images and
	   *    mips are generated for power of 2 images.
	   * @property {number[]} [cubeFaceOrder] The order that cube faces are pulled out of an img or set of images. The default is
	   *
	   *     [gl.TEXTURE_CUBE_MAP_POSITIVE_X,
	   *      gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
	   *      gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
	   *      gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
	   *      gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
	   *      gl.TEXTURE_CUBE_MAP_NEGATIVE_Z]
	   *
	   * @property {(number[]|ArrayBuffer|HTMLCanvasElement|HTMLImageElement|HTMLVideoElement|string|string[]|module:twgl.TextureFunc)} [src] source for texture
	   *
	   *    If `string` then it's assumed to be a URL to an image. The image will be downloaded async. A usable
	   *    1x1 pixel texture will be returned immediatley. The texture will be updated once the image has downloaded.
	   *    If `target` is `gl.TEXTURE_CUBE_MAP` will attempt to divide image into 6 square pieces. 1x6, 6x1, 3x2, 2x3.
	   *    The pieces will be uploaded in `cubeFaceOrder`
	   *
	   *    If `string[]` then it must have 6 entries, one for each face of a cube map. Target must be `gl.TEXTURE_CUBE_MAP`.
	   *
	   *    If `HTMLElement` then it wil be used immediately to create the contents of the texture. Examples `HTMLImageElement`,
	   *    `HTMLCanvasElement`, `HTMLVideoElement`.
	   *
	   *    If `number[]` or `ArrayBuffer` it's assumed to be data for a texture. If `width` or `height` is
	   *    not specified it is guessed as follows. First the number of elements is computed by `src.length / numComponets`
	   *    where `numComponents` is derived from `format`. If `target` is `gl.TEXTURE_CUBE_MAP` then `numElements` is divided
	   *    by 6. Then
	   *
	   *    *   If neither `width` nor `height` are specified and `sqrt(numElements)` is an integer then width and height
	   *        are set to `sqrt(numElements)`. Otherwise `width = numElements` and `height = 1`.
	   *
	   *    *   If only one of `width` or `height` is specified then the other equals `numElements / specifiedDimension`.
	   *
	   * If `number[]` will be converted to `type`.
	   *
	   * If `src` is a function it will be called with a `WebGLRenderingContext` and these options.
	   * Whatever it returns is subject to these rules. So it can return a string url, an `HTMLElement`
	   * an array etc...
	   *
	   * If `src` is undefined then an empty texture will be created of size `width` by `height`.
	   *
	   * @property {string} [crossOrigin] What to set the crossOrigin property of images when they are downloaded.
	   *    default: undefined. Also see {@link module:twgl.setDefaults}.
	   *
	   * @memberOf module:twgl
	   */
	
	  // NOTE: While querying GL is considered slow it's not remotely as slow
	  // as uploading a texture. On top of that you're unlikely to call this in
	  // a perf critical loop. Even if upload a texture every frame that's unlikely
	  // to be more than 1 or 2 textures a frame. In other words, the benefits of
	  // making the API easy to use outweigh any supposed perf benefits
	  var lastPackState = {};
	
	  /**
	   * Saves any packing state that will be set based on the options.
	   * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   */
	  function savePackState(gl, options) {
	    if (options.colorspaceConversion !== undefined) {
	      lastPackState.colorspaceConversion = gl.getParameter(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL);
	      gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, options.colorspaceConversion);
	    }
	    if (options.premultiplyAlpha !== undefined) {
	      lastPackState.premultiplyAlpha = gl.getParameter(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL);
	      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, options.premultiplyAlpha);
	    }
	    if (options.flipY !== undefined) {
	      lastPackState.flipY = gl.getParameter(gl.UNPACK_FLIP_Y_WEBGL);
	      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, options.flipY);
	    }
	  }
	
	  /**
	   * Restores any packing state that was set based on the options.
	   * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   */
	  function restorePackState(gl, options) {
	    if (options.colorspaceConversion !== undefined) {
	      gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, lastPackState.colorspaceConversion);
	    }
	    if (options.premultiplyAlpha !== undefined) {
	      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, lastPackState.premultiplyAlpha);
	    }
	    if (options.flipY !== undefined) {
	      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, lastPackState.flipY);
	    }
	  }
	
	  /**
	   * Sets the texture parameters of a texture.
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {WebGLTexture} tex the WebGLTexture to set parameters for
	   * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
	   *   This is often the same options you passed in when you created the texture.
	   * @memberOf module:twgl/textures
	   */
	  function setTextureParameters(gl, tex, options) {
	    var target = options.target || gl.TEXTURE_2D;
	    gl.bindTexture(target, tex);
	    if (options.min) {
	      gl.texParameteri(target, gl.TEXTURE_MIN_FILTER, options.min);
	    }
	    if (options.mag) {
	      gl.texParameteri(target, gl.TEXTURE_MAG_FILTER, options.mag);
	    }
	    if (options.wrap) {
	      gl.texParameteri(target, gl.TEXTURE_WRAP_S, options.wrap);
	      gl.texParameteri(target, gl.TEXTURE_WRAP_T, options.wrap);
	      if (target === gl.TEXTURE_3D) {
	        gl.texParameteri(target, gl.TEXTURE_WRAP_R, options.wrap);
	      }
	    }
	    if (options.wrapR) {
	      gl.texParameteri(target, gl.TEXTURE_WRAP_R, options.wrapR);
	    }
	    if (options.wrapS) {
	      gl.texParameteri(target, gl.TEXTURE_WRAP_S, options.wrapS);
	    }
	    if (options.wrapT) {
	      gl.texParameteri(target, gl.TEXTURE_WRAP_T, options.wrapT);
	    }
	    if (options.minLod) {
	      gl.texParameteri(target, gl.TEXTURE_MIN_LOD, options.minLod);
	    }
	    if (options.maxLod) {
	      gl.texParameteri(target, gl.TEXTURE_MAX_LOD, options.maxLod);
	    }
	    if (options.baseLevel) {
	      gl.texParameteri(target, gl.TEXTURE_BASE_LEVEL, options.baseLevel);
	    }
	    if (options.maxLevel) {
	      gl.texParameteri(target, gl.TEXTURE_MAX_LEVEL, options.maxLevel);
	    }
	  }
	
	  /**
	   * Makes a 1x1 pixel
	   * If no color is passed in uses the default color which can be set by calling `setDefaultTextureColor`.
	   * @param {(number[]|ArrayBuffer)} [color] The color using 0-1 values
	   * @return {Uint8Array} Unit8Array with color.
	   */
	  function make1Pixel(color) {
	    color = color || defaults.textureColor;
	    if (isArrayBuffer(color)) {
	      return color;
	    }
	    return new Uint8Array([color[0] * 255, color[1] * 255, color[2] * 255, color[3] * 255]);
	  }
	
	  /**
	   * Returns true if value is power of 2
	   * @param {number} value number to check.
	   * @return true if value is power of 2
	   */
	  function isPowerOf2(value) {
	    return (value & (value - 1)) === 0;
	  }
	
	  /**
	   * Sets filtering or generates mips for texture based on width or height
	   * If width or height is not passed in uses `options.width` and//or `options.height`
	   *
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {WebGLTexture} tex the WebGLTexture to set parameters for
	   * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
	   *   This is often the same options you passed in when you created the texture.
	   * @param {number} [width] width of texture
	   * @param {number} [height] height of texture
	   * @memberOf module:twgl/textures
	   */
	  function setTextureFilteringForSize(gl, tex, options, width, height) {
	    options = options || defaults.textureOptions;
	    var target = options.target || gl.TEXTURE_2D;
	    width = width || options.width;
	    height = height || options.height;
	    gl.bindTexture(target, tex);
	    if (!isPowerOf2(width) || !isPowerOf2(height)) {
	      gl.texParameteri(target, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	      gl.texParameteri(target, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	      gl.texParameteri(target, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	    } else {
	      gl.generateMipmap(target);
	    }
	  }
	
	  /**
	   * Gets an array of cubemap face enums
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
	   *   This is often the same options you passed in when you created the texture.
	   * @return {number[]} cubemap face enums
	   */
	  function getCubeFaceOrder(gl, options) {
	    options = options || {};
	    return options.cubeFaceOrder || [
	        gl.TEXTURE_CUBE_MAP_POSITIVE_X,
	        gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
	        gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
	        gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
	        gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
	        gl.TEXTURE_CUBE_MAP_NEGATIVE_Z,
	      ];
	  }
	
	  /**
	   * @typedef {Object} FaceInfo
	   * @property {number} face gl enum for texImage2D
	   * @property {number} ndx face index (0 - 5) into source data
	   * @ignore
	   */
	
	  /**
	   * Gets an array of FaceInfos
	   * There's a bug in some NVidia drivers that will crash the driver if
	   * `gl.TEXTURE_CUBE_MAP_POSITIVE_X` is not uploaded first. So, we take
	   * the user's desired order from his faces to WebGL and make sure we
	   * do the faces in WebGL order
	   *
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
	   * @return {FaceInfo[]} cubemap face infos. Arguably the `face` property of each element is redundent but
	   *    it's needed internally to sort the array of `ndx` properties by `face`.
	   */
	  function getCubeFacesWithNdx(gl, options) {
	    var faces = getCubeFaceOrder(gl, options);
	    // work around bug in NVidia drivers. We have to upload the first face first else the driver crashes :(
	    var facesWithNdx = faces.map(function(face, ndx) {
	      return { face: face, ndx: ndx };
	    });
	    facesWithNdx.sort(function(a, b) {
	      return a.face - b.face;
	    });
	    return facesWithNdx;
	  }
	
	  /**
	   * Set a texture from the contents of an element. Will also set
	   * texture filtering or generate mips based on the dimensions of the element
	   * unless `options.auto === false`. If `target === gl.TEXTURE_CUBE_MAP` will
	   * attempt to slice image into 1x6, 2x3, 3x2, or 6x1 images, one for each face.
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {WebGLTexture} tex the WebGLTexture to set parameters for
	   * @param {HTMLElement} element a canvas, img, or video element.
	   * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
	   *   This is often the same options you passed in when you created the texture.
	   * @memberOf module:twgl/textures
	   * @kind function
	   */
	  var setTextureFromElement = function() {
	    var ctx = document.createElement("canvas").getContext("2d");
	    return function setTextureFromElement(gl, tex, element, options) {
	      options = options || defaults.textureOptions;
	      var target = options.target || gl.TEXTURE_2D;
	      var width = element.width;
	      var height = element.height;
	      var format = options.format || gl.RGBA;
	      var internalFormat = options.internalFormat || format;
	      var type = options.type || gl.UNSIGNED_BYTE;
	      savePackState(gl, options);
	      gl.bindTexture(target, tex);
	      if (target === gl.TEXTURE_CUBE_MAP) {
	        // guess the parts
	        var imgWidth  = element.width;
	        var imgHeight = element.height;
	        var size;
	        var slices;
	        if (imgWidth / 6 === imgHeight) {
	          // It's 6x1
	          size = imgHeight;
	          slices = [0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0];
	        } else if (imgHeight / 6 === imgWidth) {
	          // It's 1x6
	          size = imgWidth;
	          slices = [0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5];
	        } else if (imgWidth / 3 === imgHeight / 2) {
	          // It's 3x2
	          size = imgWidth / 3;
	          slices = [0, 0, 1, 0, 2, 0, 0, 1, 1, 1, 2, 1];
	        } else if (imgWidth / 2 === imgHeight / 3) {
	          // It's 2x3
	          size = imgWidth / 2;
	          slices = [0, 0, 1, 0, 0, 1, 1, 1, 0, 2, 1, 2];
	        } else {
	          throw "can't figure out cube map from element: " + (element.src ? element.src : element.nodeName);
	        }
	        ctx.canvas.width = size;
	        ctx.canvas.height = size;
	        width = size;
	        height = size;
	        getCubeFacesWithNdx(gl, options).forEach(function(f) {
	          var xOffset = slices[f.ndx * 2 + 0] * size;
	          var yOffset = slices[f.ndx * 2 + 1] * size;
	          ctx.drawImage(element, xOffset, yOffset, size, size, 0, 0, size, size);
	          gl.texImage2D(f.face, 0, internalFormat, format, type, ctx.canvas);
	        });
	        // Free up the canvas memory
	        ctx.canvas.width = 1;
	        ctx.canvas.height = 1;
	      } else if (target === gl.TEXTURE_3D) {
	        var smallest = Math.min(element.width, element.height);
	        var largest = Math.max(element.width, element.height);
	        var depth = largest / smallest;
	        if (depth % 1 !== 0) {
	          throw "can not compute 3D dimensions of element";
	        }
	        var xMult = element.width  === largest ? 1 : 0;
	        var yMult = element.height === largest ? 1 : 0;
	        gl.texImage3D(target, 0, internalFormat, smallest, smallest, smallest, 0, format, type, null);
	        // remove this is texSubImage3D gets width and height arguments
	        ctx.canvas.width = smallest;
	        ctx.canvas.height = smallest;
	        for (var d = 0; d < depth; ++d) {
	//          gl.pixelStorei(gl.UNPACK_SKIP_PIXELS, d * smallest);
	//          gl.texSubImage3D(target, 0, 0, 0, d, format, type, element);
	            var srcX = d * smallest * xMult;
	            var srcY = d * smallest * yMult;
	            var srcW = smallest;
	            var srcH = smallest;
	            var dstX = 0;
	            var dstY = 0;
	            var dstW = smallest;
	            var dstH = smallest;
	            ctx.drawImage(element, srcX, srcY, srcW, srcH, dstX, dstY, dstW, dstH);
	            gl.texSubImage3D(target, 0, 0, 0, d, format, type, ctx.canvas);
	        }
	        ctx.canvas.width = 0;
	        ctx.canvas.height = 0;
	// FIX (save state)
	//        gl.pixelStorei(gl.UNPACK_SKIP_PIXELS, 0);
	      } else {
	        gl.texImage2D(target, 0, internalFormat, format, type, element);
	      }
	      restorePackState(gl, options);
	      if (options.auto !== false) {
	        setTextureFilteringForSize(gl, tex, options, width, height);
	      }
	      setTextureParameters(gl, tex, options);
	    };
	  }();
	
	  function noop() {
	  }
	
	  /**
	   * Loads an image
	   * @param {string} url url to image
	   * @param {function(err, img)} [callback] a callback that's passed an error and the image. The error will be non-null
	   *     if there was an error
	   * @return {HTMLImageElement} the image being loaded.
	   */
	  function loadImage(url, crossOrigin, callback) {
	    callback = callback || noop;
	    var img = new Image();
	    crossOrigin = crossOrigin !== undefined ? crossOrigin : defaults.crossOrigin;
	    if (crossOrigin !== undefined) {
	      img.crossOrigin = crossOrigin;
	    }
	
	    function clearEventHandlers() {
	      img.removeEventListener('error', onError);  // eslint-disable-line
	      img.removeEventListener('load', onLoad);  // eslint-disable-line
	      img = null;
	    }
	
	    function onError() {
	      var msg = "couldn't load image: " + url;
	      utils.error(msg);
	      callback(msg, img);
	      clearEventHandlers();
	    }
	
	    function onLoad() {
	      callback(null, img);
	      clearEventHandlers();
	    }
	
	    img.addEventListener('error', onError);
	    img.addEventListener('load', onLoad);
	    img.src = url;
	    return img;
	  }
	
	  /**
	   * Sets a texture to a 1x1 pixel color. If `options.color === false` is nothing happens. If it's not set
	   * the default texture color is used which can be set by calling `setDefaultTextureColor`.
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {WebGLTexture} tex the WebGLTexture to set parameters for
	   * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
	   *   This is often the same options you passed in when you created the texture.
	   * @memberOf module:twgl/textures
	   */
	  function setTextureTo1PixelColor(gl, tex, options) {
	    options = options || defaults.textureOptions;
	    var target = options.target || gl.TEXTURE_2D;
	    gl.bindTexture(target, tex);
	    if (options.color === false) {
	      return;
	    }
	    // Assume it's a URL
	    // Put 1x1 pixels in texture. That makes it renderable immediately regardless of filtering.
	    var color = make1Pixel(options.color);
	    if (target === gl.TEXTURE_CUBE_MAP) {
	      for (var ii = 0; ii < 6; ++ii) {
	        gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + ii, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, color);
	      }
	    } else if (target === gl.TEXTURE_3D) {
	      gl.texImage3D(target, 0, gl.RGBA, 1, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, color);
	    } else {
	      gl.texImage2D(target, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, color);
	    }
	  }
	
	  /**
	   * The src image(s) used to create a texture.
	   *
	   * When you call {@link module:twgl.createTexture} or {@link module:twgl.createTextures}
	   * you can pass in urls for images to load into the textures. If it's a single url
	   * then this will be a single HTMLImageElement. If it's an array of urls used for a cubemap
	   * this will be a corresponding array of images for the cubemap.
	   *
	   * @typedef {HTMLImageElement|HTMLImageElement[]} TextureSrc
	   * @memberOf module:twgl
	   */
	
	  /**
	   * A callback for when an image finished downloading and been uploaded into a texture
	   * @callback TextureReadyCallback
	   * @param {*} err If truthy there was an error.
	   * @param {WebGLTexture} texture the texture.
	   * @param {module:twgl.TextureSrc} souce image(s) used to as the src for the texture
	   * @memberOf module:twgl
	   */
	
	  /**
	   * A callback for when all images have finished downloading and been uploaded into their respective textures
	   * @callback TexturesReadyCallback
	   * @param {*} err If truthy there was an error.
	   * @param {Object.<string, WebGLTexture>} textures the created textures by name. Same as returned by {@link module:twgl.createTextures}.
	   * @param {Object.<string, module:twgl.TextureSrc>} sources the image(s) used for the texture by name.
	   * @memberOf module:twgl
	   */
	
	  /**
	   * A callback for when an image finished downloading and been uploaded into a texture
	   * @callback CubemapReadyCallback
	   * @param {*} err If truthy there was an error.
	   * @param {WebGLTexture} tex the texture.
	   * @param {HTMLImageElement[]} imgs the images for each face.
	   * @memberOf module:twgl
	   */
	
	  /**
	   * Loads a texture from an image from a Url as specified in `options.src`
	   * If `options.color !== false` will set the texture to a 1x1 pixel color so that the texture is
	   * immediately useable. It will be updated with the contents of the image once the image has finished
	   * downloading. Filtering options will be set as approriate for image unless `options.auto === false`.
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {WebGLTexture} tex the WebGLTexture to set parameters for
	   * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
	   * @param {module:twgl.TextureReadyCallback} [callback] A function to be called when the image has finished loading. err will
	   *    be non null if there was an error.
	   * @return {HTMLImageElement} the image being downloaded.
	   * @memberOf module:twgl/textures
	   */
	  function loadTextureFromUrl(gl, tex, options, callback) {
	    callback = callback || noop;
	    options = options || defaults.textureOptions;
	    setTextureTo1PixelColor(gl, tex, options);
	    // Because it's async we need to copy the options.
	    options = utils.shallowCopy(options);
	    var img = loadImage(options.src, options.crossOrigin, function(err, img) {
	      if (err) {
	        callback(err, tex, img);
	      } else {
	        setTextureFromElement(gl, tex, img, options);
	        callback(null, tex, img);
	      }
	    });
	    return img;
	  }
	
	  /**
	   * Loads a cubemap from 6 urls as specified in `options.src`. Will set the cubemap to a 1x1 pixel color
	   * so that it is usable immediately unless `option.color === false`.
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {WebGLTexture} tex the WebGLTexture to set parameters for
	   * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
	   * @param {module:twgl.CubemapReadyCallback} [callback] A function to be called when all the images have finished loading. err will
	   *    be non null if there was an error.
	   * @memberOf module:twgl/textures
	   */
	  function loadCubemapFromUrls(gl, tex, options, callback) {
	    callback = callback || noop;
	    var urls = options.src;
	    if (urls.length !== 6) {
	      throw "there must be 6 urls for a cubemap";
	    }
	    var format = options.format || gl.RGBA;
	    var type = options.type || gl.UNSIGNED_BYTE;
	    var target = options.target || gl.TEXTURE_2D;
	    if (target !== gl.TEXTURE_CUBE_MAP) {
	      throw "target must be TEXTURE_CUBE_MAP";
	    }
	    setTextureTo1PixelColor(gl, tex, options);
	    // Because it's async we need to copy the options.
	    options = utils.shallowCopy(options);
	    var numToLoad = 6;
	    var errors = [];
	    var imgs;
	    var faces = getCubeFaceOrder(gl, options);
	
	    function uploadImg(faceTarget) {
	      return function(err, img) {
	        --numToLoad;
	        if (err) {
	          errors.push(err);
	        } else {
	          if (img.width !== img.height) {
	            errors.push("cubemap face img is not a square: " + img.src);
	          } else {
	            savePackState(gl, options);
	            gl.bindTexture(target, tex);
	
	            // So assuming this is the first image we now have one face that's img sized
	            // and 5 faces that are 1x1 pixel so size the other faces
	            if (numToLoad === 5) {
	              // use the default order
	              getCubeFaceOrder(gl).forEach(function(otherTarget) {
	                // Should we re-use the same face or a color?
	                gl.texImage2D(otherTarget, 0, format, format, type, img);
	              });
	            } else {
	              gl.texImage2D(faceTarget, 0, format, format, type, img);
	            }
	
	            restorePackState(gl, options);
	            gl.generateMipmap(target);
	          }
	        }
	
	        if (numToLoad === 0) {
	          callback(errors.length ? errors : undefined, imgs, tex);
	        }
	      };
	    }
	
	    imgs = urls.map(function(url, ndx) {
	      return loadImage(url, options.crossOrigin, uploadImg(faces[ndx]));
	    });
	  }
	
	  /**
	   * Gets the number of compontents for a given image format.
	   * @param {number} format the format.
	   * @return {number} the number of components for the format.
	   * @memberOf module:twgl/textures
	   */
	  function getNumComponentsForFormat(format) {
	    switch (format) {
	      case ALPHA:
	      case LUMINANCE:
	        return 1;
	      case LUMINANCE_ALPHA:
	        return 2;
	      case RGB:
	        return 3;
	      case RGBA:
	        return 4;
	      default:
	        throw "unknown type: " + format;
	    }
	  }
	
	  /**
	   * Gets the texture type for a given array type.
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @return {number} the gl texture type
	   */
	  function getTextureTypeForArrayType(gl, src) {
	    if (isArrayBuffer(src)) {
	      return typedArrays.getGLTypeForTypedArray(src);
	    }
	    return gl.UNSIGNED_BYTE;
	  }
	
	  function guessDimensions(gl, target, width, height, numElements) {
	    if (numElements % 1 !== 0) {
	      throw "can't guess dimensions";
	    }
	    if (!width && !height) {
	      var size = Math.sqrt(numElements / (target === gl.TEXTURE_CUBE_MAP ? 6 : 1));
	      if (size % 1 === 0) {
	        width = size;
	        height = size;
	      } else {
	        width = numElements;
	        height = 1;
	      }
	    } else if (!height) {
	      height = numElements / width;
	      if (height % 1) {
	        throw "can't guess dimensions";
	      }
	    } else if (!width) {
	      width = numElements / height;
	      if (width % 1) {
	        throw "can't guess dimensions";
	      }
	    }
	    return {
	      width: width,
	      height: height,
	    };
	  }
	
	  /**
	   * Sets a texture from an array or typed array. If the width or height is not provided will attempt to
	   * guess the size. See {@link module:twgl.TextureOptions}.
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {WebGLTexture} tex the WebGLTexture to set parameters for
	   * @param {(number[]|ArrayBuffer)} src An array or typed arry with texture data.
	   * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
	   *   This is often the same options you passed in when you created the texture.
	   * @memberOf module:twgl/textures
	   */
	  function setTextureFromArray(gl, tex, src, options) {
	    options = options || defaults.textureOptions;
	    var target = options.target || gl.TEXTURE_2D;
	    gl.bindTexture(target, tex);
	    var width = options.width;
	    var height = options.height;
	    var depth = options.depth;
	    var format = options.format || gl.RGBA;
	    var internalFormat = options.internalFormat || format;
	    var type = options.type || getTextureTypeForArrayType(gl, src);
	    var numComponents = getNumComponentsForFormat(format);
	    var numElements = src.length / numComponents;
	    if (numElements % 1) {
	      throw "length wrong size for format: " + glEnumToString(gl, format);
	    }
	    var dimensions;
	    if (target === gl.TEXTURE_3D) {
	      if (!width && !height && !depth) {
	        var size = Math.cbrt(numElements);
	        if (size % 1 !== 0) {
	          throw "can't guess cube size of array of numElements: " + numElements;
	        }
	        width = size;
	        height = size;
	        depth = size;
	      } else if (width && (!height || !depth)) {
	        dimensions = guessDimensions(gl, target, height, depth, numElements / width);
	        height = dimensions.width;
	        depth = dimensions.height;
	      } else if (height && (!width || !depth)) {
	        dimensions = guessDimensions(gl, target, width, depth, numElements / height);
	        width = dimensions.width;
	        depth = dimensions.height;
	      } else {
	        dimensions = guessDimensions(gl, target, width, height, numElements / depth);
	        width = dimensions.width;
	        height = dimensions.height;
	      }
	    } else {
	      dimensions = guessDimensions(gl, target, width, height, numElements);
	      width = dimensions.width;
	      height = dimensions.height;
	    }
	    if (!isArrayBuffer(src)) {
	      var Type = typedArrays.getTypedArrayTypeForGLType(type);
	      src = new Type(src);
	    } else {
	      if (src instanceof Uint8ClampedArray) {
	        src = new Uint8Array(src.buffer);
	      }
	    }
	    gl.pixelStorei(gl.UNPACK_ALIGNMENT, options.unpackAlignment || 1);
	    savePackState(gl, options);
	    if (target === gl.TEXTURE_CUBE_MAP) {
	      var faceSize = numElements / 6 * numComponents;
	      getCubeFacesWithNdx(gl, options).forEach(function(f) {
	        var offset = faceSize * f.ndx;
	        var data = src.subarray(offset, offset + faceSize);
	        gl.texImage2D(f.face, 0, internalFormat, width, height, 0, format, type, data);
	      });
	    } else if (target === gl.TEXTURE_3D) {
	      gl.texImage3D(target, 0, internalFormat, width, height, depth, 0, format, type, src);
	    } else {
	      gl.texImage2D(target, 0, internalFormat, width, height, 0, format, type, src);
	    }
	    restorePackState(gl, options);
	    return {
	      width: width,
	      height: height,
	      depth: depth,
	    };
	  }
	
	  /**
	   * Sets a texture with no contents of a certain size. In other words calls `gl.texImage2D` with `null`.
	   * You must set `options.width` and `options.height`.
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {WebGLTexture} tex the WebGLTexture to set parameters for
	   * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
	   * @memberOf module:twgl/textures
	   */
	  function setEmptyTexture(gl, tex, options) {
	    var target = options.target || gl.TEXTURE_2D;
	    gl.bindTexture(target, tex);
	    var format = options.format || gl.RGBA;
	    var internalFormat = options.internalFormat || format;
	    var type = options.type || gl.UNSIGNED_BYTE;
	    savePackState(gl, options);
	    if (target === gl.TEXTURE_CUBE_MAP) {
	      for (var ii = 0; ii < 6; ++ii) {
	        gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + ii, 0, internalFormat, options.width, options.height, 0, format, type, null);
	      }
	    } else if (target === gl.TEXTURE_3D) {
	      gl.texImage3D(target, 0, internalFormat, options.width, options.height, options.depth, 0, format, type, null);
	    } else {
	      gl.texImage2D(target, 0, internalFormat, options.width, options.height, 0, format, type, null);
	    }
	    restorePackState(gl, options);
	  }
	
	  /**
	   * Creates a texture based on the options passed in.
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
	   * @param {module:twgl.TextureReadyCallback} [callback] A callback called when an image has been downloaded and uploaded to the texture.
	   * @return {WebGLTexture} the created texture.
	   * @memberOf module:twgl/textures
	   */
	  function createTexture(gl, options, callback) {
	    callback = callback || noop;
	    options = options || defaults.textureOptions;
	    var tex = gl.createTexture();
	    var target = options.target || gl.TEXTURE_2D;
	    var width  = options.width  || 1;
	    var height = options.height || 1;
	    gl.bindTexture(target, tex);
	    if (target === gl.TEXTURE_CUBE_MAP) {
	      // this should have been the default for CUBEMAPS :(
	      gl.texParameteri(target, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	      gl.texParameteri(target, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	    }
	    var src = options.src;
	    if (src) {
	      if (typeof src === "function") {
	        src = src(gl, options);
	      }
	      if (typeof (src) === "string") {
	        loadTextureFromUrl(gl, tex, options, callback);
	      } else if (isArrayBuffer(src) ||
	                 (Array.isArray(src) && (
	                      typeof src[0] === 'number' ||
	                      Array.isArray(src[0]) ||
	                      isArrayBuffer(src[0]))
	                 )
	                ) {
	        var dimensions = setTextureFromArray(gl, tex, src, options);
	        width  = dimensions.width;
	        height = dimensions.height;
	      } else if (Array.isArray(src) && typeof (src[0]) === 'string') {
	        loadCubemapFromUrls(gl, tex, options, callback);
	      } else if (src instanceof HTMLElement) {
	        setTextureFromElement(gl, tex, src, options);
	        width  = src.width;
	        height = src.height;
	      } else {
	        throw "unsupported src type";
	      }
	    } else {
	      setEmptyTexture(gl, tex, options);
	    }
	    if (options.auto !== false) {
	      setTextureFilteringForSize(gl, tex, options, width, height);
	    }
	    setTextureParameters(gl, tex, options);
	    return tex;
	  }
	
	  /**
	   * Resizes a texture based on the options passed in.
	   *
	   * Note: This is not a generic resize anything function.
	   * It's mostly used by {@link module:twgl.resizeFramebufferInfo}
	   * It will use `options.src` if it exists to try to determine a `type`
	   * otherwise it will assume `gl.UNSIGNED_BYTE`. No data is provided
	   * for the texture. Texture parameters will be set accordingly
	   *
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {WebGLTexture} tex the texture to resize
	   * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
	   * @param {number} [width] the new width. If not passed in will use `options.width`
	   * @param {number} [height] the new height. If not passed in will use `options.height`
	   * @memberOf module:twgl/textures
	   */
	  function resizeTexture(gl, tex, options, width, height) {
	    width = width || options.width;
	    height = height || options.height;
	    var target = options.target || gl.TEXTURE_2D;
	    gl.bindTexture(target, tex);
	    var format = options.format || gl.RGBA;
	    var type;
	    var src = options.src;
	    if (!src) {
	      type = options.type || gl.UNSIGNED_BYTE;
	    } else if (isArrayBuffer(src) || (Array.isArray(src) && typeof (src[0]) === 'number')) {
	      type = options.type || getTextureTypeForArrayType(gl, src);
	    } else {
	      type = options.type || gl.UNSIGNED_BYTE;
	    }
	    if (target === gl.TEXTURE_CUBE_MAP) {
	      for (var ii = 0; ii < 6; ++ii) {
	        gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + ii, 0, format, width, height, 0, format, type, null);
	      }
	    } else {
	      gl.texImage2D(target, 0, format, width, height, 0, format, type, null);
	    }
	  }
	
	  /**
	   * Check if a src is an async request.
	   * if src is a string we're going to download an image
	   * if src is an array of strings we're going to download cubemap images
	   * @param {*} src The src from a TextureOptions
	   * @returns {bool} true if src is async.
	   */
	  function isAsyncSrc(src) {
	    return typeof src === 'string' ||
	           (Array.isArray(src) && typeof src[0] === 'string');
	  }
	
	  /**
	   * Creates a bunch of textures based on the passed in options.
	   *
	   * Example:
	   *
	   *     var textures = twgl.createTextures(gl, {
	   *       // a power of 2 image
	   *       hftIcon: { src: "images/hft-icon-16.png", mag: gl.NEAREST },
	   *       // a non-power of 2 image
	   *       clover: { src: "images/clover.jpg" },
	   *       // From a canvas
	   *       fromCanvas: { src: ctx.canvas },
	   *       // A cubemap from 6 images
	   *       yokohama: {
	   *         target: gl.TEXTURE_CUBE_MAP,
	   *         src: [
	   *           'images/yokohama/posx.jpg',
	   *           'images/yokohama/negx.jpg',
	   *           'images/yokohama/posy.jpg',
	   *           'images/yokohama/negy.jpg',
	   *           'images/yokohama/posz.jpg',
	   *           'images/yokohama/negz.jpg',
	   *         ],
	   *       },
	   *       // A cubemap from 1 image (can be 1x6, 2x3, 3x2, 6x1)
	   *       goldengate: {
	   *         target: gl.TEXTURE_CUBE_MAP,
	   *         src: 'images/goldengate.jpg',
	   *       },
	   *       // A 2x2 pixel texture from a JavaScript array
	   *       checker: {
	   *         mag: gl.NEAREST,
	   *         min: gl.LINEAR,
	   *         src: [
	   *           255,255,255,255,
	   *           192,192,192,255,
	   *           192,192,192,255,
	   *           255,255,255,255,
	   *         ],
	   *       },
	   *       // a 1x2 pixel texture from a typed array.
	   *       stripe: {
	   *         mag: gl.NEAREST,
	   *         min: gl.LINEAR,
	   *         format: gl.LUMINANCE,
	   *         src: new Uint8Array([
	   *           255,
	   *           128,
	   *           255,
	   *           128,
	   *           255,
	   *           128,
	   *           255,
	   *           128,
	   *         ]),
	   *         width: 1,
	   *       },
	   *     });
	   *
	   * Now
	   *
	   * *   `textures.hftIcon` will be a 2d texture
	   * *   `textures.clover` will be a 2d texture
	   * *   `textures.fromCanvas` will be a 2d texture
	   * *   `textures.yohohama` will be a cubemap texture
	   * *   `textures.goldengate` will be a cubemap texture
	   * *   `textures.checker` will be a 2d texture
	   * *   `textures.stripe` will be a 2d texture
	   *
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {Object.<string,module:twgl.TextureOptions>} options A object of TextureOptions one per texture.
	   * @param {module:twgl.TexturesReadyCallback} [callback] A callback called when all textures have been downloaded.
	   * @return {Object.<string,WebGLTexture>} the created textures by name
	   * @memberOf module:twgl/textures
	   */
	  function createTextures(gl, textureOptions, callback) {
	    callback = callback || noop;
	    var numDownloading = 0;
	    var errors = [];
	    var textures = {};
	    var images = {};
	
	    function callCallbackIfReady() {
	      if (numDownloading === 0) {
	        setTimeout(function() {
	          callback(errors.length ? errors : undefined, textures, images);
	        }, 0);
	      }
	    }
	
	    Object.keys(textureOptions).forEach(function(name) {
	      var options = textureOptions[name];
	      var onLoadFn;
	      if (isAsyncSrc(options.src)) {
	        onLoadFn = function(err, tex, img) {
	          images[name] = img;
	          --numDownloading;
	          if (err) {
	            errors.push(err);
	          }
	          callCallbackIfReady();
	        };
	        ++numDownloading;
	      }
	      textures[name] = createTexture(gl, options, onLoadFn);
	    });
	
	    // queue the callback if there are no images to download.
	    // We do this because if your code is structured to wait for
	    // images to download but then you comment out all the async
	    // images your code would break.
	    callCallbackIfReady();
	
	    return textures;
	  }
	
	  // Using quotes prevents Uglify from changing the names.
	  // No speed diff AFAICT.
	  return {
	    "setDefaults_": setDefaults,
	
	    "createTexture": createTexture,
	    "setEmptyTexture": setEmptyTexture,
	    "setTextureFromArray": setTextureFromArray,
	    "loadTextureFromUrl": loadTextureFromUrl,
	    "setTextureFromElement": setTextureFromElement,
	    "setTextureFilteringForSize": setTextureFilteringForSize,
	    "setTextureParameters": setTextureParameters,
	    "setDefaultTextureColor": setDefaultTextureColor,
	    "createTextures": createTextures,
	    "resizeTexture": resizeTexture,
	    "getNumComponentsForFormat": getNumComponentsForFormat,
	  };
	});
	
	
	
	/*
	 * Copyright 2015, Gregg Tavares.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are
	 * met:
	 *
	 *     * Redistributions of source code must retain the above copyright
	 * notice, this list of conditions and the following disclaimer.
	 *     * Redistributions in binary form must reproduce the above
	 * copyright notice, this list of conditions and the following disclaimer
	 * in the documentation and/or other materials provided with the
	 * distribution.
	 *     * Neither the name of Gregg Tavares. nor the names of his
	 * contributors may be used to endorse or promote products derived from
	 * this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */
	
	define('twgl/framebuffers',[
	    './textures',
	    './utils',
	  ], function(
	    textures,
	    utils) {
	  
	
	  /**
	   * Framebuffer related functions
	   *
	   * For backward compatibily they are available at both `twgl.framebuffer` and `twgl`
	   * itself
	   *
	   * See {@link module:twgl} for core functions
	   *
	   * @module twgl/framebuffers
	   */
	
	  // make sure we don't see a global gl
	  var gl = undefined;  // eslint-disable-line
	
	  var UNSIGNED_BYTE                  = 0x1401;
	
	  /* PixelFormat */
	  var DEPTH_COMPONENT                = 0x1902;
	  var RGBA                           = 0x1908;
	
	  /* Framebuffer Object. */
	  var RGBA4                          = 0x8056;
	  var RGB5_A1                        = 0x8057;
	  var RGB565                         = 0x8D62;
	  var DEPTH_COMPONENT16              = 0x81A5;
	  var STENCIL_INDEX                  = 0x1901;
	  var STENCIL_INDEX8                 = 0x8D48;
	  var DEPTH_STENCIL                  = 0x84F9;
	  var COLOR_ATTACHMENT0              = 0x8CE0;
	  var DEPTH_ATTACHMENT               = 0x8D00;
	  var STENCIL_ATTACHMENT             = 0x8D20;
	  var DEPTH_STENCIL_ATTACHMENT       = 0x821A;
	
	  /* TextureWrapMode */
	  var REPEAT                         = 0x2901;  // eslint-disable-line
	  var CLAMP_TO_EDGE                  = 0x812F;
	  var MIRRORED_REPEAT                = 0x8370;  // eslint-disable-line
	
	  /* TextureMagFilter */
	  var NEAREST                        = 0x2600;  // eslint-disable-line
	  var LINEAR                         = 0x2601;
	
	  /* TextureMinFilter */
	  var NEAREST_MIPMAP_NEAREST         = 0x2700;  // eslint-disable-line
	  var LINEAR_MIPMAP_NEAREST          = 0x2701;  // eslint-disable-line
	  var NEAREST_MIPMAP_LINEAR          = 0x2702;  // eslint-disable-line
	  var LINEAR_MIPMAP_LINEAR           = 0x2703;  // eslint-disable-line
	
	  /**
	   * The options for a framebuffer attachment.
	   *
	   * Note: For a `format` that is a texture include all the texture
	   * options from {@link module:twgl.TextureOptions} for example
	   * `min`, `mag`, `clamp`, etc... Note that unlike {@link module:twgl.TextureOptions}
	   * `auto` defaults to `false` for attachment textures but `min` and `mag` default
	   * to `gl.LINEAR` and `wrap` defaults to `CLAMP_TO_EDGE`
	   *
	   * @typedef {Object} AttachmentOptions
	   * @property {number} [attach] The attachment point. Defaults
	   *   to `gl.COLOR_ATTACTMENT0 + ndx` unless type is a depth or stencil type
	   *   then it's gl.DEPTH_ATTACHMENT or `gl.DEPTH_STENCIL_ATTACHMENT` depending
	   *   on the format or attachment type.
	   * @property {number} [format] The format. If one of `gl.RGBA4`,
	   *   `gl.RGB565`, `gl.RGB5_A1`, `gl.DEPTH_COMPONENT16`,
	   *   `gl.STENCIL_INDEX8` or `gl.DEPTH_STENCIL` then will create a
	   *   renderbuffer. Otherwise will create a texture. Default = `gl.RGBA`
	   * @property {number} [type] The type. Used for texture. Default = `gl.UNSIGNED_BYTE`.
	   * @property {number} [target] The texture target for `gl.framebufferTexture2D`.
	   *   Defaults to `gl.TEXTURE_2D`. Set to appropriate face for cube maps.
	   * @property {number} [level] level for `gl.framebufferTexture2D`. Defaults to 0.
	   * @property {WebGLObject} [attachment] An existing renderbuffer or texture.
	   *    If provided will attach this Object. This allows you to share
	   *    attachemnts across framebuffers.
	   * @memberOf module:twgl
	   */
	
	  var defaultAttachments = [
	    { format: RGBA, type: UNSIGNED_BYTE, min: LINEAR, wrap: CLAMP_TO_EDGE, },
	    { format: DEPTH_STENCIL, },
	  ];
	
	  var attachmentsByFormat = {};
	  attachmentsByFormat[DEPTH_STENCIL] = DEPTH_STENCIL_ATTACHMENT;
	  attachmentsByFormat[STENCIL_INDEX] = STENCIL_ATTACHMENT;
	  attachmentsByFormat[STENCIL_INDEX8] = STENCIL_ATTACHMENT;
	  attachmentsByFormat[DEPTH_COMPONENT] = DEPTH_ATTACHMENT;
	  attachmentsByFormat[DEPTH_COMPONENT16] = DEPTH_ATTACHMENT;
	
	  function getAttachmentPointForFormat(format) {
	    return attachmentsByFormat[format];
	  }
	
	  var renderbufferFormats = {};
	  renderbufferFormats[RGBA4] = true;
	  renderbufferFormats[RGB5_A1] = true;
	  renderbufferFormats[RGB565] = true;
	  renderbufferFormats[DEPTH_STENCIL] = true;
	  renderbufferFormats[DEPTH_COMPONENT16] = true;
	  renderbufferFormats[STENCIL_INDEX] = true;
	  renderbufferFormats[STENCIL_INDEX8] = true;
	
	  function isRenderbufferFormat(format) {
	    return renderbufferFormats[format];
	  }
	
	  /**
	   * @typedef {Object} FramebufferInfo
	   * @property {WebGLFramebuffer} framebuffer The WebGLFramebuffer for this framebufferInfo
	   * @property {WebGLObject[]} attachments The created attachments in the same order as passed in to {@link module:twgl.createFramebufferInfo}.
	   * @memberOf module:twgl
	   */
	
	  /**
	   * Creates a framebuffer and attachments.
	   *
	   * This returns a {@link module:twgl.FramebufferInfo} because it needs to return the attachments as well as the framebuffer.
	   *
	   * The simplest usage
	   *
	   *     // create an RGBA/UNSIGNED_BYTE texture and DEPTH_STENCIL renderbuffer
	   *     var fbi = twgl.createFramebuffer(gl);
	   *
	   * More complex usage
	   *
	   *     // create an RGB565 renderbuffer and a STENCIL_INDEX8 renderbuffer
	   *     var attachments = [
	   *       { format: RGB565, mag: NEAREST },
	   *       { format: STENCIL_INDEX8 },
	   *     ]
	   *     var fbi = twgl.createFramebuffer(gl, attachments);
	   *
	   * Passing in a specific size
	   *
	   *     var width = 256;
	   *     var height = 256;
	   *     var fbi = twgl.createFramebuffer(gl, attachments, width, height);
	   *
	   * **Note!!** It is up to you to check if the framebuffer is renderable by calling `gl.checkFramebufferStatus`.
	   * [WebGL only guarantees 3 combinations of attachments work](https://www.khronos.org/registry/webgl/specs/latest/1.0/#6.6).
	   *
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {module:twgl.AttachmentOptions[]} [attachments] which attachments to create. If not provided the default is a framebuffer with an
	   *    `RGBA`, `UNSIGNED_BYTE` texture `COLOR_ATTACHMENT0` and a `DEPTH_STENCIL` renderbuffer `DEPTH_STENCIL_ATTACHMENT`.
	   * @param {number} [width] the width for the attachments. Default = size of drawingBuffer
	   * @param {number} [height] the height for the attachments. Defautt = size of drawingBuffer
	   * @return {module:twgl.FramebufferInfo} the framebuffer and attachments.
	   * @memberOf module:twgl/framebuffers
	   */
	  function createFramebufferInfo(gl, attachments, width, height) {
	    var target = gl.FRAMEBUFFER;
	    var fb = gl.createFramebuffer();
	    gl.bindFramebuffer(target, fb);
	    width  = width  || gl.drawingBufferWidth;
	    height = height || gl.drawingBufferHeight;
	    attachments = attachments || defaultAttachments;
	    var colorAttachmentCount = 0;
	    var framebufferInfo = {
	      framebuffer: fb,
	      attachments: [],
	      width: width,
	      height: height,
	    };
	    attachments.forEach(function(attachmentOptions) {
	      var attachment = attachmentOptions.attachment;
	      var format = attachmentOptions.format;
	      var attachmentPoint = getAttachmentPointForFormat(format);
	      if (!attachmentPoint) {
	        attachmentPoint = COLOR_ATTACHMENT0 + colorAttachmentCount++;
	      }
	      if (!attachment) {
	        if (isRenderbufferFormat(format)) {
	          attachment = gl.createRenderbuffer();
	          gl.bindRenderbuffer(gl.RENDERBUFFER, attachment);
	          gl.renderbufferStorage(gl.RENDERBUFFER, format, width, height);
	        } else {
	          var textureOptions = utils.shallowCopy(attachmentOptions);
	          textureOptions.width = width;
	          textureOptions.height = height;
	          if (textureOptions.auto === undefined) {
	            textureOptions.auto = false;
	            textureOptions.min = textureOptions.min || gl.LINEAR;
	            textureOptions.mag = textureOptions.mag || gl.LINEAR;
	            textureOptions.wrapS = textureOptions.wrapS || textureOptions.wrap || gl.CLAMP_TO_EDGE;
	            textureOptions.wrapT = textureOptions.wrapT || textureOptions.wrap || gl.CLAMP_TO_EDGE;
	          }
	          attachment = textures.createTexture(gl, textureOptions);
	        }
	      }
	      if (attachment instanceof WebGLRenderbuffer) {
	        gl.framebufferRenderbuffer(target, attachmentPoint, gl.RENDERBUFFER, attachment);
	      } else if (attachment instanceof WebGLTexture) {
	        gl.framebufferTexture2D(
	            target,
	            attachmentPoint,
	            attachmentOptions.texTarget || gl.TEXTURE_2D,
	            attachment,
	            attachmentOptions.level || 0);
	      } else {
	        throw "unknown attachment type";
	      }
	      framebufferInfo.attachments.push(attachment);
	    });
	    return framebufferInfo;
	  }
	
	  /**
	   * Resizes the attachments of a framebuffer.
	   *
	   * You need to pass in the same `attachments` as you passed in {@link module:twgl.createFramebuffer}
	   * because TWGL has no idea the format/type of each attachment.
	   *
	   * The simplest usage
	   *
	   *     // create an RGBA/UNSIGNED_BYTE texture and DEPTH_STENCIL renderbuffer
	   *     var fbi = twgl.createFramebuffer(gl);
	   *
	   *     ...
	   *
	   *     function render() {
	   *       if (twgl.resizeCanvasToDisplaySize(gl.canvas)) {
	   *         // resize the attachments
	   *         twgl.resizeFramebufferInfo(gl, fbi);
	   *       }
	   *
	   * More complex usage
	   *
	   *     // create an RGB565 renderbuffer and a STENCIL_INDEX8 renderbuffer
	   *     var attachments = [
	   *       { format: RGB565, mag: NEAREST },
	   *       { format: STENCIL_INDEX8 },
	   *     ]
	   *     var fbi = twgl.createFramebuffer(gl, attachments);
	   *
	   *     ...
	   *
	   *     function render() {
	   *       if (twgl.resizeCanvasToDisplaySize(gl.canvas)) {
	   *         // resize the attachments to match
	   *         twgl.resizeFramebufferInfo(gl, fbi, attachments);
	   *       }
	   *
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {module:twgl.FramebufferInfo} framebufferInfo a framebufferInfo as returned from {@link module:twgl.createFramebuffer}.
	   * @param {module:twgl.AttachmentOptions[]} [attachments] the same attachments options as passed to {@link module:twgl.createFramebuffer}.
	   * @param {number} [width] the width for the attachments. Default = size of drawingBuffer
	   * @param {number} [height] the height for the attachments. Defautt = size of drawingBuffer
	   * @memberOf module:twgl/framebuffers
	   */
	  function resizeFramebufferInfo(gl, framebufferInfo, attachments, width, height) {
	    width  = width  || gl.drawingBufferWidth;
	    height = height || gl.drawingBufferHeight;
	    framebufferInfo.width = width;
	    framebufferInfo.height = height;
	    attachments = attachments || defaultAttachments;
	    attachments.forEach(function(attachmentOptions, ndx) {
	      var attachment = framebufferInfo.attachments[ndx];
	      var format = attachmentOptions.format;
	      if (attachment instanceof WebGLRenderbuffer) {
	        gl.bindRenderbuffer(gl.RENDERBUFFER, attachment);
	        gl.renderbufferStorage(gl.RENDERBUFFER, format, width, height);
	      } else if (attachment instanceof WebGLTexture) {
	        textures.resizeTexture(gl, attachment, attachmentOptions, width, height);
	      } else {
	        throw "unknown attachment type";
	      }
	    });
	  }
	
	  /**
	   * Binds a framebuffer
	   *
	   * This function pretty much soley exists because I spent hours
	   * trying to figure out why something I wrote wasn't working only
	   * to realize I forget to set the viewport dimensions.
	   * My hope is this function will fix that.
	   *
	   * It is effectively the same as
	   *
	   *     gl.bindFramebuffer(gl.FRAMEBUFFER, someFramebufferInfo.framebuffer);
	   *     gl.viewport(0, 0, someFramebufferInfo.width, someFramebufferInfo.height);
	   *
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {module:twgl.FramebufferInfo} [framebufferInfo] a framebufferInfo as returned from {@link module:twgl.createFramebuffer}.
	   *   If not passed will bind the canvas.
	   * @param {number} [target] The target. If not passed `gl.FRAMEBUFFER` will be used.
	   * @memberOf module:twgl/framebuffers
	   */
	
	  function bindFramebufferInfo(gl, framebufferInfo, target) {
	    target = target || gl.FRAMEBUFFER;
	    if (framebufferInfo) {
	      gl.bindFramebuffer(target, framebufferInfo.framebuffer);
	      gl.viewport(0, 0, framebufferInfo.width, framebufferInfo.height);
	    } else {
	      gl.bindFramebuffer(target, null);
	      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
	    }
	  }
	
	  // Using quotes prevents Uglify from changing the names.
	  // No speed diff AFAICT.
	  return {
	    "bindFramebufferInfo": bindFramebufferInfo,
	    "createFramebufferInfo": createFramebufferInfo,
	    "resizeFramebufferInfo": resizeFramebufferInfo,
	  };
	});
	
	
	/*
	 * Copyright 2015, Gregg Tavares.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are
	 * met:
	 *
	 *     * Redistributions of source code must retain the above copyright
	 * notice, this list of conditions and the following disclaimer.
	 *     * Redistributions in binary form must reproduce the above
	 * copyright notice, this list of conditions and the following disclaimer
	 * in the documentation and/or other materials provided with the
	 * distribution.
	 *     * Neither the name of Gregg Tavares. nor the names of his
	 * contributors may be used to endorse or promote products derived from
	 * this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */
	
	define('twgl/twgl',[
	    './attributes',
	    './draw',
	    './framebuffers',
	    './programs',
	    './textures',
	    './typedarrays',
	    './utils',
	  ], function(
	    attributes,
	    draw,
	    framebuffers,
	    programs,
	    textures,
	    typedArrays,
	    utils) {
	  
	
	  /**
	   * The main TWGL module.
	   *
	   * For most use cases you shouldn't need anything outside this module.
	   * Exceptions between the stuff added to twgl-full (v3, m4, primitives)
	   *
	   * @module twgl
	   * @borrows module:twgl/attributes.setAttribInfoBufferFromArray as setAttribInfoBufferFromArray
	   * @borrows module:twgl/attributes.createBufferInfoFromArrays as createBufferInfoFromArrays
	   * @borrows module:twgl/attributes.createVertexArrayInfo as createVertexArrayInfo
	   * @borrows module:twgl/draw.drawBufferInfo as drawBufferInfo
	   * @borrows module:twgl/draw.drawObjectList as drawObjectList
	   * @borrows module:twgl/framebuffers.createFramebufferInfo as createFramebufferInfo
	   * @borrows module:twgl/framebuffers.resizeFramebufferInfo as resizeFramebufferInfo
	   * @borrows module:twgl/framebuffers.bindFramebufferInfo as bindFramebufferInfo
	   * @borrows module:twgl/programs.createProgramInfo as createProgramInfo
	   * @borrows module:twgl/programs.createUniformBlockInfo as createUniformBlockInfo
	   * @borrows module:twgl/programs.bindUniformBlock as bindUniformBlock
	   * @borrows module:twgl/programs.setUniformBlock as setUniformBlock
	   * @borrows module:twgl/programs.setBlockUniforms as setBlockUniforms
	   * @borrows module:twgl/programs.setUniforms as setUniforms
	   * @borrows module:twgl/programs.setBuffersAndAttributes as setBuffersAndAttributes
	   * @borrows module:twgl/textures.setTextureFromArray as setTextureFromArray
	   * @borrows module:twgl/textures.createTexture as createTexture
	   * @borrows module:twgl/textures.resizeTexture as resizeTexture
	   * @borrows module:twgl/textures.createTextures as createTextures
	   */
	
	  // make sure we don't see a global gl
	  var gl = undefined;  // eslint-disable-line
	  var defaults = {
	    enableVertexArrayObjects: true,
	  };
	
	  /**
	   * Various default settings for twgl.
	   *
	   * Note: You can call this any number of times. Example:
	   *
	   *     twgl.setDefaults({ textureColor: [1, 0, 0, 1] });
	   *     twgl.setDefaults({ attribPrefix: 'a_' });
	   *
	   * is equivalent to
	   *
	   *     twgl.setDefaults({
	   *       textureColor: [1, 0, 0, 1],
	   *       attribPrefix: 'a_',
	   *     });
	   *
	   * @typedef {Object} Defaults
	   * @property {string} attribPrefix The prefix to stick on attributes
	   *
	   *   When writing shaders I prefer to name attributes with `a_`, uniforms with `u_` and varyings with `v_`
	   *   as it makes it clear where they came from. But, when building geometry I prefer using unprefixed names.
	   *
	   *   In otherwords I'll create arrays of geometry like this
	   *
	   *       var arrays = {
	   *         position: ...
	   *         normal: ...
	   *         texcoord: ...
	   *       };
	   *
	   *   But need those mapped to attributes and my attributes start with `a_`.
	   *
	   *   Default: `""`
	   *
	   * @property {number[]} textureColor Array of 4 values in the range 0 to 1
	   *
	   *   The default texture color is used when loading textures from
	   *   urls. Because the URL will be loaded async we'd like to be
	   *   able to use the texture immediately. By putting a 1x1 pixel
	   *   color in the texture we can start using the texture before
	   *   the URL has loaded.
	   *
	   *   Default: `[0.5, 0.75, 1, 1]`
	   *
	   * @property {string} crossOrigin
	   *
	   *   If not undefined sets the crossOrigin attribute on images
	   *   that twgl creates when downloading images for textures.
	   *
	   *   Also see {@link module:twgl.TextureOptions}.
	   *
	   * @property {bool} enableVertexArrayObjects
	   *
	   *   If true then in WebGL 1.0 will attempt to get the `OES_vertex_array_object` extension.
	   *   If successful it will copy create/bind/delete/isVertexArrayOES from the extension to
	   *   the WebGLRenderingContext removing the OES at the end which is the standard entry point
	   *   for WebGL 2.
	   *
	   *   Note: According to webglstats.com 90% of devices support `OES_vertex_array_object`.
	   *   If you just want to count on support I suggest using [this polyfill](https://github.com/KhronosGroup/WebGL/blob/master/sdk/demos/google/resources/OESVertexArrayObject.js)
	   *   or ignoring devices that don't support them.
	   *
	   *   Default: `true`
	   *
	   * @memberOf module:twgl
	   */
	
	  /**
	   * Sets various defaults for twgl.
	   *
	   * In the interest of terseness which is kind of the point
	   * of twgl I've integrated a few of the older functions here
	   *
	   * @param {module:twgl.Defaults} newDefaults The default settings.
	   * @memberOf module:twgl
	   */
	  function setDefaults(newDefaults) {
	    utils.copyExistingProperties(newDefaults, defaults);
	    attributes.setDefaults_(newDefaults);  // eslint-disable-line
	    textures.setDefaults_(newDefaults);  // eslint-disable-line
	  }
	
	  /**
	   * Adds Vertex Array Objects to WebGL 1 GL contexts if available
	   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
	   */
	  function addVertexArrayObjectSupport(gl) {
	    if (!gl || !defaults.enableVertexArrayObjects) {
	      return;
	    }
	    if (utils.isWebGL1(gl)) {
	      var ext = gl.getExtension("OES_vertex_array_object");
	      if (ext) {
	        gl.createVertexArray = function() {
	          return ext.createVertexArrayOES();
	        };
	        gl.deleteVertexArray = function(v) {
	          ext.deleteVertexArrayOES(v);
	        };
	        gl.isVertexArray = function(v) {
	          return ext.isVertexArrayOES(v);
	        };
	        gl.bindVertexArray = function(v) {
	          ext.bindVertexArrayOES(v);
	        };
	        gl.VERTEX_ARRAY_BINDING = ext.VERTEX_ARRAY_BINDING_OES;
	      }
	    }
	  }
	
	  /**
	   * Creates a webgl context.
	   * @param {HTMLCanvasElement} canvas The canvas tag to get
	   *     context from. If one is not passed in one will be
	   *     created.
	   * @return {WebGLRenderingContext} The created context.
	   */
	  function create3DContext(canvas, opt_attribs) {
	    var names = ["webgl", "experimental-webgl"];
	    var context = null;
	    for (var ii = 0; ii < names.length; ++ii) {
	      try {
	        context = canvas.getContext(names[ii], opt_attribs);
	      } catch(e) {}  // eslint-disable-line
	      if (context) {
	        break;
	      }
	    }
	    return context;
	  }
	
	  /**
	   * Gets a WebGL context.
	   * @param {HTMLCanvasElement} canvas a canvas element.
	   * @param {WebGLContextCreationAttirbutes} [opt_attribs] optional webgl context creation attributes
	   * @memberOf module:twgl
	   */
	  function getWebGLContext(canvas, opt_attribs) {
	    var gl = create3DContext(canvas, opt_attribs);
	    addVertexArrayObjectSupport(gl);
	    return gl;
	  }
	
	  /**
	   * Creates a webgl context.
	   *
	   * Will return a WebGL2 context if possible.
	   *
	   * You can check if it's WebGL2 with
	   *
	   *     twgl.isWebGL2(gl);
	   *
	   * @param {HTMLCanvasElement} canvas The canvas tag to get
	   *     context from. If one is not passed in one will be
	   *     created.
	   * @return {WebGLRenderingContext} The created context.
	   */
	  function createContext(canvas, opt_attribs) {
	    var names = ["webgl2", "experimental-webgl2", "webgl", "experimental-webgl"];
	    var context = null;
	    for (var ii = 0; ii < names.length; ++ii) {
	      try {
	        context = canvas.getContext(names[ii], opt_attribs);
	      } catch(e) {}  // eslint-disable-line
	      if (context) {
	        break;
	      }
	    }
	    return context;
	  }
	
	  /**
	   * Gets a WebGL context.  Will create a WebGL2 context if possible.
	   *
	   * You can check if it's WebGL2 with
	   *
	   *    function isWebGL2(gl) {
	   *      return gl.getParameter(gl.VERSION).indexOf("WebGL 2.0 ") == 0;
	   *    }
	   *
	   * @param {HTMLCanvasElement} canvas a canvas element.
	   * @param {WebGLContextCreationAttirbutes} [opt_attribs] optional webgl context creation attributes
	   * @return {WebGLRenderingContext} The created context.
	   * @memberOf module:twgl
	   */
	  function getContext(canvas, opt_attribs) {
	    var gl = createContext(canvas, opt_attribs);
	    addVertexArrayObjectSupport(gl);
	    return gl;
	  }
	
	  /**
	   * Resize a canvas to match the size it's displayed.
	   * @param {HTMLCanvasElement} canvas The canvas to resize.
	   * @param {number} [multiplier] So you can pass in `window.devicePixelRatio` if you want to.
	   * @return {boolean} true if the canvas was resized.
	   * @memberOf module:twgl
	   */
	  function resizeCanvasToDisplaySize(canvas, multiplier) {
	    multiplier = multiplier || 1;
	    multiplier = Math.max(1, multiplier);
	    var width  = canvas.clientWidth  * multiplier | 0;
	    var height = canvas.clientHeight * multiplier | 0;
	    if (canvas.width !== width ||
	        canvas.height !== height) {
	      canvas.width = width;
	      canvas.height = height;
	      return true;
	    }
	    return false;
	  }
	
	  // Using quotes prevents Uglify from changing the names.
	  // No speed diff AFAICT.
	  var api = {
	    "getContext": getContext,
	    "getWebGLContext": getWebGLContext,
	    "isWebGL1": utils.isWebGL1,
	    "isWebGL2": utils.isWebGL2,
	    "resizeCanvasToDisplaySize": resizeCanvasToDisplaySize,
	    "setDefaults": setDefaults,
	  };
	
	  function notPrivate(name) {
	    return name[name.length - 1] !== '_';
	  }
	
	  function copyPublicProperties(src, dst) {
	    Object.keys(src).filter(notPrivate).forEach(function(key) {
	      dst[key] = src[key];
	    });
	    return dst;
	  }
	
	  var apis = {
	    attributes: attributes,
	    draw: draw,
	    framebuffers: framebuffers,
	    programs: programs,
	    textures: textures,
	    typedArrays: typedArrays,
	  };
	  Object.keys(apis).forEach(function(name) {
	    var srcApi = apis[name];
	    copyPublicProperties(srcApi, api);
	    api[name] = copyPublicProperties(srcApi, {});
	  });
	
	  return api;
	
	});
	
	
	/*
	 * Copyright 2015, Gregg Tavares.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are
	 * met:
	 *
	 *     * Redistributions of source code must retain the above copyright
	 * notice, this list of conditions and the following disclaimer.
	 *     * Redistributions in binary form must reproduce the above
	 * copyright notice, this list of conditions and the following disclaimer
	 * in the documentation and/or other materials provided with the
	 * distribution.
	 *     * Neither the name of Gregg Tavares. nor the names of his
	 * contributors may be used to endorse or promote products derived from
	 * this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */
	
	define('twgl/v3',[], function() {
	  
	
	  /**
	   *
	   * Vec3 math math functions.
	   *
	   * Almost all functions take an optional `dst` argument. If it is not passed in the
	   * functions will create a new Vec3. In other words you can do this
	   *
	   *     var v = v3.cross(v1, v2);  // Creates a new Vec3 with the cross product of v1 x v2.
	   *
	   * or
	   *
	   *     var v3 = v3.create();
	   *     v3.cross(v1, v2, v);  // Puts the cross product of v1 x v2 in v
	   *
	   * The first style is often easier but depending on where it's used it generates garbage where
	   * as there is almost never allocation with the second style.
	   *
	   * It is always save to pass any vector as the destination. So for example
	   *
	   *     v3.cross(v1, v2, v1);  // Puts the cross product of v1 x v2 in v1
	   *
	   * @module twgl/v3
	   */
	
	  var VecType = Float32Array;
	
	  /**
	   * A JavaScript array with 3 values or a Float32Array with 3 values.
	   * When created by the library will create the default type which is `Float32Array`
	   * but can be set by calling {@link module:twgl/v3.setDefaultType}.
	   * @typedef {(number[]|Float32Array)} Vec3
	   * @memberOf module:twgl/v3
	   */
	
	  /**
	   * Sets the type this library creates for a Vec3
	   * @param {constructor} ctor the constructor for the type. Either `Float32Array` or `Array`
	   * @return {constructor} previous constructor for Vec3
	   */
	  function setDefaultType(ctor) {
	    var oldType = VecType;
	    VecType = ctor;
	    return oldType;
	  }
	
	  /**
	   * Creates a vec3; may be called with x, y, z to set initial values.
	   * @return {Vec3} the created vector
	   * @memberOf module:twgl/v3
	   */
	  function create(x, y, z) {
	    var dst = new VecType(3);
	    if (x) {
	      dst[0] = x;
	    }
	    if (y) {
	      dst[1] = y;
	    }
	    if (z) {
	      dst[2] = z;
	    }
	    return dst;
	  }
	
	  /**
	   * Adds two vectors; assumes a and b have the same dimension.
	   * @param {module:twgl/v3.Vec3} a Operand vector.
	   * @param {module:twgl/v3.Vec3} b Operand vector.
	   * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
	   * @memberOf module:twgl/v3
	   */
	  function add(a, b, dst) {
	    dst = dst || new VecType(3);
	
	    dst[0] = a[0] + b[0];
	    dst[1] = a[1] + b[1];
	    dst[2] = a[2] + b[2];
	
	    return dst;
	  }
	
	  /**
	   * Subtracts two vectors.
	   * @param {module:twgl/v3.Vec3} a Operand vector.
	   * @param {module:twgl/v3.Vec3} b Operand vector.
	   * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
	   * @memberOf module:twgl/v3
	   */
	  function subtract(a, b, dst) {
	    dst = dst || new VecType(3);
	
	    dst[0] = a[0] - b[0];
	    dst[1] = a[1] - b[1];
	    dst[2] = a[2] - b[2];
	
	    return dst;
	  }
	
	  /**
	   * Performs linear interpolation on two vectors.
	   * Given vectors a and b and interpolation coefficient t, returns
	   * (1 - t) * a + t * b.
	   * @param {module:twgl/v3.Vec3} a Operand vector.
	   * @param {module:twgl/v3.Vec3} b Operand vector.
	   * @param {number} t Interpolation coefficient.
	   * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
	   * @memberOf module:twgl/v3
	   */
	  function lerp(a, b, t, dst) {
	    dst = dst || new VecType(3);
	
	    dst[0] = (1 - t) * a[0] + t * b[0];
	    dst[1] = (1 - t) * a[1] + t * b[1];
	    dst[2] = (1 - t) * a[2] + t * b[2];
	
	    return dst;
	  }
	
	  /**
	   * Mutiplies a vector by a scalar.
	   * @param {module:twgl/v3.Vec3} v The vector.
	   * @param {number} k The scalar.
	   * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
	   * @return {module:twgl/v3.Vec3} dst.
	   * @memberOf module:twgl/v3
	   */
	  function mulScalar(v, k, dst) {
	    dst = dst || new VecType(3);
	
	    dst[0] = v[0] * k;
	    dst[1] = v[1] * k;
	    dst[2] = v[2] * k;
	
	    return dst;
	  }
	
	  /**
	   * Divides a vector by a scalar.
	   * @param {module:twgl/v3.Vec3} v The vector.
	   * @param {number} k The scalar.
	   * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
	   * @return {module:twgl/v3.Vec3} dst.
	   * @memberOf module:twgl/v3
	   */
	  function divScalar(v, k, dst) {
	    dst = dst || new VecType(3);
	
	    dst[0] = v[0] / k;
	    dst[1] = v[1] / k;
	    dst[2] = v[2] / k;
	
	    return dst;
	  }
	
	  /**
	   * Computes the cross product of two vectors; assumes both vectors have
	   * three entries.
	   * @param {module:twgl/v3.Vec3} a Operand vector.
	   * @param {module:twgl/v3.Vec3} b Operand vector.
	   * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
	   * @return {module:twgl/v3.Vec3} The vector a cross b.
	   * @memberOf module:twgl/v3
	   */
	  function cross(a, b, dst) {
	    dst = dst || new VecType(3);
	
	    dst[0] = a[1] * b[2] - a[2] * b[1];
	    dst[1] = a[2] * b[0] - a[0] * b[2];
	    dst[2] = a[0] * b[1] - a[1] * b[0];
	
	    return dst;
	  }
	
	  /**
	   * Computes the dot product of two vectors; assumes both vectors have
	   * three entries.
	   * @param {module:twgl/v3.Vec3} a Operand vector.
	   * @param {module:twgl/v3.Vec3} b Operand vector.
	   * @return {number} dot product
	   * @memberOf module:twgl/v3
	   */
	  function dot(a, b) {
	    return (a[0] * b[0]) + (a[1] * b[1]) + (a[2] * b[2]);
	  }
	
	  /**
	   * Computes the length of vector
	   * @param {module:twgl/v3.Vec3} v vector.
	   * @return {number} length of vector.
	   * @memberOf module:twgl/v3
	   */
	  function length(v) {
	    return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
	  }
	
	  /**
	   * Computes the square of the length of vector
	   * @param {module:twgl/v3.Vec3} v vector.
	   * @return {number} square of the length of vector.
	   * @memberOf module:twgl/v3
	   */
	  function lengthSq(v) {
	    return v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
	  }
	
	  /**
	   * Divides a vector by its Euclidean length and returns the quotient.
	   * @param {module:twgl/v3.Vec3} a The vector.
	   * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
	   * @return {module:twgl/v3.Vec3} The normalized vector.
	   * @memberOf module:twgl/v3
	   */
	  function normalize(a, dst) {
	    dst = dst || new VecType(3);
	
	    var lenSq = a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
	    var len = Math.sqrt(lenSq);
	    if (len > 0.00001) {
	      dst[0] = a[0] / len;
	      dst[1] = a[1] / len;
	      dst[2] = a[2] / len;
	    } else {
	      dst[0] = 0;
	      dst[1] = 0;
	      dst[2] = 0;
	    }
	
	    return dst;
	  }
	
	  /**
	   * Negates a vector.
	   * @param {module:twgl/v3.Vec3} v The vector.
	   * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
	   * @return {module:twgl/v3.Vec3} -v.
	   * @memberOf module:twgl/v3
	   */
	  function negate(v, dst) {
	    dst = dst || new VecType(3);
	
	    dst[0] = -v[0];
	    dst[1] = -v[1];
	    dst[2] = -v[2];
	
	    return dst;
	  }
	
	  /**
	   * Copies a vector.
	   * @param {module:twgl/v3.Vec3} v The vector.
	   * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
	   * @return {module:twgl/v3.Vec3} A copy of v.
	   * @memberOf module:twgl/v3
	   */
	  function copy(v, dst) {
	    dst = dst || new VecType(3);
	
	    dst[0] = v[0];
	    dst[1] = v[1];
	    dst[2] = v[2];
	
	    return dst;
	  }
	
	  /**
	   * Multiplies a vector by another vector (component-wise); assumes a and
	   * b have the same length.
	   * @param {module:twgl/v3.Vec3} a Operand vector.
	   * @param {module:twgl/v3.Vec3} b Operand vector.
	   * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
	   * @return {module:twgl/v3.Vec3} The vector of products of entries of a and
	   *     b.
	   * @memberOf module:twgl/v3
	   */
	  function multiply(a, b, dst) {
	    dst = dst || new VecType(3);
	
	    dst[0] = a[0] * b[0];
	    dst[1] = a[1] * b[1];
	    dst[2] = a[2] * b[2];
	
	    return dst;
	  }
	
	  /**
	   * Divides a vector by another vector (component-wise); assumes a and
	   * b have the same length.
	   * @param {module:twgl/v3.Vec3} a Operand vector.
	   * @param {module:twgl/v3.Vec3} b Operand vector.
	   * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
	   * @return {module:twgl/v3.Vec3} The vector of quotients of entries of a and
	   *     b.
	   * @memberOf module:twgl/v3
	   */
	  function divide(a, b, dst) {
	    dst = dst || new VecType(3);
	
	    dst[0] = a[0] / b[0];
	    dst[1] = a[1] / b[1];
	    dst[2] = a[2] / b[2];
	
	    return dst;
	  }
	
	  // Using quotes prevents Uglify from changing the names.
	  // No speed diff AFAICT.
	  return {
	    "add": add,
	    "copy": copy,
	    "create": create,
	    "cross": cross,
	    "divide": divide,
	    "divScalar": divScalar,
	    "dot": dot,
	    "lerp": lerp,
	    "length": length,
	    "lengthSq": lengthSq,
	    "mulScalar": mulScalar,
	    "multiply": multiply,
	    "negate": negate,
	    "normalize": normalize,
	    "setDefaultType": setDefaultType,
	    "subtract": subtract,
	  };
	
	});
	
	/*
	 * Copyright 2015, Gregg Tavares.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are
	 * met:
	 *
	 *     * Redistributions of source code must retain the above copyright
	 * notice, this list of conditions and the following disclaimer.
	 *     * Redistributions in binary form must reproduce the above
	 * copyright notice, this list of conditions and the following disclaimer
	 * in the documentation and/or other materials provided with the
	 * distribution.
	 *     * Neither the name of Gregg Tavares. nor the names of his
	 * contributors may be used to endorse or promote products derived from
	 * this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */
	
	define('twgl/m4',['./v3'], function(v3) {
	  
	
	  /**
	   * 4x4 Matrix math math functions.
	   *
	   * Almost all functions take an optional `dst` argument. If it is not passed in the
	   * functions will create a new matrix. In other words you can do this
	   *
	   *     var mat = m4.translation([1, 2, 3]);  // Creates a new translation matrix
	   *
	   * or
	   *
	   *     var mat = m4.create();
	   *     m4.translation([1, 2, 3], mat);  // Puts translation matrix in mat.
	   *
	   * The first style is often easier but depending on where it's used it generates garbage where
	   * as there is almost never allocation with the second style.
	   *
	   * It is always save to pass any matrix as the destination. So for example
	   *
	   *     var mat = m4.identity();
	   *     var trans = m4.translation([1, 2, 3]);
	   *     m4.multiply(mat, trans, mat);  // Multiplies mat * trans and puts result in mat.
	   *
	   * @module twgl/m4
	   */
	  var MatType = Float32Array;
	
	  var tempV3a = v3.create();
	  var tempV3b = v3.create();
	  var tempV3c = v3.create();
	
	  /**
	   * A JavaScript array with 16 values or a Float32Array with 16 values.
	   * When created by the library will create the default type which is `Float32Array`
	   * but can be set by calling {@link module:twgl/m4.setDefaultType}.
	   * @typedef {(number[]|Float32Array)} Mat4
	   * @memberOf module:twgl/m4
	   */
	
	  /**
	   * Sets the type this library creates for a Mat4
	   * @param {constructor} ctor the constructor for the type. Either `Float32Array` or `Array`
	   * @return {constructor} previous constructor for Mat4
	   */
	  function setDefaultType(ctor) {
	    var oldType = MatType;
	    MatType = ctor;
	    return oldType;
	  }
	
	  /**
	   * Negates a matrix.
	   * @param {module:twgl/m4.Mat4} m The matrix.
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} -m.
	   * @memberOf module:twgl/m4
	   */
	  function negate(m, dst) {
	    dst = dst || new MatType(16);
	
	    dst[ 0] = -m[ 0];
	    dst[ 1] = -m[ 1];
	    dst[ 2] = -m[ 2];
	    dst[ 3] = -m[ 3];
	    dst[ 4] = -m[ 4];
	    dst[ 5] = -m[ 5];
	    dst[ 6] = -m[ 6];
	    dst[ 7] = -m[ 7];
	    dst[ 8] = -m[ 8];
	    dst[ 9] = -m[ 9];
	    dst[10] = -m[10];
	    dst[11] = -m[11];
	    dst[12] = -m[12];
	    dst[13] = -m[13];
	    dst[14] = -m[14];
	    dst[15] = -m[15];
	
	    return dst;
	  }
	
	  /**
	   * Copies a matrix.
	   * @param {module:twgl/m4.Mat4} m The matrix.
	   * @param {module:twgl/m4.Mat4} [dst] The matrix.
	   * @return {module:twgl/m4.Mat4} A copy of m.
	   * @memberOf module:twgl/m4
	   */
	  function copy(m, dst) {
	    dst = dst || new MatType(16);
	
	    dst[ 0] = m[ 0];
	    dst[ 1] = m[ 1];
	    dst[ 2] = m[ 2];
	    dst[ 3] = m[ 3];
	    dst[ 4] = m[ 4];
	    dst[ 5] = m[ 5];
	    dst[ 6] = m[ 6];
	    dst[ 7] = m[ 7];
	    dst[ 8] = m[ 8];
	    dst[ 9] = m[ 9];
	    dst[10] = m[10];
	    dst[11] = m[11];
	    dst[12] = m[12];
	    dst[13] = m[13];
	    dst[14] = m[14];
	    dst[15] = m[15];
	
	    return dst;
	  }
	
	  /**
	   * Creates an n-by-n identity matrix.
	   *
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} An n-by-n identity matrix.
	   * @memberOf module:twgl/m4
	   */
	  function identity(dst) {
	    dst = dst || new MatType(16);
	
	    dst[ 0] = 1;
	    dst[ 1] = 0;
	    dst[ 2] = 0;
	    dst[ 3] = 0;
	    dst[ 4] = 0;
	    dst[ 5] = 1;
	    dst[ 6] = 0;
	    dst[ 7] = 0;
	    dst[ 8] = 0;
	    dst[ 9] = 0;
	    dst[10] = 1;
	    dst[11] = 0;
	    dst[12] = 0;
	    dst[13] = 0;
	    dst[14] = 0;
	    dst[15] = 1;
	
	    return dst;
	  }
	
	  /**
	   * Takes the transpose of a matrix.
	   * @param {module:twgl/m4.Mat4} m The matrix.
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} The transpose of m.
	   * @memberOf module:twgl/m4
	   */
	   function transpose(m, dst) {
	    dst = dst || new MatType(16);
	    if (dst === m) {
	      var t;
	
	      t = m[1];
	      m[1] = m[4];
	      m[4] = t;
	
	      t = m[2];
	      m[2] = m[8];
	      m[8] = t;
	
	      t = m[3];
	      m[3] = m[12];
	      m[12] = t;
	
	      t = m[6];
	      m[6] = m[9];
	      m[9] = t;
	
	      t = m[7];
	      m[7] = m[13];
	      m[13] = t;
	
	      t = m[11];
	      m[11] = m[14];
	      m[14] = t;
	      return dst;
	    }
	
	    var m00 = m[0 * 4 + 0];
	    var m01 = m[0 * 4 + 1];
	    var m02 = m[0 * 4 + 2];
	    var m03 = m[0 * 4 + 3];
	    var m10 = m[1 * 4 + 0];
	    var m11 = m[1 * 4 + 1];
	    var m12 = m[1 * 4 + 2];
	    var m13 = m[1 * 4 + 3];
	    var m20 = m[2 * 4 + 0];
	    var m21 = m[2 * 4 + 1];
	    var m22 = m[2 * 4 + 2];
	    var m23 = m[2 * 4 + 3];
	    var m30 = m[3 * 4 + 0];
	    var m31 = m[3 * 4 + 1];
	    var m32 = m[3 * 4 + 2];
	    var m33 = m[3 * 4 + 3];
	
	    dst[ 0] = m00;
	    dst[ 1] = m10;
	    dst[ 2] = m20;
	    dst[ 3] = m30;
	    dst[ 4] = m01;
	    dst[ 5] = m11;
	    dst[ 6] = m21;
	    dst[ 7] = m31;
	    dst[ 8] = m02;
	    dst[ 9] = m12;
	    dst[10] = m22;
	    dst[11] = m32;
	    dst[12] = m03;
	    dst[13] = m13;
	    dst[14] = m23;
	    dst[15] = m33;
	
	    return dst;
	  }
	
	  /**
	   * Computes the inverse of a 4-by-4 matrix.
	   * @param {module:twgl/m4.Mat4} m The matrix.
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} The inverse of m.
	   * @memberOf module:twgl/m4
	   */
	  function inverse(m, dst) {
	    dst = dst || new MatType(16);
	
	    var m00 = m[0 * 4 + 0];
	    var m01 = m[0 * 4 + 1];
	    var m02 = m[0 * 4 + 2];
	    var m03 = m[0 * 4 + 3];
	    var m10 = m[1 * 4 + 0];
	    var m11 = m[1 * 4 + 1];
	    var m12 = m[1 * 4 + 2];
	    var m13 = m[1 * 4 + 3];
	    var m20 = m[2 * 4 + 0];
	    var m21 = m[2 * 4 + 1];
	    var m22 = m[2 * 4 + 2];
	    var m23 = m[2 * 4 + 3];
	    var m30 = m[3 * 4 + 0];
	    var m31 = m[3 * 4 + 1];
	    var m32 = m[3 * 4 + 2];
	    var m33 = m[3 * 4 + 3];
	    var tmp_0  = m22 * m33;
	    var tmp_1  = m32 * m23;
	    var tmp_2  = m12 * m33;
	    var tmp_3  = m32 * m13;
	    var tmp_4  = m12 * m23;
	    var tmp_5  = m22 * m13;
	    var tmp_6  = m02 * m33;
	    var tmp_7  = m32 * m03;
	    var tmp_8  = m02 * m23;
	    var tmp_9  = m22 * m03;
	    var tmp_10 = m02 * m13;
	    var tmp_11 = m12 * m03;
	    var tmp_12 = m20 * m31;
	    var tmp_13 = m30 * m21;
	    var tmp_14 = m10 * m31;
	    var tmp_15 = m30 * m11;
	    var tmp_16 = m10 * m21;
	    var tmp_17 = m20 * m11;
	    var tmp_18 = m00 * m31;
	    var tmp_19 = m30 * m01;
	    var tmp_20 = m00 * m21;
	    var tmp_21 = m20 * m01;
	    var tmp_22 = m00 * m11;
	    var tmp_23 = m10 * m01;
	
	    var t0 = (tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31) -
	        (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
	    var t1 = (tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31) -
	        (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
	    var t2 = (tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31) -
	        (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
	    var t3 = (tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21) -
	        (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);
	
	    var d = 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);
	
	    dst[ 0] = d * t0;
	    dst[ 1] = d * t1;
	    dst[ 2] = d * t2;
	    dst[ 3] = d * t3;
	    dst[ 4] = d * ((tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30) -
	            (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30));
	    dst[ 5] = d * ((tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30) -
	            (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30));
	    dst[ 6] = d * ((tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30) -
	            (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30));
	    dst[ 7] = d * ((tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20) -
	            (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20));
	    dst[ 8] = d * ((tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33) -
	            (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33));
	    dst[ 9] = d * ((tmp_13 * m03 + tmp_18 * m23 + tmp_21 * m33) -
	            (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33));
	    dst[10] = d * ((tmp_14 * m03 + tmp_19 * m13 + tmp_22 * m33) -
	            (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33));
	    dst[11] = d * ((tmp_17 * m03 + tmp_20 * m13 + tmp_23 * m23) -
	            (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23));
	    dst[12] = d * ((tmp_14 * m22 + tmp_17 * m32 + tmp_13 * m12) -
	            (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22));
	    dst[13] = d * ((tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m22) -
	            (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02));
	    dst[14] = d * ((tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02) -
	            (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12));
	    dst[15] = d * ((tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12) -
	            (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02));
	
	    return dst;
	  }
	
	  /**
	   * Multiplies two 4-by-4 matrices; assumes that the given matrices are 4-by-4;
	   * assumes matrix entries are accessed in [row][column] fashion.
	   * @param {module:twgl/m4.Mat4} a The matrix on the left.
	   * @param {module:twgl/m4.Mat4} b The matrix on the right.
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} The matrix product of a and b.
	   * @memberOf module:twgl/m4
	   */
	  function multiply(a, b, dst) {
	    dst = dst || new MatType(16);
	
	    var a00 = a[0];
	    var a01 = a[1];
	    var a02 = a[2];
	    var a03 = a[3];
	    var a10 = a[ 4 + 0];
	    var a11 = a[ 4 + 1];
	    var a12 = a[ 4 + 2];
	    var a13 = a[ 4 + 3];
	    var a20 = a[ 8 + 0];
	    var a21 = a[ 8 + 1];
	    var a22 = a[ 8 + 2];
	    var a23 = a[ 8 + 3];
	    var a30 = a[12 + 0];
	    var a31 = a[12 + 1];
	    var a32 = a[12 + 2];
	    var a33 = a[12 + 3];
	    var b00 = b[0];
	    var b01 = b[1];
	    var b02 = b[2];
	    var b03 = b[3];
	    var b10 = b[ 4 + 0];
	    var b11 = b[ 4 + 1];
	    var b12 = b[ 4 + 2];
	    var b13 = b[ 4 + 3];
	    var b20 = b[ 8 + 0];
	    var b21 = b[ 8 + 1];
	    var b22 = b[ 8 + 2];
	    var b23 = b[ 8 + 3];
	    var b30 = b[12 + 0];
	    var b31 = b[12 + 1];
	    var b32 = b[12 + 2];
	    var b33 = b[12 + 3];
	
	    dst[ 0] = a00 * b00 + a01 * b10 + a02 * b20 + a03 * b30;
	    dst[ 1] = a00 * b01 + a01 * b11 + a02 * b21 + a03 * b31;
	    dst[ 2] = a00 * b02 + a01 * b12 + a02 * b22 + a03 * b32;
	    dst[ 3] = a00 * b03 + a01 * b13 + a02 * b23 + a03 * b33;
	    dst[ 4] = a10 * b00 + a11 * b10 + a12 * b20 + a13 * b30;
	    dst[ 5] = a10 * b01 + a11 * b11 + a12 * b21 + a13 * b31;
	    dst[ 6] = a10 * b02 + a11 * b12 + a12 * b22 + a13 * b32;
	    dst[ 7] = a10 * b03 + a11 * b13 + a12 * b23 + a13 * b33;
	    dst[ 8] = a20 * b00 + a21 * b10 + a22 * b20 + a23 * b30;
	    dst[ 9] = a20 * b01 + a21 * b11 + a22 * b21 + a23 * b31;
	    dst[10] = a20 * b02 + a21 * b12 + a22 * b22 + a23 * b32;
	    dst[11] = a20 * b03 + a21 * b13 + a22 * b23 + a23 * b33;
	    dst[12] = a30 * b00 + a31 * b10 + a32 * b20 + a33 * b30;
	    dst[13] = a30 * b01 + a31 * b11 + a32 * b21 + a33 * b31;
	    dst[14] = a30 * b02 + a31 * b12 + a32 * b22 + a33 * b32;
	    dst[15] = a30 * b03 + a31 * b13 + a32 * b23 + a33 * b33;
	
	    return dst;
	  }
	
	  /**
	   * Sets the translation component of a 4-by-4 matrix to the given
	   * vector.
	   * @param {module:twgl/m4.Mat4} a The matrix.
	   * @param {Vec3} v The vector.
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} a once modified.
	   * @memberOf module:twgl/m4
	   */
	  function setTranslation(a, v, dst) {
	    dst = dst || identity();
	    if (a !== dst) {
	      dst[ 0] = a[ 0];
	      dst[ 1] = a[ 1];
	      dst[ 2] = a[ 2];
	      dst[ 3] = a[ 3];
	      dst[ 4] = a[ 4];
	      dst[ 5] = a[ 5];
	      dst[ 6] = a[ 6];
	      dst[ 7] = a[ 7];
	      dst[ 8] = a[ 8];
	      dst[ 9] = a[ 9];
	      dst[10] = a[10];
	      dst[11] = a[11];
	    }
	    dst[12] = v[0];
	    dst[13] = v[1];
	    dst[14] = v[2];
	    dst[15] = 1;
	    return dst;
	  }
	
	  /**
	   * Returns the translation component of a 4-by-4 matrix as a vector with 3
	   * entries.
	   * @param {module:twgl/m4.Mat4} m The matrix.
	   * @param {Vec3} [dst] vector..
	   * @return {Vec3} The translation component of m.
	   * @memberOf module:twgl/m4
	   */
	  function getTranslation(m, dst) {
	    dst = dst || v3.create();
	    dst[0] = m[12];
	    dst[1] = m[13];
	    dst[2] = m[14];
	    return dst;
	  }
	
	  /**
	   * Returns an axis of a 4x4 matrix as a vector with 3 entries
	   * @param {module:twgl/m4.Mat4} m The matrix.
	   * @param {number} axis The axis 0 = x, 1 = y, 2 = z;
	   * @return {Vec3} [dst] vector.
	   * @return {Vec3} The axis component of m.
	   * @memberOf module:twgl/m4
	   */
	  function getAxis(m, axis, dst) {
	    dst = dst || v3.create();
	    var off = axis * 4;
	    dst[0] = m[off + 0];
	    dst[1] = m[off + 1];
	    dst[2] = m[off + 2];
	    return dst;
	  }
	
	  /**
	   * Sets an axis of a 4x4 matrix as a vector with 3 entries
	   * @param {Vec3} v the axis vector
	   * @param {number} axis The axis  0 = x, 1 = y, 2 = z;
	   * @param {module:twgl/m4.Mat4} [dst] The matrix to set. If none a new one is created
	   * @return {module:twgl/m4.Mat4} dst
	   * @memberOf module:twgl/m4
	   */
	  function setAxis(a, v, axis, dst) {
	    if (dst !== a) {
	      dst = copy(a, dst);
	    }
	    var off = axis * 4;
	    dst[off + 0] = v[0];
	    dst[off + 1] = v[1];
	    dst[off + 2] = v[2];
	    return dst;
	  }
	
	  /**
	   * Computes a 4-by-4 perspective transformation matrix given the angular height
	   * of the frustum, the aspect ratio, and the near and far clipping planes.  The
	   * arguments define a frustum extending in the negative z direction.  The given
	   * angle is the vertical angle of the frustum, and the horizontal angle is
	   * determined to produce the given aspect ratio.  The arguments near and far are
	   * the distances to the near and far clipping planes.  Note that near and far
	   * are not z coordinates, but rather they are distances along the negative
	   * z-axis.  The matrix generated sends the viewing frustum to the unit box.
	   * We assume a unit box extending from -1 to 1 in the x and y dimensions and
	   * from 0 to 1 in the z dimension.
	   * @param {number} fieldOfViewYInRadians The camera angle from top to bottom (in radians).
	   * @param {number} aspect The aspect ratio width / height.
	   * @param {number} zNear The depth (negative z coordinate)
	   *     of the near clipping plane.
	   * @param {number} zFar The depth (negative z coordinate)
	   *     of the far clipping plane.
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} The perspective matrix.
	   * @memberOf module:twgl/m4
	   */
	  function perspective(fieldOfViewYInRadians, aspect, zNear, zFar, dst) {
	    dst = dst || new MatType(16);
	
	    var f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewYInRadians);
	    var rangeInv = 1.0 / (zNear - zFar);
	
	    dst[0]  = f / aspect;
	    dst[1]  = 0;
	    dst[2]  = 0;
	    dst[3]  = 0;
	
	    dst[4]  = 0;
	    dst[5]  = f;
	    dst[6]  = 0;
	    dst[7]  = 0;
	
	    dst[8]  = 0;
	    dst[9]  = 0;
	    dst[10] = (zNear + zFar) * rangeInv;
	    dst[11] = -1;
	
	    dst[12] = 0;
	    dst[13] = 0;
	    dst[14] = zNear * zFar * rangeInv * 2;
	    dst[15] = 0;
	
	    return dst;
	  }
	
	  /**
	   * Computes a 4-by-4 othogonal transformation matrix given the left, right,
	   * bottom, and top dimensions of the near clipping plane as well as the
	   * near and far clipping plane distances.
	   * @param {number} left Left side of the near clipping plane viewport.
	   * @param {number} right Right side of the near clipping plane viewport.
	   * @param {number} top Top of the near clipping plane viewport.
	   * @param {number} bottom Bottom of the near clipping plane viewport.
	   * @param {number} near The depth (negative z coordinate)
	   *     of the near clipping plane.
	   * @param {number} far The depth (negative z coordinate)
	   *     of the far clipping plane.
	   * @param {module:twgl/m4.Mat4} [dst] Output matrix.
	   * @return {module:twgl/m4.Mat4} The perspective matrix.
	   * @memberOf module:twgl/m4
	   */
	  function ortho(left, right, bottom, top, near, far, dst) {
	    dst = dst || new MatType(16);
	
	    dst[0]  = 2 / (right - left);
	    dst[1]  = 0;
	    dst[2]  = 0;
	    dst[3]  = 0;
	
	    dst[4]  = 0;
	    dst[5]  = 2 / (top - bottom);
	    dst[6]  = 0;
	    dst[7]  = 0;
	
	    dst[8]  = 0;
	    dst[9]  = 0;
	    dst[10] = -1 / (far - near);
	    dst[11] = 0;
	
	    dst[12] = (right + left) / (left - right);
	    dst[13] = (top + bottom) / (bottom - top);
	    dst[14] = -near / (near - far);
	    dst[15] = 1;
	
	    return dst;
	  }
	
	  /**
	   * Computes a 4-by-4 perspective transformation matrix given the left, right,
	   * top, bottom, near and far clipping planes. The arguments define a frustum
	   * extending in the negative z direction. The arguments near and far are the
	   * distances to the near and far clipping planes. Note that near and far are not
	   * z coordinates, but rather they are distances along the negative z-axis. The
	   * matrix generated sends the viewing frustum to the unit box. We assume a unit
	   * box extending from -1 to 1 in the x and y dimensions and from 0 to 1 in the z
	   * dimension.
	   * @param {number} left The x coordinate of the left plane of the box.
	   * @param {number} right The x coordinate of the right plane of the box.
	   * @param {number} bottom The y coordinate of the bottom plane of the box.
	   * @param {number} top The y coordinate of the right plane of the box.
	   * @param {number} near The negative z coordinate of the near plane of the box.
	   * @param {number} far The negative z coordinate of the far plane of the box.
	   * @param {module:twgl/m4.Mat4} [dst] Output matrix.
	   * @return {module:twgl/m4.Mat4} The perspective projection matrix.
	   * @memberOf module:twgl/m4
	   */
	  function frustum(left, right, bottom, top, near, far, dst) {
	    dst = dst || new MatType(16);
	
	    var dx = (right - left);
	    var dy = (top - bottom);
	    var dz = (near - far);
	
	    dst[ 0] = 2 * near / dx;
	    dst[ 1] = 0;
	    dst[ 2] = 0;
	    dst[ 3] = 0;
	    dst[ 4] = 0;
	    dst[ 5] = 2 * near / dy;
	    dst[ 6] = 0;
	    dst[ 7] = 0;
	    dst[ 8] = (left + right) / dx;
	    dst[ 9] = (top + bottom) / dy;
	    dst[10] = far / dz;
	    dst[11] = -1;
	    dst[12] = 0;
	    dst[13] = 0;
	    dst[14] = near * far / dz;
	    dst[15] = 0;
	
	    return dst;
	  }
	
	  /**
	   * Computes a 4-by-4 look-at transformation.
	   *
	   * This is a matrix which positions the camera itself. If you want
	   * a view matrix (a matrix which moves things in front of the camera)
	   * take the inverse of this.
	   *
	   * @param {Vec3} eye The position of the eye.
	   * @param {Vec3} target The position meant to be viewed.
	   * @param {Vec3} up A vector pointing up.
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} The look-at matrix.
	   * @memberOf module:twgl/m4
	   */
	  function lookAt(eye, target, up, dst) {
	    dst = dst || new MatType(16);
	
	    var xAxis = tempV3a;
	    var yAxis = tempV3b;
	    var zAxis = tempV3c;
	
	    v3.normalize(
	        v3.subtract(eye, target, zAxis), zAxis);
	    v3.normalize(v3.cross(up, zAxis, xAxis), xAxis);
	    v3.normalize(v3.cross(zAxis, xAxis, yAxis), yAxis);
	
	    dst[ 0] = xAxis[0];
	    dst[ 1] = xAxis[1];
	    dst[ 2] = xAxis[2];
	    dst[ 3] = 0;
	    dst[ 4] = yAxis[0];
	    dst[ 5] = yAxis[1];
	    dst[ 6] = yAxis[2];
	    dst[ 7] = 0;
	    dst[ 8] = zAxis[0];
	    dst[ 9] = zAxis[1];
	    dst[10] = zAxis[2];
	    dst[11] = 0;
	    dst[12] = eye[0];
	    dst[13] = eye[1];
	    dst[14] = eye[2];
	    dst[15] = 1;
	
	    return dst;
	  }
	
	  /**
	   * Creates a 4-by-4 matrix which translates by the given vector v.
	   * @param {Vec3} v The vector by
	   *     which to translate.
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} The translation matrix.
	   * @memberOf module:twgl/m4
	   */
	  function translation(v, dst) {
	    dst = dst || new MatType(16);
	
	    dst[ 0] = 1;
	    dst[ 1] = 0;
	    dst[ 2] = 0;
	    dst[ 3] = 0;
	    dst[ 4] = 0;
	    dst[ 5] = 1;
	    dst[ 6] = 0;
	    dst[ 7] = 0;
	    dst[ 8] = 0;
	    dst[ 9] = 0;
	    dst[10] = 1;
	    dst[11] = 0;
	    dst[12] = v[0];
	    dst[13] = v[1];
	    dst[14] = v[2];
	    dst[15] = 1;
	    return dst;
	  }
	
	  /**
	   * Modifies the given 4-by-4 matrix by translation by the given vector v.
	   * @param {module:twgl/m4.Mat4} m The matrix.
	   * @param {Vec3} v The vector by
	   *     which to translate.
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} m once modified.
	   * @memberOf module:twgl/m4
	   */
	  function translate(m, v, dst) {
	    dst = dst || new MatType(16);
	
	    var v0 = v[0];
	    var v1 = v[1];
	    var v2 = v[2];
	    var m00 = m[0];
	    var m01 = m[1];
	    var m02 = m[2];
	    var m03 = m[3];
	    var m10 = m[1 * 4 + 0];
	    var m11 = m[1 * 4 + 1];
	    var m12 = m[1 * 4 + 2];
	    var m13 = m[1 * 4 + 3];
	    var m20 = m[2 * 4 + 0];
	    var m21 = m[2 * 4 + 1];
	    var m22 = m[2 * 4 + 2];
	    var m23 = m[2 * 4 + 3];
	    var m30 = m[3 * 4 + 0];
	    var m31 = m[3 * 4 + 1];
	    var m32 = m[3 * 4 + 2];
	    var m33 = m[3 * 4 + 3];
	
	    if (m !== dst) {
	      dst[ 0] = m00;
	      dst[ 1] = m01;
	      dst[ 2] = m02;
	      dst[ 3] = m03;
	      dst[ 4] = m10;
	      dst[ 5] = m11;
	      dst[ 6] = m12;
	      dst[ 7] = m13;
	      dst[ 8] = m20;
	      dst[ 9] = m21;
	      dst[10] = m22;
	      dst[11] = m23;
	    }
	
	    dst[12] = m00 * v0 + m10 * v1 + m20 * v2 + m30;
	    dst[13] = m01 * v0 + m11 * v1 + m21 * v2 + m31;
	    dst[14] = m02 * v0 + m12 * v1 + m22 * v2 + m32;
	    dst[15] = m03 * v0 + m13 * v1 + m23 * v2 + m33;
	
	    return dst;
	  }
	
	  /**
	   * Creates a 4-by-4 matrix which rotates around the x-axis by the given angle.
	   * @param {number} angleInRadians The angle by which to rotate (in radians).
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} The rotation matrix.
	   * @memberOf module:twgl/m4
	   */
	  function rotationX(angleInRadians, dst) {
	    dst = dst || new MatType(16);
	
	    var c = Math.cos(angleInRadians);
	    var s = Math.sin(angleInRadians);
	
	    dst[ 0] = 1;
	    dst[ 1] = 0;
	    dst[ 2] = 0;
	    dst[ 3] = 0;
	    dst[ 4] = 0;
	    dst[ 5] = c;
	    dst[ 6] = s;
	    dst[ 7] = 0;
	    dst[ 8] = 0;
	    dst[ 9] = -s;
	    dst[10] = c;
	    dst[11] = 0;
	    dst[12] = 0;
	    dst[13] = 0;
	    dst[14] = 0;
	    dst[15] = 1;
	
	    return dst;
	  }
	
	  /**
	   * Modifies the given 4-by-4 matrix by a rotation around the x-axis by the given
	   * angle.
	   * @param {module:twgl/m4.Mat4} m The matrix.
	   * @param {number} angleInRadians The angle by which to rotate (in radians).
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} m once modified.
	   * @memberOf module:twgl/m4
	   */
	  function rotateX(m, angleInRadians, dst) {
	    dst = dst || new MatType(16);
	
	    var m10 = m[4];
	    var m11 = m[5];
	    var m12 = m[6];
	    var m13 = m[7];
	    var m20 = m[8];
	    var m21 = m[9];
	    var m22 = m[10];
	    var m23 = m[11];
	    var c = Math.cos(angleInRadians);
	    var s = Math.sin(angleInRadians);
	
	    dst[4]  = c * m10 + s * m20;
	    dst[5]  = c * m11 + s * m21;
	    dst[6]  = c * m12 + s * m22;
	    dst[7]  = c * m13 + s * m23;
	    dst[8]  = c * m20 - s * m10;
	    dst[9]  = c * m21 - s * m11;
	    dst[10] = c * m22 - s * m12;
	    dst[11] = c * m23 - s * m13;
	
	    if (m !== dst) {
	      dst[ 0] = m[ 0];
	      dst[ 1] = m[ 1];
	      dst[ 2] = m[ 2];
	      dst[ 3] = m[ 3];
	      dst[12] = m[12];
	      dst[13] = m[13];
	      dst[14] = m[14];
	      dst[15] = m[15];
	    }
	
	    return dst;
	  }
	
	  /**
	   * Creates a 4-by-4 matrix which rotates around the y-axis by the given angle.
	   * @param {number} angleInRadians The angle by which to rotate (in radians).
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} The rotation matrix.
	   * @memberOf module:twgl/m4
	   */
	  function rotationY(angleInRadians, dst) {
	    dst = dst || new MatType(16);
	
	    var c = Math.cos(angleInRadians);
	    var s = Math.sin(angleInRadians);
	
	    dst[ 0] = c;
	    dst[ 1] = 0;
	    dst[ 2] = -s;
	    dst[ 3] = 0;
	    dst[ 4] = 0;
	    dst[ 5] = 1;
	    dst[ 6] = 0;
	    dst[ 7] = 0;
	    dst[ 8] = s;
	    dst[ 9] = 0;
	    dst[10] = c;
	    dst[11] = 0;
	    dst[12] = 0;
	    dst[13] = 0;
	    dst[14] = 0;
	    dst[15] = 1;
	
	    return dst;
	  }
	
	  /**
	   * Modifies the given 4-by-4 matrix by a rotation around the y-axis by the given
	   * angle.
	   * @param {module:twgl/m4.Mat4} m The matrix.
	   * @param {number} angleInRadians The angle by which to rotate (in radians).
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} m once modified.
	   * @memberOf module:twgl/m4
	   */
	  function rotateY(m, angleInRadians, dst) {
	    dst = dst || new MatType(16);
	
	    var m00 = m[0 * 4 + 0];
	    var m01 = m[0 * 4 + 1];
	    var m02 = m[0 * 4 + 2];
	    var m03 = m[0 * 4 + 3];
	    var m20 = m[2 * 4 + 0];
	    var m21 = m[2 * 4 + 1];
	    var m22 = m[2 * 4 + 2];
	    var m23 = m[2 * 4 + 3];
	    var c = Math.cos(angleInRadians);
	    var s = Math.sin(angleInRadians);
	
	    dst[ 0] = c * m00 - s * m20;
	    dst[ 1] = c * m01 - s * m21;
	    dst[ 2] = c * m02 - s * m22;
	    dst[ 3] = c * m03 - s * m23;
	    dst[ 8] = c * m20 + s * m00;
	    dst[ 9] = c * m21 + s * m01;
	    dst[10] = c * m22 + s * m02;
	    dst[11] = c * m23 + s * m03;
	
	    if (m !== dst) {
	      dst[ 4] = m[ 4];
	      dst[ 5] = m[ 5];
	      dst[ 6] = m[ 6];
	      dst[ 7] = m[ 7];
	      dst[12] = m[12];
	      dst[13] = m[13];
	      dst[14] = m[14];
	      dst[15] = m[15];
	    }
	
	    return dst;
	  }
	
	  /**
	   * Creates a 4-by-4 matrix which rotates around the z-axis by the given angle.
	   * @param {number} angleInRadians The angle by which to rotate (in radians).
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} The rotation matrix.
	   * @memberOf module:twgl/m4
	   */
	  function rotationZ(angleInRadians, dst) {
	    dst = dst || new MatType(16);
	
	    var c = Math.cos(angleInRadians);
	    var s = Math.sin(angleInRadians);
	
	    dst[ 0] = c;
	    dst[ 1] = s;
	    dst[ 2] = 0;
	    dst[ 3] = 0;
	    dst[ 4] = -s;
	    dst[ 5] = c;
	    dst[ 6] = 0;
	    dst[ 7] = 0;
	    dst[ 8] = 0;
	    dst[ 9] = 0;
	    dst[10] = 1;
	    dst[11] = 0;
	    dst[12] = 0;
	    dst[13] = 0;
	    dst[14] = 0;
	    dst[15] = 1;
	
	    return dst;
	  }
	
	  /**
	   * Modifies the given 4-by-4 matrix by a rotation around the z-axis by the given
	   * angle.
	   * @param {module:twgl/m4.Mat4} m The matrix.
	   * @param {number} angleInRadians The angle by which to rotate (in radians).
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} m once modified.
	   * @memberOf module:twgl/m4
	   */
	  function rotateZ(m, angleInRadians, dst) {
	    dst = dst || new MatType(16);
	
	    var m00 = m[0 * 4 + 0];
	    var m01 = m[0 * 4 + 1];
	    var m02 = m[0 * 4 + 2];
	    var m03 = m[0 * 4 + 3];
	    var m10 = m[1 * 4 + 0];
	    var m11 = m[1 * 4 + 1];
	    var m12 = m[1 * 4 + 2];
	    var m13 = m[1 * 4 + 3];
	    var c = Math.cos(angleInRadians);
	    var s = Math.sin(angleInRadians);
	
	    dst[ 0] = c * m00 + s * m10;
	    dst[ 1] = c * m01 + s * m11;
	    dst[ 2] = c * m02 + s * m12;
	    dst[ 3] = c * m03 + s * m13;
	    dst[ 4] = c * m10 - s * m00;
	    dst[ 5] = c * m11 - s * m01;
	    dst[ 6] = c * m12 - s * m02;
	    dst[ 7] = c * m13 - s * m03;
	
	    if (m !== dst) {
	      dst[ 8] = m[ 8];
	      dst[ 9] = m[ 9];
	      dst[10] = m[10];
	      dst[11] = m[11];
	      dst[12] = m[12];
	      dst[13] = m[13];
	      dst[14] = m[14];
	      dst[15] = m[15];
	    }
	
	    return dst;
	  }
	
	  /**
	   * Creates a 4-by-4 matrix which rotates around the given axis by the given
	   * angle.
	   * @param {Vec3} axis The axis
	   *     about which to rotate.
	   * @param {number} angleInRadians The angle by which to rotate (in radians).
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} A matrix which rotates angle radians
	   *     around the axis.
	   * @memberOf module:twgl/m4
	   */
	  function axisRotation(axis, angleInRadians, dst) {
	    dst = dst || new MatType(16);
	
	    var x = axis[0];
	    var y = axis[1];
	    var z = axis[2];
	    var n = Math.sqrt(x * x + y * y + z * z);
	    x /= n;
	    y /= n;
	    z /= n;
	    var xx = x * x;
	    var yy = y * y;
	    var zz = z * z;
	    var c = Math.cos(angleInRadians);
	    var s = Math.sin(angleInRadians);
	    var oneMinusCosine = 1 - c;
	
	    dst[ 0] = xx + (1 - xx) * c;
	    dst[ 1] = x * y * oneMinusCosine + z * s;
	    dst[ 2] = x * z * oneMinusCosine - y * s;
	    dst[ 3] = 0;
	    dst[ 4] = x * y * oneMinusCosine - z * s;
	    dst[ 5] = yy + (1 - yy) * c;
	    dst[ 6] = y * z * oneMinusCosine + x * s;
	    dst[ 7] = 0;
	    dst[ 8] = x * z * oneMinusCosine + y * s;
	    dst[ 9] = y * z * oneMinusCosine - x * s;
	    dst[10] = zz + (1 - zz) * c;
	    dst[11] = 0;
	    dst[12] = 0;
	    dst[13] = 0;
	    dst[14] = 0;
	    dst[15] = 1;
	
	    return dst;
	  }
	
	  /**
	   * Modifies the given 4-by-4 matrix by rotation around the given axis by the
	   * given angle.
	   * @param {module:twgl/m4.Mat4} m The matrix.
	   * @param {Vec3} axis The axis
	   *     about which to rotate.
	   * @param {number} angleInRadians The angle by which to rotate (in radians).
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} m once modified.
	   * @memberOf module:twgl/m4
	   */
	  function axisRotate(m, axis, angleInRadians, dst) {
	    dst = dst || new MatType(16);
	
	    var x = axis[0];
	    var y = axis[1];
	    var z = axis[2];
	    var n = Math.sqrt(x * x + y * y + z * z);
	    x /= n;
	    y /= n;
	    z /= n;
	    var xx = x * x;
	    var yy = y * y;
	    var zz = z * z;
	    var c = Math.cos(angleInRadians);
	    var s = Math.sin(angleInRadians);
	    var oneMinusCosine = 1 - c;
	
	    var r00 = xx + (1 - xx) * c;
	    var r01 = x * y * oneMinusCosine + z * s;
	    var r02 = x * z * oneMinusCosine - y * s;
	    var r10 = x * y * oneMinusCosine - z * s;
	    var r11 = yy + (1 - yy) * c;
	    var r12 = y * z * oneMinusCosine + x * s;
	    var r20 = x * z * oneMinusCosine + y * s;
	    var r21 = y * z * oneMinusCosine - x * s;
	    var r22 = zz + (1 - zz) * c;
	
	    var m00 = m[0];
	    var m01 = m[1];
	    var m02 = m[2];
	    var m03 = m[3];
	    var m10 = m[4];
	    var m11 = m[5];
	    var m12 = m[6];
	    var m13 = m[7];
	    var m20 = m[8];
	    var m21 = m[9];
	    var m22 = m[10];
	    var m23 = m[11];
	
	    dst[ 0] = r00 * m00 + r01 * m10 + r02 * m20;
	    dst[ 1] = r00 * m01 + r01 * m11 + r02 * m21;
	    dst[ 2] = r00 * m02 + r01 * m12 + r02 * m22;
	    dst[ 3] = r00 * m03 + r01 * m13 + r02 * m23;
	    dst[ 4] = r10 * m00 + r11 * m10 + r12 * m20;
	    dst[ 5] = r10 * m01 + r11 * m11 + r12 * m21;
	    dst[ 6] = r10 * m02 + r11 * m12 + r12 * m22;
	    dst[ 7] = r10 * m03 + r11 * m13 + r12 * m23;
	    dst[ 8] = r20 * m00 + r21 * m10 + r22 * m20;
	    dst[ 9] = r20 * m01 + r21 * m11 + r22 * m21;
	    dst[10] = r20 * m02 + r21 * m12 + r22 * m22;
	    dst[11] = r20 * m03 + r21 * m13 + r22 * m23;
	
	    if (m !== dst) {
	      dst[12] = m[12];
	      dst[13] = m[13];
	      dst[14] = m[14];
	      dst[15] = m[15];
	    }
	
	    return dst;
	  }
	
	  /**
	   * Creates a 4-by-4 matrix which scales in each dimension by an amount given by
	   * the corresponding entry in the given vector; assumes the vector has three
	   * entries.
	   * @param {Vec3} v A vector of
	   *     three entries specifying the factor by which to scale in each dimension.
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} The scaling matrix.
	   * @memberOf module:twgl/m4
	   */
	  function scaling(v, dst) {
	    dst = dst || new MatType(16);
	
	    dst[ 0] = v[0];
	    dst[ 1] = 0;
	    dst[ 2] = 0;
	    dst[ 3] = 0;
	    dst[ 4] = 0;
	    dst[ 5] = v[1];
	    dst[ 6] = 0;
	    dst[ 7] = 0;
	    dst[ 8] = 0;
	    dst[ 9] = 0;
	    dst[10] = v[2];
	    dst[11] = 0;
	    dst[12] = 0;
	    dst[13] = 0;
	    dst[14] = 0;
	    dst[15] = 1;
	
	    return dst;
	  }
	
	  /**
	   * Modifies the given 4-by-4 matrix, scaling in each dimension by an amount
	   * given by the corresponding entry in the given vector; assumes the vector has
	   * three entries.
	   * @param {module:twgl/m4.Mat4} m The matrix to be modified.
	   * @param {Vec3} v A vector of three entries specifying the
	   *     factor by which to scale in each dimension.
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} m once modified.
	   * @memberOf module:twgl/m4
	   */
	  function scale(m, v, dst) {
	    dst = dst || new MatType(16);
	
	    var v0 = v[0];
	    var v1 = v[1];
	    var v2 = v[2];
	
	    dst[ 0] = v0 * m[0 * 4 + 0];
	    dst[ 1] = v0 * m[0 * 4 + 1];
	    dst[ 2] = v0 * m[0 * 4 + 2];
	    dst[ 3] = v0 * m[0 * 4 + 3];
	    dst[ 4] = v1 * m[1 * 4 + 0];
	    dst[ 5] = v1 * m[1 * 4 + 1];
	    dst[ 6] = v1 * m[1 * 4 + 2];
	    dst[ 7] = v1 * m[1 * 4 + 3];
	    dst[ 8] = v2 * m[2 * 4 + 0];
	    dst[ 9] = v2 * m[2 * 4 + 1];
	    dst[10] = v2 * m[2 * 4 + 2];
	    dst[11] = v2 * m[2 * 4 + 3];
	
	    if (m !== dst) {
	      dst[12] = m[12];
	      dst[13] = m[13];
	      dst[14] = m[14];
	      dst[15] = m[15];
	    }
	
	    return dst;
	  }
	
	  /**
	   * Takes a 4-by-4 matrix and a vector with 3 entries,
	   * interprets the vector as a point, transforms that point by the matrix, and
	   * returns the result as a vector with 3 entries.
	   * @param {module:twgl/m4.Mat4} m The matrix.
	   * @param {Vec3} v The point.
	   * @param {Vec3} dst optional vec3 to store result
	   * @return {Vec3} dst or new vec3 if not provided
	   * @memberOf module:twgl/m4
	   */
	  function transformPoint(m, v, dst) {
	    dst = dst || v3.create();
	    var v0 = v[0];
	    var v1 = v[1];
	    var v2 = v[2];
	    var d = v0 * m[0 * 4 + 3] + v1 * m[1 * 4 + 3] + v2 * m[2 * 4 + 3] + m[3 * 4 + 3];
	
	    dst[0] = (v0 * m[0 * 4 + 0] + v1 * m[1 * 4 + 0] + v2 * m[2 * 4 + 0] + m[3 * 4 + 0]) / d;
	    dst[1] = (v0 * m[0 * 4 + 1] + v1 * m[1 * 4 + 1] + v2 * m[2 * 4 + 1] + m[3 * 4 + 1]) / d;
	    dst[2] = (v0 * m[0 * 4 + 2] + v1 * m[1 * 4 + 2] + v2 * m[2 * 4 + 2] + m[3 * 4 + 2]) / d;
	
	    return dst;
	  }
	
	  /**
	   * Takes a 4-by-4 matrix and a vector with 3 entries, interprets the vector as a
	   * direction, transforms that direction by the matrix, and returns the result;
	   * assumes the transformation of 3-dimensional space represented by the matrix
	   * is parallel-preserving, i.e. any combination of rotation, scaling and
	   * translation, but not a perspective distortion. Returns a vector with 3
	   * entries.
	   * @param {module:twgl/m4.Mat4} m The matrix.
	   * @param {Vec3} v The direction.
	   * @param {Vec3} dst optional Vec3 to store result
	   * @return {Vec3} dst or new Vec3 if not provided
	   * @memberOf module:twgl/m4
	   */
	  function transformDirection(m, v, dst) {
	    dst = dst || v3.create();
	
	    var v0 = v[0];
	    var v1 = v[1];
	    var v2 = v[2];
	
	    dst[0] = v0 * m[0 * 4 + 0] + v1 * m[1 * 4 + 0] + v2 * m[2 * 4 + 0];
	    dst[1] = v0 * m[0 * 4 + 1] + v1 * m[1 * 4 + 1] + v2 * m[2 * 4 + 1];
	    dst[2] = v0 * m[0 * 4 + 2] + v1 * m[1 * 4 + 2] + v2 * m[2 * 4 + 2];
	
	    return dst;
	  }
	
	  /**
	   * Takes a 4-by-4 matrix m and a vector v with 3 entries, interprets the vector
	   * as a normal to a surface, and computes a vector which is normal upon
	   * transforming that surface by the matrix. The effect of this function is the
	   * same as transforming v (as a direction) by the inverse-transpose of m.  This
	   * function assumes the transformation of 3-dimensional space represented by the
	   * matrix is parallel-preserving, i.e. any combination of rotation, scaling and
	   * translation, but not a perspective distortion.  Returns a vector with 3
	   * entries.
	   * @param {module:twgl/m4.Mat4} m The matrix.
	   * @param {Vec3} v The normal.
	   * @param {Vec3} [dst] The direction.
	   * @return {Vec3} The transformed direction.
	   * @memberOf module:twgl/m4
	   */
	  function transformNormal(m, v, dst) {
	    dst = dst || v3.create();
	    var mi = inverse(m);
	    var v0 = v[0];
	    var v1 = v[1];
	    var v2 = v[2];
	
	    dst[0] = v0 * mi[0 * 4 + 0] + v1 * mi[0 * 4 + 1] + v2 * mi[0 * 4 + 2];
	    dst[1] = v0 * mi[1 * 4 + 0] + v1 * mi[1 * 4 + 1] + v2 * mi[1 * 4 + 2];
	    dst[2] = v0 * mi[2 * 4 + 0] + v1 * mi[2 * 4 + 1] + v2 * mi[2 * 4 + 2];
	
	    return dst;
	  }
	
	  // Using quotes prevents Uglify from changing the names.
	  // No speed diff AFAICT.
	  return {
	    "axisRotate": axisRotate,
	    "axisRotation": axisRotation,
	    "create": identity,
	    "copy": copy,
	    "frustum": frustum,
	    "getAxis": getAxis,
	    "getTranslation": getTranslation,
	    "identity": identity,
	    "inverse": inverse,
	    "lookAt": lookAt,
	    "multiply": multiply,
	    "negate": negate,
	    "ortho": ortho,
	    "perspective": perspective,
	    "rotateX": rotateX,
	    "rotateY": rotateY,
	    "rotateZ": rotateZ,
	    "rotateAxis": axisRotate,
	    "rotationX": rotationX,
	    "rotationY": rotationY,
	    "rotationZ": rotationZ,
	    "scale": scale,
	    "scaling": scaling,
	    "setAxis": setAxis,
	    "setDefaultType": setDefaultType,
	    "setTranslation": setTranslation,
	    "transformDirection": transformDirection,
	    "transformNormal": transformNormal,
	    "transformPoint": transformPoint,
	    "translate": translate,
	    "translation": translation,
	    "transpose": transpose,
	  };
	});
	
	
	/*
	 * Copyright 2015, Gregg Tavares.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are
	 * met:
	 *
	 *     * Redistributions of source code must retain the above copyright
	 * notice, this list of conditions and the following disclaimer.
	 *     * Redistributions in binary form must reproduce the above
	 * copyright notice, this list of conditions and the following disclaimer
	 * in the documentation and/or other materials provided with the
	 * distribution.
	 *     * Neither the name of Gregg Tavares. nor the names of his
	 * contributors may be used to endorse or promote products derived from
	 * this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */
	
	/**
	 * Various functions to make simple primitives
	 *
	 * note: Most primitive functions come in 3 styles
	 *
	 * *  `createSomeShapeBufferInfo`
	 *
	 *    These functions are almost always the functions you want to call. They
	 *    create vertices then make WebGLBuffers and create {@link module:twgl.AttribInfo}s
	 *    returing a {@link module:twgl.BufferInfo} you can pass to {@link module:twgl.setBuffersAndAttributes}
	 *    and {@link module:twgl.drawBufferInfo} etc...
	 *
	 * *  `createSomeShapeBuffers`
	 *
	 *    These create WebGLBuffers and put your data in them but nothing else.
	 *    It's a shortcut to doing it yourself if you don't want to use
	 *    the higher level functions.
	 *
	 * *  `createSomeShapeVertices`
	 *
	 *    These just create vertices, no buffers. This allows you to manipulate the vertices
	 *    or add more data before generating a {@link module:twgl.BufferInfo}. Once you're finished
	 *    manipulating the vertices call {@link module:twgl.createBufferInfoFromArrays}.
	 *
	 *    example:
	 *
	 *        var arrays = twgl.primitives.createPlaneArrays(1);
	 *        twgl.primitives.reorientVertices(arrays, m4.rotationX(Math.PI * 0.5));
	 *        var bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);
	 *
	 * @module twgl/primitives
	 */
	define('twgl/primitives',[
	    './attributes',
	    './twgl',
	    './utils',
	    './m4',
	    './v3',
	  ], function(
	    attributes,
	    twgl,
	    utils,
	    m4,
	    v3
	  ) {
	  
	
	  var getArray = attributes.getArray_;  // eslint-disable-line
	  var getNumComponents = attributes.getNumComponents_;  // eslint-disable-line
	
	  /**
	   * Add `push` to a typed array. It just keeps a 'cursor'
	   * and allows use to `push` values into the array so we
	   * don't have to manually compute offsets
	   * @param {TypedArray} typedArray TypedArray to augment
	   * @param {number} numComponents number of components.
	   */
	  function augmentTypedArray(typedArray, numComponents) {
	    var cursor = 0;
	    typedArray.push = function() {
	      for (var ii = 0; ii < arguments.length; ++ii) {
	        var value = arguments[ii];
	        if (value instanceof Array || (value.buffer && value.buffer instanceof ArrayBuffer)) {
	          for (var jj = 0; jj < value.length; ++jj) {
	            typedArray[cursor++] = value[jj];
	          }
	        } else {
	          typedArray[cursor++] = value;
	        }
	      }
	    };
	    typedArray.reset = function(opt_index) {
	      cursor = opt_index || 0;
	    };
	    typedArray.numComponents = numComponents;
	    Object.defineProperty(typedArray, 'numElements', {
	      get: function() {
	        return this.length / this.numComponents | 0;
	      },
	    });
	    return typedArray;
	  }
	
	  /**
	   * creates a typed array with a `push` function attached
	   * so that you can easily *push* values.
	   *
	   * `push` can take multiple arguments. If an argument is an array each element
	   * of the array will be added to the typed array.
	   *
	   * Example:
	   *
	   *     var array = createAugmentedTypedArray(3, 2);  // creates a Float32Array with 6 values
	   *     array.push(1, 2, 3);
	   *     array.push([4, 5, 6]);
	   *     // array now contains [1, 2, 3, 4, 5, 6]
	   *
	   * Also has `numComponents` and `numElements` properties.
	   *
	   * @param {number} numComponents number of components
	   * @param {number} numElements number of elements. The total size of the array will be `numComponents * numElements`.
	   * @param {constructor} opt_type A constructor for the type. Default = `Float32Array`.
	   * @return {ArrayBuffer} A typed array.
	   * @memberOf module:twgl/primitives
	   */
	  function createAugmentedTypedArray(numComponents, numElements, opt_type) {
	    var Type = opt_type || Float32Array;
	    return augmentTypedArray(new Type(numComponents * numElements), numComponents);
	  }
	
	  function allButIndices(name) {
	    return name !== "indices";
	  }
	
	  /**
	   * Given indexed vertices creates a new set of vertices unindexed by expanding the indexed vertices.
	   * @param {Object.<string, TypedArray>} vertices The indexed vertices to deindex
	   * @return {Object.<string, TypedArray>} The deindexed vertices
	   * @memberOf module:twgl/primitives
	   */
	  function deindexVertices(vertices) {
	    var indices = vertices.indices;
	    var newVertices = {};
	    var numElements = indices.length;
	
	    function expandToUnindexed(channel) {
	      var srcBuffer = vertices[channel];
	      var numComponents = srcBuffer.numComponents;
	      var dstBuffer = createAugmentedTypedArray(numComponents, numElements, srcBuffer.constructor);
	      for (var ii = 0; ii < numElements; ++ii) {
	        var ndx = indices[ii];
	        var offset = ndx * numComponents;
	        for (var jj = 0; jj < numComponents; ++jj) {
	          dstBuffer.push(srcBuffer[offset + jj]);
	        }
	      }
	      newVertices[channel] = dstBuffer;
	    }
	
	    Object.keys(vertices).filter(allButIndices).forEach(expandToUnindexed);
	
	    return newVertices;
	  }
	
	  /**
	   * flattens the normals of deindexed vertices in place.
	   * @param {Object.<string, TypedArray>} vertices The deindexed vertices who's normals to flatten
	   * @return {Object.<string, TypedArray>} The flattened vertices (same as was passed in)
	   * @memberOf module:twgl/primitives
	   */
	  function flattenNormals(vertices) {
	    if (vertices.indices) {
	      throw "can't flatten normals of indexed vertices. deindex them first";
	    }
	
	    var normals = vertices.normal;
	    var numNormals = normals.length;
	    for (var ii = 0; ii < numNormals; ii += 9) {
	      // pull out the 3 normals for this triangle
	      var nax = normals[ii + 0];
	      var nay = normals[ii + 1];
	      var naz = normals[ii + 2];
	
	      var nbx = normals[ii + 3];
	      var nby = normals[ii + 4];
	      var nbz = normals[ii + 5];
	
	      var ncx = normals[ii + 6];
	      var ncy = normals[ii + 7];
	      var ncz = normals[ii + 8];
	
	      // add them
	      var nx = nax + nbx + ncx;
	      var ny = nay + nby + ncy;
	      var nz = naz + nbz + ncz;
	
	      // normalize them
	      var length = Math.sqrt(nx * nx + ny * ny + nz * nz);
	
	      nx /= length;
	      ny /= length;
	      nz /= length;
	
	      // copy them back in
	      normals[ii + 0] = nx;
	      normals[ii + 1] = ny;
	      normals[ii + 2] = nz;
	
	      normals[ii + 3] = nx;
	      normals[ii + 4] = ny;
	      normals[ii + 5] = nz;
	
	      normals[ii + 6] = nx;
	      normals[ii + 7] = ny;
	      normals[ii + 8] = nz;
	    }
	
	    return vertices;
	  }
	
	  function applyFuncToV3Array(array, matrix, fn) {
	    var len = array.length;
	    var tmp = new Float32Array(3);
	    for (var ii = 0; ii < len; ii += 3) {
	      fn(matrix, [array[ii], array[ii + 1], array[ii + 2]], tmp);
	      array[ii    ] = tmp[0];
	      array[ii + 1] = tmp[1];
	      array[ii + 2] = tmp[2];
	    }
	  }
	
	  function transformNormal(mi, v, dst) {
	    dst = dst || v3.create();
	    var v0 = v[0];
	    var v1 = v[1];
	    var v2 = v[2];
	
	    dst[0] = v0 * mi[0 * 4 + 0] + v1 * mi[0 * 4 + 1] + v2 * mi[0 * 4 + 2];
	    dst[1] = v0 * mi[1 * 4 + 0] + v1 * mi[1 * 4 + 1] + v2 * mi[1 * 4 + 2];
	    dst[2] = v0 * mi[2 * 4 + 0] + v1 * mi[2 * 4 + 1] + v2 * mi[2 * 4 + 2];
	
	    return dst;
	  }
	
	  /**
	   * Reorients directions by the given matrix..
	   * @param {number[]|TypedArray} array The array. Assumes value floats per element.
	   * @param {Matrix} matrix A matrix to multiply by.
	   * @return {number[]|TypedArray} the same array that was passed in
	   * @memberOf module:twgl/primitives
	   */
	  function reorientDirections(array, matrix) {
	    applyFuncToV3Array(array, matrix, m4.transformDirection);
	    return array;
	  }
	
	  /**
	   * Reorients normals by the inverse-transpose of the given
	   * matrix..
	   * @param {number[]|TypedArray} array The array. Assumes value floats per element.
	   * @param {Matrix} matrix A matrix to multiply by.
	   * @return {number[]|TypedArray} the same array that was passed in
	   * @memberOf module:twgl/primitives
	   */
	  function reorientNormals(array, matrix) {
	    applyFuncToV3Array(array, m4.inverse(matrix), transformNormal);
	    return array;
	  }
	
	  /**
	   * Reorients positions by the given matrix. In other words, it
	   * multiplies each vertex by the given matrix.
	   * @param {number[]|TypedArray} array The array. Assumes value floats per element.
	   * @param {Matrix} matrix A matrix to multiply by.
	   * @return {number[]|TypedArray} the same array that was passed in
	   * @memberOf module:twgl/primitives
	   */
	  function reorientPositions(array, matrix) {
	    applyFuncToV3Array(array, matrix, m4.transformPoint);
	    return array;
	  }
	
	  /**
	   * Reorients arrays by the given matrix. Assumes arrays have
	   * names that contains 'pos' could be reoriented as positions,
	   * 'binorm' or 'tan' as directions, and 'norm' as normals.
	   *
	   * @param {Object.<string, (number[]|TypedArray)>} arrays The vertices to reorient
	   * @param {Matrix} matrix matrix to reorient by.
	   * @return {Object.<string, (number[]|TypedArray)>} same arrays that were passed in.
	   * @memberOf module:twgl/primitives
	   */
	  function reorientVertices(arrays, matrix) {
	    Object.keys(arrays).forEach(function(name) {
	      var array = arrays[name];
	      if (name.indexOf("pos") >= 0) {
	        reorientPositions(array, matrix);
	      } else if (name.indexOf("tan") >= 0 || name.indexOf("binorm") >= 0) {
	        reorientDirections(array, matrix);
	      } else if (name.indexOf("norm") >= 0) {
	        reorientNormals(array, matrix);
	      }
	    });
	    return arrays;
	  }
	
	  /**
	   * Creates XY quad BufferInfo
	   *
	   * The default with no parameters will return a 2x2 quad with values from -1 to +1.
	   * If you want a unit quad with that goes from 0 to 1 you'd call it with
	   *
	   *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0.5, 0.5);
	   *
	   * If you want a unit quad centered above 0,0 you'd call it with
	   *
	   *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0, 0.5);
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} [size] the size across the quad. Defaults to 2 which means vertices will go from -1 to +1
	   * @param {number} [xOffset] the amount to offset the quad in X
	   * @param {number} [yOffset] the amount to offset the quad in Y
	   * @return {Object.<string, WebGLBuffer>} the created XY Quad BufferInfo
	   * @memberOf module:twgl/primitives
	   * @function createXYQuadBufferInfo
	   */
	
	  /**
	   * Creates XY quad Buffers
	   *
	   * The default with no parameters will return a 2x2 quad with values from -1 to +1.
	   * If you want a unit quad with that goes from 0 to 1 you'd call it with
	   *
	   *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0.5, 0.5);
	   *
	   * If you want a unit quad centered above 0,0 you'd call it with
	   *
	   *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0, 0.5);
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} [size] the size across the quad. Defaults to 2 which means vertices will go from -1 to +1
	   * @param {number} [xOffset] the amount to offset the quad in X
	   * @param {number} [yOffset] the amount to offset the quad in Y
	   * @return {module:twgl.BufferInfo} the created XY Quad buffers
	   * @memberOf module:twgl/primitives
	   * @function createXYQuadBuffers
	   */
	
	  /**
	   * Creates XY quad vertices
	   *
	   * The default with no parameters will return a 2x2 quad with values from -1 to +1.
	   * If you want a unit quad with that goes from 0 to 1 you'd call it with
	   *
	   *     twgl.primitives.createXYQuadVertices(1, 0.5, 0.5);
	   *
	   * If you want a unit quad centered above 0,0 you'd call it with
	   *
	   *     twgl.primitives.createXYQuadVertices(1, 0, 0.5);
	   *
	   * @param {number} [size] the size across the quad. Defaults to 2 which means vertices will go from -1 to +1
	   * @param {number} [xOffset] the amount to offset the quad in X
	   * @param {number} [yOffset] the amount to offset the quad in Y
	   * @return {Object.<string, TypedArray> the created XY Quad vertices
	   * @memberOf module:twgl/primitives
	   */
	  function createXYQuadVertices(size, xOffset, yOffset) {
	    size = size || 2;
	    xOffset = xOffset || 0;
	    yOffset = yOffset || 0;
	    size *= 0.5;
	    return {
	      position: {
	        numComponents: 2,
	        data: [
	          xOffset + -1 * size, yOffset + -1 * size,
	          xOffset +  1 * size, yOffset + -1 * size,
	          xOffset + -1 * size, yOffset +  1 * size,
	          xOffset +  1 * size, yOffset +  1 * size,
	        ],
	      },
	      normal: [
	        0, 0, 1,
	        0, 0, 1,
	        0, 0, 1,
	        0, 0, 1,
	      ],
	      texcoord: [
	        0, 0,
	        1, 0,
	        0, 1,
	        1, 1,
	      ],
	      indices: [ 0, 1, 2, 2, 1, 3 ],
	    };
	  }
	
	  /**
	   * Creates XZ plane BufferInfo.
	   *
	   * The created plane has position, normal, and texcoord data
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} [width] Width of the plane. Default = 1
	   * @param {number} [depth] Depth of the plane. Default = 1
	   * @param {number} [subdivisionsWidth] Number of steps across the plane. Default = 1
	   * @param {number} [subdivisionsDepth] Number of steps down the plane. Default = 1
	   * @param {Matrix4} [matrix] A matrix by which to multiply all the vertices.
	   * @return {@module:twgl.BufferInfo} The created plane BufferInfo.
	   * @memberOf module:twgl/primitives
	   * @function createPlaneBufferInfo
	   */
	
	  /**
	   * Creates XZ plane buffers.
	   *
	   * The created plane has position, normal, and texcoord data
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} [width] Width of the plane. Default = 1
	   * @param {number} [depth] Depth of the plane. Default = 1
	   * @param {number} [subdivisionsWidth] Number of steps across the plane. Default = 1
	   * @param {number} [subdivisionsDepth] Number of steps down the plane. Default = 1
	   * @param {Matrix4} [matrix] A matrix by which to multiply all the vertices.
	   * @return {Object.<string, WebGLBuffer>} The created plane buffers.
	   * @memberOf module:twgl/primitives
	   * @function createPlaneBuffers
	   */
	
	  /**
	   * Creates XZ plane vertices.
	   *
	   * The created plane has position, normal, and texcoord data
	   *
	   * @param {number} [width] Width of the plane. Default = 1
	   * @param {number} [depth] Depth of the plane. Default = 1
	   * @param {number} [subdivisionsWidth] Number of steps across the plane. Default = 1
	   * @param {number} [subdivisionsDepth] Number of steps down the plane. Default = 1
	   * @param {Matrix4} [matrix] A matrix by which to multiply all the vertices.
	   * @return {Object.<string, TypedArray>} The created plane vertices.
	   * @memberOf module:twgl/primitives
	   */
	  function createPlaneVertices(
	      width,
	      depth,
	      subdivisionsWidth,
	      subdivisionsDepth,
	      matrix) {
	    width = width || 1;
	    depth = depth || 1;
	    subdivisionsWidth = subdivisionsWidth || 1;
	    subdivisionsDepth = subdivisionsDepth || 1;
	    matrix = matrix || m4.identity();
	
	    var numVertices = (subdivisionsWidth + 1) * (subdivisionsDepth + 1);
	    var positions = createAugmentedTypedArray(3, numVertices);
	    var normals = createAugmentedTypedArray(3, numVertices);
	    var texcoords = createAugmentedTypedArray(2, numVertices);
	
	    for (var z = 0; z <= subdivisionsDepth; z++) {
	      for (var x = 0; x <= subdivisionsWidth; x++) {
	        var u = x / subdivisionsWidth;
	        var v = z / subdivisionsDepth;
	        positions.push(
	            width * u - width * 0.5,
	            0,
	            depth * v - depth * 0.5);
	        normals.push(0, 1, 0);
	        texcoords.push(u, v);
	      }
	    }
	
	    var numVertsAcross = subdivisionsWidth + 1;
	    var indices = createAugmentedTypedArray(
	        3, subdivisionsWidth * subdivisionsDepth * 2, Uint16Array);
	
	    for (var z = 0; z < subdivisionsDepth; z++) {  // eslint-disable-line
	      for (var x = 0; x < subdivisionsWidth; x++) {  // eslint-disable-line
	        // Make triangle 1 of quad.
	        indices.push(
	            (z + 0) * numVertsAcross + x,
	            (z + 1) * numVertsAcross + x,
	            (z + 0) * numVertsAcross + x + 1);
	
	        // Make triangle 2 of quad.
	        indices.push(
	            (z + 1) * numVertsAcross + x,
	            (z + 1) * numVertsAcross + x + 1,
	            (z + 0) * numVertsAcross + x + 1);
	      }
	    }
	
	    var arrays = reorientVertices({
	      position: positions,
	      normal: normals,
	      texcoord: texcoords,
	      indices: indices,
	    }, matrix);
	    return arrays;
	  }
	
	  /**
	   * Creates sphere BufferInfo.
	   *
	   * The created sphere has position, normal, and texcoord data
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} radius radius of the sphere.
	   * @param {number} subdivisionsAxis number of steps around the sphere.
	   * @param {number} subdivisionsHeight number of vertically on the sphere.
	   * @param {number} [opt_startLatitudeInRadians] where to start the
	   *     top of the sphere. Default = 0.
	   * @param {number} [opt_endLatitudeInRadians] Where to end the
	   *     bottom of the sphere. Default = Math.PI.
	   * @param {number} [opt_startLongitudeInRadians] where to start
	   *     wrapping the sphere. Default = 0.
	   * @param {number} [opt_endLongitudeInRadians] where to end
	   *     wrapping the sphere. Default = 2 * Math.PI.
	   * @return {module:twgl.BufferInfo} The created sphere BufferInfo.
	   * @memberOf module:twgl/primitives
	   * @function createSphereBufferInfo
	   */
	
	  /**
	   * Creates sphere buffers.
	   *
	   * The created sphere has position, normal, and texcoord data
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} radius radius of the sphere.
	   * @param {number} subdivisionsAxis number of steps around the sphere.
	   * @param {number} subdivisionsHeight number of vertically on the sphere.
	   * @param {number} [opt_startLatitudeInRadians] where to start the
	   *     top of the sphere. Default = 0.
	   * @param {number} [opt_endLatitudeInRadians] Where to end the
	   *     bottom of the sphere. Default = Math.PI.
	   * @param {number} [opt_startLongitudeInRadians] where to start
	   *     wrapping the sphere. Default = 0.
	   * @param {number} [opt_endLongitudeInRadians] where to end
	   *     wrapping the sphere. Default = 2 * Math.PI.
	   * @return {Object.<string, WebGLBuffer>} The created sphere buffers.
	   * @memberOf module:twgl/primitives
	   * @function createSphereBuffers
	   */
	
	  /**
	   * Creates sphere vertices.
	   *
	   * The created sphere has position, normal, and texcoord data
	   *
	   * @param {number} radius radius of the sphere.
	   * @param {number} subdivisionsAxis number of steps around the sphere.
	   * @param {number} subdivisionsHeight number of vertically on the sphere.
	   * @param {number} [opt_startLatitudeInRadians] where to start the
	   *     top of the sphere. Default = 0.
	   * @param {number} [opt_endLatitudeInRadians] Where to end the
	   *     bottom of the sphere. Default = Math.PI.
	   * @param {number} [opt_startLongitudeInRadians] where to start
	   *     wrapping the sphere. Default = 0.
	   * @param {number} [opt_endLongitudeInRadians] where to end
	   *     wrapping the sphere. Default = 2 * Math.PI.
	   * @return {Object.<string, TypedArray>} The created sphere vertices.
	   * @memberOf module:twgl/primitives
	   */
	  function createSphereVertices(
	      radius,
	      subdivisionsAxis,
	      subdivisionsHeight,
	      opt_startLatitudeInRadians,
	      opt_endLatitudeInRadians,
	      opt_startLongitudeInRadians,
	      opt_endLongitudeInRadians) {
	    if (subdivisionsAxis <= 0 || subdivisionsHeight <= 0) {
	      throw Error('subdivisionAxis and subdivisionHeight must be > 0');
	    }
	
	    opt_startLatitudeInRadians = opt_startLatitudeInRadians || 0;
	    opt_endLatitudeInRadians = opt_endLatitudeInRadians || Math.PI;
	    opt_startLongitudeInRadians = opt_startLongitudeInRadians || 0;
	    opt_endLongitudeInRadians = opt_endLongitudeInRadians || (Math.PI * 2);
	
	    var latRange = opt_endLatitudeInRadians - opt_startLatitudeInRadians;
	    var longRange = opt_endLongitudeInRadians - opt_startLongitudeInRadians;
	
	    // We are going to generate our sphere by iterating through its
	    // spherical coordinates and generating 2 triangles for each quad on a
	    // ring of the sphere.
	    var numVertices = (subdivisionsAxis + 1) * (subdivisionsHeight + 1);
	    var positions = createAugmentedTypedArray(3, numVertices);
	    var normals   = createAugmentedTypedArray(3, numVertices);
	    var texcoords = createAugmentedTypedArray(2 , numVertices);
	
	    // Generate the individual vertices in our vertex buffer.
	    for (var y = 0; y <= subdivisionsHeight; y++) {
	      for (var x = 0; x <= subdivisionsAxis; x++) {
	        // Generate a vertex based on its spherical coordinates
	        var u = x / subdivisionsAxis;
	        var v = y / subdivisionsHeight;
	        var theta = longRange * u;
	        var phi = latRange * v;
	        var sinTheta = Math.sin(theta);
	        var cosTheta = Math.cos(theta);
	        var sinPhi = Math.sin(phi);
	        var cosPhi = Math.cos(phi);
	        var ux = cosTheta * sinPhi;
	        var uy = cosPhi;
	        var uz = sinTheta * sinPhi;
	        positions.push(radius * ux, radius * uy, radius * uz);
	        normals.push(ux, uy, uz);
	        texcoords.push(1 - u, v);
	      }
	    }
	
	    var numVertsAround = subdivisionsAxis + 1;
	    var indices = createAugmentedTypedArray(3, subdivisionsAxis * subdivisionsHeight * 2, Uint16Array);
	    for (var x = 0; x < subdivisionsAxis; x++) {  // eslint-disable-line
	      for (var y = 0; y < subdivisionsHeight; y++) {  // eslint-disable-line
	        // Make triangle 1 of quad.
	        indices.push(
	            (y + 0) * numVertsAround + x,
	            (y + 0) * numVertsAround + x + 1,
	            (y + 1) * numVertsAround + x);
	
	        // Make triangle 2 of quad.
	        indices.push(
	            (y + 1) * numVertsAround + x,
	            (y + 0) * numVertsAround + x + 1,
	            (y + 1) * numVertsAround + x + 1);
	      }
	    }
	
	    return {
	      position: positions,
	      normal: normals,
	      texcoord: texcoords,
	      indices: indices,
	    };
	  }
	
	  /**
	   * Array of the indices of corners of each face of a cube.
	   * @type {Array.<number[]>}
	   */
	  var CUBE_FACE_INDICES = [
	    [3, 7, 5, 1],  // right
	    [6, 2, 0, 4],  // left
	    [6, 7, 3, 2],  // ??
	    [0, 1, 5, 4],  // ??
	    [7, 6, 4, 5],  // front
	    [2, 3, 1, 0],  // back
	  ];
	
	  /**
	   * Creates a BufferInfo for a cube.
	   *
	   * The cube is created around the origin. (-size / 2, size / 2).
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} [size] width, height and depth of the cube.
	   * @return {module:twgl.BufferInfo} The created BufferInfo.
	   * @memberOf module:twgl/primitives
	   * @function createCubeBufferInfo
	   */
	
	  /**
	   * Creates the buffers and indices for a cube.
	   *
	   * The cube is created around the origin. (-size / 2, size / 2).
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} [size] width, height and depth of the cube.
	   * @return {Object.<string, WebGLBuffer>} The created buffers.
	   * @memberOf module:twgl/primitives
	   * @function createCubeBuffers
	   */
	
	  /**
	   * Creates the vertices and indices for a cube.
	   *
	   * The cube is created around the origin. (-size / 2, size / 2).
	   *
	   * @param {number} [size] width, height and depth of the cube.
	   * @return {Object.<string, TypedArray>} The created vertices.
	   * @memberOf module:twgl/primitives
	   */
	  function createCubeVertices(size) {
	    size = size || 1;
	    var k = size / 2;
	
	    var cornerVertices = [
	      [-k, -k, -k],
	      [+k, -k, -k],
	      [-k, +k, -k],
	      [+k, +k, -k],
	      [-k, -k, +k],
	      [+k, -k, +k],
	      [-k, +k, +k],
	      [+k, +k, +k],
	    ];
	
	    var faceNormals = [
	      [+1, +0, +0],
	      [-1, +0, +0],
	      [+0, +1, +0],
	      [+0, -1, +0],
	      [+0, +0, +1],
	      [+0, +0, -1],
	    ];
	
	    var uvCoords = [
	      [1, 0],
	      [0, 0],
	      [0, 1],
	      [1, 1],
	    ];
	
	    var numVertices = 6 * 4;
	    var positions = createAugmentedTypedArray(3, numVertices);
	    var normals   = createAugmentedTypedArray(3, numVertices);
	    var texcoords = createAugmentedTypedArray(2 , numVertices);
	    var indices   = createAugmentedTypedArray(3, 6 * 2, Uint16Array);
	
	    for (var f = 0; f < 6; ++f) {
	      var faceIndices = CUBE_FACE_INDICES[f];
	      for (var v = 0; v < 4; ++v) {
	        var position = cornerVertices[faceIndices[v]];
	        var normal = faceNormals[f];
	        var uv = uvCoords[v];
	
	        // Each face needs all four vertices because the normals and texture
	        // coordinates are not all the same.
	        positions.push(position);
	        normals.push(normal);
	        texcoords.push(uv);
	
	      }
	      // Two triangles make a square face.
	      var offset = 4 * f;
	      indices.push(offset + 0, offset + 1, offset + 2);
	      indices.push(offset + 0, offset + 2, offset + 3);
	    }
	
	    return {
	      position: positions,
	      normal: normals,
	      texcoord: texcoords,
	      indices: indices,
	    };
	  }
	
	  /**
	   * Creates a BufferInfo for a truncated cone, which is like a cylinder
	   * except that it has different top and bottom radii. A truncated cone
	   * can also be used to create cylinders and regular cones. The
	   * truncated cone will be created centered about the origin, with the
	   * y axis as its vertical axis.
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} bottomRadius Bottom radius of truncated cone.
	   * @param {number} topRadius Top radius of truncated cone.
	   * @param {number} height Height of truncated cone.
	   * @param {number} radialSubdivisions The number of subdivisions around the
	   *     truncated cone.
	   * @param {number} verticalSubdivisions The number of subdivisions down the
	   *     truncated cone.
	   * @param {boolean} [opt_topCap] Create top cap. Default = true.
	   * @param {boolean} [opt_bottomCap] Create bottom cap. Default = true.
	   * @return {module:twgl.BufferInfo} The created cone BufferInfo.
	   * @memberOf module:twgl/primitives
	   * @function createTruncatedConeBufferInfo
	   */
	
	  /**
	   * Creates buffers for a truncated cone, which is like a cylinder
	   * except that it has different top and bottom radii. A truncated cone
	   * can also be used to create cylinders and regular cones. The
	   * truncated cone will be created centered about the origin, with the
	   * y axis as its vertical axis.
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} bottomRadius Bottom radius of truncated cone.
	   * @param {number} topRadius Top radius of truncated cone.
	   * @param {number} height Height of truncated cone.
	   * @param {number} radialSubdivisions The number of subdivisions around the
	   *     truncated cone.
	   * @param {number} verticalSubdivisions The number of subdivisions down the
	   *     truncated cone.
	   * @param {boolean} [opt_topCap] Create top cap. Default = true.
	   * @param {boolean} [opt_bottomCap] Create bottom cap. Default = true.
	   * @return {Object.<string, WebGLBuffer>} The created cone buffers.
	   * @memberOf module:twgl/primitives
	   * @function createTruncatedConeBuffers
	   */
	
	  /**
	   * Creates vertices for a truncated cone, which is like a cylinder
	   * except that it has different top and bottom radii. A truncated cone
	   * can also be used to create cylinders and regular cones. The
	   * truncated cone will be created centered about the origin, with the
	   * y axis as its vertical axis. .
	   *
	   * @param {number} bottomRadius Bottom radius of truncated cone.
	   * @param {number} topRadius Top radius of truncated cone.
	   * @param {number} height Height of truncated cone.
	   * @param {number} radialSubdivisions The number of subdivisions around the
	   *     truncated cone.
	   * @param {number} verticalSubdivisions The number of subdivisions down the
	   *     truncated cone.
	   * @param {boolean} [opt_topCap] Create top cap. Default = true.
	   * @param {boolean} [opt_bottomCap] Create bottom cap. Default = true.
	   * @return {Object.<string, TypedArray>} The created cone vertices.
	   * @memberOf module:twgl/primitives
	   */
	  function createTruncatedConeVertices(
	      bottomRadius,
	      topRadius,
	      height,
	      radialSubdivisions,
	      verticalSubdivisions,
	      opt_topCap,
	      opt_bottomCap) {
	    if (radialSubdivisions < 3) {
	      throw Error('radialSubdivisions must be 3 or greater');
	    }
	
	    if (verticalSubdivisions < 1) {
	      throw Error('verticalSubdivisions must be 1 or greater');
	    }
	
	    var topCap = (opt_topCap === undefined) ? true : opt_topCap;
	    var bottomCap = (opt_bottomCap === undefined) ? true : opt_bottomCap;
	
	    var extra = (topCap ? 2 : 0) + (bottomCap ? 2 : 0);
	
	    var numVertices = (radialSubdivisions + 1) * (verticalSubdivisions + 1 + extra);
	    var positions = createAugmentedTypedArray(3, numVertices);
	    var normals   = createAugmentedTypedArray(3, numVertices);
	    var texcoords = createAugmentedTypedArray(2, numVertices);
	    var indices   = createAugmentedTypedArray(3, radialSubdivisions * (verticalSubdivisions + extra) * 2, Uint16Array);
	
	    var vertsAroundEdge = radialSubdivisions + 1;
	
	    // The slant of the cone is constant across its surface
	    var slant = Math.atan2(bottomRadius - topRadius, height);
	    var cosSlant = Math.cos(slant);
	    var sinSlant = Math.sin(slant);
	
	    var start = topCap ? -2 : 0;
	    var end = verticalSubdivisions + (bottomCap ? 2 : 0);
	
	    for (var yy = start; yy <= end; ++yy) {
	      var v = yy / verticalSubdivisions;
	      var y = height * v;
	      var ringRadius;
	      if (yy < 0) {
	        y = 0;
	        v = 1;
	        ringRadius = bottomRadius;
	      } else if (yy > verticalSubdivisions) {
	        y = height;
	        v = 1;
	        ringRadius = topRadius;
	      } else {
	        ringRadius = bottomRadius +
	          (topRadius - bottomRadius) * (yy / verticalSubdivisions);
	      }
	      if (yy === -2 || yy === verticalSubdivisions + 2) {
	        ringRadius = 0;
	        v = 0;
	      }
	      y -= height / 2;
	      for (var ii = 0; ii < vertsAroundEdge; ++ii) {
	        var sin = Math.sin(ii * Math.PI * 2 / radialSubdivisions);
	        var cos = Math.cos(ii * Math.PI * 2 / radialSubdivisions);
	        positions.push(sin * ringRadius, y, cos * ringRadius);
	        normals.push(
	            (yy < 0 || yy > verticalSubdivisions) ? 0 : (sin * cosSlant),
	            (yy < 0) ? -1 : (yy > verticalSubdivisions ? 1 : sinSlant),
	            (yy < 0 || yy > verticalSubdivisions) ? 0 : (cos * cosSlant));
	        texcoords.push((ii / radialSubdivisions), 1 - v);
	      }
	    }
	
	    for (var yy = 0; yy < verticalSubdivisions + extra; ++yy) {  // eslint-disable-line
	      for (var ii = 0; ii < radialSubdivisions; ++ii) {  // eslint-disable-line
	        indices.push(vertsAroundEdge * (yy + 0) + 0 + ii,
	                     vertsAroundEdge * (yy + 0) + 1 + ii,
	                     vertsAroundEdge * (yy + 1) + 1 + ii);
	        indices.push(vertsAroundEdge * (yy + 0) + 0 + ii,
	                     vertsAroundEdge * (yy + 1) + 1 + ii,
	                     vertsAroundEdge * (yy + 1) + 0 + ii);
	      }
	    }
	
	    return {
	      position: positions,
	      normal: normals,
	      texcoord: texcoords,
	      indices: indices,
	    };
	  }
	
	  /**
	   * Expands RLE data
	   * @param {number[]} rleData data in format of run-length, x, y, z, run-length, x, y, z
	   * @param {number[]} [padding] value to add each entry with.
	   * @return {number[]} the expanded rleData
	   */
	  function expandRLEData(rleData, padding) {
	    padding = padding || [];
	    var data = [];
	    for (var ii = 0; ii < rleData.length; ii += 4) {
	      var runLength = rleData[ii];
	      var element = rleData.slice(ii + 1, ii + 4);
	      element.push.apply(element, padding);
	      for (var jj = 0; jj < runLength; ++jj) {
	        data.push.apply(data, element);
	      }
	    }
	    return data;
	  }
	
	  /**
	   * Creates 3D 'F' BufferInfo.
	   * An 'F' is useful because you can easily tell which way it is oriented.
	   * The created 'F' has position, normal, texcoord, and color buffers.
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @return {module:twgl.BufferInfo} The created BufferInfo.
	   * @memberOf module:twgl/primitives
	   * @function create3DFBufferInfo
	   */
	
	  /**
	   * Creates 3D 'F' buffers.
	   * An 'F' is useful because you can easily tell which way it is oriented.
	   * The created 'F' has position, normal, texcoord, and color buffers.
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @return {Object.<string, WebGLBuffer>} The created buffers.
	   * @memberOf module:twgl/primitives
	   * @function create3DFBuffers
	   */
	
	  /**
	   * Creates 3D 'F' vertices.
	   * An 'F' is useful because you can easily tell which way it is oriented.
	   * The created 'F' has position, normal, texcoord, and color arrays.
	   *
	   * @return {Object.<string, TypedArray>} The created vertices.
	   * @memberOf module:twgl/primitives
	   */
	  function create3DFVertices() {
	
	    var positions = [
	      // left column front
	      0,   0,  0,
	      0, 150,  0,
	      30,   0,  0,
	      0, 150,  0,
	      30, 150,  0,
	      30,   0,  0,
	
	      // top rung front
	      30,   0,  0,
	      30,  30,  0,
	      100,   0,  0,
	      30,  30,  0,
	      100,  30,  0,
	      100,   0,  0,
	
	      // middle rung front
	      30,  60,  0,
	      30,  90,  0,
	      67,  60,  0,
	      30,  90,  0,
	      67,  90,  0,
	      67,  60,  0,
	
	      // left column back
	        0,   0,  30,
	       30,   0,  30,
	        0, 150,  30,
	        0, 150,  30,
	       30,   0,  30,
	       30, 150,  30,
	
	      // top rung back
	       30,   0,  30,
	      100,   0,  30,
	       30,  30,  30,
	       30,  30,  30,
	      100,   0,  30,
	      100,  30,  30,
	
	      // middle rung back
	       30,  60,  30,
	       67,  60,  30,
	       30,  90,  30,
	       30,  90,  30,
	       67,  60,  30,
	       67,  90,  30,
	
	      // top
	        0,   0,   0,
	      100,   0,   0,
	      100,   0,  30,
	        0,   0,   0,
	      100,   0,  30,
	        0,   0,  30,
	
	      // top rung front
	      100,   0,   0,
	      100,  30,   0,
	      100,  30,  30,
	      100,   0,   0,
	      100,  30,  30,
	      100,   0,  30,
	
	      // under top rung
	      30,   30,   0,
	      30,   30,  30,
	      100,  30,  30,
	      30,   30,   0,
	      100,  30,  30,
	      100,  30,   0,
	
	      // between top rung and middle
	      30,   30,   0,
	      30,   60,  30,
	      30,   30,  30,
	      30,   30,   0,
	      30,   60,   0,
	      30,   60,  30,
	
	      // top of middle rung
	      30,   60,   0,
	      67,   60,  30,
	      30,   60,  30,
	      30,   60,   0,
	      67,   60,   0,
	      67,   60,  30,
	
	      // front of middle rung
	      67,   60,   0,
	      67,   90,  30,
	      67,   60,  30,
	      67,   60,   0,
	      67,   90,   0,
	      67,   90,  30,
	
	      // bottom of middle rung.
	      30,   90,   0,
	      30,   90,  30,
	      67,   90,  30,
	      30,   90,   0,
	      67,   90,  30,
	      67,   90,   0,
	
	      // front of bottom
	      30,   90,   0,
	      30,  150,  30,
	      30,   90,  30,
	      30,   90,   0,
	      30,  150,   0,
	      30,  150,  30,
	
	      // bottom
	      0,   150,   0,
	      0,   150,  30,
	      30,  150,  30,
	      0,   150,   0,
	      30,  150,  30,
	      30,  150,   0,
	
	      // left side
	      0,   0,   0,
	      0,   0,  30,
	      0, 150,  30,
	      0,   0,   0,
	      0, 150,  30,
	      0, 150,   0,
	    ];
	
	    var texcoords = [
	      // left column front
	      0.22, 0.19,
	      0.22, 0.79,
	      0.34, 0.19,
	      0.22, 0.79,
	      0.34, 0.79,
	      0.34, 0.19,
	
	      // top rung front
	      0.34, 0.19,
	      0.34, 0.31,
	      0.62, 0.19,
	      0.34, 0.31,
	      0.62, 0.31,
	      0.62, 0.19,
	
	      // middle rung front
	      0.34, 0.43,
	      0.34, 0.55,
	      0.49, 0.43,
	      0.34, 0.55,
	      0.49, 0.55,
	      0.49, 0.43,
	
	      // left column back
	      0, 0,
	      1, 0,
	      0, 1,
	      0, 1,
	      1, 0,
	      1, 1,
	
	      // top rung back
	      0, 0,
	      1, 0,
	      0, 1,
	      0, 1,
	      1, 0,
	      1, 1,
	
	      // middle rung back
	      0, 0,
	      1, 0,
	      0, 1,
	      0, 1,
	      1, 0,
	      1, 1,
	
	      // top
	      0, 0,
	      1, 0,
	      1, 1,
	      0, 0,
	      1, 1,
	      0, 1,
	
	      // top rung front
	      0, 0,
	      1, 0,
	      1, 1,
	      0, 0,
	      1, 1,
	      0, 1,
	
	      // under top rung
	      0, 0,
	      0, 1,
	      1, 1,
	      0, 0,
	      1, 1,
	      1, 0,
	
	      // between top rung and middle
	      0, 0,
	      1, 1,
	      0, 1,
	      0, 0,
	      1, 0,
	      1, 1,
	
	      // top of middle rung
	      0, 0,
	      1, 1,
	      0, 1,
	      0, 0,
	      1, 0,
	      1, 1,
	
	      // front of middle rung
	      0, 0,
	      1, 1,
	      0, 1,
	      0, 0,
	      1, 0,
	      1, 1,
	
	      // bottom of middle rung.
	      0, 0,
	      0, 1,
	      1, 1,
	      0, 0,
	      1, 1,
	      1, 0,
	
	      // front of bottom
	      0, 0,
	      1, 1,
	      0, 1,
	      0, 0,
	      1, 0,
	      1, 1,
	
	      // bottom
	      0, 0,
	      0, 1,
	      1, 1,
	      0, 0,
	      1, 1,
	      1, 0,
	
	      // left side
	      0, 0,
	      0, 1,
	      1, 1,
	      0, 0,
	      1, 1,
	      1, 0,
	    ];
	
	    var normals = expandRLEData([
	      // left column front
	      // top rung front
	      // middle rung front
	      18, 0, 0, 1,
	
	      // left column back
	      // top rung back
	      // middle rung back
	      18, 0, 0, -1,
	
	      // top
	      6, 0, 1, 0,
	
	      // top rung front
	      6, 1, 0, 0,
	
	      // under top rung
	      6, 0, -1, 0,
	
	      // between top rung and middle
	      6, 1, 0, 0,
	
	      // top of middle rung
	      6, 0, 1, 0,
	
	      // front of middle rung
	      6, 1, 0, 0,
	
	      // bottom of middle rung.
	      6, 0, -1, 0,
	
	      // front of bottom
	      6, 1, 0, 0,
	
	      // bottom
	      6, 0, -1, 0,
	
	      // left side
	      6, -1, 0, 0,
	    ]);
	
	    var colors = expandRLEData([
	          // left column front
	          // top rung front
	          // middle rung front
	        18, 200,  70, 120,
	
	          // left column back
	          // top rung back
	          // middle rung back
	        18, 80, 70, 200,
	
	          // top
	        6, 70, 200, 210,
	
	          // top rung front
	        6, 200, 200, 70,
	
	          // under top rung
	        6, 210, 100, 70,
	
	          // between top rung and middle
	        6, 210, 160, 70,
	
	          // top of middle rung
	        6, 70, 180, 210,
	
	          // front of middle rung
	        6, 100, 70, 210,
	
	          // bottom of middle rung.
	        6, 76, 210, 100,
	
	          // front of bottom
	        6, 140, 210, 80,
	
	          // bottom
	        6, 90, 130, 110,
	
	          // left side
	        6, 160, 160, 220,
	    ], [255]);
	
	    var numVerts = positions.length / 3;
	
	    var arrays = {
	      position: createAugmentedTypedArray(3, numVerts),
	      texcoord: createAugmentedTypedArray(2,  numVerts),
	      normal: createAugmentedTypedArray(3, numVerts),
	      color: createAugmentedTypedArray(4, numVerts, Uint8Array),
	      indices: createAugmentedTypedArray(3, numVerts / 3, Uint16Array),
	    };
	
	    arrays.position.push(positions);
	    arrays.texcoord.push(texcoords);
	    arrays.normal.push(normals);
	    arrays.color.push(colors);
	
	    for (var ii = 0; ii < numVerts; ++ii) {
	      arrays.indices.push(ii);
	    }
	
	    return arrays;
	  }
	
	  /**
	   * Creates cresent BufferInfo.
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} verticalRadius The vertical radius of the cresent.
	   * @param {number} outerRadius The outer radius of the cresent.
	   * @param {number} innerRadius The inner radius of the cresent.
	   * @param {number} thickness The thickness of the cresent.
	   * @param {number} subdivisionsDown number of steps around the cresent.
	   * @param {number} subdivisionsThick number of vertically on the cresent.
	   * @param {number} [startOffset] Where to start arc. Default 0.
	   * @param {number} [endOffset] Where to end arg. Default 1.
	   * @return {module:twgl.BufferInfo} The created BufferInfo.
	   * @memberOf module:twgl/primitives
	   * @function createCresentBufferInfo
	   */
	
	  /**
	   * Creates cresent buffers.
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} verticalRadius The vertical radius of the cresent.
	   * @param {number} outerRadius The outer radius of the cresent.
	   * @param {number} innerRadius The inner radius of the cresent.
	   * @param {number} thickness The thickness of the cresent.
	   * @param {number} subdivisionsDown number of steps around the cresent.
	   * @param {number} subdivisionsThick number of vertically on the cresent.
	   * @param {number} [startOffset] Where to start arc. Default 0.
	   * @param {number} [endOffset] Where to end arg. Default 1.
	   * @return {Object.<string, WebGLBuffer>} The created buffers.
	   * @memberOf module:twgl/primitives
	   * @function createCresentBuffers
	   */
	
	  /**
	   * Creates cresent vertices.
	   *
	   * @param {number} verticalRadius The vertical radius of the cresent.
	   * @param {number} outerRadius The outer radius of the cresent.
	   * @param {number} innerRadius The inner radius of the cresent.
	   * @param {number} thickness The thickness of the cresent.
	   * @param {number} subdivisionsDown number of steps around the cresent.
	   * @param {number} subdivisionsThick number of vertically on the cresent.
	   * @param {number} [startOffset] Where to start arc. Default 0.
	   * @param {number} [endOffset] Where to end arg. Default 1.
	   * @return {Object.<string, TypedArray>} The created vertices.
	   * @memberOf module:twgl/primitives
	   */
	   function createCresentVertices(
	      verticalRadius,
	      outerRadius,
	      innerRadius,
	      thickness,
	      subdivisionsDown,
	      startOffset,
	      endOffset) {
	    if (subdivisionsDown <= 0) {
	      throw Error('subdivisionDown must be > 0');
	    }
	
	    startOffset = startOffset || 0;
	    endOffset   = endOffset || 1;
	
	    var subdivisionsThick = 2;
	
	    var offsetRange = endOffset - startOffset;
	    var numVertices = (subdivisionsDown + 1) * 2 * (2 + subdivisionsThick);
	    var positions   = createAugmentedTypedArray(3, numVertices);
	    var normals     = createAugmentedTypedArray(3, numVertices);
	    var texcoords   = createAugmentedTypedArray(2, numVertices);
	
	    function lerp(a, b, s) {
	      return a + (b - a) * s;
	    }
	
	    function createArc(arcRadius, x, normalMult, normalAdd, uMult, uAdd) {
	      for (var z = 0; z <= subdivisionsDown; z++) {
	        var uBack = x / (subdivisionsThick - 1);
	        var v = z / subdivisionsDown;
	        var xBack = (uBack - 0.5) * 2;
	        var angle = (startOffset + (v * offsetRange)) * Math.PI;
	        var s = Math.sin(angle);
	        var c = Math.cos(angle);
	        var radius = lerp(verticalRadius, arcRadius, s);
	        var px = xBack * thickness;
	        var py = c * verticalRadius;
	        var pz = s * radius;
	        positions.push(px, py, pz);
	        var n = v3.add(v3.multiply([0, s, c], normalMult), normalAdd);
	        normals.push(n);
	        texcoords.push(uBack * uMult + uAdd, v);
	      }
	    }
	
	    // Generate the individual vertices in our vertex buffer.
	    for (var x = 0; x < subdivisionsThick; x++) {
	      var uBack = (x / (subdivisionsThick - 1) - 0.5) * 2;
	      createArc(outerRadius, x, [1, 1, 1], [0,     0, 0], 1, 0);
	      createArc(outerRadius, x, [0, 0, 0], [uBack, 0, 0], 0, 0);
	      createArc(innerRadius, x, [1, 1, 1], [0,     0, 0], 1, 0);
	      createArc(innerRadius, x, [0, 0, 0], [uBack, 0, 0], 0, 1);
	    }
	
	    // Do outer surface.
	    var indices = createAugmentedTypedArray(3, (subdivisionsDown * 2) * (2 + subdivisionsThick), Uint16Array);
	
	    function createSurface(leftArcOffset, rightArcOffset) {
	      for (var z = 0; z < subdivisionsDown; ++z) {
	        // Make triangle 1 of quad.
	        indices.push(
	            leftArcOffset + z + 0,
	            leftArcOffset + z + 1,
	            rightArcOffset + z + 0);
	
	        // Make triangle 2 of quad.
	        indices.push(
	            leftArcOffset + z + 1,
	            rightArcOffset + z + 1,
	            rightArcOffset + z + 0);
	      }
	    }
	
	    var numVerticesDown = subdivisionsDown + 1;
	    // front
	    createSurface(numVerticesDown * 0, numVerticesDown * 4);
	    // right
	    createSurface(numVerticesDown * 5, numVerticesDown * 7);
	    // back
	    createSurface(numVerticesDown * 6, numVerticesDown * 2);
	    // left
	    createSurface(numVerticesDown * 3, numVerticesDown * 1);
	
	    return {
	      position: positions,
	      normal:   normals,
	      texcoord: texcoords,
	      indices:  indices,
	    };
	  }
	
	  /**
	   * Creates cylinder BufferInfo. The cylinder will be created around the origin
	   * along the y-axis.
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} radius Radius of cylinder.
	   * @param {number} height Height of cylinder.
	   * @param {number} radialSubdivisions The number of subdivisions around the cylinder.
	   * @param {number} verticalSubdivisions The number of subdivisions down the cylinder.
	   * @param {boolean} [topCap] Create top cap. Default = true.
	   * @param {boolean} [bottomCap] Create bottom cap. Default = true.
	   * @return {module:twgl.BufferInfo} The created BufferInfo.
	   * @memberOf module:twgl/primitives
	   * @function createCylinderBufferInfo
	   */
	
	   /**
	    * Creates cylinder buffers. The cylinder will be created around the origin
	    * along the y-axis.
	    *
	    * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	    * @param {number} radius Radius of cylinder.
	    * @param {number} height Height of cylinder.
	    * @param {number} radialSubdivisions The number of subdivisions around the cylinder.
	    * @param {number} verticalSubdivisions The number of subdivisions down the cylinder.
	    * @param {boolean} [topCap] Create top cap. Default = true.
	    * @param {boolean} [bottomCap] Create bottom cap. Default = true.
	    * @return {Object.<string, WebGLBuffer>} The created buffers.
	    * @memberOf module:twgl/primitives
	    * @function createCylinderBuffers
	    */
	
	   /**
	    * Creates cylinder vertices. The cylinder will be created around the origin
	    * along the y-axis.
	    *
	    * @param {number} radius Radius of cylinder.
	    * @param {number} height Height of cylinder.
	    * @param {number} radialSubdivisions The number of subdivisions around the cylinder.
	    * @param {number} verticalSubdivisions The number of subdivisions down the cylinder.
	    * @param {boolean} [topCap] Create top cap. Default = true.
	    * @param {boolean} [bottomCap] Create bottom cap. Default = true.
	    * @return {Object.<string, TypedArray>} The created vertices.
	    * @memberOf module:twgl/primitives
	    */
	  function createCylinderVertices(
	      radius,
	      height,
	      radialSubdivisions,
	      verticalSubdivisions,
	      topCap,
	      bottomCap) {
	    return createTruncatedConeVertices(
	        radius,
	        radius,
	        height,
	        radialSubdivisions,
	        verticalSubdivisions,
	        topCap,
	        bottomCap);
	  }
	
	  /**
	   * Creates BufferInfo for a torus
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} radius radius of center of torus circle.
	   * @param {number} thickness radius of torus ring.
	   * @param {number} radialSubdivisions The number of subdivisions around the torus.
	   * @param {number} bodySubdivisions The number of subdivisions around the body torus.
	   * @param {boolean} [startAngle] start angle in radians. Default = 0.
	   * @param {boolean} [endAngle] end angle in radians. Default = Math.PI * 2.
	   * @return {module:twgl.BufferInfo} The created BufferInfo.
	   * @memberOf module:twgl/primitives
	   * @function createTorusBufferInfo
	   */
	
	  /**
	   * Creates buffers for a torus
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} radius radius of center of torus circle.
	   * @param {number} thickness radius of torus ring.
	   * @param {number} radialSubdivisions The number of subdivisions around the torus.
	   * @param {number} bodySubdivisions The number of subdivisions around the body torus.
	   * @param {boolean} [startAngle] start angle in radians. Default = 0.
	   * @param {boolean} [endAngle] end angle in radians. Default = Math.PI * 2.
	   * @return {Object.<string, WebGLBuffer>} The created buffers.
	   * @memberOf module:twgl/primitives
	   * @function createTorusBuffers
	   */
	
	  /**
	   * Creates vertices for a torus
	   *
	   * @param {number} radius radius of center of torus circle.
	   * @param {number} thickness radius of torus ring.
	   * @param {number} radialSubdivisions The number of subdivisions around the torus.
	   * @param {number} bodySubdivisions The number of subdivisions around the body torus.
	   * @param {boolean} [startAngle] start angle in radians. Default = 0.
	   * @param {boolean} [endAngle] end angle in radians. Default = Math.PI * 2.
	   * @return {Object.<string, TypedArray>} The created vertices.
	   * @memberOf module:twgl/primitives
	   */
	  function createTorusVertices(
	      radius,
	      thickness,
	      radialSubdivisions,
	      bodySubdivisions,
	      startAngle,
	      endAngle) {
	    if (radialSubdivisions < 3) {
	      throw Error('radialSubdivisions must be 3 or greater');
	    }
	
	    if (bodySubdivisions < 3) {
	      throw Error('verticalSubdivisions must be 3 or greater');
	    }
	
	    startAngle = startAngle || 0;
	    endAngle = endAngle || Math.PI * 2;
	    range = endAngle - startAngle;
	
	    var radialParts = radialSubdivisions + 1;
	    var bodyParts   = bodySubdivisions + 1;
	    var numVertices = radialParts * bodyParts;
	    var positions   = createAugmentedTypedArray(3, numVertices);
	    var normals     = createAugmentedTypedArray(3, numVertices);
	    var texcoords   = createAugmentedTypedArray(2, numVertices);
	    var indices     = createAugmentedTypedArray(3, (radialSubdivisions) * (bodySubdivisions) * 2, Uint16Array);
	
	    for (var slice = 0; slice < bodyParts; ++slice) {
	      var v = slice / bodySubdivisions;
	      var sliceAngle = v * Math.PI * 2;
	      var sliceSin = Math.sin(sliceAngle);
	      var ringRadius = radius + sliceSin * thickness;
	      var ny = Math.cos(sliceAngle);
	      var y = ny * thickness;
	      for (var ring = 0; ring < radialParts; ++ring) {
	        var u = ring / radialSubdivisions;
	        var ringAngle = startAngle + u * range;
	        var xSin = Math.sin(ringAngle);
	        var zCos = Math.cos(ringAngle);
	        var x = xSin * ringRadius;
	        var z = zCos * ringRadius;
	        var nx = xSin * sliceSin;
	        var nz = zCos * sliceSin;
	        positions.push(x, y, z);
	        normals.push(nx, ny, nz);
	        texcoords.push(u, 1 - v);
	      }
	    }
	
	    for (var slice = 0; slice < bodySubdivisions; ++slice) {  // eslint-disable-line
	      for (var ring = 0; ring < radialSubdivisions; ++ring) {  // eslint-disable-line
	        var nextRingIndex  = 1 + ring;
	        var nextSliceIndex = 1 + slice;
	        indices.push(radialParts * slice          + ring,
	                     radialParts * nextSliceIndex + ring,
	                     radialParts * slice          + nextRingIndex);
	        indices.push(radialParts * nextSliceIndex + ring,
	                     radialParts * nextSliceIndex + nextRingIndex,
	                     radialParts * slice          + nextRingIndex);
	      }
	    }
	
	    return {
	      position: positions,
	      normal:   normals,
	      texcoord: texcoords,
	      indices:  indices,
	    };
	  }
	
	
	  /**
	   * Creates a disc BufferInfo. The disc will be in the xz plane, centered at
	   * the origin. When creating, at least 3 divisions, or pie
	   * pieces, need to be specified, otherwise the triangles making
	   * up the disc will be degenerate. You can also specify the
	   * number of radial pieces `stacks`. A value of 1 for
	   * stacks will give you a simple disc of pie pieces.  If you
	   * want to create an annulus you can set `innerRadius` to a
	   * value > 0. Finally, `stackPower` allows you to have the widths
	   * increase or decrease as you move away from the center. This
	   * is particularly useful when using the disc as a ground plane
	   * with a fixed camera such that you don't need the resolution
	   * of small triangles near the perimeter. For example, a value
	   * of 2 will produce stacks whose ouside radius increases with
	   * the square of the stack index. A value of 1 will give uniform
	   * stacks.
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} radius Radius of the ground plane.
	   * @param {number} divisions Number of triangles in the ground plane (at least 3).
	   * @param {number} [stacks] Number of radial divisions (default=1).
	   * @param {number} [innerRadius] Default 0.
	   * @param {number} [stackPower] Power to raise stack size to for decreasing width.
	   * @return {module:twgl.BufferInfo} The created BufferInfo.
	   * @memberOf module:twgl/primitives
	   * @function createDiscBufferInfo
	   */
	
	  /**
	   * Creates disc buffers. The disc will be in the xz plane, centered at
	   * the origin. When creating, at least 3 divisions, or pie
	   * pieces, need to be specified, otherwise the triangles making
	   * up the disc will be degenerate. You can also specify the
	   * number of radial pieces `stacks`. A value of 1 for
	   * stacks will give you a simple disc of pie pieces.  If you
	   * want to create an annulus you can set `innerRadius` to a
	   * value > 0. Finally, `stackPower` allows you to have the widths
	   * increase or decrease as you move away from the center. This
	   * is particularly useful when using the disc as a ground plane
	   * with a fixed camera such that you don't need the resolution
	   * of small triangles near the perimeter. For example, a value
	   * of 2 will produce stacks whose ouside radius increases with
	   * the square of the stack index. A value of 1 will give uniform
	   * stacks.
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} radius Radius of the ground plane.
	   * @param {number} divisions Number of triangles in the ground plane (at least 3).
	   * @param {number} [stacks] Number of radial divisions (default=1).
	   * @param {number} [innerRadius] Default 0.
	   * @param {number} [stackPower] Power to raise stack size to for decreasing width.
	   * @return {Object.<string, WebGLBuffer>} The created buffers.
	   * @memberOf module:twgl/primitives
	   * @function createDiscBuffers
	   */
	
	  /**
	   * Creates disc vertices. The disc will be in the xz plane, centered at
	   * the origin. When creating, at least 3 divisions, or pie
	   * pieces, need to be specified, otherwise the triangles making
	   * up the disc will be degenerate. You can also specify the
	   * number of radial pieces `stacks`. A value of 1 for
	   * stacks will give you a simple disc of pie pieces.  If you
	   * want to create an annulus you can set `innerRadius` to a
	   * value > 0. Finally, `stackPower` allows you to have the widths
	   * increase or decrease as you move away from the center. This
	   * is particularly useful when using the disc as a ground plane
	   * with a fixed camera such that you don't need the resolution
	   * of small triangles near the perimeter. For example, a value
	   * of 2 will produce stacks whose ouside radius increases with
	   * the square of the stack index. A value of 1 will give uniform
	   * stacks.
	   *
	   * @param {number} radius Radius of the ground plane.
	   * @param {number} divisions Number of triangles in the ground plane (at least 3).
	   * @param {number} [stacks] Number of radial divisions (default=1).
	   * @param {number} [innerRadius] Default 0.
	   * @param {number} [stackPower] Power to raise stack size to for decreasing width.
	   * @return {Object.<string, TypedArray>} The created vertices.
	   * @memberOf module:twgl/primitives
	   */
	  function createDiscVertices(
	      radius,
	      divisions,
	      stacks,
	      innerRadius,
	      stackPower) {
	    if (divisions < 3) {
	      throw Error('divisions must be at least 3');
	    }
	
	    stacks = stacks ? stacks : 1;
	    stackPower = stackPower ? stackPower : 1;
	    innerRadius = innerRadius ? innerRadius : 0;
	
	    // Note: We don't share the center vertex because that would
	    // mess up texture coordinates.
	    var numVertices = (divisions + 1) * (stacks + 1);
	
	    var positions = createAugmentedTypedArray(3, numVertices);
	    var normals   = createAugmentedTypedArray(3, numVertices);
	    var texcoords = createAugmentedTypedArray(2, numVertices);
	    var indices   = createAugmentedTypedArray(3, stacks * divisions * 2, Uint16Array);
	
	    var firstIndex = 0;
	    var radiusSpan = radius - innerRadius;
	    var pointsPerStack = divisions + 1;
	
	    // Build the disk one stack at a time.
	    for (var stack = 0; stack <= stacks; ++stack) {
	      var stackRadius = innerRadius + radiusSpan * Math.pow(stack / stacks, stackPower);
	
	      for (var i = 0; i <= divisions; ++i) {
	        var theta = 2.0 * Math.PI * i / divisions;
	        var x = stackRadius * Math.cos(theta);
	        var z = stackRadius * Math.sin(theta);
	
	        positions.push(x, 0, z);
	        normals.push(0, 1, 0);
	        texcoords.push(1 - (i / divisions), stack / stacks);
	        if (stack > 0 && i !== divisions) {
	          // a, b, c and d are the indices of the vertices of a quad.  unless
	          // the current stack is the one closest to the center, in which case
	          // the vertices a and b connect to the center vertex.
	          var a = firstIndex + (i + 1);
	          var b = firstIndex + i;
	          var c = firstIndex + i - pointsPerStack;
	          var d = firstIndex + (i + 1) - pointsPerStack;
	
	          // Make a quad of the vertices a, b, c, d.
	          indices.push(a, b, c);
	          indices.push(a, c, d);
	        }
	      }
	
	      firstIndex += divisions + 1;
	    }
	
	    return {
	      position: positions,
	      normal: normals,
	      texcoord: texcoords,
	      indices: indices,
	    };
	  }
	
	  /**
	   * creates a random integer between 0 and range - 1 inclusive.
	   * @param {number} range
	   * @return {number} random value between 0 and range - 1 inclusive.
	   */
	  function randInt(range) {
	    return Math.random() * range | 0;
	  }
	
	  /**
	   * Used to supply random colors
	   * @callback RandomColorFunc
	   * @param {number} ndx index of triangle/quad if unindexed or index of vertex if indexed
	   * @param {number} channel 0 = red, 1 = green, 2 = blue, 3 = alpha
	   * @return {number} a number from 0 to 255
	   * @memberOf module:twgl/primitives
	   */
	
	  /**
	   * @typedef {Object} RandomVerticesOptions
	   * @property {number} [vertsPerColor] Defaults to 3 for non-indexed vertices
	   * @property {module:twgl/primitives.RandomColorFunc} [rand] A function to generate random numbers
	   * @memberOf module:twgl/primitives
	   */
	
	  /**
	   * Creates an augmentedTypedArray of random vertex colors.
	   * If the vertices are indexed (have an indices array) then will
	   * just make random colors. Otherwise assumes they are triangles
	   * and makes one random color for every 3 vertices.
	   * @param {Object.<string, augmentedTypedArray>} vertices Vertices as returned from one of the createXXXVertices functions.
	   * @param {module:twgl/primitives.RandomVerticesOptions} [options] options.
	   * @return {Object.<string, augmentedTypedArray>} same vertices as passed in with `color` added.
	   * @memberOf module:twgl/primitives
	   */
	  function makeRandomVertexColors(vertices, options) {
	    options = options || {};
	    var numElements = vertices.position.numElements;
	    var vcolors = createAugmentedTypedArray(4, numElements, Uint8Array);
	    var rand = options.rand || function(ndx, channel) {
	      return channel < 3 ? randInt(256) : 255;
	    };
	    vertices.color = vcolors;
	    if (vertices.indices) {
	      // just make random colors if index
	      for (var ii = 0; ii < numElements; ++ii) {
	        vcolors.push(rand(ii, 0), rand(ii, 1), rand(ii, 2), rand(ii, 3));
	      }
	    } else {
	      // make random colors per triangle
	      var numVertsPerColor = options.vertsPerColor || 3;
	      var numSets = numElements / numVertsPerColor;
	      for (var ii = 0; ii < numSets; ++ii) {  // eslint-disable-line
	        var color = [rand(ii, 0), rand(ii, 1), rand(ii, 2), rand(ii, 3)];
	        for (var jj = 0; jj < numVertsPerColor; ++jj) {
	          vcolors.push(color);
	        }
	      }
	    }
	    return vertices;
	  }
	
	  /**
	   * creates a function that calls fn to create vertices and then
	   * creates a buffers for them
	   */
	  function createBufferFunc(fn) {
	    return function(gl) {
	      var arrays = fn.apply(this, Array.prototype.slice.call(arguments, 1));
	      return twgl.createBuffersFromArrays(gl, arrays);
	    };
	  }
	
	  /**
	   * creates a function that calls fn to create vertices and then
	   * creates a bufferInfo object for them
	   */
	  function createBufferInfoFunc(fn) {
	    return function(gl) {
	      var arrays = fn.apply(null,  Array.prototype.slice.call(arguments, 1));
	      return twgl.createBufferInfoFromArrays(gl, arrays);
	    };
	  }
	
	  var arraySpecPropertyNames = [
	    "numComponents",
	    "size",
	    "type",
	    "normalize",
	    "stride",
	    "offset",
	    "attrib",
	    "name",
	    "attribName",
	  ];
	
	  /**
	   * Copy elements from one array to another
	   *
	   * @param {Array|TypedArray} src source array
	   * @param {Array|TypedArray} dst dest array
	   * @param {number} dstNdx index in dest to copy src
	   * @param {number} [offset] offset to add to copied values
	   */
	  function copyElements(src, dst, dstNdx, offset) {
	    offset = offset || 0;
	    var length = src.length;
	    for (var ii = 0; ii < length; ++ii) {
	      dst[dstNdx + ii] = src[ii] + offset;
	    }
	  }
	
	  /**
	   * Creates an array of the same time
	   *
	   * @param {(number[]|ArrayBuffer|module:twgl.FullArraySpec)} srcArray array who's type to copy
	   * @param {number} length size of new array
	   * @return {(number[]|ArrayBuffer|module:twgl.FullArraySpec)} array with same type as srcArray
	   */
	  function createArrayOfSameType(srcArray, length) {
	    var arraySrc = getArray(srcArray);
	    var newArray = new arraySrc.constructor(length);
	    var newArraySpec = newArray;
	    // If it appears to have been augmented make new one augemented
	    if (arraySrc.numComponents && arraySrc.numElements) {
	      augmentTypedArray(newArray, arraySrc.numComponents);
	    }
	    // If it was a fullspec make new one a fullspec
	    if (srcArray.data) {
	      newArraySpec = {
	        data: newArray,
	      };
	      utils.copyNamedProperties(arraySpecPropertyNames, srcArray, newArraySpec);
	    }
	    return newArraySpec;
	  }
	
	  /**
	   * Concatinates sets of vertices
	   *
	   * Assumes the vertices match in composition. For example
	   * if one set of vertices has positions, normals, and indices
	   * all sets of vertices must have positions, normals, and indices
	   * and of the same type.
	   *
	   * Example:
	   *
	   *      var cubeVertices = twgl.primtiives.createCubeVertices(2);
	   *      var sphereVertices = twgl.primitives.createSphereVertices(1, 10, 10);
	   *      // move the sphere 2 units up
	   *      twgl.primitives.reorientVertices(
	   *          sphereVertices, twgl.m4.translation([0, 2, 0]));
	   *      // merge the sphere with the cube
	   *      var cubeSphereVertices = twgl.primitives.concatVertices(
	   *          [cubeVertices, sphereVertices]);
	   *      // turn them into WebGL buffers and attrib data
	   *      var bufferInfo = twgl.createBufferInfoFromArrays(gl, cubeSphereVertices);
	   *
	   * @param {module:twgl.Arrays[]} arrays Array of arrays of vertices
	   * @return {module:twgl.Arrays} The concatinated vertices.
	   * @memberOf module:twgl/primitives
	   */
	  function concatVertices(arrayOfArrays) {
	    var names = {};
	    var baseName;
	    // get names of all arrays.
	    // and numElements for each set of vertices
	    for (var ii = 0; ii < arrayOfArrays.length; ++ii) {
	      var arrays = arrayOfArrays[ii];
	      Object.keys(arrays).forEach(function(name) {  // eslint-disable-line
	        if (!names[name]) {
	          names[name] = [];
	        }
	        if (!baseName && name !== 'indices') {
	          baseName = name;
	        }
	        var arrayInfo = arrays[name];
	        var numComponents = getNumComponents(arrayInfo, name);
	        var array = getArray(arrayInfo);
	        var numElements = array.length / numComponents;
	        names[name].push(numElements);
	      });
	    }
	
	    // compute length of combined array
	    // and return one for reference
	    function getLengthOfCombinedArrays(name) {
	      var length = 0;
	      var arraySpec;
	      for (var ii = 0; ii < arrayOfArrays.length; ++ii) {
	        var arrays = arrayOfArrays[ii];
	        var arrayInfo = arrays[name];
	        var array = getArray(arrayInfo);
	        length += array.length;
	        if (!arraySpec || arrayInfo.data) {
	          arraySpec = arrayInfo;
	        }
	      }
	      return {
	        length: length,
	        spec: arraySpec,
	      };
	    }
	
	    function copyArraysToNewArray(name, base, newArray) {
	      var baseIndex = 0;
	      var offset = 0;
	      for (var ii = 0; ii < arrayOfArrays.length; ++ii) {
	        var arrays = arrayOfArrays[ii];
	        var arrayInfo = arrays[name];
	        var array = getArray(arrayInfo);
	        if (name === 'indices') {
	          copyElements(array, newArray, offset, baseIndex);
	          baseIndex += base[ii];
	        } else {
	          copyElements(array, newArray, offset);
	        }
	        offset += array.length;
	      }
	    }
	
	    var base = names[baseName];
	
	    var newArrays = {};
	    Object.keys(names).forEach(function(name) {
	      var info = getLengthOfCombinedArrays(name);
	      var newArraySpec = createArrayOfSameType(info.spec, info.length);
	      copyArraysToNewArray(name, base, getArray(newArraySpec));
	      newArrays[name] = newArraySpec;
	    });
	    return newArrays;
	  }
	
	  /**
	   * Creates a duplicate set of vertices
	   *
	   * This is useful for calling reorientVertices when you
	   * also want to keep the original available
	   *
	   * @param {module:twgl.Arrays} arrays of vertices
	   * @return {module:twgl.Arrays} The dupilicated vertices.
	   * @memberOf module:twgl/primitives
	   */
	  function duplicateVertices(arrays) {
	    var newArrays = {};
	    Object.keys(arrays).forEach(function(name) {
	      var arraySpec = arrays[name];
	      var srcArray = getArray(arraySpec);
	      var newArraySpec = createArrayOfSameType(arraySpec, srcArray.length);
	      copyElements(srcArray, getArray(newArraySpec), 0);
	      newArrays[name] = newArraySpec;
	    });
	    return newArrays;
	  }
	
	  // Using quotes prevents Uglify from changing the names.
	  // No speed diff AFAICT.
	  return {
	    "create3DFBufferInfo": createBufferInfoFunc(create3DFVertices),
	    "create3DFBuffers": createBufferFunc(create3DFVertices),
	    "create3DFVertices": create3DFVertices,
	    "createAugmentedTypedArray": createAugmentedTypedArray,
	    "createCubeBufferInfo": createBufferInfoFunc(createCubeVertices),
	    "createCubeBuffers": createBufferFunc(createCubeVertices),
	    "createCubeVertices": createCubeVertices,
	    "createPlaneBufferInfo": createBufferInfoFunc(createPlaneVertices),
	    "createPlaneBuffers": createBufferFunc(createPlaneVertices),
	    "createPlaneVertices": createPlaneVertices,
	    "createSphereBufferInfo": createBufferInfoFunc(createSphereVertices),
	    "createSphereBuffers": createBufferFunc(createSphereVertices),
	    "createSphereVertices": createSphereVertices,
	    "createTruncatedConeBufferInfo": createBufferInfoFunc(createTruncatedConeVertices),
	    "createTruncatedConeBuffers": createBufferFunc(createTruncatedConeVertices),
	    "createTruncatedConeVertices": createTruncatedConeVertices,
	    "createXYQuadBufferInfo": createBufferInfoFunc(createXYQuadVertices),
	    "createXYQuadBuffers": createBufferFunc(createXYQuadVertices),
	    "createXYQuadVertices": createXYQuadVertices,
	    "createCresentBufferInfo": createBufferInfoFunc(createCresentVertices),
	    "createCresentBuffers": createBufferFunc(createCresentVertices),
	    "createCresentVertices": createCresentVertices,
	    "createCylinderBufferInfo": createBufferInfoFunc(createCylinderVertices),
	    "createCylinderBuffers": createBufferFunc(createCylinderVertices),
	    "createCylinderVertices": createCylinderVertices,
	    "createTorusBufferInfo": createBufferInfoFunc(createTorusVertices),
	    "createTorusBuffers": createBufferFunc(createTorusVertices),
	    "createTorusVertices": createTorusVertices,
	    "createDiscBufferInfo": createBufferInfoFunc(createDiscVertices),
	    "createDiscBuffers": createBufferFunc(createDiscVertices),
	    "createDiscVertices": createDiscVertices,
	    "deindexVertices": deindexVertices,
	    "flattenNormals": flattenNormals,
	    "makeRandomVertexColors": makeRandomVertexColors,
	    "reorientDirections": reorientDirections,
	    "reorientNormals": reorientNormals,
	    "reorientPositions": reorientPositions,
	    "reorientVertices": reorientVertices,
	    "concatVertices": concatVertices,
	    "duplicateVertices": duplicateVertices,
	  };
	
	});
	
	define('main', [
	    'twgl/twgl',
	    'twgl/m4',
	    'twgl/v3',
	    'twgl/primitives',
	  ], function(
	    twgl,
	    m4,
	    v3,
	    primitives
	  ) {
	    twgl.m4 = m4;
	    twgl.v3 = v3;
	    twgl.primitives = primitives;
	    return twgl;
	})
	
	notrequirebecasebrowserifymessesup(['main'], function(main) {
	  return main;
	}, undefined, true);   // forceSync = true
	
	
	;
	define("build/js/twgl-includer-full", function(){});
	
	    return notrequirebecasebrowserifymessesup('main');
	}));


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _twgl = __webpack_require__(3);
	
	var _twgl2 = _interopRequireDefault(_twgl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var WGLGeometry = function () {
	  function WGLGeometry(scene, type, arrays) {
	    _classCallCheck(this, WGLGeometry);
	
	    this.gl = scene.gl;
	    this.type = type;
	    this.bufferInfo = _twgl2.default.createBufferInfoFromArrays(this.gl, arrays);
	  }
	
	  _createClass(WGLGeometry, [{
	    key: 'draw',
	    value: function draw(material, materialInfo) {
	      this.gl.useProgram(material.programInfo.program);
	      _twgl2.default.setBuffersAndAttributes(this.gl, material.programInfo, this.bufferInfo);
	      material.setUniforms(materialInfo);
	      _twgl2.default.drawBufferInfo(this.gl, this.type, this.bufferInfo);
	    }
	  }]);
	
	  return WGLGeometry;
	}();
	
	exports.default = WGLGeometry;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _twgl = __webpack_require__(3);
	
	var _twgl2 = _interopRequireDefault(_twgl);
	
	var _glMatrix = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// Material will automatically compute standard uniforms that may be used in a shader.
	var allDynamicUniforms = {
	  u_time: {
	    allocate: function allocate() {
	      return 0.0;
	    },
	    compute: function compute(materialInfo) {
	      return materialInfo.time;
	    }
	  },
	  u_modelViewProj: {
	    allocate: function allocate() {
	      return _glMatrix.mat4.create();
	    },
	    compute: function compute(materialInfo, currentValue) {
	      _glMatrix.mat4.multiply(currentValue, materialInfo.viewMatrix, materialInfo.modelMatrix);
	      _glMatrix.mat4.multiply(currentValue, materialInfo.projMatrix, currentValue);
	      return currentValue;
	    }
	  },
	  u_modelView: {
	    allocate: function allocate() {
	      return _glMatrix.mat4.create();
	    },
	    compute: function compute(materialInfo, currentValue) {
	      _glMatrix.mat4.multiply(currentValue, materialInfo.viewMatrix, materialInfo.modelMatrix);
	      return currentValue;
	    }
	  },
	  u_viewProj: {
	    allocate: function allocate() {
	      return _glMatrix.mat4.create();
	    },
	    compute: function compute(materialInfo, currentValue) {
	      _glMatrix.mat4.multiply(currentValue, materialInfo.projMatrix, materialInfo.viewMatrix);
	      return currentValue;
	    }
	  },
	  u_model: {
	    allocate: function allocate() {
	      return _glMatrix.mat4.create();
	    },
	    compute: function compute(materialInfo, currentValue) {
	      _glMatrix.mat4.copy(currentValue, materialInfo.modelMatrix);
	      return currentValue;
	    }
	  },
	  u_view: {
	    allocate: function allocate() {
	      return _glMatrix.mat4.create();
	    },
	    compute: function compute(materialInfo, currentValue) {
	      _glMatrix.mat4.copy(currentValue, materialInfo.viewMatrix);
	      return currentValue;
	    }
	  },
	  u_proj: {
	    allocate: function allocate() {
	      return _glMatrix.mat4.create();
	    },
	    compute: function compute(materialInfo, currentValue) {
	      _glMatrix.mat4.copy(currentValue, materialInfo.projMatrix);
	      return currentValue;
	    }
	  }
	};
	
	var allDynamicUniformNames = Object.keys(allDynamicUniforms);
	
	var WGLMaterial = function () {
	  function WGLMaterial(scene, vs, fs, constUniforms) {
	    _classCallCheck(this, WGLMaterial);
	
	    this.gl = scene.gl;
	    this.programInfo = _twgl2.default.createProgramInfo(this.gl, [vs, fs]);
	    this.constUniforms = constUniforms || {};
	    this.allocateDynamicUniforms();
	  }
	
	  _createClass(WGLMaterial, [{
	    key: 'allocateDynamicUniforms',
	    value: function allocateDynamicUniforms() {
	      this.dynamicUniforms = {};
	      this.dynamicUniformNames = Object.keys(this.programInfo.uniformSetters);
	      for (var i = 0; i < allDynamicUniformNames.length; ++i) {
	        var uniform = allDynamicUniformNames[i];
	        if ({}.hasOwnProperty.call(this.constUniforms, uniform)) {
	          // const uniforms override dynamic uniforms, so no need to compute it
	          delete this.dynamicUniformNames[uniform];
	        } else if (this.dynamicUniformNames.indexOf(uniform) >= 0) {
	          // allocate storage for the dynamic uniform
	          this.dynamicUniforms[uniform] = allDynamicUniforms[uniform].allocate();
	        }
	      }
	    }
	  }, {
	    key: 'setUniforms',
	    value: function setUniforms(materialInfo) {
	      this.computeDynamicUniforms(materialInfo);
	      var uniforms = _extends({}, this.dynamicUniforms, this.constUniforms);
	      _twgl2.default.setUniforms(this.programInfo, uniforms);
	    }
	  }, {
	    key: 'computeDynamicUniforms',
	    value: function computeDynamicUniforms(materialInfo) {
	      for (var i = 0; i < this.dynamicUniformNames.length; ++i) {
	        var uniform = this.dynamicUniformNames[i];
	        var currentValue = this.dynamicUniforms[uniform];
	        if (currentValue === undefined) {
	          throw new Error('Unknown uniform: ' + uniform);
	        }
	        this.dynamicUniforms[uniform] = allDynamicUniforms[uniform].compute(materialInfo, this.dynamicUniforms[uniform]);
	      }
	    }
	  }]);
	
	  return WGLMaterial;
	}();
	
	exports.default = WGLMaterial;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @fileoverview gl-matrix - High performance matrix and vector operations
	 * @author Brandon Jones
	 * @author Colin MacKenzie IV
	 * @version 2.3.2
	 */
	
	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	// END HEADER
	
	exports.glMatrix = __webpack_require__(7);
	exports.mat2 = __webpack_require__(8);
	exports.mat2d = __webpack_require__(9);
	exports.mat3 = __webpack_require__(10);
	exports.mat4 = __webpack_require__(11);
	exports.quat = __webpack_require__(12);
	exports.vec2 = __webpack_require__(15);
	exports.vec3 = __webpack_require__(13);
	exports.vec4 = __webpack_require__(14);

/***/ },
/* 7 */
/***/ function(module, exports) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	/**
	 * @class Common utilities
	 * @name glMatrix
	 */
	var glMatrix = {};
	
	// Configuration Constants
	glMatrix.EPSILON = 0.000001;
	glMatrix.ARRAY_TYPE = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
	glMatrix.RANDOM = Math.random;
	glMatrix.ENABLE_SIMD = false;
	
	// Capability detection
	glMatrix.SIMD_AVAILABLE = (glMatrix.ARRAY_TYPE === Float32Array) && ('SIMD' in this);
	glMatrix.USE_SIMD = glMatrix.ENABLE_SIMD && glMatrix.SIMD_AVAILABLE;
	
	/**
	 * Sets the type of array used when creating new vectors and matrices
	 *
	 * @param {Type} type Array type, such as Float32Array or Array
	 */
	glMatrix.setMatrixArrayType = function(type) {
	    glMatrix.ARRAY_TYPE = type;
	}
	
	var degree = Math.PI / 180;
	
	/**
	* Convert Degree To Radian
	*
	* @param {Number} Angle in Degrees
	*/
	glMatrix.toRadian = function(a){
	     return a * degree;
	}
	
	/**
	 * Tests whether or not the arguments have approximately the same value, within an absolute
	 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less 
	 * than or equal to 1.0, and a relative tolerance is used for larger values)
	 * 
	 * @param {Number} a The first number to test.
	 * @param {Number} b The second number to test.
	 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
	 */
	glMatrix.equals = function(a, b) {
		return Math.abs(a - b) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a), Math.abs(b));
	}
	
	module.exports = glMatrix;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(7);
	
	/**
	 * @class 2x2 Matrix
	 * @name mat2
	 */
	var mat2 = {};
	
	/**
	 * Creates a new identity mat2
	 *
	 * @returns {mat2} a new 2x2 matrix
	 */
	mat2.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    return out;
	};
	
	/**
	 * Creates a new mat2 initialized with values from an existing matrix
	 *
	 * @param {mat2} a matrix to clone
	 * @returns {mat2} a new 2x2 matrix
	 */
	mat2.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    return out;
	};
	
	/**
	 * Copy the values from one mat2 to another
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the source matrix
	 * @returns {mat2} out
	 */
	mat2.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    return out;
	};
	
	/**
	 * Set a mat2 to the identity matrix
	 *
	 * @param {mat2} out the receiving matrix
	 * @returns {mat2} out
	 */
	mat2.identity = function(out) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    return out;
	};
	
	/**
	 * Create a new mat2 with the given values
	 *
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m10 Component in column 1, row 0 position (index 2)
	 * @param {Number} m11 Component in column 1, row 1 position (index 3)
	 * @returns {mat2} out A new 2x2 matrix
	 */
	mat2.fromValues = function(m00, m01, m10, m11) {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = m00;
	    out[1] = m01;
	    out[2] = m10;
	    out[3] = m11;
	    return out;
	};
	
	/**
	 * Set the components of a mat2 to the given values
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m10 Component in column 1, row 0 position (index 2)
	 * @param {Number} m11 Component in column 1, row 1 position (index 3)
	 * @returns {mat2} out
	 */
	mat2.set = function(out, m00, m01, m10, m11) {
	    out[0] = m00;
	    out[1] = m01;
	    out[2] = m10;
	    out[3] = m11;
	    return out;
	};
	
	
	/**
	 * Transpose the values of a mat2
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the source matrix
	 * @returns {mat2} out
	 */
	mat2.transpose = function(out, a) {
	    // If we are transposing ourselves we can skip a few steps but have to cache some values
	    if (out === a) {
	        var a1 = a[1];
	        out[1] = a[2];
	        out[2] = a1;
	    } else {
	        out[0] = a[0];
	        out[1] = a[2];
	        out[2] = a[1];
	        out[3] = a[3];
	    }
	    
	    return out;
	};
	
	/**
	 * Inverts a mat2
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the source matrix
	 * @returns {mat2} out
	 */
	mat2.invert = function(out, a) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
	
	        // Calculate the determinant
	        det = a0 * a3 - a2 * a1;
	
	    if (!det) {
	        return null;
	    }
	    det = 1.0 / det;
	    
	    out[0] =  a3 * det;
	    out[1] = -a1 * det;
	    out[2] = -a2 * det;
	    out[3] =  a0 * det;
	
	    return out;
	};
	
	/**
	 * Calculates the adjugate of a mat2
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the source matrix
	 * @returns {mat2} out
	 */
	mat2.adjoint = function(out, a) {
	    // Caching this value is nessecary if out == a
	    var a0 = a[0];
	    out[0] =  a[3];
	    out[1] = -a[1];
	    out[2] = -a[2];
	    out[3] =  a0;
	
	    return out;
	};
	
	/**
	 * Calculates the determinant of a mat2
	 *
	 * @param {mat2} a the source matrix
	 * @returns {Number} determinant of a
	 */
	mat2.determinant = function (a) {
	    return a[0] * a[3] - a[2] * a[1];
	};
	
	/**
	 * Multiplies two mat2's
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the first operand
	 * @param {mat2} b the second operand
	 * @returns {mat2} out
	 */
	mat2.multiply = function (out, a, b) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
	    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
	    out[0] = a0 * b0 + a2 * b1;
	    out[1] = a1 * b0 + a3 * b1;
	    out[2] = a0 * b2 + a2 * b3;
	    out[3] = a1 * b2 + a3 * b3;
	    return out;
	};
	
	/**
	 * Alias for {@link mat2.multiply}
	 * @function
	 */
	mat2.mul = mat2.multiply;
	
	/**
	 * Rotates a mat2 by the given angle
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat2} out
	 */
	mat2.rotate = function (out, a, rad) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
	        s = Math.sin(rad),
	        c = Math.cos(rad);
	    out[0] = a0 *  c + a2 * s;
	    out[1] = a1 *  c + a3 * s;
	    out[2] = a0 * -s + a2 * c;
	    out[3] = a1 * -s + a3 * c;
	    return out;
	};
	
	/**
	 * Scales the mat2 by the dimensions in the given vec2
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the matrix to rotate
	 * @param {vec2} v the vec2 to scale the matrix by
	 * @returns {mat2} out
	 **/
	mat2.scale = function(out, a, v) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
	        v0 = v[0], v1 = v[1];
	    out[0] = a0 * v0;
	    out[1] = a1 * v0;
	    out[2] = a2 * v1;
	    out[3] = a3 * v1;
	    return out;
	};
	
	/**
	 * Creates a matrix from a given angle
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2.identity(dest);
	 *     mat2.rotate(dest, dest, rad);
	 *
	 * @param {mat2} out mat2 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat2} out
	 */
	mat2.fromRotation = function(out, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad);
	    out[0] = c;
	    out[1] = s;
	    out[2] = -s;
	    out[3] = c;
	    return out;
	}
	
	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2.identity(dest);
	 *     mat2.scale(dest, dest, vec);
	 *
	 * @param {mat2} out mat2 receiving operation result
	 * @param {vec2} v Scaling vector
	 * @returns {mat2} out
	 */
	mat2.fromScaling = function(out, v) {
	    out[0] = v[0];
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = v[1];
	    return out;
	}
	
	/**
	 * Returns a string representation of a mat2
	 *
	 * @param {mat2} mat matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	mat2.str = function (a) {
	    return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
	};
	
	/**
	 * Returns Frobenius norm of a mat2
	 *
	 * @param {mat2} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	mat2.frob = function (a) {
	    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2)))
	};
	
	/**
	 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
	 * @param {mat2} L the lower triangular matrix 
	 * @param {mat2} D the diagonal matrix 
	 * @param {mat2} U the upper triangular matrix 
	 * @param {mat2} a the input matrix to factorize
	 */
	
	mat2.LDU = function (L, D, U, a) { 
	    L[2] = a[2]/a[0]; 
	    U[0] = a[0]; 
	    U[1] = a[1]; 
	    U[3] = a[3] - L[2] * U[1]; 
	    return [L, D, U];       
	}; 
	
	/**
	 * Adds two mat2's
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the first operand
	 * @param {mat2} b the second operand
	 * @returns {mat2} out
	 */
	mat2.add = function(out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    out[2] = a[2] + b[2];
	    out[3] = a[3] + b[3];
	    return out;
	};
	
	/**
	 * Subtracts matrix b from matrix a
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the first operand
	 * @param {mat2} b the second operand
	 * @returns {mat2} out
	 */
	mat2.subtract = function(out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    out[2] = a[2] - b[2];
	    out[3] = a[3] - b[3];
	    return out;
	};
	
	/**
	 * Alias for {@link mat2.subtract}
	 * @function
	 */
	mat2.sub = mat2.subtract;
	
	/**
	 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {mat2} a The first matrix.
	 * @param {mat2} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	mat2.exactEquals = function (a, b) {
	    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
	};
	
	/**
	 * Returns whether or not the matrices have approximately the same elements in the same position.
	 *
	 * @param {mat2} a The first matrix.
	 * @param {mat2} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	mat2.equals = function (a, b) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
	    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
	    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
	            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
	            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
	            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)));
	};
	
	/**
	 * Multiply each element of the matrix by a scalar.
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the matrix to scale
	 * @param {Number} b amount to scale the matrix's elements by
	 * @returns {mat2} out
	 */
	mat2.multiplyScalar = function(out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    out[2] = a[2] * b;
	    out[3] = a[3] * b;
	    return out;
	};
	
	/**
	 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
	 *
	 * @param {mat2} out the receiving vector
	 * @param {mat2} a the first operand
	 * @param {mat2} b the second operand
	 * @param {Number} scale the amount to scale b's elements by before adding
	 * @returns {mat2} out
	 */
	mat2.multiplyScalarAndAdd = function(out, a, b, scale) {
	    out[0] = a[0] + (b[0] * scale);
	    out[1] = a[1] + (b[1] * scale);
	    out[2] = a[2] + (b[2] * scale);
	    out[3] = a[3] + (b[3] * scale);
	    return out;
	};
	
	module.exports = mat2;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(7);
	
	/**
	 * @class 2x3 Matrix
	 * @name mat2d
	 * 
	 * @description 
	 * A mat2d contains six elements defined as:
	 * <pre>
	 * [a, c, tx,
	 *  b, d, ty]
	 * </pre>
	 * This is a short form for the 3x3 matrix:
	 * <pre>
	 * [a, c, tx,
	 *  b, d, ty,
	 *  0, 0, 1]
	 * </pre>
	 * The last row is ignored so the array is shorter and operations are faster.
	 */
	var mat2d = {};
	
	/**
	 * Creates a new identity mat2d
	 *
	 * @returns {mat2d} a new 2x3 matrix
	 */
	mat2d.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(6);
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    out[4] = 0;
	    out[5] = 0;
	    return out;
	};
	
	/**
	 * Creates a new mat2d initialized with values from an existing matrix
	 *
	 * @param {mat2d} a matrix to clone
	 * @returns {mat2d} a new 2x3 matrix
	 */
	mat2d.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(6);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    return out;
	};
	
	/**
	 * Copy the values from one mat2d to another
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the source matrix
	 * @returns {mat2d} out
	 */
	mat2d.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    return out;
	};
	
	/**
	 * Set a mat2d to the identity matrix
	 *
	 * @param {mat2d} out the receiving matrix
	 * @returns {mat2d} out
	 */
	mat2d.identity = function(out) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    out[4] = 0;
	    out[5] = 0;
	    return out;
	};
	
	/**
	 * Create a new mat2d with the given values
	 *
	 * @param {Number} a Component A (index 0)
	 * @param {Number} b Component B (index 1)
	 * @param {Number} c Component C (index 2)
	 * @param {Number} d Component D (index 3)
	 * @param {Number} tx Component TX (index 4)
	 * @param {Number} ty Component TY (index 5)
	 * @returns {mat2d} A new mat2d
	 */
	mat2d.fromValues = function(a, b, c, d, tx, ty) {
	    var out = new glMatrix.ARRAY_TYPE(6);
	    out[0] = a;
	    out[1] = b;
	    out[2] = c;
	    out[3] = d;
	    out[4] = tx;
	    out[5] = ty;
	    return out;
	};
	
	/**
	 * Set the components of a mat2d to the given values
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {Number} a Component A (index 0)
	 * @param {Number} b Component B (index 1)
	 * @param {Number} c Component C (index 2)
	 * @param {Number} d Component D (index 3)
	 * @param {Number} tx Component TX (index 4)
	 * @param {Number} ty Component TY (index 5)
	 * @returns {mat2d} out
	 */
	mat2d.set = function(out, a, b, c, d, tx, ty) {
	    out[0] = a;
	    out[1] = b;
	    out[2] = c;
	    out[3] = d;
	    out[4] = tx;
	    out[5] = ty;
	    return out;
	};
	
	/**
	 * Inverts a mat2d
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the source matrix
	 * @returns {mat2d} out
	 */
	mat2d.invert = function(out, a) {
	    var aa = a[0], ab = a[1], ac = a[2], ad = a[3],
	        atx = a[4], aty = a[5];
	
	    var det = aa * ad - ab * ac;
	    if(!det){
	        return null;
	    }
	    det = 1.0 / det;
	
	    out[0] = ad * det;
	    out[1] = -ab * det;
	    out[2] = -ac * det;
	    out[3] = aa * det;
	    out[4] = (ac * aty - ad * atx) * det;
	    out[5] = (ab * atx - aa * aty) * det;
	    return out;
	};
	
	/**
	 * Calculates the determinant of a mat2d
	 *
	 * @param {mat2d} a the source matrix
	 * @returns {Number} determinant of a
	 */
	mat2d.determinant = function (a) {
	    return a[0] * a[3] - a[1] * a[2];
	};
	
	/**
	 * Multiplies two mat2d's
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the first operand
	 * @param {mat2d} b the second operand
	 * @returns {mat2d} out
	 */
	mat2d.multiply = function (out, a, b) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
	        b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
	    out[0] = a0 * b0 + a2 * b1;
	    out[1] = a1 * b0 + a3 * b1;
	    out[2] = a0 * b2 + a2 * b3;
	    out[3] = a1 * b2 + a3 * b3;
	    out[4] = a0 * b4 + a2 * b5 + a4;
	    out[5] = a1 * b4 + a3 * b5 + a5;
	    return out;
	};
	
	/**
	 * Alias for {@link mat2d.multiply}
	 * @function
	 */
	mat2d.mul = mat2d.multiply;
	
	/**
	 * Rotates a mat2d by the given angle
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat2d} out
	 */
	mat2d.rotate = function (out, a, rad) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
	        s = Math.sin(rad),
	        c = Math.cos(rad);
	    out[0] = a0 *  c + a2 * s;
	    out[1] = a1 *  c + a3 * s;
	    out[2] = a0 * -s + a2 * c;
	    out[3] = a1 * -s + a3 * c;
	    out[4] = a4;
	    out[5] = a5;
	    return out;
	};
	
	/**
	 * Scales the mat2d by the dimensions in the given vec2
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the matrix to translate
	 * @param {vec2} v the vec2 to scale the matrix by
	 * @returns {mat2d} out
	 **/
	mat2d.scale = function(out, a, v) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
	        v0 = v[0], v1 = v[1];
	    out[0] = a0 * v0;
	    out[1] = a1 * v0;
	    out[2] = a2 * v1;
	    out[3] = a3 * v1;
	    out[4] = a4;
	    out[5] = a5;
	    return out;
	};
	
	/**
	 * Translates the mat2d by the dimensions in the given vec2
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the matrix to translate
	 * @param {vec2} v the vec2 to translate the matrix by
	 * @returns {mat2d} out
	 **/
	mat2d.translate = function(out, a, v) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
	        v0 = v[0], v1 = v[1];
	    out[0] = a0;
	    out[1] = a1;
	    out[2] = a2;
	    out[3] = a3;
	    out[4] = a0 * v0 + a2 * v1 + a4;
	    out[5] = a1 * v0 + a3 * v1 + a5;
	    return out;
	};
	
	/**
	 * Creates a matrix from a given angle
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2d.identity(dest);
	 *     mat2d.rotate(dest, dest, rad);
	 *
	 * @param {mat2d} out mat2d receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat2d} out
	 */
	mat2d.fromRotation = function(out, rad) {
	    var s = Math.sin(rad), c = Math.cos(rad);
	    out[0] = c;
	    out[1] = s;
	    out[2] = -s;
	    out[3] = c;
	    out[4] = 0;
	    out[5] = 0;
	    return out;
	}
	
	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2d.identity(dest);
	 *     mat2d.scale(dest, dest, vec);
	 *
	 * @param {mat2d} out mat2d receiving operation result
	 * @param {vec2} v Scaling vector
	 * @returns {mat2d} out
	 */
	mat2d.fromScaling = function(out, v) {
	    out[0] = v[0];
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = v[1];
	    out[4] = 0;
	    out[5] = 0;
	    return out;
	}
	
	/**
	 * Creates a matrix from a vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2d.identity(dest);
	 *     mat2d.translate(dest, dest, vec);
	 *
	 * @param {mat2d} out mat2d receiving operation result
	 * @param {vec2} v Translation vector
	 * @returns {mat2d} out
	 */
	mat2d.fromTranslation = function(out, v) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    out[4] = v[0];
	    out[5] = v[1];
	    return out;
	}
	
	/**
	 * Returns a string representation of a mat2d
	 *
	 * @param {mat2d} a matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	mat2d.str = function (a) {
	    return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + 
	                    a[3] + ', ' + a[4] + ', ' + a[5] + ')';
	};
	
	/**
	 * Returns Frobenius norm of a mat2d
	 *
	 * @param {mat2d} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	mat2d.frob = function (a) { 
	    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1))
	}; 
	
	/**
	 * Adds two mat2d's
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the first operand
	 * @param {mat2d} b the second operand
	 * @returns {mat2d} out
	 */
	mat2d.add = function(out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    out[2] = a[2] + b[2];
	    out[3] = a[3] + b[3];
	    out[4] = a[4] + b[4];
	    out[5] = a[5] + b[5];
	    return out;
	};
	
	/**
	 * Subtracts matrix b from matrix a
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the first operand
	 * @param {mat2d} b the second operand
	 * @returns {mat2d} out
	 */
	mat2d.subtract = function(out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    out[2] = a[2] - b[2];
	    out[3] = a[3] - b[3];
	    out[4] = a[4] - b[4];
	    out[5] = a[5] - b[5];
	    return out;
	};
	
	/**
	 * Alias for {@link mat2d.subtract}
	 * @function
	 */
	mat2d.sub = mat2d.subtract;
	
	/**
	 * Multiply each element of the matrix by a scalar.
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the matrix to scale
	 * @param {Number} b amount to scale the matrix's elements by
	 * @returns {mat2d} out
	 */
	mat2d.multiplyScalar = function(out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    out[2] = a[2] * b;
	    out[3] = a[3] * b;
	    out[4] = a[4] * b;
	    out[5] = a[5] * b;
	    return out;
	};
	
	/**
	 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
	 *
	 * @param {mat2d} out the receiving vector
	 * @param {mat2d} a the first operand
	 * @param {mat2d} b the second operand
	 * @param {Number} scale the amount to scale b's elements by before adding
	 * @returns {mat2d} out
	 */
	mat2d.multiplyScalarAndAdd = function(out, a, b, scale) {
	    out[0] = a[0] + (b[0] * scale);
	    out[1] = a[1] + (b[1] * scale);
	    out[2] = a[2] + (b[2] * scale);
	    out[3] = a[3] + (b[3] * scale);
	    out[4] = a[4] + (b[4] * scale);
	    out[5] = a[5] + (b[5] * scale);
	    return out;
	};
	
	/**
	 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {mat2d} a The first matrix.
	 * @param {mat2d} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	mat2d.exactEquals = function (a, b) {
	    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
	};
	
	/**
	 * Returns whether or not the matrices have approximately the same elements in the same position.
	 *
	 * @param {mat2d} a The first matrix.
	 * @param {mat2d} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	mat2d.equals = function (a, b) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
	    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
	    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
	            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
	            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
	            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
	            Math.abs(a4 - b4) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
	            Math.abs(a5 - b5) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a5), Math.abs(b5)));
	};
	
	module.exports = mat2d;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(7);
	
	/**
	 * @class 3x3 Matrix
	 * @name mat3
	 */
	var mat3 = {};
	
	/**
	 * Creates a new identity mat3
	 *
	 * @returns {mat3} a new 3x3 matrix
	 */
	mat3.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(9);
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 1;
	    out[5] = 0;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 1;
	    return out;
	};
	
	/**
	 * Copies the upper-left 3x3 values into the given mat3.
	 *
	 * @param {mat3} out the receiving 3x3 matrix
	 * @param {mat4} a   the source 4x4 matrix
	 * @returns {mat3} out
	 */
	mat3.fromMat4 = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[4];
	    out[4] = a[5];
	    out[5] = a[6];
	    out[6] = a[8];
	    out[7] = a[9];
	    out[8] = a[10];
	    return out;
	};
	
	/**
	 * Creates a new mat3 initialized with values from an existing matrix
	 *
	 * @param {mat3} a matrix to clone
	 * @returns {mat3} a new 3x3 matrix
	 */
	mat3.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(9);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    return out;
	};
	
	/**
	 * Copy the values from one mat3 to another
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	mat3.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    return out;
	};
	
	/**
	 * Create a new mat3 with the given values
	 *
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m02 Component in column 0, row 2 position (index 2)
	 * @param {Number} m10 Component in column 1, row 0 position (index 3)
	 * @param {Number} m11 Component in column 1, row 1 position (index 4)
	 * @param {Number} m12 Component in column 1, row 2 position (index 5)
	 * @param {Number} m20 Component in column 2, row 0 position (index 6)
	 * @param {Number} m21 Component in column 2, row 1 position (index 7)
	 * @param {Number} m22 Component in column 2, row 2 position (index 8)
	 * @returns {mat3} A new mat3
	 */
	mat3.fromValues = function(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
	    var out = new glMatrix.ARRAY_TYPE(9);
	    out[0] = m00;
	    out[1] = m01;
	    out[2] = m02;
	    out[3] = m10;
	    out[4] = m11;
	    out[5] = m12;
	    out[6] = m20;
	    out[7] = m21;
	    out[8] = m22;
	    return out;
	};
	
	/**
	 * Set the components of a mat3 to the given values
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m02 Component in column 0, row 2 position (index 2)
	 * @param {Number} m10 Component in column 1, row 0 position (index 3)
	 * @param {Number} m11 Component in column 1, row 1 position (index 4)
	 * @param {Number} m12 Component in column 1, row 2 position (index 5)
	 * @param {Number} m20 Component in column 2, row 0 position (index 6)
	 * @param {Number} m21 Component in column 2, row 1 position (index 7)
	 * @param {Number} m22 Component in column 2, row 2 position (index 8)
	 * @returns {mat3} out
	 */
	mat3.set = function(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
	    out[0] = m00;
	    out[1] = m01;
	    out[2] = m02;
	    out[3] = m10;
	    out[4] = m11;
	    out[5] = m12;
	    out[6] = m20;
	    out[7] = m21;
	    out[8] = m22;
	    return out;
	};
	
	/**
	 * Set a mat3 to the identity matrix
	 *
	 * @param {mat3} out the receiving matrix
	 * @returns {mat3} out
	 */
	mat3.identity = function(out) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 1;
	    out[5] = 0;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 1;
	    return out;
	};
	
	/**
	 * Transpose the values of a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	mat3.transpose = function(out, a) {
	    // If we are transposing ourselves we can skip a few steps but have to cache some values
	    if (out === a) {
	        var a01 = a[1], a02 = a[2], a12 = a[5];
	        out[1] = a[3];
	        out[2] = a[6];
	        out[3] = a01;
	        out[5] = a[7];
	        out[6] = a02;
	        out[7] = a12;
	    } else {
	        out[0] = a[0];
	        out[1] = a[3];
	        out[2] = a[6];
	        out[3] = a[1];
	        out[4] = a[4];
	        out[5] = a[7];
	        out[6] = a[2];
	        out[7] = a[5];
	        out[8] = a[8];
	    }
	    
	    return out;
	};
	
	/**
	 * Inverts a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	mat3.invert = function(out, a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8],
	
	        b01 = a22 * a11 - a12 * a21,
	        b11 = -a22 * a10 + a12 * a20,
	        b21 = a21 * a10 - a11 * a20,
	
	        // Calculate the determinant
	        det = a00 * b01 + a01 * b11 + a02 * b21;
	
	    if (!det) { 
	        return null; 
	    }
	    det = 1.0 / det;
	
	    out[0] = b01 * det;
	    out[1] = (-a22 * a01 + a02 * a21) * det;
	    out[2] = (a12 * a01 - a02 * a11) * det;
	    out[3] = b11 * det;
	    out[4] = (a22 * a00 - a02 * a20) * det;
	    out[5] = (-a12 * a00 + a02 * a10) * det;
	    out[6] = b21 * det;
	    out[7] = (-a21 * a00 + a01 * a20) * det;
	    out[8] = (a11 * a00 - a01 * a10) * det;
	    return out;
	};
	
	/**
	 * Calculates the adjugate of a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	mat3.adjoint = function(out, a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8];
	
	    out[0] = (a11 * a22 - a12 * a21);
	    out[1] = (a02 * a21 - a01 * a22);
	    out[2] = (a01 * a12 - a02 * a11);
	    out[3] = (a12 * a20 - a10 * a22);
	    out[4] = (a00 * a22 - a02 * a20);
	    out[5] = (a02 * a10 - a00 * a12);
	    out[6] = (a10 * a21 - a11 * a20);
	    out[7] = (a01 * a20 - a00 * a21);
	    out[8] = (a00 * a11 - a01 * a10);
	    return out;
	};
	
	/**
	 * Calculates the determinant of a mat3
	 *
	 * @param {mat3} a the source matrix
	 * @returns {Number} determinant of a
	 */
	mat3.determinant = function (a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8];
	
	    return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
	};
	
	/**
	 * Multiplies two mat3's
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the first operand
	 * @param {mat3} b the second operand
	 * @returns {mat3} out
	 */
	mat3.multiply = function (out, a, b) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8],
	
	        b00 = b[0], b01 = b[1], b02 = b[2],
	        b10 = b[3], b11 = b[4], b12 = b[5],
	        b20 = b[6], b21 = b[7], b22 = b[8];
	
	    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
	    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
	    out[2] = b00 * a02 + b01 * a12 + b02 * a22;
	
	    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
	    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
	    out[5] = b10 * a02 + b11 * a12 + b12 * a22;
	
	    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
	    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
	    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
	    return out;
	};
	
	/**
	 * Alias for {@link mat3.multiply}
	 * @function
	 */
	mat3.mul = mat3.multiply;
	
	/**
	 * Translate a mat3 by the given vector
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to translate
	 * @param {vec2} v vector to translate by
	 * @returns {mat3} out
	 */
	mat3.translate = function(out, a, v) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8],
	        x = v[0], y = v[1];
	
	    out[0] = a00;
	    out[1] = a01;
	    out[2] = a02;
	
	    out[3] = a10;
	    out[4] = a11;
	    out[5] = a12;
	
	    out[6] = x * a00 + y * a10 + a20;
	    out[7] = x * a01 + y * a11 + a21;
	    out[8] = x * a02 + y * a12 + a22;
	    return out;
	};
	
	/**
	 * Rotates a mat3 by the given angle
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat3} out
	 */
	mat3.rotate = function (out, a, rad) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8],
	
	        s = Math.sin(rad),
	        c = Math.cos(rad);
	
	    out[0] = c * a00 + s * a10;
	    out[1] = c * a01 + s * a11;
	    out[2] = c * a02 + s * a12;
	
	    out[3] = c * a10 - s * a00;
	    out[4] = c * a11 - s * a01;
	    out[5] = c * a12 - s * a02;
	
	    out[6] = a20;
	    out[7] = a21;
	    out[8] = a22;
	    return out;
	};
	
	/**
	 * Scales the mat3 by the dimensions in the given vec2
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to rotate
	 * @param {vec2} v the vec2 to scale the matrix by
	 * @returns {mat3} out
	 **/
	mat3.scale = function(out, a, v) {
	    var x = v[0], y = v[1];
	
	    out[0] = x * a[0];
	    out[1] = x * a[1];
	    out[2] = x * a[2];
	
	    out[3] = y * a[3];
	    out[4] = y * a[4];
	    out[5] = y * a[5];
	
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    return out;
	};
	
	/**
	 * Creates a matrix from a vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat3.identity(dest);
	 *     mat3.translate(dest, dest, vec);
	 *
	 * @param {mat3} out mat3 receiving operation result
	 * @param {vec2} v Translation vector
	 * @returns {mat3} out
	 */
	mat3.fromTranslation = function(out, v) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 1;
	    out[5] = 0;
	    out[6] = v[0];
	    out[7] = v[1];
	    out[8] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from a given angle
	 * This is equivalent to (but much faster than):
	 *
	 *     mat3.identity(dest);
	 *     mat3.rotate(dest, dest, rad);
	 *
	 * @param {mat3} out mat3 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat3} out
	 */
	mat3.fromRotation = function(out, rad) {
	    var s = Math.sin(rad), c = Math.cos(rad);
	
	    out[0] = c;
	    out[1] = s;
	    out[2] = 0;
	
	    out[3] = -s;
	    out[4] = c;
	    out[5] = 0;
	
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat3.identity(dest);
	 *     mat3.scale(dest, dest, vec);
	 *
	 * @param {mat3} out mat3 receiving operation result
	 * @param {vec2} v Scaling vector
	 * @returns {mat3} out
	 */
	mat3.fromScaling = function(out, v) {
	    out[0] = v[0];
	    out[1] = 0;
	    out[2] = 0;
	
	    out[3] = 0;
	    out[4] = v[1];
	    out[5] = 0;
	
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 1;
	    return out;
	}
	
	/**
	 * Copies the values from a mat2d into a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat2d} a the matrix to copy
	 * @returns {mat3} out
	 **/
	mat3.fromMat2d = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = 0;
	
	    out[3] = a[2];
	    out[4] = a[3];
	    out[5] = 0;
	
	    out[6] = a[4];
	    out[7] = a[5];
	    out[8] = 1;
	    return out;
	};
	
	/**
	* Calculates a 3x3 matrix from the given quaternion
	*
	* @param {mat3} out mat3 receiving operation result
	* @param {quat} q Quaternion to create matrix from
	*
	* @returns {mat3} out
	*/
	mat3.fromQuat = function (out, q) {
	    var x = q[0], y = q[1], z = q[2], w = q[3],
	        x2 = x + x,
	        y2 = y + y,
	        z2 = z + z,
	
	        xx = x * x2,
	        yx = y * x2,
	        yy = y * y2,
	        zx = z * x2,
	        zy = z * y2,
	        zz = z * z2,
	        wx = w * x2,
	        wy = w * y2,
	        wz = w * z2;
	
	    out[0] = 1 - yy - zz;
	    out[3] = yx - wz;
	    out[6] = zx + wy;
	
	    out[1] = yx + wz;
	    out[4] = 1 - xx - zz;
	    out[7] = zy - wx;
	
	    out[2] = zx - wy;
	    out[5] = zy + wx;
	    out[8] = 1 - xx - yy;
	
	    return out;
	};
	
	/**
	* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
	*
	* @param {mat3} out mat3 receiving operation result
	* @param {mat4} a Mat4 to derive the normal matrix from
	*
	* @returns {mat3} out
	*/
	mat3.normalFromMat4 = function (out, a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
	        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
	        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
	        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],
	
	        b00 = a00 * a11 - a01 * a10,
	        b01 = a00 * a12 - a02 * a10,
	        b02 = a00 * a13 - a03 * a10,
	        b03 = a01 * a12 - a02 * a11,
	        b04 = a01 * a13 - a03 * a11,
	        b05 = a02 * a13 - a03 * a12,
	        b06 = a20 * a31 - a21 * a30,
	        b07 = a20 * a32 - a22 * a30,
	        b08 = a20 * a33 - a23 * a30,
	        b09 = a21 * a32 - a22 * a31,
	        b10 = a21 * a33 - a23 * a31,
	        b11 = a22 * a33 - a23 * a32,
	
	        // Calculate the determinant
	        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	
	    if (!det) { 
	        return null; 
	    }
	    det = 1.0 / det;
	
	    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
	    out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
	    out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
	
	    out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
	    out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
	    out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
	
	    out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
	    out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
	    out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
	
	    return out;
	};
	
	/**
	 * Returns a string representation of a mat3
	 *
	 * @param {mat3} mat matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	mat3.str = function (a) {
	    return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + 
	                    a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + 
	                    a[6] + ', ' + a[7] + ', ' + a[8] + ')';
	};
	
	/**
	 * Returns Frobenius norm of a mat3
	 *
	 * @param {mat3} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	mat3.frob = function (a) {
	    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2)))
	};
	
	/**
	 * Adds two mat3's
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the first operand
	 * @param {mat3} b the second operand
	 * @returns {mat3} out
	 */
	mat3.add = function(out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    out[2] = a[2] + b[2];
	    out[3] = a[3] + b[3];
	    out[4] = a[4] + b[4];
	    out[5] = a[5] + b[5];
	    out[6] = a[6] + b[6];
	    out[7] = a[7] + b[7];
	    out[8] = a[8] + b[8];
	    return out;
	};
	
	/**
	 * Subtracts matrix b from matrix a
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the first operand
	 * @param {mat3} b the second operand
	 * @returns {mat3} out
	 */
	mat3.subtract = function(out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    out[2] = a[2] - b[2];
	    out[3] = a[3] - b[3];
	    out[4] = a[4] - b[4];
	    out[5] = a[5] - b[5];
	    out[6] = a[6] - b[6];
	    out[7] = a[7] - b[7];
	    out[8] = a[8] - b[8];
	    return out;
	};
	
	/**
	 * Alias for {@link mat3.subtract}
	 * @function
	 */
	mat3.sub = mat3.subtract;
	
	/**
	 * Multiply each element of the matrix by a scalar.
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to scale
	 * @param {Number} b amount to scale the matrix's elements by
	 * @returns {mat3} out
	 */
	mat3.multiplyScalar = function(out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    out[2] = a[2] * b;
	    out[3] = a[3] * b;
	    out[4] = a[4] * b;
	    out[5] = a[5] * b;
	    out[6] = a[6] * b;
	    out[7] = a[7] * b;
	    out[8] = a[8] * b;
	    return out;
	};
	
	/**
	 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
	 *
	 * @param {mat3} out the receiving vector
	 * @param {mat3} a the first operand
	 * @param {mat3} b the second operand
	 * @param {Number} scale the amount to scale b's elements by before adding
	 * @returns {mat3} out
	 */
	mat3.multiplyScalarAndAdd = function(out, a, b, scale) {
	    out[0] = a[0] + (b[0] * scale);
	    out[1] = a[1] + (b[1] * scale);
	    out[2] = a[2] + (b[2] * scale);
	    out[3] = a[3] + (b[3] * scale);
	    out[4] = a[4] + (b[4] * scale);
	    out[5] = a[5] + (b[5] * scale);
	    out[6] = a[6] + (b[6] * scale);
	    out[7] = a[7] + (b[7] * scale);
	    out[8] = a[8] + (b[8] * scale);
	    return out;
	};
	
	/*
	 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {mat3} a The first matrix.
	 * @param {mat3} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	mat3.exactEquals = function (a, b) {
	    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && 
	           a[3] === b[3] && a[4] === b[4] && a[5] === b[5] &&
	           a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
	};
	
	/**
	 * Returns whether or not the matrices have approximately the same elements in the same position.
	 *
	 * @param {mat3} a The first matrix.
	 * @param {mat3} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	mat3.equals = function (a, b) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7], a8 = a[8];
	    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = a[6], b7 = b[7], b8 = b[8];
	    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
	            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
	            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
	            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
	            Math.abs(a4 - b4) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
	            Math.abs(a5 - b5) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
	            Math.abs(a6 - b6) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
	            Math.abs(a7 - b7) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
	            Math.abs(a8 - b8) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a8), Math.abs(b8)));
	};
	
	
	module.exports = mat3;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(7);
	
	/**
	 * @class 4x4 Matrix
	 * @name mat4
	 */
	var mat4 = {
	  scalar: {},
	  SIMD: {},
	};
	
	/**
	 * Creates a new identity mat4
	 *
	 * @returns {mat4} a new 4x4 matrix
	 */
	mat4.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(16);
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = 1;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 1;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	};
	
	/**
	 * Creates a new mat4 initialized with values from an existing matrix
	 *
	 * @param {mat4} a matrix to clone
	 * @returns {mat4} a new 4x4 matrix
	 */
	mat4.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(16);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    out[9] = a[9];
	    out[10] = a[10];
	    out[11] = a[11];
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	    return out;
	};
	
	/**
	 * Copy the values from one mat4 to another
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    out[9] = a[9];
	    out[10] = a[10];
	    out[11] = a[11];
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	    return out;
	};
	
	/**
	 * Create a new mat4 with the given values
	 *
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m02 Component in column 0, row 2 position (index 2)
	 * @param {Number} m03 Component in column 0, row 3 position (index 3)
	 * @param {Number} m10 Component in column 1, row 0 position (index 4)
	 * @param {Number} m11 Component in column 1, row 1 position (index 5)
	 * @param {Number} m12 Component in column 1, row 2 position (index 6)
	 * @param {Number} m13 Component in column 1, row 3 position (index 7)
	 * @param {Number} m20 Component in column 2, row 0 position (index 8)
	 * @param {Number} m21 Component in column 2, row 1 position (index 9)
	 * @param {Number} m22 Component in column 2, row 2 position (index 10)
	 * @param {Number} m23 Component in column 2, row 3 position (index 11)
	 * @param {Number} m30 Component in column 3, row 0 position (index 12)
	 * @param {Number} m31 Component in column 3, row 1 position (index 13)
	 * @param {Number} m32 Component in column 3, row 2 position (index 14)
	 * @param {Number} m33 Component in column 3, row 3 position (index 15)
	 * @returns {mat4} A new mat4
	 */
	mat4.fromValues = function(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
	    var out = new glMatrix.ARRAY_TYPE(16);
	    out[0] = m00;
	    out[1] = m01;
	    out[2] = m02;
	    out[3] = m03;
	    out[4] = m10;
	    out[5] = m11;
	    out[6] = m12;
	    out[7] = m13;
	    out[8] = m20;
	    out[9] = m21;
	    out[10] = m22;
	    out[11] = m23;
	    out[12] = m30;
	    out[13] = m31;
	    out[14] = m32;
	    out[15] = m33;
	    return out;
	};
	
	/**
	 * Set the components of a mat4 to the given values
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m02 Component in column 0, row 2 position (index 2)
	 * @param {Number} m03 Component in column 0, row 3 position (index 3)
	 * @param {Number} m10 Component in column 1, row 0 position (index 4)
	 * @param {Number} m11 Component in column 1, row 1 position (index 5)
	 * @param {Number} m12 Component in column 1, row 2 position (index 6)
	 * @param {Number} m13 Component in column 1, row 3 position (index 7)
	 * @param {Number} m20 Component in column 2, row 0 position (index 8)
	 * @param {Number} m21 Component in column 2, row 1 position (index 9)
	 * @param {Number} m22 Component in column 2, row 2 position (index 10)
	 * @param {Number} m23 Component in column 2, row 3 position (index 11)
	 * @param {Number} m30 Component in column 3, row 0 position (index 12)
	 * @param {Number} m31 Component in column 3, row 1 position (index 13)
	 * @param {Number} m32 Component in column 3, row 2 position (index 14)
	 * @param {Number} m33 Component in column 3, row 3 position (index 15)
	 * @returns {mat4} out
	 */
	mat4.set = function(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
	    out[0] = m00;
	    out[1] = m01;
	    out[2] = m02;
	    out[3] = m03;
	    out[4] = m10;
	    out[5] = m11;
	    out[6] = m12;
	    out[7] = m13;
	    out[8] = m20;
	    out[9] = m21;
	    out[10] = m22;
	    out[11] = m23;
	    out[12] = m30;
	    out[13] = m31;
	    out[14] = m32;
	    out[15] = m33;
	    return out;
	};
	
	
	/**
	 * Set a mat4 to the identity matrix
	 *
	 * @param {mat4} out the receiving matrix
	 * @returns {mat4} out
	 */
	mat4.identity = function(out) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = 1;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 1;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	};
	
	/**
	 * Transpose the values of a mat4 not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.scalar.transpose = function(out, a) {
	    // If we are transposing ourselves we can skip a few steps but have to cache some values
	    if (out === a) {
	        var a01 = a[1], a02 = a[2], a03 = a[3],
	            a12 = a[6], a13 = a[7],
	            a23 = a[11];
	
	        out[1] = a[4];
	        out[2] = a[8];
	        out[3] = a[12];
	        out[4] = a01;
	        out[6] = a[9];
	        out[7] = a[13];
	        out[8] = a02;
	        out[9] = a12;
	        out[11] = a[14];
	        out[12] = a03;
	        out[13] = a13;
	        out[14] = a23;
	    } else {
	        out[0] = a[0];
	        out[1] = a[4];
	        out[2] = a[8];
	        out[3] = a[12];
	        out[4] = a[1];
	        out[5] = a[5];
	        out[6] = a[9];
	        out[7] = a[13];
	        out[8] = a[2];
	        out[9] = a[6];
	        out[10] = a[10];
	        out[11] = a[14];
	        out[12] = a[3];
	        out[13] = a[7];
	        out[14] = a[11];
	        out[15] = a[15];
	    }
	
	    return out;
	};
	
	/**
	 * Transpose the values of a mat4 using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.SIMD.transpose = function(out, a) {
	    var a0, a1, a2, a3,
	        tmp01, tmp23,
	        out0, out1, out2, out3;
	
	    a0 = SIMD.Float32x4.load(a, 0);
	    a1 = SIMD.Float32x4.load(a, 4);
	    a2 = SIMD.Float32x4.load(a, 8);
	    a3 = SIMD.Float32x4.load(a, 12);
	
	    tmp01 = SIMD.Float32x4.shuffle(a0, a1, 0, 1, 4, 5);
	    tmp23 = SIMD.Float32x4.shuffle(a2, a3, 0, 1, 4, 5);
	    out0  = SIMD.Float32x4.shuffle(tmp01, tmp23, 0, 2, 4, 6);
	    out1  = SIMD.Float32x4.shuffle(tmp01, tmp23, 1, 3, 5, 7);
	    SIMD.Float32x4.store(out, 0,  out0);
	    SIMD.Float32x4.store(out, 4,  out1);
	
	    tmp01 = SIMD.Float32x4.shuffle(a0, a1, 2, 3, 6, 7);
	    tmp23 = SIMD.Float32x4.shuffle(a2, a3, 2, 3, 6, 7);
	    out2  = SIMD.Float32x4.shuffle(tmp01, tmp23, 0, 2, 4, 6);
	    out3  = SIMD.Float32x4.shuffle(tmp01, tmp23, 1, 3, 5, 7);
	    SIMD.Float32x4.store(out, 8,  out2);
	    SIMD.Float32x4.store(out, 12, out3);
	
	    return out;
	};
	
	/**
	 * Transpse a mat4 using SIMD if available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.transpose = glMatrix.USE_SIMD ? mat4.SIMD.transpose : mat4.scalar.transpose;
	
	/**
	 * Inverts a mat4 not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.scalar.invert = function(out, a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
	        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
	        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
	        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],
	
	        b00 = a00 * a11 - a01 * a10,
	        b01 = a00 * a12 - a02 * a10,
	        b02 = a00 * a13 - a03 * a10,
	        b03 = a01 * a12 - a02 * a11,
	        b04 = a01 * a13 - a03 * a11,
	        b05 = a02 * a13 - a03 * a12,
	        b06 = a20 * a31 - a21 * a30,
	        b07 = a20 * a32 - a22 * a30,
	        b08 = a20 * a33 - a23 * a30,
	        b09 = a21 * a32 - a22 * a31,
	        b10 = a21 * a33 - a23 * a31,
	        b11 = a22 * a33 - a23 * a32,
	
	        // Calculate the determinant
	        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	
	    if (!det) {
	        return null;
	    }
	    det = 1.0 / det;
	
	    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
	    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
	    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
	    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
	    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
	    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
	    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
	    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
	    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
	    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
	    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
	    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
	    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
	    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
	    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
	    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
	
	    return out;
	};
	
	/**
	 * Inverts a mat4 using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.SIMD.invert = function(out, a) {
	  var row0, row1, row2, row3,
	      tmp1,
	      minor0, minor1, minor2, minor3,
	      det,
	      a0 = SIMD.Float32x4.load(a, 0),
	      a1 = SIMD.Float32x4.load(a, 4),
	      a2 = SIMD.Float32x4.load(a, 8),
	      a3 = SIMD.Float32x4.load(a, 12);
	
	  // Compute matrix adjugate
	  tmp1 = SIMD.Float32x4.shuffle(a0, a1, 0, 1, 4, 5);
	  row1 = SIMD.Float32x4.shuffle(a2, a3, 0, 1, 4, 5);
	  row0 = SIMD.Float32x4.shuffle(tmp1, row1, 0, 2, 4, 6);
	  row1 = SIMD.Float32x4.shuffle(row1, tmp1, 1, 3, 5, 7);
	  tmp1 = SIMD.Float32x4.shuffle(a0, a1, 2, 3, 6, 7);
	  row3 = SIMD.Float32x4.shuffle(a2, a3, 2, 3, 6, 7);
	  row2 = SIMD.Float32x4.shuffle(tmp1, row3, 0, 2, 4, 6);
	  row3 = SIMD.Float32x4.shuffle(row3, tmp1, 1, 3, 5, 7);
	
	  tmp1   = SIMD.Float32x4.mul(row2, row3);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor0 = SIMD.Float32x4.mul(row1, tmp1);
	  minor1 = SIMD.Float32x4.mul(row0, tmp1);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor0 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row1, tmp1), minor0);
	  minor1 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor1);
	  minor1 = SIMD.Float32x4.swizzle(minor1, 2, 3, 0, 1);
	
	  tmp1   = SIMD.Float32x4.mul(row1, row2);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor0);
	  minor3 = SIMD.Float32x4.mul(row0, tmp1);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor0 = SIMD.Float32x4.sub(minor0, SIMD.Float32x4.mul(row3, tmp1));
	  minor3 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor3);
	  minor3 = SIMD.Float32x4.swizzle(minor3, 2, 3, 0, 1);
	
	  tmp1   = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(row1, 2, 3, 0, 1), row3);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  row2   = SIMD.Float32x4.swizzle(row2, 2, 3, 0, 1);
	  minor0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row2, tmp1), minor0);
	  minor2 = SIMD.Float32x4.mul(row0, tmp1);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor0 = SIMD.Float32x4.sub(minor0, SIMD.Float32x4.mul(row2, tmp1));
	  minor2 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor2);
	  minor2 = SIMD.Float32x4.swizzle(minor2, 2, 3, 0, 1);
	
	  tmp1   = SIMD.Float32x4.mul(row0, row1);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor2);
	  minor3 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row2, tmp1), minor3);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor2 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row3, tmp1), minor2);
	  minor3 = SIMD.Float32x4.sub(minor3, SIMD.Float32x4.mul(row2, tmp1));
	
	  tmp1   = SIMD.Float32x4.mul(row0, row3);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor1 = SIMD.Float32x4.sub(minor1, SIMD.Float32x4.mul(row2, tmp1));
	  minor2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row1, tmp1), minor2);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row2, tmp1), minor1);
	  minor2 = SIMD.Float32x4.sub(minor2, SIMD.Float32x4.mul(row1, tmp1));
	
	  tmp1   = SIMD.Float32x4.mul(row0, row2);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor1);
	  minor3 = SIMD.Float32x4.sub(minor3, SIMD.Float32x4.mul(row1, tmp1));
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor1 = SIMD.Float32x4.sub(minor1, SIMD.Float32x4.mul(row3, tmp1));
	  minor3 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row1, tmp1), minor3);
	
	  // Compute matrix determinant
	  det   = SIMD.Float32x4.mul(row0, minor0);
	  det   = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(det, 2, 3, 0, 1), det);
	  det   = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(det, 1, 0, 3, 2), det);
	  tmp1  = SIMD.Float32x4.reciprocalApproximation(det);
	  det   = SIMD.Float32x4.sub(
	               SIMD.Float32x4.add(tmp1, tmp1),
	               SIMD.Float32x4.mul(det, SIMD.Float32x4.mul(tmp1, tmp1)));
	  det   = SIMD.Float32x4.swizzle(det, 0, 0, 0, 0);
	  if (!det) {
	      return null;
	  }
	
	  // Compute matrix inverse
	  SIMD.Float32x4.store(out, 0,  SIMD.Float32x4.mul(det, minor0));
	  SIMD.Float32x4.store(out, 4,  SIMD.Float32x4.mul(det, minor1));
	  SIMD.Float32x4.store(out, 8,  SIMD.Float32x4.mul(det, minor2));
	  SIMD.Float32x4.store(out, 12, SIMD.Float32x4.mul(det, minor3));
	  return out;
	}
	
	/**
	 * Inverts a mat4 using SIMD if available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.invert = glMatrix.USE_SIMD ? mat4.SIMD.invert : mat4.scalar.invert;
	
	/**
	 * Calculates the adjugate of a mat4 not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.scalar.adjoint = function(out, a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
	        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
	        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
	        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
	
	    out[0]  =  (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
	    out[1]  = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
	    out[2]  =  (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
	    out[3]  = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
	    out[4]  = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
	    out[5]  =  (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
	    out[6]  = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
	    out[7]  =  (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
	    out[8]  =  (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
	    out[9]  = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
	    out[10] =  (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
	    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
	    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
	    out[13] =  (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
	    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
	    out[15] =  (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
	    return out;
	};
	
	/**
	 * Calculates the adjugate of a mat4 using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.SIMD.adjoint = function(out, a) {
	  var a0, a1, a2, a3;
	  var row0, row1, row2, row3;
	  var tmp1;
	  var minor0, minor1, minor2, minor3;
	
	  var a0 = SIMD.Float32x4.load(a, 0);
	  var a1 = SIMD.Float32x4.load(a, 4);
	  var a2 = SIMD.Float32x4.load(a, 8);
	  var a3 = SIMD.Float32x4.load(a, 12);
	
	  // Transpose the source matrix.  Sort of.  Not a true transpose operation
	  tmp1 = SIMD.Float32x4.shuffle(a0, a1, 0, 1, 4, 5);
	  row1 = SIMD.Float32x4.shuffle(a2, a3, 0, 1, 4, 5);
	  row0 = SIMD.Float32x4.shuffle(tmp1, row1, 0, 2, 4, 6);
	  row1 = SIMD.Float32x4.shuffle(row1, tmp1, 1, 3, 5, 7);
	
	  tmp1 = SIMD.Float32x4.shuffle(a0, a1, 2, 3, 6, 7);
	  row3 = SIMD.Float32x4.shuffle(a2, a3, 2, 3, 6, 7);
	  row2 = SIMD.Float32x4.shuffle(tmp1, row3, 0, 2, 4, 6);
	  row3 = SIMD.Float32x4.shuffle(row3, tmp1, 1, 3, 5, 7);
	
	  tmp1   = SIMD.Float32x4.mul(row2, row3);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor0 = SIMD.Float32x4.mul(row1, tmp1);
	  minor1 = SIMD.Float32x4.mul(row0, tmp1);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor0 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row1, tmp1), minor0);
	  minor1 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor1);
	  minor1 = SIMD.Float32x4.swizzle(minor1, 2, 3, 0, 1);
	
	  tmp1   = SIMD.Float32x4.mul(row1, row2);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor0);
	  minor3 = SIMD.Float32x4.mul(row0, tmp1);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor0 = SIMD.Float32x4.sub(minor0, SIMD.Float32x4.mul(row3, tmp1));
	  minor3 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor3);
	  minor3 = SIMD.Float32x4.swizzle(minor3, 2, 3, 0, 1);
	
	  tmp1   = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(row1, 2, 3, 0, 1), row3);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  row2   = SIMD.Float32x4.swizzle(row2, 2, 3, 0, 1);
	  minor0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row2, tmp1), minor0);
	  minor2 = SIMD.Float32x4.mul(row0, tmp1);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor0 = SIMD.Float32x4.sub(minor0, SIMD.Float32x4.mul(row2, tmp1));
	  minor2 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor2);
	  minor2 = SIMD.Float32x4.swizzle(minor2, 2, 3, 0, 1);
	
	  tmp1   = SIMD.Float32x4.mul(row0, row1);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor2);
	  minor3 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row2, tmp1), minor3);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor2 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row3, tmp1), minor2);
	  minor3 = SIMD.Float32x4.sub(minor3, SIMD.Float32x4.mul(row2, tmp1));
	
	  tmp1   = SIMD.Float32x4.mul(row0, row3);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor1 = SIMD.Float32x4.sub(minor1, SIMD.Float32x4.mul(row2, tmp1));
	  minor2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row1, tmp1), minor2);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row2, tmp1), minor1);
	  minor2 = SIMD.Float32x4.sub(minor2, SIMD.Float32x4.mul(row1, tmp1));
	
	  tmp1   = SIMD.Float32x4.mul(row0, row2);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor1);
	  minor3 = SIMD.Float32x4.sub(minor3, SIMD.Float32x4.mul(row1, tmp1));
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor1 = SIMD.Float32x4.sub(minor1, SIMD.Float32x4.mul(row3, tmp1));
	  minor3 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row1, tmp1), minor3);
	
	  SIMD.Float32x4.store(out, 0,  minor0);
	  SIMD.Float32x4.store(out, 4,  minor1);
	  SIMD.Float32x4.store(out, 8,  minor2);
	  SIMD.Float32x4.store(out, 12, minor3);
	  return out;
	};
	
	/**
	 * Calculates the adjugate of a mat4 using SIMD if available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	 mat4.adjoint = glMatrix.USE_SIMD ? mat4.SIMD.adjoint : mat4.scalar.adjoint;
	
	/**
	 * Calculates the determinant of a mat4
	 *
	 * @param {mat4} a the source matrix
	 * @returns {Number} determinant of a
	 */
	mat4.determinant = function (a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
	        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
	        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
	        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],
	
	        b00 = a00 * a11 - a01 * a10,
	        b01 = a00 * a12 - a02 * a10,
	        b02 = a00 * a13 - a03 * a10,
	        b03 = a01 * a12 - a02 * a11,
	        b04 = a01 * a13 - a03 * a11,
	        b05 = a02 * a13 - a03 * a12,
	        b06 = a20 * a31 - a21 * a30,
	        b07 = a20 * a32 - a22 * a30,
	        b08 = a20 * a33 - a23 * a30,
	        b09 = a21 * a32 - a22 * a31,
	        b10 = a21 * a33 - a23 * a31,
	        b11 = a22 * a33 - a23 * a32;
	
	    // Calculate the determinant
	    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	};
	
	/**
	 * Multiplies two mat4's explicitly using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the first operand, must be a Float32Array
	 * @param {mat4} b the second operand, must be a Float32Array
	 * @returns {mat4} out
	 */
	mat4.SIMD.multiply = function (out, a, b) {
	    var a0 = SIMD.Float32x4.load(a, 0);
	    var a1 = SIMD.Float32x4.load(a, 4);
	    var a2 = SIMD.Float32x4.load(a, 8);
	    var a3 = SIMD.Float32x4.load(a, 12);
	
	    var b0 = SIMD.Float32x4.load(b, 0);
	    var out0 = SIMD.Float32x4.add(
	                   SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0, 0, 0, 0, 0), a0),
	                   SIMD.Float32x4.add(
	                       SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0, 1, 1, 1, 1), a1),
	                       SIMD.Float32x4.add(
	                           SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0, 2, 2, 2, 2), a2),
	                           SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0, 3, 3, 3, 3), a3))));
	    SIMD.Float32x4.store(out, 0, out0);
	
	    var b1 = SIMD.Float32x4.load(b, 4);
	    var out1 = SIMD.Float32x4.add(
	                   SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1, 0, 0, 0, 0), a0),
	                   SIMD.Float32x4.add(
	                       SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1, 1, 1, 1, 1), a1),
	                       SIMD.Float32x4.add(
	                           SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1, 2, 2, 2, 2), a2),
	                           SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1, 3, 3, 3, 3), a3))));
	    SIMD.Float32x4.store(out, 4, out1);
	
	    var b2 = SIMD.Float32x4.load(b, 8);
	    var out2 = SIMD.Float32x4.add(
	                   SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2, 0, 0, 0, 0), a0),
	                   SIMD.Float32x4.add(
	                       SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2, 1, 1, 1, 1), a1),
	                       SIMD.Float32x4.add(
	                               SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2, 2, 2, 2, 2), a2),
	                               SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2, 3, 3, 3, 3), a3))));
	    SIMD.Float32x4.store(out, 8, out2);
	
	    var b3 = SIMD.Float32x4.load(b, 12);
	    var out3 = SIMD.Float32x4.add(
	                   SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3, 0, 0, 0, 0), a0),
	                   SIMD.Float32x4.add(
	                        SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3, 1, 1, 1, 1), a1),
	                        SIMD.Float32x4.add(
	                            SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3, 2, 2, 2, 2), a2),
	                            SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3, 3, 3, 3, 3), a3))));
	    SIMD.Float32x4.store(out, 12, out3);
	
	    return out;
	};
	
	/**
	 * Multiplies two mat4's explicitly not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @returns {mat4} out
	 */
	mat4.scalar.multiply = function (out, a, b) {
	    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
	        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
	        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
	        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
	
	    // Cache only the current line of the second matrix
	    var b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
	    out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
	    out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
	    out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
	    out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
	
	    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
	    out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
	    out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
	    out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
	    out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
	
	    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
	    out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
	    out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
	    out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
	    out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
	
	    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
	    out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
	    out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
	    out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
	    out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
	    return out;
	};
	
	/**
	 * Multiplies two mat4's using SIMD if available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @returns {mat4} out
	 */
	mat4.multiply = glMatrix.USE_SIMD ? mat4.SIMD.multiply : mat4.scalar.multiply;
	
	/**
	 * Alias for {@link mat4.multiply}
	 * @function
	 */
	mat4.mul = mat4.multiply;
	
	/**
	 * Translate a mat4 by the given vector not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to translate
	 * @param {vec3} v vector to translate by
	 * @returns {mat4} out
	 */
	mat4.scalar.translate = function (out, a, v) {
	    var x = v[0], y = v[1], z = v[2],
	        a00, a01, a02, a03,
	        a10, a11, a12, a13,
	        a20, a21, a22, a23;
	
	    if (a === out) {
	        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
	        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
	        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
	        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
	    } else {
	        a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
	        a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
	        a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];
	
	        out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
	        out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
	        out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;
	
	        out[12] = a00 * x + a10 * y + a20 * z + a[12];
	        out[13] = a01 * x + a11 * y + a21 * z + a[13];
	        out[14] = a02 * x + a12 * y + a22 * z + a[14];
	        out[15] = a03 * x + a13 * y + a23 * z + a[15];
	    }
	
	    return out;
	};
	
	/**
	 * Translates a mat4 by the given vector using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to translate
	 * @param {vec3} v vector to translate by
	 * @returns {mat4} out
	 */
	mat4.SIMD.translate = function (out, a, v) {
	    var a0 = SIMD.Float32x4.load(a, 0),
	        a1 = SIMD.Float32x4.load(a, 4),
	        a2 = SIMD.Float32x4.load(a, 8),
	        a3 = SIMD.Float32x4.load(a, 12),
	        vec = SIMD.Float32x4(v[0], v[1], v[2] , 0);
	
	    if (a !== out) {
	        out[0] = a[0]; out[1] = a[1]; out[2] = a[2]; out[3] = a[3];
	        out[4] = a[4]; out[5] = a[5]; out[6] = a[6]; out[7] = a[7];
	        out[8] = a[8]; out[9] = a[9]; out[10] = a[10]; out[11] = a[11];
	    }
	
	    a0 = SIMD.Float32x4.mul(a0, SIMD.Float32x4.swizzle(vec, 0, 0, 0, 0));
	    a1 = SIMD.Float32x4.mul(a1, SIMD.Float32x4.swizzle(vec, 1, 1, 1, 1));
	    a2 = SIMD.Float32x4.mul(a2, SIMD.Float32x4.swizzle(vec, 2, 2, 2, 2));
	
	    var t0 = SIMD.Float32x4.add(a0, SIMD.Float32x4.add(a1, SIMD.Float32x4.add(a2, a3)));
	    SIMD.Float32x4.store(out, 12, t0);
	
	    return out;
	};
	
	/**
	 * Translates a mat4 by the given vector using SIMD if available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to translate
	 * @param {vec3} v vector to translate by
	 * @returns {mat4} out
	 */
	mat4.translate = glMatrix.USE_SIMD ? mat4.SIMD.translate : mat4.scalar.translate;
	
	/**
	 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to scale
	 * @param {vec3} v the vec3 to scale the matrix by
	 * @returns {mat4} out
	 **/
	mat4.scalar.scale = function(out, a, v) {
	    var x = v[0], y = v[1], z = v[2];
	
	    out[0] = a[0] * x;
	    out[1] = a[1] * x;
	    out[2] = a[2] * x;
	    out[3] = a[3] * x;
	    out[4] = a[4] * y;
	    out[5] = a[5] * y;
	    out[6] = a[6] * y;
	    out[7] = a[7] * y;
	    out[8] = a[8] * z;
	    out[9] = a[9] * z;
	    out[10] = a[10] * z;
	    out[11] = a[11] * z;
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	    return out;
	};
	
	/**
	 * Scales the mat4 by the dimensions in the given vec3 using vectorization
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to scale
	 * @param {vec3} v the vec3 to scale the matrix by
	 * @returns {mat4} out
	 **/
	mat4.SIMD.scale = function(out, a, v) {
	    var a0, a1, a2;
	    var vec = SIMD.Float32x4(v[0], v[1], v[2], 0);
	
	    a0 = SIMD.Float32x4.load(a, 0);
	    SIMD.Float32x4.store(
	        out, 0, SIMD.Float32x4.mul(a0, SIMD.Float32x4.swizzle(vec, 0, 0, 0, 0)));
	
	    a1 = SIMD.Float32x4.load(a, 4);
	    SIMD.Float32x4.store(
	        out, 4, SIMD.Float32x4.mul(a1, SIMD.Float32x4.swizzle(vec, 1, 1, 1, 1)));
	
	    a2 = SIMD.Float32x4.load(a, 8);
	    SIMD.Float32x4.store(
	        out, 8, SIMD.Float32x4.mul(a2, SIMD.Float32x4.swizzle(vec, 2, 2, 2, 2)));
	
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	    return out;
	};
	
	/**
	 * Scales the mat4 by the dimensions in the given vec3 using SIMD if available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to scale
	 * @param {vec3} v the vec3 to scale the matrix by
	 * @returns {mat4} out
	 */
	mat4.scale = glMatrix.USE_SIMD ? mat4.SIMD.scale : mat4.scalar.scale;
	
	/**
	 * Rotates a mat4 by the given angle around the given axis
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @param {vec3} axis the axis to rotate around
	 * @returns {mat4} out
	 */
	mat4.rotate = function (out, a, rad, axis) {
	    var x = axis[0], y = axis[1], z = axis[2],
	        len = Math.sqrt(x * x + y * y + z * z),
	        s, c, t,
	        a00, a01, a02, a03,
	        a10, a11, a12, a13,
	        a20, a21, a22, a23,
	        b00, b01, b02,
	        b10, b11, b12,
	        b20, b21, b22;
	
	    if (Math.abs(len) < glMatrix.EPSILON) { return null; }
	
	    len = 1 / len;
	    x *= len;
	    y *= len;
	    z *= len;
	
	    s = Math.sin(rad);
	    c = Math.cos(rad);
	    t = 1 - c;
	
	    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
	    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
	    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];
	
	    // Construct the elements of the rotation matrix
	    b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
	    b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
	    b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;
	
	    // Perform rotation-specific matrix multiplication
	    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
	    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
	    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
	    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
	    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
	    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
	    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
	    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
	    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
	    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
	    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
	    out[11] = a03 * b20 + a13 * b21 + a23 * b22;
	
	    if (a !== out) { // If the source and destination differ, copy the unchanged last row
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the X axis not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.scalar.rotateX = function (out, a, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad),
	        a10 = a[4],
	        a11 = a[5],
	        a12 = a[6],
	        a13 = a[7],
	        a20 = a[8],
	        a21 = a[9],
	        a22 = a[10],
	        a23 = a[11];
	
	    if (a !== out) { // If the source and destination differ, copy the unchanged rows
	        out[0]  = a[0];
	        out[1]  = a[1];
	        out[2]  = a[2];
	        out[3]  = a[3];
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	
	    // Perform axis-specific matrix multiplication
	    out[4] = a10 * c + a20 * s;
	    out[5] = a11 * c + a21 * s;
	    out[6] = a12 * c + a22 * s;
	    out[7] = a13 * c + a23 * s;
	    out[8] = a20 * c - a10 * s;
	    out[9] = a21 * c - a11 * s;
	    out[10] = a22 * c - a12 * s;
	    out[11] = a23 * c - a13 * s;
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the X axis using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.SIMD.rotateX = function (out, a, rad) {
	    var s = SIMD.Float32x4.splat(Math.sin(rad)),
	        c = SIMD.Float32x4.splat(Math.cos(rad));
	
	    if (a !== out) { // If the source and destination differ, copy the unchanged rows
	      out[0]  = a[0];
	      out[1]  = a[1];
	      out[2]  = a[2];
	      out[3]  = a[3];
	      out[12] = a[12];
	      out[13] = a[13];
	      out[14] = a[14];
	      out[15] = a[15];
	    }
	
	    // Perform axis-specific matrix multiplication
	    var a_1 = SIMD.Float32x4.load(a, 4);
	    var a_2 = SIMD.Float32x4.load(a, 8);
	    SIMD.Float32x4.store(out, 4,
	                         SIMD.Float32x4.add(SIMD.Float32x4.mul(a_1, c), SIMD.Float32x4.mul(a_2, s)));
	    SIMD.Float32x4.store(out, 8,
	                         SIMD.Float32x4.sub(SIMD.Float32x4.mul(a_2, c), SIMD.Float32x4.mul(a_1, s)));
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the X axis using SIMD if availabe and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.rotateX = glMatrix.USE_SIMD ? mat4.SIMD.rotateX : mat4.scalar.rotateX;
	
	/**
	 * Rotates a matrix by the given angle around the Y axis not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.scalar.rotateY = function (out, a, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad),
	        a00 = a[0],
	        a01 = a[1],
	        a02 = a[2],
	        a03 = a[3],
	        a20 = a[8],
	        a21 = a[9],
	        a22 = a[10],
	        a23 = a[11];
	
	    if (a !== out) { // If the source and destination differ, copy the unchanged rows
	        out[4]  = a[4];
	        out[5]  = a[5];
	        out[6]  = a[6];
	        out[7]  = a[7];
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	
	    // Perform axis-specific matrix multiplication
	    out[0] = a00 * c - a20 * s;
	    out[1] = a01 * c - a21 * s;
	    out[2] = a02 * c - a22 * s;
	    out[3] = a03 * c - a23 * s;
	    out[8] = a00 * s + a20 * c;
	    out[9] = a01 * s + a21 * c;
	    out[10] = a02 * s + a22 * c;
	    out[11] = a03 * s + a23 * c;
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the Y axis using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.SIMD.rotateY = function (out, a, rad) {
	    var s = SIMD.Float32x4.splat(Math.sin(rad)),
	        c = SIMD.Float32x4.splat(Math.cos(rad));
	
	    if (a !== out) { // If the source and destination differ, copy the unchanged rows
	        out[4]  = a[4];
	        out[5]  = a[5];
	        out[6]  = a[6];
	        out[7]  = a[7];
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	
	    // Perform axis-specific matrix multiplication
	    var a_0 = SIMD.Float32x4.load(a, 0);
	    var a_2 = SIMD.Float32x4.load(a, 8);
	    SIMD.Float32x4.store(out, 0,
	                         SIMD.Float32x4.sub(SIMD.Float32x4.mul(a_0, c), SIMD.Float32x4.mul(a_2, s)));
	    SIMD.Float32x4.store(out, 8,
	                         SIMD.Float32x4.add(SIMD.Float32x4.mul(a_0, s), SIMD.Float32x4.mul(a_2, c)));
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the Y axis if SIMD available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	 mat4.rotateY = glMatrix.USE_SIMD ? mat4.SIMD.rotateY : mat4.scalar.rotateY;
	
	/**
	 * Rotates a matrix by the given angle around the Z axis not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.scalar.rotateZ = function (out, a, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad),
	        a00 = a[0],
	        a01 = a[1],
	        a02 = a[2],
	        a03 = a[3],
	        a10 = a[4],
	        a11 = a[5],
	        a12 = a[6],
	        a13 = a[7];
	
	    if (a !== out) { // If the source and destination differ, copy the unchanged last row
	        out[8]  = a[8];
	        out[9]  = a[9];
	        out[10] = a[10];
	        out[11] = a[11];
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	
	    // Perform axis-specific matrix multiplication
	    out[0] = a00 * c + a10 * s;
	    out[1] = a01 * c + a11 * s;
	    out[2] = a02 * c + a12 * s;
	    out[3] = a03 * c + a13 * s;
	    out[4] = a10 * c - a00 * s;
	    out[5] = a11 * c - a01 * s;
	    out[6] = a12 * c - a02 * s;
	    out[7] = a13 * c - a03 * s;
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the Z axis using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.SIMD.rotateZ = function (out, a, rad) {
	    var s = SIMD.Float32x4.splat(Math.sin(rad)),
	        c = SIMD.Float32x4.splat(Math.cos(rad));
	
	    if (a !== out) { // If the source and destination differ, copy the unchanged last row
	        out[8]  = a[8];
	        out[9]  = a[9];
	        out[10] = a[10];
	        out[11] = a[11];
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	
	    // Perform axis-specific matrix multiplication
	    var a_0 = SIMD.Float32x4.load(a, 0);
	    var a_1 = SIMD.Float32x4.load(a, 4);
	    SIMD.Float32x4.store(out, 0,
	                         SIMD.Float32x4.add(SIMD.Float32x4.mul(a_0, c), SIMD.Float32x4.mul(a_1, s)));
	    SIMD.Float32x4.store(out, 4,
	                         SIMD.Float32x4.sub(SIMD.Float32x4.mul(a_1, c), SIMD.Float32x4.mul(a_0, s)));
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the Z axis if SIMD available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	 mat4.rotateZ = glMatrix.USE_SIMD ? mat4.SIMD.rotateZ : mat4.scalar.rotateZ;
	
	/**
	 * Creates a matrix from a vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, dest, vec);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {vec3} v Translation vector
	 * @returns {mat4} out
	 */
	mat4.fromTranslation = function(out, v) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = 1;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 1;
	    out[11] = 0;
	    out[12] = v[0];
	    out[13] = v[1];
	    out[14] = v[2];
	    out[15] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.scale(dest, dest, vec);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {vec3} v Scaling vector
	 * @returns {mat4} out
	 */
	mat4.fromScaling = function(out, v) {
	    out[0] = v[0];
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = v[1];
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = v[2];
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from a given angle around a given axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotate(dest, dest, rad, axis);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @param {vec3} axis the axis to rotate around
	 * @returns {mat4} out
	 */
	mat4.fromRotation = function(out, rad, axis) {
	    var x = axis[0], y = axis[1], z = axis[2],
	        len = Math.sqrt(x * x + y * y + z * z),
	        s, c, t;
	
	    if (Math.abs(len) < glMatrix.EPSILON) { return null; }
	
	    len = 1 / len;
	    x *= len;
	    y *= len;
	    z *= len;
	
	    s = Math.sin(rad);
	    c = Math.cos(rad);
	    t = 1 - c;
	
	    // Perform rotation-specific matrix multiplication
	    out[0] = x * x * t + c;
	    out[1] = y * x * t + z * s;
	    out[2] = z * x * t - y * s;
	    out[3] = 0;
	    out[4] = x * y * t - z * s;
	    out[5] = y * y * t + c;
	    out[6] = z * y * t + x * s;
	    out[7] = 0;
	    out[8] = x * z * t + y * s;
	    out[9] = y * z * t - x * s;
	    out[10] = z * z * t + c;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from the given angle around the X axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotateX(dest, dest, rad);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.fromXRotation = function(out, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad);
	
	    // Perform axis-specific matrix multiplication
	    out[0]  = 1;
	    out[1]  = 0;
	    out[2]  = 0;
	    out[3]  = 0;
	    out[4] = 0;
	    out[5] = c;
	    out[6] = s;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = -s;
	    out[10] = c;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from the given angle around the Y axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotateY(dest, dest, rad);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.fromYRotation = function(out, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad);
	
	    // Perform axis-specific matrix multiplication
	    out[0]  = c;
	    out[1]  = 0;
	    out[2]  = -s;
	    out[3]  = 0;
	    out[4] = 0;
	    out[5] = 1;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = s;
	    out[9] = 0;
	    out[10] = c;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from the given angle around the Z axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotateZ(dest, dest, rad);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.fromZRotation = function(out, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad);
	
	    // Perform axis-specific matrix multiplication
	    out[0]  = c;
	    out[1]  = s;
	    out[2]  = 0;
	    out[3]  = 0;
	    out[4] = -s;
	    out[5] = c;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 1;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from a quaternion rotation and vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, vec);
	 *     var quatMat = mat4.create();
	 *     quat4.toMat4(quat, quatMat);
	 *     mat4.multiply(dest, quatMat);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat4} q Rotation quaternion
	 * @param {vec3} v Translation vector
	 * @returns {mat4} out
	 */
	mat4.fromRotationTranslation = function (out, q, v) {
	    // Quaternion math
	    var x = q[0], y = q[1], z = q[2], w = q[3],
	        x2 = x + x,
	        y2 = y + y,
	        z2 = z + z,
	
	        xx = x * x2,
	        xy = x * y2,
	        xz = x * z2,
	        yy = y * y2,
	        yz = y * z2,
	        zz = z * z2,
	        wx = w * x2,
	        wy = w * y2,
	        wz = w * z2;
	
	    out[0] = 1 - (yy + zz);
	    out[1] = xy + wz;
	    out[2] = xz - wy;
	    out[3] = 0;
	    out[4] = xy - wz;
	    out[5] = 1 - (xx + zz);
	    out[6] = yz + wx;
	    out[7] = 0;
	    out[8] = xz + wy;
	    out[9] = yz - wx;
	    out[10] = 1 - (xx + yy);
	    out[11] = 0;
	    out[12] = v[0];
	    out[13] = v[1];
	    out[14] = v[2];
	    out[15] = 1;
	
	    return out;
	};
	
	/**
	 * Returns the translation vector component of a transformation
	 *  matrix. If a matrix is built with fromRotationTranslation,
	 *  the returned vector will be the same as the translation vector
	 *  originally supplied.
	 * @param  {vec3} out Vector to receive translation component
	 * @param  {mat4} mat Matrix to be decomposed (input)
	 * @return {vec3} out
	 */
	mat4.getTranslation = function (out, mat) {
	  out[0] = mat[12];
	  out[1] = mat[13];
	  out[2] = mat[14];
	
	  return out;
	};
	
	/**
	 * Returns a quaternion representing the rotational component
	 *  of a transformation matrix. If a matrix is built with
	 *  fromRotationTranslation, the returned quaternion will be the
	 *  same as the quaternion originally supplied.
	 * @param {quat} out Quaternion to receive the rotation component
	 * @param {mat4} mat Matrix to be decomposed (input)
	 * @return {quat} out
	 */
	mat4.getRotation = function (out, mat) {
	  // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
	  var trace = mat[0] + mat[5] + mat[10];
	  var S = 0;
	
	  if (trace > 0) { 
	    S = Math.sqrt(trace + 1.0) * 2;
	    out[3] = 0.25 * S;
	    out[0] = (mat[6] - mat[9]) / S;
	    out[1] = (mat[8] - mat[2]) / S; 
	    out[2] = (mat[1] - mat[4]) / S; 
	  } else if ((mat[0] > mat[5])&(mat[0] > mat[10])) { 
	    S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
	    out[3] = (mat[6] - mat[9]) / S;
	    out[0] = 0.25 * S;
	    out[1] = (mat[1] + mat[4]) / S; 
	    out[2] = (mat[8] + mat[2]) / S; 
	  } else if (mat[5] > mat[10]) { 
	    S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
	    out[3] = (mat[8] - mat[2]) / S;
	    out[0] = (mat[1] + mat[4]) / S; 
	    out[1] = 0.25 * S;
	    out[2] = (mat[6] + mat[9]) / S; 
	  } else { 
	    S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
	    out[3] = (mat[1] - mat[4]) / S;
	    out[0] = (mat[8] + mat[2]) / S;
	    out[1] = (mat[6] + mat[9]) / S;
	    out[2] = 0.25 * S;
	  }
	
	  return out;
	};
	
	/**
	 * Creates a matrix from a quaternion rotation, vector translation and vector scale
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, vec);
	 *     var quatMat = mat4.create();
	 *     quat4.toMat4(quat, quatMat);
	 *     mat4.multiply(dest, quatMat);
	 *     mat4.scale(dest, scale)
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat4} q Rotation quaternion
	 * @param {vec3} v Translation vector
	 * @param {vec3} s Scaling vector
	 * @returns {mat4} out
	 */
	mat4.fromRotationTranslationScale = function (out, q, v, s) {
	    // Quaternion math
	    var x = q[0], y = q[1], z = q[2], w = q[3],
	        x2 = x + x,
	        y2 = y + y,
	        z2 = z + z,
	
	        xx = x * x2,
	        xy = x * y2,
	        xz = x * z2,
	        yy = y * y2,
	        yz = y * z2,
	        zz = z * z2,
	        wx = w * x2,
	        wy = w * y2,
	        wz = w * z2,
	        sx = s[0],
	        sy = s[1],
	        sz = s[2];
	
	    out[0] = (1 - (yy + zz)) * sx;
	    out[1] = (xy + wz) * sx;
	    out[2] = (xz - wy) * sx;
	    out[3] = 0;
	    out[4] = (xy - wz) * sy;
	    out[5] = (1 - (xx + zz)) * sy;
	    out[6] = (yz + wx) * sy;
	    out[7] = 0;
	    out[8] = (xz + wy) * sz;
	    out[9] = (yz - wx) * sz;
	    out[10] = (1 - (xx + yy)) * sz;
	    out[11] = 0;
	    out[12] = v[0];
	    out[13] = v[1];
	    out[14] = v[2];
	    out[15] = 1;
	
	    return out;
	};
	
	/**
	 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, vec);
	 *     mat4.translate(dest, origin);
	 *     var quatMat = mat4.create();
	 *     quat4.toMat4(quat, quatMat);
	 *     mat4.multiply(dest, quatMat);
	 *     mat4.scale(dest, scale)
	 *     mat4.translate(dest, negativeOrigin);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat4} q Rotation quaternion
	 * @param {vec3} v Translation vector
	 * @param {vec3} s Scaling vector
	 * @param {vec3} o The origin vector around which to scale and rotate
	 * @returns {mat4} out
	 */
	mat4.fromRotationTranslationScaleOrigin = function (out, q, v, s, o) {
	  // Quaternion math
	  var x = q[0], y = q[1], z = q[2], w = q[3],
	      x2 = x + x,
	      y2 = y + y,
	      z2 = z + z,
	
	      xx = x * x2,
	      xy = x * y2,
	      xz = x * z2,
	      yy = y * y2,
	      yz = y * z2,
	      zz = z * z2,
	      wx = w * x2,
	      wy = w * y2,
	      wz = w * z2,
	
	      sx = s[0],
	      sy = s[1],
	      sz = s[2],
	
	      ox = o[0],
	      oy = o[1],
	      oz = o[2];
	
	  out[0] = (1 - (yy + zz)) * sx;
	  out[1] = (xy + wz) * sx;
	  out[2] = (xz - wy) * sx;
	  out[3] = 0;
	  out[4] = (xy - wz) * sy;
	  out[5] = (1 - (xx + zz)) * sy;
	  out[6] = (yz + wx) * sy;
	  out[7] = 0;
	  out[8] = (xz + wy) * sz;
	  out[9] = (yz - wx) * sz;
	  out[10] = (1 - (xx + yy)) * sz;
	  out[11] = 0;
	  out[12] = v[0] + ox - (out[0] * ox + out[4] * oy + out[8] * oz);
	  out[13] = v[1] + oy - (out[1] * ox + out[5] * oy + out[9] * oz);
	  out[14] = v[2] + oz - (out[2] * ox + out[6] * oy + out[10] * oz);
	  out[15] = 1;
	
	  return out;
	};
	
	/**
	 * Calculates a 4x4 matrix from the given quaternion
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat} q Quaternion to create matrix from
	 *
	 * @returns {mat4} out
	 */
	mat4.fromQuat = function (out, q) {
	    var x = q[0], y = q[1], z = q[2], w = q[3],
	        x2 = x + x,
	        y2 = y + y,
	        z2 = z + z,
	
	        xx = x * x2,
	        yx = y * x2,
	        yy = y * y2,
	        zx = z * x2,
	        zy = z * y2,
	        zz = z * z2,
	        wx = w * x2,
	        wy = w * y2,
	        wz = w * z2;
	
	    out[0] = 1 - yy - zz;
	    out[1] = yx + wz;
	    out[2] = zx - wy;
	    out[3] = 0;
	
	    out[4] = yx - wz;
	    out[5] = 1 - xx - zz;
	    out[6] = zy + wx;
	    out[7] = 0;
	
	    out[8] = zx + wy;
	    out[9] = zy - wx;
	    out[10] = 1 - xx - yy;
	    out[11] = 0;
	
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	
	    return out;
	};
	
	/**
	 * Generates a frustum matrix with the given bounds
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {Number} left Left bound of the frustum
	 * @param {Number} right Right bound of the frustum
	 * @param {Number} bottom Bottom bound of the frustum
	 * @param {Number} top Top bound of the frustum
	 * @param {Number} near Near bound of the frustum
	 * @param {Number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	mat4.frustum = function (out, left, right, bottom, top, near, far) {
	    var rl = 1 / (right - left),
	        tb = 1 / (top - bottom),
	        nf = 1 / (near - far);
	    out[0] = (near * 2) * rl;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = (near * 2) * tb;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = (right + left) * rl;
	    out[9] = (top + bottom) * tb;
	    out[10] = (far + near) * nf;
	    out[11] = -1;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = (far * near * 2) * nf;
	    out[15] = 0;
	    return out;
	};
	
	/**
	 * Generates a perspective projection matrix with the given bounds
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {number} fovy Vertical field of view in radians
	 * @param {number} aspect Aspect ratio. typically viewport width/height
	 * @param {number} near Near bound of the frustum
	 * @param {number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	mat4.perspective = function (out, fovy, aspect, near, far) {
	    var f = 1.0 / Math.tan(fovy / 2),
	        nf = 1 / (near - far);
	    out[0] = f / aspect;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = f;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = (far + near) * nf;
	    out[11] = -1;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = (2 * far * near) * nf;
	    out[15] = 0;
	    return out;
	};
	
	/**
	 * Generates a perspective projection matrix with the given field of view.
	 * This is primarily useful for generating projection matrices to be used
	 * with the still experiemental WebVR API.
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
	 * @param {number} near Near bound of the frustum
	 * @param {number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	mat4.perspectiveFromFieldOfView = function (out, fov, near, far) {
	    var upTan = Math.tan(fov.upDegrees * Math.PI/180.0),
	        downTan = Math.tan(fov.downDegrees * Math.PI/180.0),
	        leftTan = Math.tan(fov.leftDegrees * Math.PI/180.0),
	        rightTan = Math.tan(fov.rightDegrees * Math.PI/180.0),
	        xScale = 2.0 / (leftTan + rightTan),
	        yScale = 2.0 / (upTan + downTan);
	
	    out[0] = xScale;
	    out[1] = 0.0;
	    out[2] = 0.0;
	    out[3] = 0.0;
	    out[4] = 0.0;
	    out[5] = yScale;
	    out[6] = 0.0;
	    out[7] = 0.0;
	    out[8] = -((leftTan - rightTan) * xScale * 0.5);
	    out[9] = ((upTan - downTan) * yScale * 0.5);
	    out[10] = far / (near - far);
	    out[11] = -1.0;
	    out[12] = 0.0;
	    out[13] = 0.0;
	    out[14] = (far * near) / (near - far);
	    out[15] = 0.0;
	    return out;
	}
	
	/**
	 * Generates a orthogonal projection matrix with the given bounds
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {number} left Left bound of the frustum
	 * @param {number} right Right bound of the frustum
	 * @param {number} bottom Bottom bound of the frustum
	 * @param {number} top Top bound of the frustum
	 * @param {number} near Near bound of the frustum
	 * @param {number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	mat4.ortho = function (out, left, right, bottom, top, near, far) {
	    var lr = 1 / (left - right),
	        bt = 1 / (bottom - top),
	        nf = 1 / (near - far);
	    out[0] = -2 * lr;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = -2 * bt;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 2 * nf;
	    out[11] = 0;
	    out[12] = (left + right) * lr;
	    out[13] = (top + bottom) * bt;
	    out[14] = (far + near) * nf;
	    out[15] = 1;
	    return out;
	};
	
	/**
	 * Generates a look-at matrix with the given eye position, focal point, and up axis
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {vec3} eye Position of the viewer
	 * @param {vec3} center Point the viewer is looking at
	 * @param {vec3} up vec3 pointing up
	 * @returns {mat4} out
	 */
	mat4.lookAt = function (out, eye, center, up) {
	    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
	        eyex = eye[0],
	        eyey = eye[1],
	        eyez = eye[2],
	        upx = up[0],
	        upy = up[1],
	        upz = up[2],
	        centerx = center[0],
	        centery = center[1],
	        centerz = center[2];
	
	    if (Math.abs(eyex - centerx) < glMatrix.EPSILON &&
	        Math.abs(eyey - centery) < glMatrix.EPSILON &&
	        Math.abs(eyez - centerz) < glMatrix.EPSILON) {
	        return mat4.identity(out);
	    }
	
	    z0 = eyex - centerx;
	    z1 = eyey - centery;
	    z2 = eyez - centerz;
	
	    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
	    z0 *= len;
	    z1 *= len;
	    z2 *= len;
	
	    x0 = upy * z2 - upz * z1;
	    x1 = upz * z0 - upx * z2;
	    x2 = upx * z1 - upy * z0;
	    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
	    if (!len) {
	        x0 = 0;
	        x1 = 0;
	        x2 = 0;
	    } else {
	        len = 1 / len;
	        x0 *= len;
	        x1 *= len;
	        x2 *= len;
	    }
	
	    y0 = z1 * x2 - z2 * x1;
	    y1 = z2 * x0 - z0 * x2;
	    y2 = z0 * x1 - z1 * x0;
	
	    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
	    if (!len) {
	        y0 = 0;
	        y1 = 0;
	        y2 = 0;
	    } else {
	        len = 1 / len;
	        y0 *= len;
	        y1 *= len;
	        y2 *= len;
	    }
	
	    out[0] = x0;
	    out[1] = y0;
	    out[2] = z0;
	    out[3] = 0;
	    out[4] = x1;
	    out[5] = y1;
	    out[6] = z1;
	    out[7] = 0;
	    out[8] = x2;
	    out[9] = y2;
	    out[10] = z2;
	    out[11] = 0;
	    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
	    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
	    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
	    out[15] = 1;
	
	    return out;
	};
	
	/**
	 * Returns a string representation of a mat4
	 *
	 * @param {mat4} mat matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	mat4.str = function (a) {
	    return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
	                    a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' +
	                    a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' +
	                    a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
	};
	
	/**
	 * Returns Frobenius norm of a mat4
	 *
	 * @param {mat4} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	mat4.frob = function (a) {
	    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2) ))
	};
	
	/**
	 * Adds two mat4's
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @returns {mat4} out
	 */
	mat4.add = function(out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    out[2] = a[2] + b[2];
	    out[3] = a[3] + b[3];
	    out[4] = a[4] + b[4];
	    out[5] = a[5] + b[5];
	    out[6] = a[6] + b[6];
	    out[7] = a[7] + b[7];
	    out[8] = a[8] + b[8];
	    out[9] = a[9] + b[9];
	    out[10] = a[10] + b[10];
	    out[11] = a[11] + b[11];
	    out[12] = a[12] + b[12];
	    out[13] = a[13] + b[13];
	    out[14] = a[14] + b[14];
	    out[15] = a[15] + b[15];
	    return out;
	};
	
	/**
	 * Subtracts matrix b from matrix a
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @returns {mat4} out
	 */
	mat4.subtract = function(out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    out[2] = a[2] - b[2];
	    out[3] = a[3] - b[3];
	    out[4] = a[4] - b[4];
	    out[5] = a[5] - b[5];
	    out[6] = a[6] - b[6];
	    out[7] = a[7] - b[7];
	    out[8] = a[8] - b[8];
	    out[9] = a[9] - b[9];
	    out[10] = a[10] - b[10];
	    out[11] = a[11] - b[11];
	    out[12] = a[12] - b[12];
	    out[13] = a[13] - b[13];
	    out[14] = a[14] - b[14];
	    out[15] = a[15] - b[15];
	    return out;
	};
	
	/**
	 * Alias for {@link mat4.subtract}
	 * @function
	 */
	mat4.sub = mat4.subtract;
	
	/**
	 * Multiply each element of the matrix by a scalar.
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to scale
	 * @param {Number} b amount to scale the matrix's elements by
	 * @returns {mat4} out
	 */
	mat4.multiplyScalar = function(out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    out[2] = a[2] * b;
	    out[3] = a[3] * b;
	    out[4] = a[4] * b;
	    out[5] = a[5] * b;
	    out[6] = a[6] * b;
	    out[7] = a[7] * b;
	    out[8] = a[8] * b;
	    out[9] = a[9] * b;
	    out[10] = a[10] * b;
	    out[11] = a[11] * b;
	    out[12] = a[12] * b;
	    out[13] = a[13] * b;
	    out[14] = a[14] * b;
	    out[15] = a[15] * b;
	    return out;
	};
	
	/**
	 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
	 *
	 * @param {mat4} out the receiving vector
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @param {Number} scale the amount to scale b's elements by before adding
	 * @returns {mat4} out
	 */
	mat4.multiplyScalarAndAdd = function(out, a, b, scale) {
	    out[0] = a[0] + (b[0] * scale);
	    out[1] = a[1] + (b[1] * scale);
	    out[2] = a[2] + (b[2] * scale);
	    out[3] = a[3] + (b[3] * scale);
	    out[4] = a[4] + (b[4] * scale);
	    out[5] = a[5] + (b[5] * scale);
	    out[6] = a[6] + (b[6] * scale);
	    out[7] = a[7] + (b[7] * scale);
	    out[8] = a[8] + (b[8] * scale);
	    out[9] = a[9] + (b[9] * scale);
	    out[10] = a[10] + (b[10] * scale);
	    out[11] = a[11] + (b[11] * scale);
	    out[12] = a[12] + (b[12] * scale);
	    out[13] = a[13] + (b[13] * scale);
	    out[14] = a[14] + (b[14] * scale);
	    out[15] = a[15] + (b[15] * scale);
	    return out;
	};
	
	/**
	 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {mat4} a The first matrix.
	 * @param {mat4} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	mat4.exactEquals = function (a, b) {
	    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && 
	           a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && 
	           a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] &&
	           a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
	};
	
	/**
	 * Returns whether or not the matrices have approximately the same elements in the same position.
	 *
	 * @param {mat4} a The first matrix.
	 * @param {mat4} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	mat4.equals = function (a, b) {
	    var a0  = a[0],  a1  = a[1],  a2  = a[2],  a3  = a[3],
	        a4  = a[4],  a5  = a[5],  a6  = a[6],  a7  = a[7], 
	        a8  = a[8],  a9  = a[9],  a10 = a[10], a11 = a[11], 
	        a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];
	
	    var b0  = b[0],  b1  = b[1],  b2  = b[2],  b3  = b[3],
	        b4  = b[4],  b5  = b[5],  b6  = b[6],  b7  = b[7], 
	        b8  = b[8],  b9  = b[9],  b10 = b[10], b11 = b[11], 
	        b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
	
	    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
	            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
	            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
	            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
	            Math.abs(a4 - b4) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
	            Math.abs(a5 - b5) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
	            Math.abs(a6 - b6) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
	            Math.abs(a7 - b7) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
	            Math.abs(a8 - b8) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a8), Math.abs(b8)) &&
	            Math.abs(a9 - b9) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a9), Math.abs(b9)) &&
	            Math.abs(a10 - b10) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a10), Math.abs(b10)) &&
	            Math.abs(a11 - b11) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a11), Math.abs(b11)) &&
	            Math.abs(a12 - b12) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a12), Math.abs(b12)) &&
	            Math.abs(a13 - b13) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a13), Math.abs(b13)) &&
	            Math.abs(a14 - b14) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a14), Math.abs(b14)) &&
	            Math.abs(a15 - b15) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a15), Math.abs(b15)));
	};
	
	
	
	module.exports = mat4;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(7);
	var mat3 = __webpack_require__(10);
	var vec3 = __webpack_require__(13);
	var vec4 = __webpack_require__(14);
	
	/**
	 * @class Quaternion
	 * @name quat
	 */
	var quat = {};
	
	/**
	 * Creates a new identity quat
	 *
	 * @returns {quat} a new quaternion
	 */
	quat.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = 0;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    return out;
	};
	
	/**
	 * Sets a quaternion to represent the shortest rotation from one
	 * vector to another.
	 *
	 * Both vectors are assumed to be unit length.
	 *
	 * @param {quat} out the receiving quaternion.
	 * @param {vec3} a the initial vector
	 * @param {vec3} b the destination vector
	 * @returns {quat} out
	 */
	quat.rotationTo = (function() {
	    var tmpvec3 = vec3.create();
	    var xUnitVec3 = vec3.fromValues(1,0,0);
	    var yUnitVec3 = vec3.fromValues(0,1,0);
	
	    return function(out, a, b) {
	        var dot = vec3.dot(a, b);
	        if (dot < -0.999999) {
	            vec3.cross(tmpvec3, xUnitVec3, a);
	            if (vec3.length(tmpvec3) < 0.000001)
	                vec3.cross(tmpvec3, yUnitVec3, a);
	            vec3.normalize(tmpvec3, tmpvec3);
	            quat.setAxisAngle(out, tmpvec3, Math.PI);
	            return out;
	        } else if (dot > 0.999999) {
	            out[0] = 0;
	            out[1] = 0;
	            out[2] = 0;
	            out[3] = 1;
	            return out;
	        } else {
	            vec3.cross(tmpvec3, a, b);
	            out[0] = tmpvec3[0];
	            out[1] = tmpvec3[1];
	            out[2] = tmpvec3[2];
	            out[3] = 1 + dot;
	            return quat.normalize(out, out);
	        }
	    };
	})();
	
	/**
	 * Sets the specified quaternion with values corresponding to the given
	 * axes. Each axis is a vec3 and is expected to be unit length and
	 * perpendicular to all other specified axes.
	 *
	 * @param {vec3} view  the vector representing the viewing direction
	 * @param {vec3} right the vector representing the local "right" direction
	 * @param {vec3} up    the vector representing the local "up" direction
	 * @returns {quat} out
	 */
	quat.setAxes = (function() {
	    var matr = mat3.create();
	
	    return function(out, view, right, up) {
	        matr[0] = right[0];
	        matr[3] = right[1];
	        matr[6] = right[2];
	
	        matr[1] = up[0];
	        matr[4] = up[1];
	        matr[7] = up[2];
	
	        matr[2] = -view[0];
	        matr[5] = -view[1];
	        matr[8] = -view[2];
	
	        return quat.normalize(out, quat.fromMat3(out, matr));
	    };
	})();
	
	/**
	 * Creates a new quat initialized with values from an existing quaternion
	 *
	 * @param {quat} a quaternion to clone
	 * @returns {quat} a new quaternion
	 * @function
	 */
	quat.clone = vec4.clone;
	
	/**
	 * Creates a new quat initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @param {Number} w W component
	 * @returns {quat} a new quaternion
	 * @function
	 */
	quat.fromValues = vec4.fromValues;
	
	/**
	 * Copy the values from one quat to another
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the source quaternion
	 * @returns {quat} out
	 * @function
	 */
	quat.copy = vec4.copy;
	
	/**
	 * Set the components of a quat to the given values
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @param {Number} w W component
	 * @returns {quat} out
	 * @function
	 */
	quat.set = vec4.set;
	
	/**
	 * Set a quat to the identity quaternion
	 *
	 * @param {quat} out the receiving quaternion
	 * @returns {quat} out
	 */
	quat.identity = function(out) {
	    out[0] = 0;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    return out;
	};
	
	/**
	 * Sets a quat from the given angle and rotation axis,
	 * then returns it.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {vec3} axis the axis around which to rotate
	 * @param {Number} rad the angle in radians
	 * @returns {quat} out
	 **/
	quat.setAxisAngle = function(out, axis, rad) {
	    rad = rad * 0.5;
	    var s = Math.sin(rad);
	    out[0] = s * axis[0];
	    out[1] = s * axis[1];
	    out[2] = s * axis[2];
	    out[3] = Math.cos(rad);
	    return out;
	};
	
	/**
	 * Gets the rotation axis and angle for a given
	 *  quaternion. If a quaternion is created with
	 *  setAxisAngle, this method will return the same
	 *  values as providied in the original parameter list
	 *  OR functionally equivalent values.
	 * Example: The quaternion formed by axis [0, 0, 1] and
	 *  angle -90 is the same as the quaternion formed by
	 *  [0, 0, 1] and 270. This method favors the latter.
	 * @param  {vec3} out_axis  Vector receiving the axis of rotation
	 * @param  {quat} q     Quaternion to be decomposed
	 * @return {Number}     Angle, in radians, of the rotation
	 */
	quat.getAxisAngle = function(out_axis, q) {
	    var rad = Math.acos(q[3]) * 2.0;
	    var s = Math.sin(rad / 2.0);
	    if (s != 0.0) {
	        out_axis[0] = q[0] / s;
	        out_axis[1] = q[1] / s;
	        out_axis[2] = q[2] / s;
	    } else {
	        // If s is zero, return any axis (no rotation - axis does not matter)
	        out_axis[0] = 1;
	        out_axis[1] = 0;
	        out_axis[2] = 0;
	    }
	    return rad;
	};
	
	/**
	 * Adds two quat's
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @returns {quat} out
	 * @function
	 */
	quat.add = vec4.add;
	
	/**
	 * Multiplies two quat's
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @returns {quat} out
	 */
	quat.multiply = function(out, a, b) {
	    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
	        bx = b[0], by = b[1], bz = b[2], bw = b[3];
	
	    out[0] = ax * bw + aw * bx + ay * bz - az * by;
	    out[1] = ay * bw + aw * by + az * bx - ax * bz;
	    out[2] = az * bw + aw * bz + ax * by - ay * bx;
	    out[3] = aw * bw - ax * bx - ay * by - az * bz;
	    return out;
	};
	
	/**
	 * Alias for {@link quat.multiply}
	 * @function
	 */
	quat.mul = quat.multiply;
	
	/**
	 * Scales a quat by a scalar number
	 *
	 * @param {quat} out the receiving vector
	 * @param {quat} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {quat} out
	 * @function
	 */
	quat.scale = vec4.scale;
	
	/**
	 * Rotates a quaternion by the given angle about the X axis
	 *
	 * @param {quat} out quat receiving operation result
	 * @param {quat} a quat to rotate
	 * @param {number} rad angle (in radians) to rotate
	 * @returns {quat} out
	 */
	quat.rotateX = function (out, a, rad) {
	    rad *= 0.5; 
	
	    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
	        bx = Math.sin(rad), bw = Math.cos(rad);
	
	    out[0] = ax * bw + aw * bx;
	    out[1] = ay * bw + az * bx;
	    out[2] = az * bw - ay * bx;
	    out[3] = aw * bw - ax * bx;
	    return out;
	};
	
	/**
	 * Rotates a quaternion by the given angle about the Y axis
	 *
	 * @param {quat} out quat receiving operation result
	 * @param {quat} a quat to rotate
	 * @param {number} rad angle (in radians) to rotate
	 * @returns {quat} out
	 */
	quat.rotateY = function (out, a, rad) {
	    rad *= 0.5; 
	
	    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
	        by = Math.sin(rad), bw = Math.cos(rad);
	
	    out[0] = ax * bw - az * by;
	    out[1] = ay * bw + aw * by;
	    out[2] = az * bw + ax * by;
	    out[3] = aw * bw - ay * by;
	    return out;
	};
	
	/**
	 * Rotates a quaternion by the given angle about the Z axis
	 *
	 * @param {quat} out quat receiving operation result
	 * @param {quat} a quat to rotate
	 * @param {number} rad angle (in radians) to rotate
	 * @returns {quat} out
	 */
	quat.rotateZ = function (out, a, rad) {
	    rad *= 0.5; 
	
	    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
	        bz = Math.sin(rad), bw = Math.cos(rad);
	
	    out[0] = ax * bw + ay * bz;
	    out[1] = ay * bw - ax * bz;
	    out[2] = az * bw + aw * bz;
	    out[3] = aw * bw - az * bz;
	    return out;
	};
	
	/**
	 * Calculates the W component of a quat from the X, Y, and Z components.
	 * Assumes that quaternion is 1 unit in length.
	 * Any existing W component will be ignored.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a quat to calculate W component of
	 * @returns {quat} out
	 */
	quat.calculateW = function (out, a) {
	    var x = a[0], y = a[1], z = a[2];
	
	    out[0] = x;
	    out[1] = y;
	    out[2] = z;
	    out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
	    return out;
	};
	
	/**
	 * Calculates the dot product of two quat's
	 *
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @returns {Number} dot product of a and b
	 * @function
	 */
	quat.dot = vec4.dot;
	
	/**
	 * Performs a linear interpolation between two quat's
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {quat} out
	 * @function
	 */
	quat.lerp = vec4.lerp;
	
	/**
	 * Performs a spherical linear interpolation between two quat
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {quat} out
	 */
	quat.slerp = function (out, a, b, t) {
	    // benchmarks:
	    //    http://jsperf.com/quaternion-slerp-implementations
	
	    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
	        bx = b[0], by = b[1], bz = b[2], bw = b[3];
	
	    var        omega, cosom, sinom, scale0, scale1;
	
	    // calc cosine
	    cosom = ax * bx + ay * by + az * bz + aw * bw;
	    // adjust signs (if necessary)
	    if ( cosom < 0.0 ) {
	        cosom = -cosom;
	        bx = - bx;
	        by = - by;
	        bz = - bz;
	        bw = - bw;
	    }
	    // calculate coefficients
	    if ( (1.0 - cosom) > 0.000001 ) {
	        // standard case (slerp)
	        omega  = Math.acos(cosom);
	        sinom  = Math.sin(omega);
	        scale0 = Math.sin((1.0 - t) * omega) / sinom;
	        scale1 = Math.sin(t * omega) / sinom;
	    } else {        
	        // "from" and "to" quaternions are very close 
	        //  ... so we can do a linear interpolation
	        scale0 = 1.0 - t;
	        scale1 = t;
	    }
	    // calculate final values
	    out[0] = scale0 * ax + scale1 * bx;
	    out[1] = scale0 * ay + scale1 * by;
	    out[2] = scale0 * az + scale1 * bz;
	    out[3] = scale0 * aw + scale1 * bw;
	    
	    return out;
	};
	
	/**
	 * Performs a spherical linear interpolation with two control points
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @param {quat} c the third operand
	 * @param {quat} d the fourth operand
	 * @param {Number} t interpolation amount
	 * @returns {quat} out
	 */
	quat.sqlerp = (function () {
	  var temp1 = quat.create();
	  var temp2 = quat.create();
	  
	  return function (out, a, b, c, d, t) {
	    quat.slerp(temp1, a, d, t);
	    quat.slerp(temp2, b, c, t);
	    quat.slerp(out, temp1, temp2, 2 * t * (1 - t));
	    
	    return out;
	  };
	}());
	
	/**
	 * Calculates the inverse of a quat
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a quat to calculate inverse of
	 * @returns {quat} out
	 */
	quat.invert = function(out, a) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
	        dot = a0*a0 + a1*a1 + a2*a2 + a3*a3,
	        invDot = dot ? 1.0/dot : 0;
	    
	    // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0
	
	    out[0] = -a0*invDot;
	    out[1] = -a1*invDot;
	    out[2] = -a2*invDot;
	    out[3] = a3*invDot;
	    return out;
	};
	
	/**
	 * Calculates the conjugate of a quat
	 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a quat to calculate conjugate of
	 * @returns {quat} out
	 */
	quat.conjugate = function (out, a) {
	    out[0] = -a[0];
	    out[1] = -a[1];
	    out[2] = -a[2];
	    out[3] = a[3];
	    return out;
	};
	
	/**
	 * Calculates the length of a quat
	 *
	 * @param {quat} a vector to calculate length of
	 * @returns {Number} length of a
	 * @function
	 */
	quat.length = vec4.length;
	
	/**
	 * Alias for {@link quat.length}
	 * @function
	 */
	quat.len = quat.length;
	
	/**
	 * Calculates the squared length of a quat
	 *
	 * @param {quat} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 * @function
	 */
	quat.squaredLength = vec4.squaredLength;
	
	/**
	 * Alias for {@link quat.squaredLength}
	 * @function
	 */
	quat.sqrLen = quat.squaredLength;
	
	/**
	 * Normalize a quat
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a quaternion to normalize
	 * @returns {quat} out
	 * @function
	 */
	quat.normalize = vec4.normalize;
	
	/**
	 * Creates a quaternion from the given 3x3 rotation matrix.
	 *
	 * NOTE: The resultant quaternion is not normalized, so you should be sure
	 * to renormalize the quaternion yourself where necessary.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {mat3} m rotation matrix
	 * @returns {quat} out
	 * @function
	 */
	quat.fromMat3 = function(out, m) {
	    // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
	    // article "Quaternion Calculus and Fast Animation".
	    var fTrace = m[0] + m[4] + m[8];
	    var fRoot;
	
	    if ( fTrace > 0.0 ) {
	        // |w| > 1/2, may as well choose w > 1/2
	        fRoot = Math.sqrt(fTrace + 1.0);  // 2w
	        out[3] = 0.5 * fRoot;
	        fRoot = 0.5/fRoot;  // 1/(4w)
	        out[0] = (m[5]-m[7])*fRoot;
	        out[1] = (m[6]-m[2])*fRoot;
	        out[2] = (m[1]-m[3])*fRoot;
	    } else {
	        // |w| <= 1/2
	        var i = 0;
	        if ( m[4] > m[0] )
	          i = 1;
	        if ( m[8] > m[i*3+i] )
	          i = 2;
	        var j = (i+1)%3;
	        var k = (i+2)%3;
	        
	        fRoot = Math.sqrt(m[i*3+i]-m[j*3+j]-m[k*3+k] + 1.0);
	        out[i] = 0.5 * fRoot;
	        fRoot = 0.5 / fRoot;
	        out[3] = (m[j*3+k] - m[k*3+j]) * fRoot;
	        out[j] = (m[j*3+i] + m[i*3+j]) * fRoot;
	        out[k] = (m[k*3+i] + m[i*3+k]) * fRoot;
	    }
	    
	    return out;
	};
	
	/**
	 * Returns a string representation of a quatenion
	 *
	 * @param {quat} vec vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	quat.str = function (a) {
	    return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
	};
	
	/**
	 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {quat} a The first quaternion.
	 * @param {quat} b The second quaternion.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	quat.exactEquals = vec4.exactEquals;
	
	/**
	 * Returns whether or not the quaternions have approximately the same elements in the same position.
	 *
	 * @param {quat} a The first vector.
	 * @param {quat} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	quat.equals = vec4.equals;
	
	module.exports = quat;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(7);
	
	/**
	 * @class 3 Dimensional Vector
	 * @name vec3
	 */
	var vec3 = {};
	
	/**
	 * Creates a new, empty vec3
	 *
	 * @returns {vec3} a new 3D vector
	 */
	vec3.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(3);
	    out[0] = 0;
	    out[1] = 0;
	    out[2] = 0;
	    return out;
	};
	
	/**
	 * Creates a new vec3 initialized with values from an existing vector
	 *
	 * @param {vec3} a vector to clone
	 * @returns {vec3} a new 3D vector
	 */
	vec3.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(3);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    return out;
	};
	
	/**
	 * Creates a new vec3 initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @returns {vec3} a new 3D vector
	 */
	vec3.fromValues = function(x, y, z) {
	    var out = new glMatrix.ARRAY_TYPE(3);
	    out[0] = x;
	    out[1] = y;
	    out[2] = z;
	    return out;
	};
	
	/**
	 * Copy the values from one vec3 to another
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the source vector
	 * @returns {vec3} out
	 */
	vec3.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    return out;
	};
	
	/**
	 * Set the components of a vec3 to the given values
	 *
	 * @param {vec3} out the receiving vector
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @returns {vec3} out
	 */
	vec3.set = function(out, x, y, z) {
	    out[0] = x;
	    out[1] = y;
	    out[2] = z;
	    return out;
	};
	
	/**
	 * Adds two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.add = function(out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    out[2] = a[2] + b[2];
	    return out;
	};
	
	/**
	 * Subtracts vector b from vector a
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.subtract = function(out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    out[2] = a[2] - b[2];
	    return out;
	};
	
	/**
	 * Alias for {@link vec3.subtract}
	 * @function
	 */
	vec3.sub = vec3.subtract;
	
	/**
	 * Multiplies two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.multiply = function(out, a, b) {
	    out[0] = a[0] * b[0];
	    out[1] = a[1] * b[1];
	    out[2] = a[2] * b[2];
	    return out;
	};
	
	/**
	 * Alias for {@link vec3.multiply}
	 * @function
	 */
	vec3.mul = vec3.multiply;
	
	/**
	 * Divides two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.divide = function(out, a, b) {
	    out[0] = a[0] / b[0];
	    out[1] = a[1] / b[1];
	    out[2] = a[2] / b[2];
	    return out;
	};
	
	/**
	 * Alias for {@link vec3.divide}
	 * @function
	 */
	vec3.div = vec3.divide;
	
	/**
	 * Math.ceil the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to ceil
	 * @returns {vec3} out
	 */
	vec3.ceil = function (out, a) {
	    out[0] = Math.ceil(a[0]);
	    out[1] = Math.ceil(a[1]);
	    out[2] = Math.ceil(a[2]);
	    return out;
	};
	
	/**
	 * Math.floor the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to floor
	 * @returns {vec3} out
	 */
	vec3.floor = function (out, a) {
	    out[0] = Math.floor(a[0]);
	    out[1] = Math.floor(a[1]);
	    out[2] = Math.floor(a[2]);
	    return out;
	};
	
	/**
	 * Returns the minimum of two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.min = function(out, a, b) {
	    out[0] = Math.min(a[0], b[0]);
	    out[1] = Math.min(a[1], b[1]);
	    out[2] = Math.min(a[2], b[2]);
	    return out;
	};
	
	/**
	 * Returns the maximum of two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.max = function(out, a, b) {
	    out[0] = Math.max(a[0], b[0]);
	    out[1] = Math.max(a[1], b[1]);
	    out[2] = Math.max(a[2], b[2]);
	    return out;
	};
	
	/**
	 * Math.round the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to round
	 * @returns {vec3} out
	 */
	vec3.round = function (out, a) {
	    out[0] = Math.round(a[0]);
	    out[1] = Math.round(a[1]);
	    out[2] = Math.round(a[2]);
	    return out;
	};
	
	/**
	 * Scales a vec3 by a scalar number
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {vec3} out
	 */
	vec3.scale = function(out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    out[2] = a[2] * b;
	    return out;
	};
	
	/**
	 * Adds two vec3's after scaling the second operand by a scalar value
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @param {Number} scale the amount to scale b by before adding
	 * @returns {vec3} out
	 */
	vec3.scaleAndAdd = function(out, a, b, scale) {
	    out[0] = a[0] + (b[0] * scale);
	    out[1] = a[1] + (b[1] * scale);
	    out[2] = a[2] + (b[2] * scale);
	    return out;
	};
	
	/**
	 * Calculates the euclidian distance between two vec3's
	 *
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {Number} distance between a and b
	 */
	vec3.distance = function(a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1],
	        z = b[2] - a[2];
	    return Math.sqrt(x*x + y*y + z*z);
	};
	
	/**
	 * Alias for {@link vec3.distance}
	 * @function
	 */
	vec3.dist = vec3.distance;
	
	/**
	 * Calculates the squared euclidian distance between two vec3's
	 *
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {Number} squared distance between a and b
	 */
	vec3.squaredDistance = function(a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1],
	        z = b[2] - a[2];
	    return x*x + y*y + z*z;
	};
	
	/**
	 * Alias for {@link vec3.squaredDistance}
	 * @function
	 */
	vec3.sqrDist = vec3.squaredDistance;
	
	/**
	 * Calculates the length of a vec3
	 *
	 * @param {vec3} a vector to calculate length of
	 * @returns {Number} length of a
	 */
	vec3.length = function (a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2];
	    return Math.sqrt(x*x + y*y + z*z);
	};
	
	/**
	 * Alias for {@link vec3.length}
	 * @function
	 */
	vec3.len = vec3.length;
	
	/**
	 * Calculates the squared length of a vec3
	 *
	 * @param {vec3} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 */
	vec3.squaredLength = function (a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2];
	    return x*x + y*y + z*z;
	};
	
	/**
	 * Alias for {@link vec3.squaredLength}
	 * @function
	 */
	vec3.sqrLen = vec3.squaredLength;
	
	/**
	 * Negates the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to negate
	 * @returns {vec3} out
	 */
	vec3.negate = function(out, a) {
	    out[0] = -a[0];
	    out[1] = -a[1];
	    out[2] = -a[2];
	    return out;
	};
	
	/**
	 * Returns the inverse of the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to invert
	 * @returns {vec3} out
	 */
	vec3.inverse = function(out, a) {
	  out[0] = 1.0 / a[0];
	  out[1] = 1.0 / a[1];
	  out[2] = 1.0 / a[2];
	  return out;
	};
	
	/**
	 * Normalize a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to normalize
	 * @returns {vec3} out
	 */
	vec3.normalize = function(out, a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2];
	    var len = x*x + y*y + z*z;
	    if (len > 0) {
	        //TODO: evaluate use of glm_invsqrt here?
	        len = 1 / Math.sqrt(len);
	        out[0] = a[0] * len;
	        out[1] = a[1] * len;
	        out[2] = a[2] * len;
	    }
	    return out;
	};
	
	/**
	 * Calculates the dot product of two vec3's
	 *
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {Number} dot product of a and b
	 */
	vec3.dot = function (a, b) {
	    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
	};
	
	/**
	 * Computes the cross product of two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.cross = function(out, a, b) {
	    var ax = a[0], ay = a[1], az = a[2],
	        bx = b[0], by = b[1], bz = b[2];
	
	    out[0] = ay * bz - az * by;
	    out[1] = az * bx - ax * bz;
	    out[2] = ax * by - ay * bx;
	    return out;
	};
	
	/**
	 * Performs a linear interpolation between two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {vec3} out
	 */
	vec3.lerp = function (out, a, b, t) {
	    var ax = a[0],
	        ay = a[1],
	        az = a[2];
	    out[0] = ax + t * (b[0] - ax);
	    out[1] = ay + t * (b[1] - ay);
	    out[2] = az + t * (b[2] - az);
	    return out;
	};
	
	/**
	 * Performs a hermite interpolation with two control points
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @param {vec3} c the third operand
	 * @param {vec3} d the fourth operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {vec3} out
	 */
	vec3.hermite = function (out, a, b, c, d, t) {
	  var factorTimes2 = t * t,
	      factor1 = factorTimes2 * (2 * t - 3) + 1,
	      factor2 = factorTimes2 * (t - 2) + t,
	      factor3 = factorTimes2 * (t - 1),
	      factor4 = factorTimes2 * (3 - 2 * t);
	  
	  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
	  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
	  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
	  
	  return out;
	};
	
	/**
	 * Performs a bezier interpolation with two control points
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @param {vec3} c the third operand
	 * @param {vec3} d the fourth operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {vec3} out
	 */
	vec3.bezier = function (out, a, b, c, d, t) {
	  var inverseFactor = 1 - t,
	      inverseFactorTimesTwo = inverseFactor * inverseFactor,
	      factorTimes2 = t * t,
	      factor1 = inverseFactorTimesTwo * inverseFactor,
	      factor2 = 3 * t * inverseFactorTimesTwo,
	      factor3 = 3 * factorTimes2 * inverseFactor,
	      factor4 = factorTimes2 * t;
	  
	  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
	  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
	  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
	  
	  return out;
	};
	
	/**
	 * Generates a random vector with the given scale
	 *
	 * @param {vec3} out the receiving vector
	 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
	 * @returns {vec3} out
	 */
	vec3.random = function (out, scale) {
	    scale = scale || 1.0;
	
	    var r = glMatrix.RANDOM() * 2.0 * Math.PI;
	    var z = (glMatrix.RANDOM() * 2.0) - 1.0;
	    var zScale = Math.sqrt(1.0-z*z) * scale;
	
	    out[0] = Math.cos(r) * zScale;
	    out[1] = Math.sin(r) * zScale;
	    out[2] = z * scale;
	    return out;
	};
	
	/**
	 * Transforms the vec3 with a mat4.
	 * 4th vector component is implicitly '1'
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the vector to transform
	 * @param {mat4} m matrix to transform with
	 * @returns {vec3} out
	 */
	vec3.transformMat4 = function(out, a, m) {
	    var x = a[0], y = a[1], z = a[2],
	        w = m[3] * x + m[7] * y + m[11] * z + m[15];
	    w = w || 1.0;
	    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
	    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
	    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
	    return out;
	};
	
	/**
	 * Transforms the vec3 with a mat3.
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the vector to transform
	 * @param {mat4} m the 3x3 matrix to transform with
	 * @returns {vec3} out
	 */
	vec3.transformMat3 = function(out, a, m) {
	    var x = a[0], y = a[1], z = a[2];
	    out[0] = x * m[0] + y * m[3] + z * m[6];
	    out[1] = x * m[1] + y * m[4] + z * m[7];
	    out[2] = x * m[2] + y * m[5] + z * m[8];
	    return out;
	};
	
	/**
	 * Transforms the vec3 with a quat
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the vector to transform
	 * @param {quat} q quaternion to transform with
	 * @returns {vec3} out
	 */
	vec3.transformQuat = function(out, a, q) {
	    // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations
	
	    var x = a[0], y = a[1], z = a[2],
	        qx = q[0], qy = q[1], qz = q[2], qw = q[3],
	
	        // calculate quat * vec
	        ix = qw * x + qy * z - qz * y,
	        iy = qw * y + qz * x - qx * z,
	        iz = qw * z + qx * y - qy * x,
	        iw = -qx * x - qy * y - qz * z;
	
	    // calculate result * inverse quat
	    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
	    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
	    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
	    return out;
	};
	
	/**
	 * Rotate a 3D vector around the x-axis
	 * @param {vec3} out The receiving vec3
	 * @param {vec3} a The vec3 point to rotate
	 * @param {vec3} b The origin of the rotation
	 * @param {Number} c The angle of rotation
	 * @returns {vec3} out
	 */
	vec3.rotateX = function(out, a, b, c){
	   var p = [], r=[];
		  //Translate point to the origin
		  p[0] = a[0] - b[0];
		  p[1] = a[1] - b[1];
	  	p[2] = a[2] - b[2];
	
		  //perform rotation
		  r[0] = p[0];
		  r[1] = p[1]*Math.cos(c) - p[2]*Math.sin(c);
		  r[2] = p[1]*Math.sin(c) + p[2]*Math.cos(c);
	
		  //translate to correct position
		  out[0] = r[0] + b[0];
		  out[1] = r[1] + b[1];
		  out[2] = r[2] + b[2];
	
	  	return out;
	};
	
	/**
	 * Rotate a 3D vector around the y-axis
	 * @param {vec3} out The receiving vec3
	 * @param {vec3} a The vec3 point to rotate
	 * @param {vec3} b The origin of the rotation
	 * @param {Number} c The angle of rotation
	 * @returns {vec3} out
	 */
	vec3.rotateY = function(out, a, b, c){
	  	var p = [], r=[];
	  	//Translate point to the origin
	  	p[0] = a[0] - b[0];
	  	p[1] = a[1] - b[1];
	  	p[2] = a[2] - b[2];
	  
	  	//perform rotation
	  	r[0] = p[2]*Math.sin(c) + p[0]*Math.cos(c);
	  	r[1] = p[1];
	  	r[2] = p[2]*Math.cos(c) - p[0]*Math.sin(c);
	  
	  	//translate to correct position
	  	out[0] = r[0] + b[0];
	  	out[1] = r[1] + b[1];
	  	out[2] = r[2] + b[2];
	  
	  	return out;
	};
	
	/**
	 * Rotate a 3D vector around the z-axis
	 * @param {vec3} out The receiving vec3
	 * @param {vec3} a The vec3 point to rotate
	 * @param {vec3} b The origin of the rotation
	 * @param {Number} c The angle of rotation
	 * @returns {vec3} out
	 */
	vec3.rotateZ = function(out, a, b, c){
	  	var p = [], r=[];
	  	//Translate point to the origin
	  	p[0] = a[0] - b[0];
	  	p[1] = a[1] - b[1];
	  	p[2] = a[2] - b[2];
	  
	  	//perform rotation
	  	r[0] = p[0]*Math.cos(c) - p[1]*Math.sin(c);
	  	r[1] = p[0]*Math.sin(c) + p[1]*Math.cos(c);
	  	r[2] = p[2];
	  
	  	//translate to correct position
	  	out[0] = r[0] + b[0];
	  	out[1] = r[1] + b[1];
	  	out[2] = r[2] + b[2];
	  
	  	return out;
	};
	
	/**
	 * Perform some operation over an array of vec3s.
	 *
	 * @param {Array} a the array of vectors to iterate over
	 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
	 * @param {Number} offset Number of elements to skip at the beginning of the array
	 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
	 * @param {Function} fn Function to call for each vector in the array
	 * @param {Object} [arg] additional argument to pass to fn
	 * @returns {Array} a
	 * @function
	 */
	vec3.forEach = (function() {
	    var vec = vec3.create();
	
	    return function(a, stride, offset, count, fn, arg) {
	        var i, l;
	        if(!stride) {
	            stride = 3;
	        }
	
	        if(!offset) {
	            offset = 0;
	        }
	        
	        if(count) {
	            l = Math.min((count * stride) + offset, a.length);
	        } else {
	            l = a.length;
	        }
	
	        for(i = offset; i < l; i += stride) {
	            vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2];
	            fn(vec, vec, arg);
	            a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2];
	        }
	        
	        return a;
	    };
	})();
	
	/**
	 * Get the angle between two 3D vectors
	 * @param {vec3} a The first operand
	 * @param {vec3} b The second operand
	 * @returns {Number} The angle in radians
	 */
	vec3.angle = function(a, b) {
	   
	    var tempA = vec3.fromValues(a[0], a[1], a[2]);
	    var tempB = vec3.fromValues(b[0], b[1], b[2]);
	 
	    vec3.normalize(tempA, tempA);
	    vec3.normalize(tempB, tempB);
	 
	    var cosine = vec3.dot(tempA, tempB);
	
	    if(cosine > 1.0){
	        return 0;
	    } else {
	        return Math.acos(cosine);
	    }     
	};
	
	/**
	 * Returns a string representation of a vector
	 *
	 * @param {vec3} vec vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	vec3.str = function (a) {
	    return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
	};
	
	/**
	 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {vec3} a The first vector.
	 * @param {vec3} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	vec3.exactEquals = function (a, b) {
	    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
	};
	
	/**
	 * Returns whether or not the vectors have approximately the same elements in the same position.
	 *
	 * @param {vec3} a The first vector.
	 * @param {vec3} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	vec3.equals = function (a, b) {
	    var a0 = a[0], a1 = a[1], a2 = a[2];
	    var b0 = b[0], b1 = b[1], b2 = b[2];
	    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
	            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
	            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)));
	};
	
	module.exports = vec3;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(7);
	
	/**
	 * @class 4 Dimensional Vector
	 * @name vec4
	 */
	var vec4 = {};
	
	/**
	 * Creates a new, empty vec4
	 *
	 * @returns {vec4} a new 4D vector
	 */
	vec4.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = 0;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    return out;
	};
	
	/**
	 * Creates a new vec4 initialized with values from an existing vector
	 *
	 * @param {vec4} a vector to clone
	 * @returns {vec4} a new 4D vector
	 */
	vec4.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    return out;
	};
	
	/**
	 * Creates a new vec4 initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @param {Number} w W component
	 * @returns {vec4} a new 4D vector
	 */
	vec4.fromValues = function(x, y, z, w) {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = x;
	    out[1] = y;
	    out[2] = z;
	    out[3] = w;
	    return out;
	};
	
	/**
	 * Copy the values from one vec4 to another
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the source vector
	 * @returns {vec4} out
	 */
	vec4.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    return out;
	};
	
	/**
	 * Set the components of a vec4 to the given values
	 *
	 * @param {vec4} out the receiving vector
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @param {Number} w W component
	 * @returns {vec4} out
	 */
	vec4.set = function(out, x, y, z, w) {
	    out[0] = x;
	    out[1] = y;
	    out[2] = z;
	    out[3] = w;
	    return out;
	};
	
	/**
	 * Adds two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.add = function(out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    out[2] = a[2] + b[2];
	    out[3] = a[3] + b[3];
	    return out;
	};
	
	/**
	 * Subtracts vector b from vector a
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.subtract = function(out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    out[2] = a[2] - b[2];
	    out[3] = a[3] - b[3];
	    return out;
	};
	
	/**
	 * Alias for {@link vec4.subtract}
	 * @function
	 */
	vec4.sub = vec4.subtract;
	
	/**
	 * Multiplies two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.multiply = function(out, a, b) {
	    out[0] = a[0] * b[0];
	    out[1] = a[1] * b[1];
	    out[2] = a[2] * b[2];
	    out[3] = a[3] * b[3];
	    return out;
	};
	
	/**
	 * Alias for {@link vec4.multiply}
	 * @function
	 */
	vec4.mul = vec4.multiply;
	
	/**
	 * Divides two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.divide = function(out, a, b) {
	    out[0] = a[0] / b[0];
	    out[1] = a[1] / b[1];
	    out[2] = a[2] / b[2];
	    out[3] = a[3] / b[3];
	    return out;
	};
	
	/**
	 * Alias for {@link vec4.divide}
	 * @function
	 */
	vec4.div = vec4.divide;
	
	/**
	 * Math.ceil the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to ceil
	 * @returns {vec4} out
	 */
	vec4.ceil = function (out, a) {
	    out[0] = Math.ceil(a[0]);
	    out[1] = Math.ceil(a[1]);
	    out[2] = Math.ceil(a[2]);
	    out[3] = Math.ceil(a[3]);
	    return out;
	};
	
	/**
	 * Math.floor the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to floor
	 * @returns {vec4} out
	 */
	vec4.floor = function (out, a) {
	    out[0] = Math.floor(a[0]);
	    out[1] = Math.floor(a[1]);
	    out[2] = Math.floor(a[2]);
	    out[3] = Math.floor(a[3]);
	    return out;
	};
	
	/**
	 * Returns the minimum of two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.min = function(out, a, b) {
	    out[0] = Math.min(a[0], b[0]);
	    out[1] = Math.min(a[1], b[1]);
	    out[2] = Math.min(a[2], b[2]);
	    out[3] = Math.min(a[3], b[3]);
	    return out;
	};
	
	/**
	 * Returns the maximum of two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.max = function(out, a, b) {
	    out[0] = Math.max(a[0], b[0]);
	    out[1] = Math.max(a[1], b[1]);
	    out[2] = Math.max(a[2], b[2]);
	    out[3] = Math.max(a[3], b[3]);
	    return out;
	};
	
	/**
	 * Math.round the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to round
	 * @returns {vec4} out
	 */
	vec4.round = function (out, a) {
	    out[0] = Math.round(a[0]);
	    out[1] = Math.round(a[1]);
	    out[2] = Math.round(a[2]);
	    out[3] = Math.round(a[3]);
	    return out;
	};
	
	/**
	 * Scales a vec4 by a scalar number
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {vec4} out
	 */
	vec4.scale = function(out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    out[2] = a[2] * b;
	    out[3] = a[3] * b;
	    return out;
	};
	
	/**
	 * Adds two vec4's after scaling the second operand by a scalar value
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @param {Number} scale the amount to scale b by before adding
	 * @returns {vec4} out
	 */
	vec4.scaleAndAdd = function(out, a, b, scale) {
	    out[0] = a[0] + (b[0] * scale);
	    out[1] = a[1] + (b[1] * scale);
	    out[2] = a[2] + (b[2] * scale);
	    out[3] = a[3] + (b[3] * scale);
	    return out;
	};
	
	/**
	 * Calculates the euclidian distance between two vec4's
	 *
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {Number} distance between a and b
	 */
	vec4.distance = function(a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1],
	        z = b[2] - a[2],
	        w = b[3] - a[3];
	    return Math.sqrt(x*x + y*y + z*z + w*w);
	};
	
	/**
	 * Alias for {@link vec4.distance}
	 * @function
	 */
	vec4.dist = vec4.distance;
	
	/**
	 * Calculates the squared euclidian distance between two vec4's
	 *
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {Number} squared distance between a and b
	 */
	vec4.squaredDistance = function(a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1],
	        z = b[2] - a[2],
	        w = b[3] - a[3];
	    return x*x + y*y + z*z + w*w;
	};
	
	/**
	 * Alias for {@link vec4.squaredDistance}
	 * @function
	 */
	vec4.sqrDist = vec4.squaredDistance;
	
	/**
	 * Calculates the length of a vec4
	 *
	 * @param {vec4} a vector to calculate length of
	 * @returns {Number} length of a
	 */
	vec4.length = function (a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2],
	        w = a[3];
	    return Math.sqrt(x*x + y*y + z*z + w*w);
	};
	
	/**
	 * Alias for {@link vec4.length}
	 * @function
	 */
	vec4.len = vec4.length;
	
	/**
	 * Calculates the squared length of a vec4
	 *
	 * @param {vec4} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 */
	vec4.squaredLength = function (a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2],
	        w = a[3];
	    return x*x + y*y + z*z + w*w;
	};
	
	/**
	 * Alias for {@link vec4.squaredLength}
	 * @function
	 */
	vec4.sqrLen = vec4.squaredLength;
	
	/**
	 * Negates the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to negate
	 * @returns {vec4} out
	 */
	vec4.negate = function(out, a) {
	    out[0] = -a[0];
	    out[1] = -a[1];
	    out[2] = -a[2];
	    out[3] = -a[3];
	    return out;
	};
	
	/**
	 * Returns the inverse of the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to invert
	 * @returns {vec4} out
	 */
	vec4.inverse = function(out, a) {
	  out[0] = 1.0 / a[0];
	  out[1] = 1.0 / a[1];
	  out[2] = 1.0 / a[2];
	  out[3] = 1.0 / a[3];
	  return out;
	};
	
	/**
	 * Normalize a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to normalize
	 * @returns {vec4} out
	 */
	vec4.normalize = function(out, a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2],
	        w = a[3];
	    var len = x*x + y*y + z*z + w*w;
	    if (len > 0) {
	        len = 1 / Math.sqrt(len);
	        out[0] = x * len;
	        out[1] = y * len;
	        out[2] = z * len;
	        out[3] = w * len;
	    }
	    return out;
	};
	
	/**
	 * Calculates the dot product of two vec4's
	 *
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {Number} dot product of a and b
	 */
	vec4.dot = function (a, b) {
	    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
	};
	
	/**
	 * Performs a linear interpolation between two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {vec4} out
	 */
	vec4.lerp = function (out, a, b, t) {
	    var ax = a[0],
	        ay = a[1],
	        az = a[2],
	        aw = a[3];
	    out[0] = ax + t * (b[0] - ax);
	    out[1] = ay + t * (b[1] - ay);
	    out[2] = az + t * (b[2] - az);
	    out[3] = aw + t * (b[3] - aw);
	    return out;
	};
	
	/**
	 * Generates a random vector with the given scale
	 *
	 * @param {vec4} out the receiving vector
	 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
	 * @returns {vec4} out
	 */
	vec4.random = function (out, scale) {
	    scale = scale || 1.0;
	
	    //TODO: This is a pretty awful way of doing this. Find something better.
	    out[0] = glMatrix.RANDOM();
	    out[1] = glMatrix.RANDOM();
	    out[2] = glMatrix.RANDOM();
	    out[3] = glMatrix.RANDOM();
	    vec4.normalize(out, out);
	    vec4.scale(out, out, scale);
	    return out;
	};
	
	/**
	 * Transforms the vec4 with a mat4.
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the vector to transform
	 * @param {mat4} m matrix to transform with
	 * @returns {vec4} out
	 */
	vec4.transformMat4 = function(out, a, m) {
	    var x = a[0], y = a[1], z = a[2], w = a[3];
	    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
	    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
	    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
	    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
	    return out;
	};
	
	/**
	 * Transforms the vec4 with a quat
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the vector to transform
	 * @param {quat} q quaternion to transform with
	 * @returns {vec4} out
	 */
	vec4.transformQuat = function(out, a, q) {
	    var x = a[0], y = a[1], z = a[2],
	        qx = q[0], qy = q[1], qz = q[2], qw = q[3],
	
	        // calculate quat * vec
	        ix = qw * x + qy * z - qz * y,
	        iy = qw * y + qz * x - qx * z,
	        iz = qw * z + qx * y - qy * x,
	        iw = -qx * x - qy * y - qz * z;
	
	    // calculate result * inverse quat
	    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
	    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
	    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
	    out[3] = a[3];
	    return out;
	};
	
	/**
	 * Perform some operation over an array of vec4s.
	 *
	 * @param {Array} a the array of vectors to iterate over
	 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
	 * @param {Number} offset Number of elements to skip at the beginning of the array
	 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
	 * @param {Function} fn Function to call for each vector in the array
	 * @param {Object} [arg] additional argument to pass to fn
	 * @returns {Array} a
	 * @function
	 */
	vec4.forEach = (function() {
	    var vec = vec4.create();
	
	    return function(a, stride, offset, count, fn, arg) {
	        var i, l;
	        if(!stride) {
	            stride = 4;
	        }
	
	        if(!offset) {
	            offset = 0;
	        }
	        
	        if(count) {
	            l = Math.min((count * stride) + offset, a.length);
	        } else {
	            l = a.length;
	        }
	
	        for(i = offset; i < l; i += stride) {
	            vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2]; vec[3] = a[i+3];
	            fn(vec, vec, arg);
	            a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2]; a[i+3] = vec[3];
	        }
	        
	        return a;
	    };
	})();
	
	/**
	 * Returns a string representation of a vector
	 *
	 * @param {vec4} vec vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	vec4.str = function (a) {
	    return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
	};
	
	/**
	 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {vec4} a The first vector.
	 * @param {vec4} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	vec4.exactEquals = function (a, b) {
	    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
	};
	
	/**
	 * Returns whether or not the vectors have approximately the same elements in the same position.
	 *
	 * @param {vec4} a The first vector.
	 * @param {vec4} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	vec4.equals = function (a, b) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
	    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
	    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
	            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
	            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
	            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)));
	};
	
	module.exports = vec4;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(7);
	
	/**
	 * @class 2 Dimensional Vector
	 * @name vec2
	 */
	var vec2 = {};
	
	/**
	 * Creates a new, empty vec2
	 *
	 * @returns {vec2} a new 2D vector
	 */
	vec2.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(2);
	    out[0] = 0;
	    out[1] = 0;
	    return out;
	};
	
	/**
	 * Creates a new vec2 initialized with values from an existing vector
	 *
	 * @param {vec2} a vector to clone
	 * @returns {vec2} a new 2D vector
	 */
	vec2.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(2);
	    out[0] = a[0];
	    out[1] = a[1];
	    return out;
	};
	
	/**
	 * Creates a new vec2 initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @returns {vec2} a new 2D vector
	 */
	vec2.fromValues = function(x, y) {
	    var out = new glMatrix.ARRAY_TYPE(2);
	    out[0] = x;
	    out[1] = y;
	    return out;
	};
	
	/**
	 * Copy the values from one vec2 to another
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the source vector
	 * @returns {vec2} out
	 */
	vec2.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    return out;
	};
	
	/**
	 * Set the components of a vec2 to the given values
	 *
	 * @param {vec2} out the receiving vector
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @returns {vec2} out
	 */
	vec2.set = function(out, x, y) {
	    out[0] = x;
	    out[1] = y;
	    return out;
	};
	
	/**
	 * Adds two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.add = function(out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    return out;
	};
	
	/**
	 * Subtracts vector b from vector a
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.subtract = function(out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    return out;
	};
	
	/**
	 * Alias for {@link vec2.subtract}
	 * @function
	 */
	vec2.sub = vec2.subtract;
	
	/**
	 * Multiplies two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.multiply = function(out, a, b) {
	    out[0] = a[0] * b[0];
	    out[1] = a[1] * b[1];
	    return out;
	};
	
	/**
	 * Alias for {@link vec2.multiply}
	 * @function
	 */
	vec2.mul = vec2.multiply;
	
	/**
	 * Divides two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.divide = function(out, a, b) {
	    out[0] = a[0] / b[0];
	    out[1] = a[1] / b[1];
	    return out;
	};
	
	/**
	 * Alias for {@link vec2.divide}
	 * @function
	 */
	vec2.div = vec2.divide;
	
	/**
	 * Math.ceil the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to ceil
	 * @returns {vec2} out
	 */
	vec2.ceil = function (out, a) {
	    out[0] = Math.ceil(a[0]);
	    out[1] = Math.ceil(a[1]);
	    return out;
	};
	
	/**
	 * Math.floor the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to floor
	 * @returns {vec2} out
	 */
	vec2.floor = function (out, a) {
	    out[0] = Math.floor(a[0]);
	    out[1] = Math.floor(a[1]);
	    return out;
	};
	
	/**
	 * Returns the minimum of two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.min = function(out, a, b) {
	    out[0] = Math.min(a[0], b[0]);
	    out[1] = Math.min(a[1], b[1]);
	    return out;
	};
	
	/**
	 * Returns the maximum of two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.max = function(out, a, b) {
	    out[0] = Math.max(a[0], b[0]);
	    out[1] = Math.max(a[1], b[1]);
	    return out;
	};
	
	/**
	 * Math.round the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to round
	 * @returns {vec2} out
	 */
	vec2.round = function (out, a) {
	    out[0] = Math.round(a[0]);
	    out[1] = Math.round(a[1]);
	    return out;
	};
	
	/**
	 * Scales a vec2 by a scalar number
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {vec2} out
	 */
	vec2.scale = function(out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    return out;
	};
	
	/**
	 * Adds two vec2's after scaling the second operand by a scalar value
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @param {Number} scale the amount to scale b by before adding
	 * @returns {vec2} out
	 */
	vec2.scaleAndAdd = function(out, a, b, scale) {
	    out[0] = a[0] + (b[0] * scale);
	    out[1] = a[1] + (b[1] * scale);
	    return out;
	};
	
	/**
	 * Calculates the euclidian distance between two vec2's
	 *
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {Number} distance between a and b
	 */
	vec2.distance = function(a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1];
	    return Math.sqrt(x*x + y*y);
	};
	
	/**
	 * Alias for {@link vec2.distance}
	 * @function
	 */
	vec2.dist = vec2.distance;
	
	/**
	 * Calculates the squared euclidian distance between two vec2's
	 *
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {Number} squared distance between a and b
	 */
	vec2.squaredDistance = function(a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1];
	    return x*x + y*y;
	};
	
	/**
	 * Alias for {@link vec2.squaredDistance}
	 * @function
	 */
	vec2.sqrDist = vec2.squaredDistance;
	
	/**
	 * Calculates the length of a vec2
	 *
	 * @param {vec2} a vector to calculate length of
	 * @returns {Number} length of a
	 */
	vec2.length = function (a) {
	    var x = a[0],
	        y = a[1];
	    return Math.sqrt(x*x + y*y);
	};
	
	/**
	 * Alias for {@link vec2.length}
	 * @function
	 */
	vec2.len = vec2.length;
	
	/**
	 * Calculates the squared length of a vec2
	 *
	 * @param {vec2} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 */
	vec2.squaredLength = function (a) {
	    var x = a[0],
	        y = a[1];
	    return x*x + y*y;
	};
	
	/**
	 * Alias for {@link vec2.squaredLength}
	 * @function
	 */
	vec2.sqrLen = vec2.squaredLength;
	
	/**
	 * Negates the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to negate
	 * @returns {vec2} out
	 */
	vec2.negate = function(out, a) {
	    out[0] = -a[0];
	    out[1] = -a[1];
	    return out;
	};
	
	/**
	 * Returns the inverse of the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to invert
	 * @returns {vec2} out
	 */
	vec2.inverse = function(out, a) {
	  out[0] = 1.0 / a[0];
	  out[1] = 1.0 / a[1];
	  return out;
	};
	
	/**
	 * Normalize a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to normalize
	 * @returns {vec2} out
	 */
	vec2.normalize = function(out, a) {
	    var x = a[0],
	        y = a[1];
	    var len = x*x + y*y;
	    if (len > 0) {
	        //TODO: evaluate use of glm_invsqrt here?
	        len = 1 / Math.sqrt(len);
	        out[0] = a[0] * len;
	        out[1] = a[1] * len;
	    }
	    return out;
	};
	
	/**
	 * Calculates the dot product of two vec2's
	 *
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {Number} dot product of a and b
	 */
	vec2.dot = function (a, b) {
	    return a[0] * b[0] + a[1] * b[1];
	};
	
	/**
	 * Computes the cross product of two vec2's
	 * Note that the cross product must by definition produce a 3D vector
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec3} out
	 */
	vec2.cross = function(out, a, b) {
	    var z = a[0] * b[1] - a[1] * b[0];
	    out[0] = out[1] = 0;
	    out[2] = z;
	    return out;
	};
	
	/**
	 * Performs a linear interpolation between two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {vec2} out
	 */
	vec2.lerp = function (out, a, b, t) {
	    var ax = a[0],
	        ay = a[1];
	    out[0] = ax + t * (b[0] - ax);
	    out[1] = ay + t * (b[1] - ay);
	    return out;
	};
	
	/**
	 * Generates a random vector with the given scale
	 *
	 * @param {vec2} out the receiving vector
	 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
	 * @returns {vec2} out
	 */
	vec2.random = function (out, scale) {
	    scale = scale || 1.0;
	    var r = glMatrix.RANDOM() * 2.0 * Math.PI;
	    out[0] = Math.cos(r) * scale;
	    out[1] = Math.sin(r) * scale;
	    return out;
	};
	
	/**
	 * Transforms the vec2 with a mat2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat2} m matrix to transform with
	 * @returns {vec2} out
	 */
	vec2.transformMat2 = function(out, a, m) {
	    var x = a[0],
	        y = a[1];
	    out[0] = m[0] * x + m[2] * y;
	    out[1] = m[1] * x + m[3] * y;
	    return out;
	};
	
	/**
	 * Transforms the vec2 with a mat2d
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat2d} m matrix to transform with
	 * @returns {vec2} out
	 */
	vec2.transformMat2d = function(out, a, m) {
	    var x = a[0],
	        y = a[1];
	    out[0] = m[0] * x + m[2] * y + m[4];
	    out[1] = m[1] * x + m[3] * y + m[5];
	    return out;
	};
	
	/**
	 * Transforms the vec2 with a mat3
	 * 3rd vector component is implicitly '1'
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat3} m matrix to transform with
	 * @returns {vec2} out
	 */
	vec2.transformMat3 = function(out, a, m) {
	    var x = a[0],
	        y = a[1];
	    out[0] = m[0] * x + m[3] * y + m[6];
	    out[1] = m[1] * x + m[4] * y + m[7];
	    return out;
	};
	
	/**
	 * Transforms the vec2 with a mat4
	 * 3rd vector component is implicitly '0'
	 * 4th vector component is implicitly '1'
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat4} m matrix to transform with
	 * @returns {vec2} out
	 */
	vec2.transformMat4 = function(out, a, m) {
	    var x = a[0], 
	        y = a[1];
	    out[0] = m[0] * x + m[4] * y + m[12];
	    out[1] = m[1] * x + m[5] * y + m[13];
	    return out;
	};
	
	/**
	 * Perform some operation over an array of vec2s.
	 *
	 * @param {Array} a the array of vectors to iterate over
	 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
	 * @param {Number} offset Number of elements to skip at the beginning of the array
	 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
	 * @param {Function} fn Function to call for each vector in the array
	 * @param {Object} [arg] additional argument to pass to fn
	 * @returns {Array} a
	 * @function
	 */
	vec2.forEach = (function() {
	    var vec = vec2.create();
	
	    return function(a, stride, offset, count, fn, arg) {
	        var i, l;
	        if(!stride) {
	            stride = 2;
	        }
	
	        if(!offset) {
	            offset = 0;
	        }
	        
	        if(count) {
	            l = Math.min((count * stride) + offset, a.length);
	        } else {
	            l = a.length;
	        }
	
	        for(i = offset; i < l; i += stride) {
	            vec[0] = a[i]; vec[1] = a[i+1];
	            fn(vec, vec, arg);
	            a[i] = vec[0]; a[i+1] = vec[1];
	        }
	        
	        return a;
	    };
	})();
	
	/**
	 * Returns a string representation of a vector
	 *
	 * @param {vec2} vec vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	vec2.str = function (a) {
	    return 'vec2(' + a[0] + ', ' + a[1] + ')';
	};
	
	/**
	 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
	 *
	 * @param {vec2} a The first vector.
	 * @param {vec2} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	vec2.exactEquals = function (a, b) {
	    return a[0] === b[0] && a[1] === b[1];
	};
	
	/**
	 * Returns whether or not the vectors have approximately the same elements in the same position.
	 *
	 * @param {vec2} a The first vector.
	 * @param {vec2} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	vec2.equals = function (a, b) {
	    var a0 = a[0], a1 = a[1];
	    var b0 = b[0], b1 = b[1];
	    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
	            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)));
	};
	
	module.exports = vec2;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./app.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./app.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, "html, body {\n  margin: 0;\n  height: 100%;\n}\n\n#gl {\n  width: 100%;\n  height: 100%;\n}\n", ""]);
	
	// exports


/***/ },
/* 18 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "precision mediump float;\n\nuniform float u_time;\nuniform mat4 u_modelViewProj;\n\nattribute vec3 a_position;\n\nvoid main() {\n  vec4 pos = vec4(a_position, 1.0);\n  pos.x += 0.1 * pos.y * cos(u_time * 0.0013 + pos.y * 2.0 * cos(u_time * 0.0001) + pos.x * 5.0 * cos(u_time * 0.0001));\n  pos.z += 0.1 * pos.y * sin(u_time * 0.001 + pos.y * 2.0 * sin(u_time * 0.00011) + pos.z * 5.0 * sin(u_time * 0.0001));\n  gl_Position = u_modelViewProj * pos;\n}\n"

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "precision mediump float;\n\nvoid main() {\n  gl_FragColor = vec4(0.3, 0.3, 0.31, 1.0);\n}\n"

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map