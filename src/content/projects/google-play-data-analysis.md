---
title: "Google Play Data Analysis"
category: "Exploratory Analysis"
summary: "App-market analysis workflow that cleans Google Play metadata, converts mixed-format fields, aggregates category-level behavior, and creates interpretable visual outputs."
coverImage: "/images/projects/google-play-data-analysis-cover.png"
githubUrl: "https://github.com/sntk-76/google-play-data-analysis"
featured: true
techStack:
  - Python
  - Pandas
  - NumPy
  - Matplotlib
  - Jupyter
impact:
  - "Shows a complete analysis workflow from raw metadata to visual outputs."
  - "Handles string-to-numeric conversion and missing-value cleanup."
  - "Uses category-level aggregation to make market behavior easier to compare."
order: 7
---

## Overview

Google Play Data Analysis explores app-market metadata from the Google Play Store to understand how categories, ratings, installs, pricing, free/paid status, and currencies vary across applications.

The project demonstrates a practical analysis workflow: loading raw metadata, selecting relevant fields, handling missing values, converting string-based metrics into numeric values, aggregating category-level statistics, and visualizing patterns.

## Problem

App-store data often arrives with mixed formats. Installs and prices may be represented as strings, categories may vary widely, and useful comparisons require cleaning before analysis.

## Solution

The notebook loads the Google Play metadata, selects numerical and categorical fields, drops incomplete records, converts install counts into numeric values, calculates descriptive statistics, groups metrics by category, and exports visual analysis charts.

## Technical Highlights

- Dataset inspection and field selection in Jupyter.
- Missing-value cleanup before grouped statistics.
- Install-count conversion from string to numeric format.
- Category aggregation for rating, installs, and price.
- Free vs. paid app distribution and currency inspection.
- Matplotlib visualizations for rating and price by category.

## Future Improvements

- Move notebook logic into a reusable Python analysis script.
- Add richer visualizations for installs, content ratings, monetization, and category share.
- Add correlation analysis between installs, price, ratings, and rating count.
- Build an interactive dashboard with Streamlit or Plotly.
