const BOOK_TOPICS = {
    "mathematics": {
        label: "数学",
        description: "这里整理的是我读过的数学相关书籍；有 PDF 的封面支持点击下载，暂无 PDF 的书籍仅展示封面。"
    },
    "statistics": {
        label: "统计学",
        description: "这里整理的是我读过的统计学相关书籍；有 PDF 的封面支持点击下载，暂无 PDF 的书籍仅展示封面。"
    },
    "machine-learning": {
        label: "机器学习",
        description: "这里整理的是我读过的机器学习相关书籍；有 PDF 的封面支持点击下载，暂无 PDF 的书籍仅展示封面。"
    },
    "neural-networks": {
        label: "神经网络",
        description: "这里整理的是我读过的神经网络相关书籍；有 PDF 的封面支持点击下载，暂无 PDF 的书籍仅展示封面。"
    },
    "philosophy": {
        label: "哲学",
        description: "这里整理的是我读过的哲学相关书籍；有 PDF 的封面支持点击下载，暂无 PDF 的书籍仅展示封面。"
    },
    "destiny": {
        label: "命理",
        description: "这里整理的是我读过的命理相关书籍；有 PDF 的封面支持点击下载，暂无 PDF 的书籍仅展示封面。"
    }
};

const BOOK_LIBRARY = {
    "mathematics": [
        {
            title: "Functional Analysis, Sobolev Spaces and Partial Differential Equations",
            author: "Haim Brezis",
            cover: "assets/book-covers/functional-analysis-brezis.png",
            pdf: "assets/books/functional-analysis-brezis.pdf",
            downloadName: "Functional-Analysis-Brezis.pdf"
        },
        {
            title: "数学分析（第三版 上册）",
            author: "陈纪修、于崇华、金路",
            cover: "assets/book-covers/math-analysis-chen-upper.png",
            pdf: "assets/books/math-analysis-chen-upper.pdf",
            downloadName: "数学分析-第三版-上册.pdf"
        },
        {
            title: "数学分析（第三版 下册）",
            author: "陈纪修、于崇华、金路",
            cover: "assets/book-covers/math-analysis-chen-lower.png",
            pdf: "assets/books/math-analysis-chen-lower.pdf",
            downloadName: "数学分析-第三版-下册.pdf"
        },
        {
            title: "高等代数简明教程（上册）",
            author: "蓝以中",
            cover: "assets/book-covers/advanced-algebra-lan-upper.png"
        },
        {
            title: "高等代数简明教程（下册）",
            author: "蓝以中",
            cover: "assets/book-covers/advanced-algebra-lan-lower.jpg"
        },
        {
            title: "测度论与概率论基础",
            author: "程士宏",
            cover: "assets/book-covers/measure-theory-cheng.png"
        }
    ],
    "statistics": [
        {
            title: "Statistical Inference",
            author: "George Casella, Roger L. Berger",
            cover: "assets/book-covers/statistical-inference.png",
            pdf: "assets/books/statistical-inference.pdf",
            downloadName: "Statistical-Inference.pdf"
        },
        {
            title: "All of Nonparametric Statistics",
            author: "Larry Wasserman",
            cover: "assets/book-covers/nonparametric-statistics.png",
            pdf: "assets/books/nonparametric-statistics.pdf",
            downloadName: "All-of-Nonparametric-Statistics.pdf"
        },
        {
            title: "抽样技术",
            author: "金勇进",
            cover: "assets/book-covers/sampling-jin.jpg",
            pdf: "assets/books/sampling-jin.pdf",
            downloadName: "抽样技术.pdf"
        },
        {
            title: "应用回归分析",
            author: "何晓群、刘文卿",
            cover: "assets/book-covers/regression-he.png"
        },
        {
            title: "应用时间序列分析（第5版）",
            author: "易丹辉、王燕",
            cover: "assets/book-covers/applied-time-series-analysis-yi.png"
        },
        {
            title: "应用随机过程（第5版）",
            author: "张波、商豪、邓军",
            cover: "assets/book-covers/applied-stochastic-processes-zhang.png"
        }
    ],
    "machine-learning": [
        {
            title: "贝叶斯网引论",
            author: "张连文、郭海鹏",
            cover: "assets/book-covers/bayesian-networks-zhang.jpg"
        },
        {
            title: "The Elements of Statistical Learning",
            author: "Trevor Hastie, Robert Tibshirani, Jerome Friedman",
            cover: "assets/book-covers/elements-statistical-learning.png",
            pdf: "assets/books/elements-statistical-learning.pdf",
            downloadName: "The-Elements-of-Statistical-Learning-2nd-Edition.pdf"
        }
    ],
    "neural-networks": [
        {
            title: "神经网络与深度学习",
            author: "邱锡鹏",
            cover: "assets/book-covers/neural-networks-qiuxipeng.png",
            pdf: "assets/books/neural-networks-qiuxipeng.pdf",
            downloadName: "神经网络与深度学习-邱锡鹏.pdf"
        }
    ],
    "philosophy": [
        {
            title: "符号逻辑讲义",
            author: "徐明",
            cover: "assets/book-covers/symbolic-logic-xuming.png",
            pdf: "assets/books/symbolic-logic-xuming.pdf",
            downloadName: "符号逻辑讲义-徐明.pdf"
        }
    ],
    "destiny": [
        {
            title: "气功心法",
            author: "孔宪德",
            cover: "assets/book-covers/qigong-xinfa-kong.png"
        }
    ]
};
