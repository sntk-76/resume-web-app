---
title: "AI Weather Predictor"
category: "Applied AI System"
summary: "Custom-trained weather forecasting product using a Keras sequence model, multi-city historical data, robust preprocessing, explainable diagnostics, and a live user-facing deployment."
coverImage: "/images/projects/ai-weather-predictor-cover.png"
githubUrl: "https://github.com/sntk-76/AI-weather-predictor"
demoUrl: "https://botverio.com/weather/"
featured: true
techStack:
  - Python
  - TensorFlow
  - Keras
  - MLflow
  - Streamlit
  - Terraform
  - GCP
  - OpenAI API
impact:
  - "Uses a custom-trained forecasting model instead of relying on third-party forecast output."
  - "Combines data retrieval, preprocessing, diagnostics, model inference, and natural-language explanation."
  - "Shows a full path from model training to a live deployed product with measurable validation."
order: 1
---

## Overview

AI Weather Predictor is a full technical product that forecasts the next 7 days of weather for a selected city using my own trained model. The system retrieves recent station data, runs a reproducible preprocessing pipeline, prepares a 60-day input sequence, generates multi-target forecasts with a custom Keras model, and explains the result in natural language.

The project goes beyond a notebook by connecting dataset building, preprocessing, model training, model inference, experiment tracking, cloud infrastructure, usage logging, and a live user-facing application.

## Problem

Weather forecasting is a practical technical problem because the data is noisy, time-based, location-dependent, and incomplete. A useful product needs data retrieval, feature engineering, a defendable prediction pipeline, reliability checks, and a user-facing explanation layer.

## Solution

The application accepts a city, resolves nearby weather stations, fetches recent daily observations, and enriches the time series with calendar, cyclical, trend, weather-risk, wind-chill, and missing-value features. The final 60-day window is passed into a sequence model that predicts temperature, wind, precipitation, and snow values for the next 7 days.

The forecast table is then converted into a readable weekly summary using an LLM interface, so the technical prediction becomes easier to interpret for non-technical users.

## Technical Highlights

- City-level data retrieval using geospatial lookup and weather-station data.
- Custom-trained multi-target 7-day forecasting from a 60-day historical window.
- Expanded multi-city training data to improve generalization and practical forecast quality.
- Feature engineering for time, trend, missing values, weather risk, and derived weather indicators.
- TensorFlow/Keras model artifact stored with supporting MLflow metadata and evaluation outputs.
- Live product interface with forecast table, summary generation, and usage logging.
- Terraform resources for Google Cloud Storage and BigQuery foundations.

## Architecture

The workflow separates the product into clear layers:

1. User city input in Streamlit.
2. Geocoding and nearby station lookup.
3. Recent daily weather retrieval.
4. Feature engineering and 60-day sequence creation.
5. Custom Keras model inference.
6. Forecast table formatting.
7. LLM-based explanation.
8. Usage logging for later monitoring.

## Future Improvements

- Add automated retraining and drift checks.
- Compare the current sequence model with Transformer and Prophet baselines.
- Add CI checks for preprocessing and inference integrity.
- Containerize the app for managed cloud deployment.
