---
title: "Bookwise AI"
category: "AI Product"
summary: "Semantic recommendation application that turns natural-language reading intent into embeddings, retrieves relevant books, presents results in Streamlit, and logs feedback for improvement."
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
  - "Connects data preparation, embedding generation, product UI, and feedback logging."
  - "Shows how applied AI can be packaged into a usable recommendation workflow."
order: 5
---

## Overview

Bookwise AI is an end-to-end recommendation application that lets users describe the kind of book they want in natural language and returns semantically relevant titles. Instead of relying only on keyword matching, the system embeds both user intent and enriched book descriptions, then ranks candidates by semantic similarity.

The project combines dataset cleaning, metadata enrichment, embedding generation, vector-based retrieval, Streamlit delivery, feedback logging, data artifact orchestration, and cloud-ready infrastructure.

## Problem

Book discovery is often open-ended. A user may describe mood, theme, style, or memory rather than an exact title or genre. Simple filters and keyword matching are weak for this kind of intent.

## Solution

The system cleans and enriches a book catalog, generates Sentence-BERT embeddings for book descriptions, embeds the user's query with the same model, and ranks the catalog through cosine similarity. The Streamlit interface displays recommended books with similarity scores, cover images, descriptions, and external search links.

## Technical Highlights

- Natural-language semantic search with `sentence-transformers/all-MiniLM-L6-v2`.
- Precomputed embedding matrix for efficient recommendation.
- Google Books metadata enrichment for stronger descriptions and book context.
- Streamlit UI for recommendation delivery.
- Google Sheets feedback logging through service-account credentials.
- Airflow DAGs for raw, cleaned, enriched, and embedding artifact uploads.
- Terraform resources for Google Cloud Storage and BigQuery datasets.

## Future Improvements

- Replace full-matrix cosine search with FAISS, Annoy, or ScaNN for larger catalogs.
- Add genre, language, rating, and publication-year filters.
- Build a feedback analytics dashboard from logged query and satisfaction data.
- Containerize the Streamlit app for managed cloud deployment.
