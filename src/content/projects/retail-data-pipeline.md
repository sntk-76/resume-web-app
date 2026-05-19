---
title: "Retail Data Pipeline"
category: "Data Product"
summary: "Cloud-based retail analytics workflow that moves raw transaction data through storage, orchestration, transformation, validation, warehouse delivery, and business reporting."
coverImage: "/images/projects/retail-data-pipeline-cover.png"
githubUrl: "https://github.com/sntk-76/Retail-Data-Pipeline"
demoUrl: "https://lookerstudio.google.com/reporting/32142238-71f8-4c7c-8dc2-45038440d426"
featured: true
techStack:
  - Terraform
  - GCP
  - Airflow
  - PySpark
  - BigQuery
  - Docker
  - Looker Studio
impact:
  - "Turns raw retail records into trusted analytical outputs."
  - "Combines orchestration, transformation, validation, and reporting."
  - "Shows how technical data workflows support business interpretation."
order: 2
---

## Overview

Retail Data Pipeline is a cloud-native technical project for transaction analytics. It moves retail data from local CSV ingestion into cloud storage, warehouse tables, transformation logic, validation queries, and a dashboard.

The project demonstrates the full lifecycle of an analytics-ready system: infrastructure provisioning, raw ingestion, warehouse loading, cleaning, privacy-aware transformation, data quality validation, and reporting delivery.

## Problem

Retail datasets combine product, customer, payment, location, time, and revenue information. A useful technical workflow must preserve raw traceability while producing trusted, clean, business-ready outputs.

## Solution

Terraform provisions the GCP foundation, Docker Compose runs local Airflow, and Airflow moves raw and cleaned data between local storage, GCS, and BigQuery. PySpark applies type casting, duplicate removal, null handling, invalid-value filtering, category normalization, and privacy-aware removal of sensitive fields.

The clean output is loaded into BigQuery and validated through SQL checks before being presented through Looker Studio.

## Technical Highlights

- Terraform-managed GCS, BigQuery datasets, and Dataproc foundation.
- Airflow DAGs for raw upload, warehouse load, clean upload, and transformed load.
- PySpark transformation workflow for analytical cleaning and schema control.
- SQL validation for nulls, duplicate transactions, future dates, negative purchases, and payment categories.
- Dashboard layer for retail sales, product, customer, and geographic analysis.

## Architecture

The workflow follows a clear raw-to-reporting path:

1. Provision cloud infrastructure.
2. Upload raw CSV data to GCS.
3. Load raw data into BigQuery with an explicit schema.
4. Transform with PySpark.
5. Upload clean output to GCS.
6. Load clean data into BigQuery.
7. Run validation queries.
8. Publish BI reporting through Looker Studio.

## Future Improvements

- Convert notebook transformation into a reusable PySpark job.
- Add automated Airflow dependencies for a single end-to-end run.
- Add Great Expectations or dbt tests for structured data quality.
- Add CI checks for DAG imports and Terraform formatting.
