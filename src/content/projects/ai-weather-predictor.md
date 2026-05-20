---
title: "AI Weather Predictor"
category: "Applied AI System"
summary: "End-to-end weather intelligence application combining data retrieval, feature engineering, sequence modeling, experiment tracking, Streamlit delivery, LLM summaries, and cloud-ready infrastructure."
coverImage: "/images/projects/ai-weather-predictor-cover.png"
githubUrl: "https://github.com/sntk-76/AI-weather-predictor"
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
  - "Connects live data retrieval, preprocessing, predictive modeling, and user-facing explanation."
  - "Turns numerical forecasts into practical summaries for non-technical users."
  - "Demonstrates a complete technical workflow from data preparation to deployed product."
order: 1
---

## Overview

AI Weather Predictor is a full technical product that forecasts the next 7 days of weather for a selected city. The system retrieves recent station data, runs a reproducible preprocessing pipeline, prepares a 30-day input sequence, generates multi-target forecasts with a trained Keras model, and explains the result in natural language.

The project goes beyond a notebook by connecting data collection, preprocessing, model inference, experiment tracking, cloud infrastructure, usage logging, and an interactive Streamlit application.

## Problem

Weather forecasting is a practical technical problem because the data is noisy, time-based, location-dependent, and incomplete. A useful product needs data retrieval, feature engineering, model inference, reliability checks, and a user-facing explanation layer.

## Solution

The application accepts a city, resolves nearby weather stations, fetches recent daily observations, and enriches the time series with calendar, cyclical, trend, weather-risk, wind-chill, and missing-value features. The final 30-day window is passed into a sequence model that predicts temperature, wind, precipitation, and snow values for the next 7 days.

The forecast table is then converted into a user-friendly weekly summary using an LLM interface.

## Technical Highlights

- City-level data retrieval using geospatial lookup and weather-station data.
- Multi-target 7-day forecasting from a 30-day historical window.
- Feature engineering for time, trend, missing values, weather risk, and derived weather indicators.
- TensorFlow/Keras model artifact stored with supporting MLflow metadata.
- Streamlit product interface with forecast table, summary generation, and usage logging.
- Terraform resources for Google Cloud Storage and BigQuery foundations.

## Architecture

The workflow separates the product into clear layers:

1. User city input in Streamlit.
2. Geocoding and nearby station lookup.
3. Recent daily weather retrieval.
4. Feature engineering and sequence creation.
5. Keras model inference.
6. Forecast table formatting.
7. LLM-based explanation.
8. Usage logging for later monitoring.

## Future Improvements

- Add automated retraining and drift checks.
- Compare the Keras model with Transformer and Prophet baselines.
- Add CI checks for preprocessing and inference integrity.
- Containerize the app for managed cloud deployment.
