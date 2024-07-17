---
colorlinks: true
---
# Phase 1 - Item development

This folder contains material related to generation and validation of candidate items --- *see **section 4** in the paper.*

## Root files
At the root of this folder are the following 5 files:

### Terms collection results (1 file)

- ```Collected_terms_and_concepts.csv```: all terms collected as described in ***section 4.1*** of the paper. For each stem, this file reports a count of the number of pool ("corpora") in which it was found, the original terms ("tokens"), the associated conceptual family ("CONCEPT") and the density in terms of number of sources (number of papers for **pool 1** and **pool 2**, number of experts for **pool 3**)

### Generated items (1 file)
- ```Generated_candidate_items.csv```: list of all generated candidate items as described in ***section 4.2*** of the paper. For each item, identified by its ID, this file shows the initial and final wording (as of this stage of the work), and the root and secondary terms used among collected terms.

### Items validation survey (3 files)
- ```Expert_validation_survey.pdf```: PDF printout of the survey we sent to experts for validation of the items we generated as described in ***section 4.3*** of the paper.
- ```Expert_validation_survey data.csv```: the raw data collected from the survey.
- ```Expert_validation_survey-results.csv```: survey results analysis with median, modes, mean and validation status for candidate items.


## Subfolders
In the ```/terms collection and analysis details``` subfolder, we share additional files:

- ```Pool [...] .csv``` files [numbered 1 to 3] contain collected terms in pools from the literature review, indicating sources.
- ```comments_studies_shared_sources.csv``` shows how sources overlap between pool 1 (terms from questionnaires in previous studies, see *Table 4* in ***Appendix A.1*** in the paper) and pool 2 (terms from reported participants' comments in previous studies, see *Table 5* in ***Appendix A.1*** in the paper).

Two subfolders contain material related to the item generation process described:

- ```/expert propositions pattern analysis``` (5 files): contains additional files related to analysis of phrasing patterns in expert statements (see ***Section 4.2*** and ***Appendix B.2*** in the paper)
	- ```All collected statements - annotaded.pdf``` shows how we split complex sentences collected as item propositions from experts (as described in ***Appendix B.2.1***), and how we categorized words by roles (as described in ***Appendix B.2.2***)
	-   ```expert_propositions-analysis.csv``` shows the complete expert statement analysis, including the transformation into conceptual versions of statements.
	-   ```alluvial_graph.pdf``` shows a visual representation of the conceptual versions of statements.
	-   ```TreeVis-input.txt``` and   ```TreeVis-input-no_quality.txt``` can be used as input in Jason Davies' [online word tree tool] (https://www.jasondavies.com/wordtree/) for visualizing conceptual versions of statements as a tree---respectively [with]( https://www.jasondavies.com/wordtree/?source=eaa9913ad956d79943d7481f597885cd&prefix=(S)&phrase-line=1), or [without](https://www.jasondavies.com/wordtree/?source=775db99d3a93c079ec1e17de70145f87&prefix=(S)&phrase-line=1), the ```Subject_quality```, ```Verb_quality``` and ```Objecy_quality``` categories.
- ```/conceptual analysis``` contains results files from coding collected terms with conceptual families (see ***Section 4.2*** and ***Appendix B.2.3*** in the paper).
	- ```CONCEPTS-definitions_from_expert_survey.pdf``` shows how CONCEPTS were coded from statements collected in the expert survey (final codes in "Final recoding" column).
	- ```Pool [...] .csv``` files [numbered 1 to 3] contain codes for collected terms in each pool.