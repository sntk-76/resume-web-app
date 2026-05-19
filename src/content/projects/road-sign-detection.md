---
title: "Road Sign Detection"
category: "Computer Vision System"
summary: "Classical computer-vision workflow that detects circular traffic signs using C++, OpenCV, grayscale preprocessing, Canny edge detection, and Hough Circle Transform."
coverImage: "/images/projects/road-sign-detection-cover.png"
githubUrl: "https://github.com/sntk-76/road-sign-detection"
featured: true
techStack:
  - C++
  - OpenCV
  - Canny
  - Hough Transform
  - Computer Vision
impact:
  - "Demonstrates an interpretable image-processing workflow in C++."
  - "Uses deterministic preprocessing and geometry detection for transparent results."
  - "Includes before/after visual outputs for validation."
order: 8
---

## Overview

Road Sign Detection is a focused computer-vision project that identifies circular traffic signs in road-scene images. The implementation uses a deterministic OpenCV pipeline rather than a deep-learning model, making the detection process transparent, lightweight, and easy to inspect.

## Problem

Traffic-sign detection is a foundational problem in road-scene understanding, autonomous driving, driver-assistance systems, and intelligent transportation. Circular road signs are a useful constrained target for classical geometric detection.

## Solution

The C++ program loads a road image, converts it to grayscale, extracts edges with Canny, detects circular candidates with Hough Circle Transform, and draws detected signs back onto the original image for visual validation.

## Technical Highlights

- Image loading with OpenCV `imread`.
- BGR-to-grayscale preprocessing with `cvtColor`.
- Canny edge detection for strong boundary extraction.
- Hough Circle Transform for circular sign candidates.
- Result overlay using OpenCV drawing utilities.
- Before/after visual outputs for inspection.

## Future Improvements

- Replace hardcoded image paths with command-line arguments.
- Save output images automatically.
- Add color segmentation for red-bordered triangular signs.
- Package the build with CMake.
- Compare the classical detector against a YOLO or TensorFlow object-detection baseline.
