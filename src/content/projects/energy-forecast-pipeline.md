---
title: "Energy Forecast Pipeline"
category: "Forecasting Workflow"
summary: "Energy-market analysis and forecasting workflow combining cloud storage, orchestration, transformation, modeled warehouse layers, Prophet forecasts, and BI delivery."
coverImage: "/images/projects/energy-forecast-cover.png"
githubUrl: "https://github.com/sntk-76/energy-forecast-pipeline"
featured: true
techStack:
  - Terraform
  - Airflow
  - GCS
  - PySpark
  - BigQuery
  - dbt
  - Prophet
  - Power BI
impact:
  - "Turns raw energy-market data into structured analytical and forecast outputs."
  - "Connects historical trends, modeled data, and forecast results in one workflow."
  - "Shows infrastructure, orchestration, transformation, modeling, and reporting together."
order: 3
---

## Overview

Energy Forecast Pipeline is an end-to-end technical project for Germany energy-market data. It demonstrates how raw energy time-series data can move through ingestion, storage, transformation, modeling, forecasting, and dashboard delivery.

The project is intentionally built as a full pipeline rather than a single notebook.

## Problem

Energy analysis requires clean time-series data, reliable transformations, forecast-ready aggregates, and dashboards that help stakeholders understand load, solar, wind, and demand trends.

## Solution

Terraform provisions cloud resources, Airflow coordinates data movement, PySpark prepares the energy dataset, BigQuery stores analytical tables, dbt builds modeled marts, Prophet generates future load forecasts, and Power BI presents the final dashboard.

## Technical Highlights

- Data lake structure with raw, clean, and forecast zones in GCS.
- Airflow DAGs for upload and BigQuery transfer workflows.
- PySpark transformation of Germany load, solar, wind, and regional transmission fields.
- dbt staging and mart models for daily load and renewable generation summaries.
- Prophet forecasting using solar and wind regressors.
- Power BI reporting over historical and forecast outputs.

## Architecture

The workflow follows this path:

1. Upload raw hourly energy CSV data to GCS.
2. Transform with PySpark.
3. Load clean data into BigQuery.
4. Build dbt staging and mart models.
5. Generate Prophet forecasts.
6. Upload and load forecast output.
7. Present historical trends and future demand through Power BI.

## Future Improvements

- Add dbt tests and source freshness checks.
- Add CI validation for DAG imports and SQL compilation.
- Containerize the PySpark transformation step.
- Add forecast-drift monitoring.
