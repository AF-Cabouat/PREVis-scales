# Notebooks - Validation study data analysis

This folder contains the notebooks used to perform analyses of data collected in the validation survey—see ***Section 6.3*** and ***Appendix Q*** in the paper. Running the notebooks will reproduce Figure 4 (without the annotations we added for the paper) and Figure 5-lower (in the main paper).


Follow the explanations in this readme file to run the code on your machine.
[1. Requirements:](#requirements) start by setting up the environment.

[2. Prepare to run notebooks:](#how-to-run-notebooks) read on how to run individual notebooks.

[3. Run notebooks in order:](#running-notebooks-in-order) get order to run individual notebooks and expected Input/Output files.

[4. List of generated figures:](#list-of-generated-figures-in-data_analysis-folder) if you want to find a specific figure among the output pdf files.

[5. List of generated table:](#list-of-generated-figures-in-data_analysis-folder) if you want to find a specific data file among the output csv files.

---

# Requirements

>**NOTE:** if you setup these requirements before (such as for the PREVis development code) you do not have to do it again.

>*These instructions were tested on a clean Windows 10 installation with the specific requirements noted below, (and specifically [Anaconda Python](https://www.anaconda.com/) for the Python environment). Please note that for the installation of the prerequisites (Anaconda Python) you may need to disable Windows' virus and malware protection—otherwise the installation takes forever (at least in a VirtualBox VM). To do so, open the Windows Settings and then, under "Updates & Security > Windows Security > Virus & threat protection > Virus & threat protection settings > Manage settings" (temporarily) disable "Real-time protection" (but only ever do this in a separate VM, not on your main system).*

## Repository

Download the whole repository to a local file, either via
```
git clone https://github.com/AF-Cabouat/PREVis-scales.git
```
or by downloading the corresponding zip archive and extracting it to a known location.

## Python environment

### Preparation for Python prerequisites under Windows

Under Windows, first install the [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/), then run the command
```
./vs_buildtools.exe --norestart --passive --downloadThenInstall --includeRecommended --add Microsoft.VisualStudio.Workload.NativeDesktop --add Microsoft.VisualStudio.Workload.VCTools --add Microsoft.VisualStudio.Workload.MSBuildTools
```
in the same directory where you downloaded the Microsoft C++ Build Tools installer (i.e., `vs_buildtools.exe`), and reboot.

### Python notebooks

You will need Python 3.9+ to run these notebooks with JupyterLab. Install a respective Python environment (e.g., https://www.anaconda.com/download/ or https://www.python.org/downloads/) as well as the requirements in one go by using
```
pip install -r requirements.txt
```
(using the [`requirements.txt`](/requirements.txt) file in the root of the repository) or use the following commands:
- ```Jupyterlab```: use the ```pip install jupyterlab``` command, or check https://jupyter.org/install
- ```pandas``` *version 2.0*: use the ```pip install pandas==2.0.0``` command, or check https://pandas.pydata.org/docs/getting_started/install.html 
- ```seaborn``` *version 0.13.1*: use the ```pip install seaborn==0.13.1``` command, or check https://seaborn.pydata.org/installing.html

## R environment

### Software installation
R Markdown files can be run with R version 4.3.2 (see CRAN archives: https://cran.rstudio.com/src/base/R-4/ or, specifically for for Windows, download and install the file `R-4.3.2-win.exe` from https://cran.rstudio.com/bin/windows/base/old/4.3.2) and the RStudio software available on https://posit.co/download/rstudio-desktop/.

### Automated installation of R packages
When running the first notebook, the following libraries will be installed if they are missing:
- ```corrplot```
- ```dplyr```
- ```knitr```
- ```lavaan```
- ```mice```
- ```mifa```
- ```psych```
- ```RColorBrewer```
- ```mvnmle```
- ```misty``` **WARNING**: version 0.6.6 (or later) required >> if you already have a version of the misty package older than 0.6.6 the na.test() function for Little's MCAR test will produce a differently structured object and you will get an error.

First, open RStudio with the `Reproduce1-Reliability+MG-CFA.Rmd` notebook from the [research code/Replication - PREVis validation figures/Notebooks](/research%20code/Replication%20-%20PREVis%20validation%20figures/Notebooks) directory in the copy of the repository you extracted or cloned.

> To open a file in RStudio, you can use the "File" > "Open File (Ctrl + O)" command from the top menu in RStudio. Alternatively, you can go to the "Files" tab in the section on the bottom-right, click on the "..." to the right of the "Home" directory and navigate to the [research code/Replication - PREVis validation figures/Notebooks](/research%20code/Replication%20-%20PREVis%20validation%20figures/Notebooks) directory in the copy of the repository you extracted or cloned, and double-click on the file you want to open.
In both cases, the notebook will open at the top-left, taking up the main part of the RStudio window.

After opening the `Reproduce1-Reliability+MG-CFA.Rmd` file, a yelow ribbon will appear at the top of the file's window with a note about the missing R packages mentioned above. Simply click on "Install" to get them installed.

>*If the note does not appear at first, make an attempt to run the first chunk called* ```{r libraries}``` *by clicking on the "Play" (green triangle) button at the top right corner of this chunk, or place your cursor anywhere inside the chunk and press Ctrl + R. The note should appear above after attempting to run the chunk.*

 Once all packages have been installed, you will be ready to run the notebooks as described below.

# How to run notebooks

Run notebooks in order (see [next part of this readme](#running-notebooks-in-order)). The code will generate a ```Data_Analysis/``` folder and output nested structure.

## R notebooks

For each notebook:
1. First run the chunk called ```{r oursetup}``` alone by clicking on the "Play" (green triangle) button at the top right corner of this chunk, or put your cursor inside the chunk and hit Ctrl + R. The ```{r oursetup}``` chunk is usually the first in the file, except for `Reproduce1-Reliability+MG-CFA.Rmd` where it is the second chunk.
2. In the top-right window in RStudio, under the "Environment" tab, find the variable ```my_dir``` in "Values" and verify that it hold the absolute path to the wordking directory for your local [research code/Replication - PREVis development figures](/research%20code/Replication%20-%20PREVis%20development%20figures/) folder. If it is not the case (for example, if the variable's value is a relative path), repeat step 1.
3. Then, use the Run button at the top-right corner of the document window and choose "Run all" at the bottom (or press Ctrl + Alt + R).

Then you can proceed by running the notebook by clicking on "Run" in the local menu of the top-left notebook view and selecting "Run All" (or Ctrl + Alt + R). Proceed with running the notebooks as described next.

You can also choose to generate a file containing the code's complete outputs with the ```knit``` package. To that end, instead click on "Knit" in the local menu of the top-left notebook view and select HTML. All HTML files from our original research project are available on our OSF repository at [osf.io/9cg8j](https://osf.io/9cg8j).

## Jupyter (Python) notebooks

First, start the Jupyter notebook server. Navigate to the folder [research code/Replication - PREVis development figures/](/research%20code/Replication%20-%20PREVis%20development%20figures/) of this repository using the command line (If you are on Anaconda Python it is best to do this using the Anaconda prompt):

    cd folder_path


After reaching the folder, start the Jupyter notebook server there using this command line:

    jupyter notebook

This will open a new window in your default browser with the Jupyter lab environment and the list of files and subfolders:

    /Data
    /Data_Analysis
    /Notebooks

If you are running Jupyter Lab on a new OS installation, please note that it might be the first time the default browser is running which could take a short moment. If this does not work out of the box, you can get more help here: https://docs.jupyter.org/en/latest/install.html.

Navigate to the ```Notebooks/``` folder. For each of the notebooks listed below, open the file by clicking on its name and then from the "Run" menu on Jupyterlab's top menu bar choose "Run all cells".

# Running notebooks in order
Notebooks in this folder are numbered following their running order.

## ```Reproduce1-Reliability+MG-CFA.Rmd``` (R notebook) and ```Reproduce2-CFA_analysis.ipynb``` (Jupyter notebook)
Reliability and dimensionality analyses described in ***section 6.3*** and ***Appendix Q.2*** in the paper. 
- **INPUT file**:
    - ```Data_Analysis/multigroup_ratings.csv```
- **OUTPUT files** in:
    - ```Data_Analysis/generatedData-CFA/```
    - ```Data_Analysis/generatedPlots-CFA/```


## ```Reproduce3-MTMM-matrix-im-rm.Rmd``` (R notebook) 
Multi-Trait Multi-Method matrices generation (csv tables and pdf figures).
- **INPUT file**:
    - ```Data_Analysis/multigroup_ratings.csv```
- **OUTPUT files** in ```Data_Analysis/MTMM_analysis/```

## ```Reproduce4-rating plots.ipynb``` (Jupyter notebook)
PREVis scales average scores point plots with 95% CI, as PDF files.
- **OUTPUT files** in ```Data_Analysis/generatedPlots/ratings/```

---

# List of generated figures in ```Data_Analysis/``` folder

Now, everyhting is done and the resulting figure are in the subfolders from your [research code/Replication - PREVis validation figures/Data_Analysis](/research%20code/Replication%20-%20PREVis%20validation%20figures/Data_Analysis) folder.

## Main paper figures

<code style="color : Gold">Fig. 4</code> is a compound figure based on two different correlation matrices: the scale-level **repeated measures** correlation matrix ```Data_Analysis/MTMM_analysis/MTMM_scale_averages_correlations_rm.pdf``` and the scale-level **independent measures** correlation matrix ```Data_Analysis/MTMM_analysis/MTMM_scale_averages_correlations_im.pdf```. The independent measures were substituted to ```?``` values for the ```extraversion```variable. Refer to appendix R.2.3 with <code style="color : Gold">Fig. 80</code> and <code style="color : Gold">81</code> for detailed explanations.

<code style="color : Gold">Fig. 5</code> (bottom part), shows point estimates with 95% CI for all PREVis scales across all stimuli. PDF file: ```Data_Analysis/RatingPlots/PREVis_subscales_ratings.pdf```

## Screeplots
<code style="color : Gold">Fig. 78</code> shows the screeplot from parallel analysis on the validation study collected data across all stimuli. PDF file : ```generatedPlots-CFA/ScreePlot-All .pdf```. Screeplots for individual stimuli A, B and C are also in the ```generatedPlots-CFA``` subfolder.

## Correlation matrices
<code style="color : Gold">Fig. 79</code> shows the repeated measures correlation matrix for  PREVis items. This figure was manually edited based on the ```Data_Analysis/MTMM_analysis/MTMM_full_items_correlations_rm.pdf``` file. The edits consisted in cropping the data around PREVis items correlations, adjusting the position of the colorscale and changing the color of labels from black to white.

<code style="color : Gold">Fig. 80</code> shows the Multi-Trait Multi-Method **independent measures**
correlation matrix at the scale level. This figure was manually edited based on the ```Data_Analysis/MTMM_analysis/MTMM_scale_averages_correlations_im.pdf``` file. *The edits consisted in removing the color scale, adding annotations, reducing the size of individual squares in the matrix, and converting the diagonal line square into gray, empty squares.*


<code style="color : Gold">Fig. 81</code> shows the Multi-Trait Multi-Method **repreated measures**
correlation matrix at the scale level. This figure was manually edited based on the ```Data_Analysis/MTMM_analysis/MTMM_scale_averages_correlations_rm.pdf``` file. The edits consisted in removing the color scale, adding annotations, reducing the size of individual squares in the matrix, and converting the diagonal line square into gray, empty squares.

<code style="color : Gold">Fig. 82</code> shows the Multi-Trait Multi-Method **independent measures**
correlation matrix at the item level. PDF file: ```Data_Analysis/MTMM_analysis/MTMM_full_items_correlations_im.pdf```

<code style="color : Gold">Fig. 83</code> shows the Multi-Trait Multi-Method **repeated measures**
correlation matrix at the item level. PDF file: ```Data_Analysis/MTMM_analysis/MTMM_full_items_correlations_rm.pdf```

## Rating plots

<code style="color : Gold">Fig. 84</code> to <code style="color : Gold">87</code> show point estimates with 95% CI for each PREVis scales across all stimuli. PDF files in ```Data_Analysis/RatingPlots/PREVis_subscales_ratings_[suffix].pdf``` where the suffix is the scale's name (```Understand```, ```Layout```, ```DataRead```, ```DataFeat```).


<code style="color : Gold">Fig. 88</code> to <code style="color : Gold">99</code> show point estimates with 95% CI for all items of each scale and the scale's average, for each stimulus in the study. PDF files in ```Data_Analysis/RatingPlots/[prefix]-PREVis_items_ratings_[suffix].pdf``` where the prefix is the stimulus letter (```A```, ```B```, ```C```) and the suffix is the scale's name (```Understand```, ```Layout```, ```DataRead```, ```DataFeat```).

---

# List of generated tables in ```Data_Analysis/``` folder

Now, everyhting is done and the resulting data files are in the subfolders from your [research code/Replication - PREVis validation figures/Data_Analysis](/research%20code/Replication%20-%20PREVis%20validation%20figures/Data_Analysis) folder.

## Fits metrics from Confirmatory Factor Analysis

The data for <code style="color : Gold">Table 30</code> can be found in ```models_fit_comparison.csv```. This data is structured in the ```Reproduce2``` Jupyter notebook based on the data files ```fit_indices-Tested_model-[suffix].csv``` with suffixes ```A```, ```B```, ```C``` and ```full_data``` generated from R notebook ```Reproduce1```.

## Reliability analyses results

The data for <code style="color : Gold">Table 31</code> can be found in the ```Data_Analysis/generatedData-CFA/reliability-subscales.csv``` file
