export const aimlQuestions = [
  // ==========================================
  // BASIC LEVEL (40 QUESTIONS: 1 - 40)
  // ==========================================

  // --- TOPIC: NUMPY (BASIC: Q1 - Q6) ---
  {
    questionNumber: 1,
    questionText: "What is the primary multi-dimensional array object provided by the NumPy library?",
    options: ["nlist", "ndarray", "matrix_array", "pylist"],
    correctOption: 1,
    difficulty: "basic",
    explanation: "NumPy's core data structure is 'ndarray' (n-dimensional array), which stores homogeneous elements efficiently in contiguous memory blocks."
  },
  {
    questionNumber: 2,
    questionText: "Which NumPy function is used to create an array of evenly spaced values within a given interval specifying start, stop, and step?",
    options: ["np.linspace()", "np.range()", "np.arange()", "np.interval()"],
    correctOption: 2,
    difficulty: "basic",
    explanation: "np.arange(start, stop, step) returns evenly spaced values within a half-open interval [start, stop) with a defined step size."
  },
  {
    questionNumber: 3,
    questionText: "Which attribute of a NumPy ndarray returns a tuple representing the dimensions of the array?",
    options: [".dim", ".size", ".shape", ".ndim"],
    correctOption: 2,
    difficulty: "basic",
    explanation: "The '.shape' attribute returns a tuple of integers indicating the size of the array in each dimension (e.g., (3, 4) for 3 rows and 4 columns)."
  },
  {
    questionNumber: 4,
    questionText: "What does the expression `np.zeros((3, 3))` produce in NumPy?",
    options: [
      "A 1D array of 3 zeros",
      "A 3x3 two-dimensional array populated entirely with 0.0 floating-point values",
      "An empty 3x3 array containing uninitialized random memory",
      "A 3x3 identity matrix with ones on the diagonal"
    ],
    correctOption: 1,
    difficulty: "basic",
    explanation: "np.zeros((3, 3)) constructs a 2D array of shape 3x3 filled with zeros of default float64 data type."
  },
  {
    questionNumber: 5,
    questionText: "In NumPy, what does the standard multiplication operator `*` between two arrays of identical shape perform?",
    options: [
      "Matrix dot product multiplication",
      "Element-wise multiplication",
      "Cross product",
      "Outer product"
    ],
    correctOption: 1,
    difficulty: "basic",
    explanation: "In NumPy, '*' performs element-by-element multiplication. For linear algebra matrix multiplication, '@' or np.matmul() / np.dot() is used."
  },
  {
    questionNumber: 6,
    questionText: "Which attribute of a NumPy array gives the total count of elements stored across all dimensions?",
    options: [".length", ".size", ".count", ".total"],
    correctOption: 1,
    difficulty: "basic",
    explanation: "The '.size' attribute returns the total number of elements in the array, which equals the product of all elements in .shape."
  },

  // --- TOPIC: PANDAS (BASIC: Q7 - Q12) ---
  {
    questionNumber: 7,
    questionText: "What are the two foundational data structures provided by the Pandas library?",
    options: [
      "Series (1D) and DataFrame (2D)",
      "Array (1D) and Table (2D)",
      "List (1D) and Dictionary (2D)",
      "Vector (1D) and Matrix (2D)"
    ],
    correctOption: 0,
    difficulty: "basic",
    explanation: "Pandas provides 'Series' for 1-dimensional labeled homogeneous arrays and 'DataFrame' for 2-dimensional labeled tabular data with columns of potentially different types."
  },
  {
    questionNumber: 8,
    questionText: "Which Pandas function is standardly used to load and parse data from a comma-separated values (.csv) file into a DataFrame?",
    options: ["pd.load_csv()", "pd.read_csv()", "pd.import_csv()", "pd.parse_csv()"],
    correctOption: 1,
    difficulty: "basic",
    explanation: "pd.read_csv('filepath') is the primary Pandas function for reading tabular data from a CSV file into a DataFrame."
  },
  {
    questionNumber: 9,
    questionText: "Which Pandas DataFrame method displays the first N rows of a dataset (defaulting to 5 rows)?",
    options: ["df.first()", "df.preview()", "df.head()", "df.top()"],
    correctOption: 2,
    difficulty: "basic",
    explanation: "df.head(n=5) returns the top n rows of the DataFrame, useful for quickly verifying loaded data."
  },
  {
    questionNumber: 10,
    questionText: "Which Pandas method generates descriptive summary statistics including count, mean, standard deviation, min, and percentiles for numerical columns?",
    options: ["df.summary()", "df.describe()", "df.info()", "df.stats()"],
    correctOption: 1,
    difficulty: "basic",
    explanation: "df.describe() generates analytical summary statistics for numeric series and columns, while df.info() displays index/column data types and null counts."
  },
  {
    questionNumber: 11,
    questionText: "Which method in Pandas is used to drop rows or columns containing missing values (NaN)?",
    options: ["df.remove_nan()", "df.clean()", "df.dropna()", "df.filter_null()"],
    correctOption: 2,
    difficulty: "basic",
    explanation: "df.dropna() removes rows (axis=0) or columns (axis=1) with null/missing values, while df.fillna() imputes missing values."
  },
  {
    questionNumber: 12,
    questionText: "How do you select a single column named 'salary' from a Pandas DataFrame `df` as a Series?",
    options: ["df.select('salary')", "df['salary']", "df.get_col('salary')", "df.index('salary')"],
    correctOption: 1,
    difficulty: "basic",
    explanation: "Square bracket syntax df['salary'] or attribute syntax df.salary extracts the column as a 1D Pandas Series."
  },

  // --- TOPIC: MATPLOTLIB (BASIC: Q13 - Q17) ---
  {
    questionNumber: 13,
    questionText: "Which sub-module of Matplotlib is most commonly imported to provide a MATLAB-like state-machine plotting interface?",
    options: ["matplotlib.draw", "matplotlib.pyplot", "matplotlib.canvas", "matplotlib.plots"],
    correctOption: 1,
    difficulty: "basic",
    explanation: "'import matplotlib.pyplot as plt' is the standard convention that provides functions to construct figures and plots in Matplotlib."
  },
  {
    questionNumber: 14,
    questionText: "Which basic function in `matplotlib.pyplot` is used to create a 2D line plot of x versus y?",
    options: ["plt.draw_line()", "plt.line()", "plt.plot()", "plt.graph()"],
    correctOption: 2,
    difficulty: "basic",
    explanation: "plt.plot(x, y) renders points and connects them with lines on the current active axes."
  },
  {
    questionNumber: 15,
    questionText: "Which function in Matplotlib is called at the end of plotting code to render and display all active figures to the user?",
    options: ["plt.render()", "plt.show()", "plt.display()", "plt.view()"],
    correctOption: 1,
    difficulty: "basic",
    explanation: "plt.show() opens a GUI window or renders the inline figure output to display visualizations."
  },
  {
    questionNumber: 16,
    questionText: "How do you set a descriptive text label for the horizontal axis in a Matplotlib plot?",
    options: ["plt.x_text('Label')", "plt.xlabel('Label')", "plt.axis_x('Label')", "plt.set_x('Label')"],
    correctOption: 1,
    difficulty: "basic",
    explanation: "plt.xlabel('label_text') sets the label for the x-axis, and plt.ylabel() sets the y-axis label."
  },
  {
    questionNumber: 17,
    questionText: "Which Matplotlib function is used to create a scatter plot showing individual data points without connecting lines?",
    options: ["plt.scatter()", "plt.points()", "plt.dots()", "plt.bubbles()"],
    correctOption: 0,
    difficulty: "basic",
    explanation: "plt.scatter(x, y) creates a scatter plot of individual coordinate markers without line segments connecting them."
  },

  // --- TOPIC: SEABORN (BASIC: Q18 - Q22) ---
  {
    questionNumber: 18,
    questionText: "Which underlying Python visualization library does Seaborn build directly on top of?",
    options: ["Plotly", "Bokeh", "Matplotlib", "Altair"],
    correctOption: 2,
    difficulty: "basic",
    explanation: "Seaborn is built on top of Matplotlib and integrates closely with Pandas data structures to provide high-level statistical plotting."
  },
  {
    questionNumber: 19,
    questionText: "Which Seaborn function is specifically used to visualize matrix data (such as correlation matrices) using color gradients?",
    options: ["sns.colormap()", "sns.matrixplot()", "sns.heatmap()", "sns.gridplot()"],
    correctOption: 2,
    difficulty: "basic",
    explanation: "sns.heatmap(data) plots rectangular data as a color-encoded matrix, widely used for visualizing feature correlation matrices (df.corr())."
  },
  {
    questionNumber: 20,
    questionText: "Which Seaborn plot is used to display the count of observations in each categorical bin using bars?",
    options: ["sns.barplot()", "sns.histplot()", "sns.countplot()", "sns.catcount()"],
    correctOption: 2,
    difficulty: "basic",
    explanation: "sns.countplot() is a specialized categorical plot that shows the counts of observations in each category using bars (like a histogram across categorical variables)."
  },
  {
    questionNumber: 21,
    questionText: "Which Seaborn function generates pairwise bivariate distributions and univariate histograms across all numerical columns in a dataset?",
    options: ["sns.pairplot()", "sns.jointplot()", "sns.multigrid()", "sns.relplot()"],
    correctOption: 0,
    difficulty: "basic",
    explanation: "sns.pairplot(df) creates an n-by-n matrix of plots visualizing all pairwise relationships and univariate distributions in one command."
  },
  {
    questionNumber: 22,
    questionText: "Which visualization plot in Seaborn shows the five-number summary (minimum, first quartile, median, third quartile, and maximum) along with outlier markers?",
    options: ["sns.violinplot()", "sns.stripplot()", "sns.boxplot()", "sns.rugplot()"],
    correctOption: 2,
    difficulty: "basic",
    explanation: "sns.boxplot() visualizes the distribution of quantitative data through quartiles, identifying outliers beyond the interquartile range (IQR)."
  },

  // --- TOPIC: SCIKIT-LEARN (BASIC: Q23 - Q28) ---
  {
    questionNumber: 23,
    questionText: "Which function from `sklearn.model_selection` is used to split arrays or matrices into random train and test subsets?",
    options: ["split_dataset()", "train_test_split()", "k_fold_split()", "partition_data()"],
    correctOption: 1,
    difficulty: "basic",
    explanation: "from sklearn.model_selection import train_test_split splits input features X and target y into training and evaluation sets."
  },
  {
    questionNumber: 24,
    questionText: "In the Scikit-Learn estimator API, which standard method is called to train an algorithm on data?",
    options: [".train(X, y)", ".fit(X, y)", ".learn(X, y)", ".optimize(X, y)"],
    correctOption: 1,
    difficulty: "basic",
    explanation: "All Scikit-Learn estimators implement the '.fit(X, y)' method to estimate model parameters from training data."
  },
  {
    questionNumber: 25,
    questionText: "Which method is called on a trained Scikit-Learn model to generate predictions for new, unseen input samples?",
    options: [".predict(X)", ".infer(X)", ".evaluate(X)", ".forecast(X)"],
    correctOption: 0,
    difficulty: "basic",
    explanation: "Once an estimator is fitted, calling '.predict(X)' produces the predicted class labels or continuous target values for feature matrix X."
  },
  {
    questionNumber: 26,
    questionText: "Which Scikit-Learn module contains standard model evaluation functions such as `accuracy_score`, `precision_score`, and `confusion_matrix`?",
    options: ["sklearn.evaluation", "sklearn.scoring", "sklearn.metrics", "sklearn.analysis"],
    correctOption: 2,
    difficulty: "basic",
    explanation: "The 'sklearn.metrics' module includes score functions, performance metrics, and pairwise metrics for model validation."
  },
  {
    questionNumber: 27,
    questionText: "Which Scikit-Learn class is used to fit an ordinary least squares linear regression model?",
    options: [
      "sklearn.linear_model.LinearRegression",
      "sklearn.regression.OLS",
      "sklearn.models.LinearModel",
      "sklearn.neural_network.LinearRegressor"
    ],
    correctOption: 0,
    difficulty: "basic",
    explanation: "sklearn.linear_model.LinearRegression fits a linear model with coefficients w to minimize the residual sum of squares between observed targets and predicted targets."
  },
  {
    questionNumber: 28,
    questionText: "What is the purpose of setting the `random_state` parameter (e.g., `random_state=42`) in Scikit-Learn functions like `train_test_split`?",
    options: [
      "To improve the model's prediction accuracy",
      "To ensure reproducible and identical data splits across different runs",
      "To increase the speed of execution",
      "To enable multi-threading on CPU cores"
    ],
    correctOption: 1,
    difficulty: "basic",
    explanation: "Passing an integer seed to 'random_state' ensures deterministic behavior, allowing experiments, splits, and initializations to be reproduced exactly."
  },

  // --- TOPIC: GITHUB & GIT (BASIC: Q29 - Q34) ---
  {
    questionNumber: 29,
    questionText: "Which Git command initializes an empty local Git version control repository in the current folder?",
    options: ["git start", "git create", "git init", "git new"],
    correctOption: 2,
    difficulty: "basic",
    explanation: "'git init' sets up a new Git repository by creating a hidden .git directory containing metadata and object databases."
  },
  {
    questionNumber: 30,
    questionText: "Which Git command creates a new commit in repository history with an inline descriptive message?",
    options: [
      "git save -m 'message'",
      "git commit -m 'message'",
      "git push -m 'message'",
      "git snapshot -m 'message'"
    ],
    correctOption: 1,
    difficulty: "basic",
    explanation: "'git commit -m \"message\"' permanently records the current staged changes to the repository history."
  },
  {
    questionNumber: 31,
    questionText: "Which command stages all modified, added, and tracked files in the working directory for the next commit?",
    options: ["git stage --all", "git add .", "git commit --all", "git append *"],
    correctOption: 1,
    difficulty: "basic",
    explanation: "'git add .' adds all changes in the current directory and its subdirectories to the staging area (index)."
  },
  {
    questionNumber: 32,
    questionText: "What is GitHub primarily used for in software engineering?",
    options: [
      "A Python compiler and virtual environment",
      "A cloud-based hosting platform for Git repositories providing collaboration, code review, and CI/CD tools",
      "A database server for relational SQL data",
      "An operating system for deploying neural networks"
    ],
    correctOption: 1,
    difficulty: "basic",
    explanation: "GitHub is a web-based hosting platform for version control using Git, offering pull requests, issue tracking, GitHub Actions, and team collaboration."
  },
  {
    questionNumber: 33,
    questionText: "Which Git command sends locally committed changes on the active branch up to a remote repository such as GitHub?",
    options: ["git upload", "git sync", "git push", "git forward"],
    correctOption: 2,
    difficulty: "basic",
    explanation: "'git push <remote> <branch>' updates remote references along with associated objects from the local branch."
  },
  {
    questionNumber: 34,
    questionText: "Which Git command fetches changes from a remote repository and immediately integrates them into the current local branch?",
    options: ["git clone", "git fetch --all", "git pull", "git download"],
    correctOption: 2,
    difficulty: "basic",
    explanation: "'git pull' executes 'git fetch' followed by 'git merge' to bring the local branch up to date with its remote tracking counterpart."
  },

  // --- TOPIC: MACHINE LEARNING FUNDAMENTALS (BASIC: Q35 - Q40) ---
  {
    questionNumber: 35,
    questionText: "What defines Supervised Learning in machine learning?",
    options: [
      "Learning without any human supervision or evaluation",
      "Training algorithms on labeled datasets where inputs correspond to known ground-truth targets",
      "Finding hidden clusters in data without any target labels",
      "Agents taking actions in an environment to maximize cumulative reward"
    ],
    correctOption: 1,
    difficulty: "basic",
    explanation: "Supervised learning algorithms map inputs X to targets y using historical training examples where labels are provided."
  },
  {
    questionNumber: 36,
    questionText: "What is the primary difference between Regression and Classification machine learning tasks?",
    options: [
      "Regression predicts continuous quantitative values, while Classification predicts discrete categorical class labels",
      "Regression uses neural networks, while Classification uses decision trees",
      "Classification is unsupervised, while Regression is supervised",
      "Regression works only on images, while Classification works only on tabular data"
    ],
    correctOption: 0,
    difficulty: "basic",
    explanation: "Regression outputs continuous numbers (e.g., house prices, temperatures), whereas classification outputs discrete categories (e.g., spam/not spam, disease positive/negative)."
  },
  {
    questionNumber: 37,
    questionText: "What happens when a machine learning model is 'Overfitting'?",
    options: [
      "The model is too simple and performs poorly on both training and test data",
      "The model memorizes the training data and noise, performing exceptionally well on training data but poorly on unseen test data",
      "The model trains too quickly due to high learning rate",
      "The model fails to converge to an optimal solution"
    ],
    correctOption: 1,
    difficulty: "basic",
    explanation: "Overfitting occurs when a high-complexity model captures noise and sample-specific idiosyncrasies of the training set, failing to generalize to new data."
  },
  {
    questionNumber: 38,
    questionText: "What is the primary motivation for holding out a Test Set when training machine learning models?",
    options: [
      "To increase the overall training dataset size",
      "To evaluate the model's true generalization performance on completely unseen data",
      "To speed up the backpropagation process",
      "To reduce memory consumption during inference"
    ],
    correctOption: 1,
    difficulty: "basic",
    explanation: "A held-out test set provides an unbiased evaluation of model accuracy and generalization to ensure the model did not merely memorize training instances."
  },
  {
    questionNumber: 39,
    questionText: "In a tabular machine learning dataset, what does the term 'Feature' refer to?",
    options: [
      "The final predicted output or label",
      "An individual measurable property, attribute, or input column used to make predictions",
      "The loss function computed after each epoch",
      "A specific row or sample in the database"
    ],
    correctOption: 1,
    difficulty: "basic",
    explanation: "Features (represented as columns in X) are explanatory input variables (e.g., age, income, square footage) supplied to the model to predict the target y."
  },
  {
    questionNumber: 40,
    questionText: "In classification, how is the 'Accuracy' metric calculated?",
    options: [
      "True Positives / (True Positives + False Positives)",
      "Total Correct Predictions / Total Number of Predictions",
      "True Positives / (True Positives + False Negatives)",
      "False Positives / (True Negatives + False Positives)"
    ],
    correctOption: 1,
    difficulty: "basic",
    explanation: "Accuracy is defined as (TP + TN) / (TP + TN + FP + FN), which is the proportion of total correct predictions out of all predictions made."
  },

  // ==========================================
  // MEDIUM LEVEL (10 QUESTIONS: 41 - 50)
  // ==========================================

  // --- TOPIC: NUMPY (MEDIUM: Q41) ---
  {
    questionNumber: 41,
    questionText: "According to NumPy's Broadcasting rules, what is the shape of the resulting array when adding two arrays `A` of shape `(4, 1)` and `B` of shape `(1, 3)`?",
    options: [
      "The operation raises a ValueError because the shapes do not match",
      "(4, 3)",
      "(1, 1)",
      "(4, 4)"
    ],
    correctOption: 1,
    difficulty: "medium",
    explanation: "NumPy broadcasting compares trailing dimensions right to left. Dimensions are compatible when they are equal or one of them is 1. Dimension 1 stretches from 1 to 3, and dimension 0 stretches from 1 to 4, yielding a resulting shape of (4, 3)."
  },

  // --- TOPIC: PANDAS (MEDIUM: Q42 - Q43) ---
  {
    questionNumber: 42,
    questionText: "What is the critical distinction between `.loc[]` and `.iloc[]` in Pandas when slicing rows or columns?",
    options: [
      "`.loc[]` works only on columns, while `.iloc[]` works only on rows",
      "`.loc[]` is label-based indexing and includes the end endpoint of slices; `.iloc[]` is integer position-based and excludes the stop index",
      "`.iloc[]` can modify data in place, whereas `.loc[]` returns only immutable copies",
      "There is no functional difference; they are aliases of each other"
    ],
    correctOption: 1,
    difficulty: "medium",
    explanation: "df.loc[] indexes by explicit index/column labels and includes the stop slice label, whereas df.iloc[] operates strictly on zero-based integer positional coordinates and excludes the stop index (like standard Python slices)."
  },
  {
    questionNumber: 43,
    questionText: "When combining two DataFrames using `df1.merge(df2, on='user_id', how='left')`, what is the behavior for rows where `user_id` in `df1` has no matching key in `df2`?",
    options: [
      "Those rows from `df1` are dropped from the resulting DataFrame",
      "An exception is raised due to missing keys",
      "All rows from `df1` are preserved, and columns originating from `df2` are populated with `NaN`",
      "Rows from `df1` are populated with zero across all columns"
    ],
    correctOption: 2,
    difficulty: "medium",
    explanation: "A LEFT OUTER JOIN retains every record from the left DataFrame (df1). Any attributes coming from the right DataFrame (df2) without a matching key are filled with NaN."
  },

  // --- TOPIC: MATPLOTLIB & SEABORN (MEDIUM: Q44) ---
  {
    questionNumber: 44,
    questionText: "In Matplotlib's Object-Oriented interface, what does the command `fig, axes = plt.subplots(nrows=2, ncols=2)` return?",
    options: [
      "A list of 4 independent Figure instances",
      "A single Figure canvas object and a 2x2 NumPy array containing the individual Axes subplots",
      "A single plot combining 4 lines on one set of axes",
      "A DataFrame containing the coordinate geometry of the plots"
    ],
    correctOption: 1,
    difficulty: "medium",
    explanation: "plt.subplots(2, 2) creates a top-level Figure object (fig) and a 2-dimensional NumPy ndarray of shape (2, 2) containing the 4 Axes instances (axes[row, col]) for granular object-oriented plotting."
  },

  // --- TOPIC: SCIKIT-LEARN (MEDIUM: Q45 - Q46) ---
  {
    questionNumber: 45,
    questionText: "Why is it critical to call `.fit_transform()` only on the training set and only `.transform()` on the test set when applying preprocessing (e.g., `StandardScaler`)?",
    options: [
      "Calling .fit() on the test set will crash Python with a MemoryError",
      "To prevent Data Leakage, ensuring test data distribution statistics (mean and variance) do not leak into the training workflow",
      "Because the test set does not support numerical operations",
      "Scikit-learn transforms data into integers if .fit() is called twice"
    ],
    correctOption: 1,
    difficulty: "medium",
    explanation: "Fitting a scaler computes parameters like mean and standard deviation. Calculating these on the test set leaks future test distribution properties into the training pipeline, leading to overly optimistic evaluation metrics."
  },
  {
    questionNumber: 46,
    questionText: "What is the primary benefit of using `sklearn.pipeline.Pipeline` in a machine learning workflow?",
    options: [
      "It automatically runs models on multiple GPUs simultaneously",
      "It bundles preprocessing steps and estimators into one atomic object, guaranteeing that transformations are fitted strictly on training folds during cross-validation",
      "It replaces pandas DataFrames with optimized C-structures",
      "It automatically tunes hyperparameters without user specification"
    ],
    correctOption: 1,
    difficulty: "medium",
    explanation: "Pipelines chain data transformers and estimators into a single cohesive pipeline, preventing data leakage during cross-validation, simplifying hyperparameter tuning with GridSearchCV, and streamlining deployment."
  },

  // --- TOPIC: GITHUB & GIT (MEDIUM: Q47 - Q48) ---
  {
    questionNumber: 47,
    questionText: "What is the key difference in Git history when integrating a feature branch using `git rebase main` compared to `git merge main`?",
    options: [
      "Rebase deletes the feature branch commits permanently",
      "`git merge` preserves full chronological branching history with a merge commit; `git rebase` rewrites feature commits on top of main, producing a linear commit history",
      "`git rebase` can only be performed on remote servers, not locally",
      "`git merge` cannot resolve file conflicts, whereas rebase does it automatically"
    ],
    correctOption: 1,
    difficulty: "medium",
    explanation: "'git rebase' replays your feature commits one-by-one on top of the latest commit of the base branch, rewriting commit SHAs to create a clean, linear history. 'git merge' preserves exact commit timestamps and creates a dedicated merge commit."
  },
  {
    questionNumber: 48,
    questionText: "Under what specific condition does Git raise a 'Merge Conflict' during a branch integration or pull?",
    options: [
      "Whenever two branches have different commit author names",
      "When competing modifications are made to the exact same line(s) of a file in both branches, or when a file is modified in one branch and deleted in the other",
      "Whenever more than 10 files are changed in a single pull request",
      "When the local Git version differs from the remote GitHub server version"
    ],
    correctOption: 1,
    difficulty: "medium",
    explanation: "Git automatically merges non-overlapping changes, but halts and flags a merge conflict when both branches modified the same lines in conflicting ways, requiring manual developer intervention."
  },

  // --- TOPIC: MACHINE LEARNING FUNDAMENTALS (MEDIUM: Q49 - Q50) ---
  {
    questionNumber: 49,
    questionText: "In the context of the Bias-Variance tradeoff, what characteristics define a model suffering from High Variance?",
    options: [
      "High bias, strong underfitting, and poor performance on both training and test data",
      "Low training error but high generalization error on test data, caused by extreme sensitivity to small fluctuations in training samples",
      "A linear decision boundary that oversimplifies complex relationships",
      "Insufficient model parameters and low model capacity"
    ],
    correctOption: 1,
    difficulty: "medium",
    explanation: "High variance models (e.g., unpruned decision trees, complex deep networks) fit the specific noise in training data closely, leading to low training error but significant variation and error on unseen test sets."
  },
  {
    questionNumber: 50,
    questionText: "In an extreme class-imbalanced problem (e.g., fraud detection with 99.9% non-fraud and 0.1% fraud), why is Accuracy an inadequate metric, and what metrics are preferred?",
    options: [
      "Accuracy requires too much computational time; Mean Squared Error is preferred",
      "A dummy classifier predicting 'non-fraud' for every transaction achieves 99.9% accuracy; Precision, Recall, and the PR-AUC / F1-Score are far more informative",
      "Accuracy cannot be calculated on binary labels; cross-entropy must be used instead",
      "Accuracy only evaluates continuous variables, not classification tasks"
    ],
    correctOption: 1,
    difficulty: "medium",
    explanation: "The 'accuracy paradox' allows a trivial model that predicts the majority class 100% of the time to show misleadingly high accuracy. For imbalanced data, Precision (positive predictive value), Recall (sensitivity to fraud), and F1-score evaluate true positive discovery reliably."
  }
];
