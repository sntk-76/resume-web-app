---
title: "Customer Segmentation"
category: "Analytical Modeling"
summary: "Customer behavior analysis workflow that prepares transaction data, builds unsupervised segments, visualizes structure, and evaluates cluster quality."
coverImage: "/images/projects/customer-segmentation-cover.png"
githubUrl: "https://github.com/sntk-76/Customer-Segmentation"
featured: true
techStack:
  - Python
  - Pandas
  - scikit-learn
  - K-Means
  - PCA
  - Mean Shift
  - Seaborn
impact:
  - "Turns transaction records into interpretable customer groups."
  - "Compares clustering choices with multiple evaluation metrics."
  - "Connects technical modeling with business interpretation and customer profiling."
order: 6
---

## Overview

Customer Segmentation is a notebook-based analytical modeling project that groups Online Retail customers into behavioral segments. The workflow covers data loading, cleaning, categorical encoding, normalization, exploratory analysis, clustering, dimensionality reduction, and evaluation.

## Problem

Organizations often have transaction-level data but no predefined labels for customer types. Clustering helps discover natural structure in purchasing behavior and supports marketing strategy, retention analysis, and customer profiling.

## Solution

The notebook prepares the retail transaction dataset by removing missing and invalid rows, encoding categorical fields, scaling features, and evaluating clustering algorithms. K-Means is tested across several cluster counts, while PCA and Mean Shift provide additional structure and comparison.

## Technical Highlights

- Data cleaning for missing values and invalid negative quantities.
- Categorical encoding with `LabelEncoder`.
- Feature scaling with `MinMaxScaler`.
- Exploratory analysis with histograms, pair plots, and correlation heatmaps.
- K-Means evaluation across multiple `k` values.
- Cluster metrics including Silhouette, Calinski-Harabasz, Davies-Bouldin, and WCSS.
- PCA visualization for 2D and 3D inspection.

## Future Improvements

- Engineer stronger business features such as recency, frequency, monetary value, average basket size, and return rate.
- Export descriptive cluster profiles with business-friendly segment names.
- Convert the notebook into a reproducible Python pipeline.
- Build an interactive dashboard for exploring segment behavior.
