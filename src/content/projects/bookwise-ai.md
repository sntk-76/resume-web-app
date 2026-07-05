---
title: "Bookwise AI"
category: "AI Product"
summary: "Semantic recommendation product with an expanded 7,000+ book catalog, stronger embeddings, richer metadata, improved ranking, and a live deployed search experience."
coverImage: "/images/projects/bookwise-ai-cover.png"
githubUrl: "https://github.com/sntk-76/bookwise-ai"
demoUrl: "https://botverio.com/bookwise/"
featured: true
techStack:
  - Python
  - Streamlit
  - Sentence-BERT
  - Airflow
  - GCP
  - Terraform
  - Google Sheets API
impact:
  - "Uses semantic retrieval instead of keyword-only matching."
  - "Expands recommendation quality with a broader catalog and stronger embedding model."
  - "Connects data preparation, embedding generation, ranking, product UI, and feedback logging."
order: 5
---

## Overview

Bookwise AI is an end-to-end recommendation application that lets users describe the kind of book they want in natural language and returns semantically relevant titles. Instead of relying only on keyword matching, the system embeds both user intent and enriched book descriptions, then ranks candidates by semantic similarity.

The updated version combines dataset cleaning, metadata enrichment, catalog expansion, stronger embedding generation, vector-based retrieval, live app delivery, feedback logging, data artifact orchestration, and cloud-ready infrastructure.

## Problem

Book discovery is often open-ended. A user may describe mood, theme, style, or memory rather than an exact title or genre. Simple filters and keyword matching are weak for this kind of intent.

## Solution

The system cleans and enriches a book catalog, generates sentence-transformer embeddings for book descriptions, embeds the user's query with the same model, and ranks the catalog through semantic similarity with improved search text and filtering. The app displays recommended books with similarity scores, cover images, descriptions, and external search links.

## Technical Highlights

- Natural-language semantic search with `sentence-transformers/all-MiniLM-L12-v2`.
- Expanded recommendation catalog to 7,000+ books with broader source coverage.
- Precomputed embedding matrix for efficient recommendation.
- Metadata enrichment and search-text construction for stronger semantic context.
- Live web interface for recommendation delivery.
- Google Sheets feedback logging through service-account credentials.
- Airflow DAGs for raw, cleaned, enriched, and embedding artifact uploads.
- Terraform resources for Google Cloud Storage and BigQuery datasets.

## Future Improvements

- Replace full-matrix cosine search with FAISS, Annoy, or ScaNN for larger catalogs.
- Add genre, language, rating, and publication-year filters.
- Build a feedback analytics dashboard from logged query and satisfaction data.
- Containerize the Streamlit app for managed cloud deployment.
