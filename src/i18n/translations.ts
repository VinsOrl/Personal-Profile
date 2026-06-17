export type Language = 'en' | 'zh';

export interface Translation {
  nav: {
    home: string;
    profile: string;
    work: string;
    minigame: string;
  };
  langToggle: {
    label: string;
    aria: string;
  };
  themeToggle: {
    toDark: string;
    toLight: string;
  };
  intro: {
    kicker: string;
    titleLead: string;
    titleHighlight: string;
    titleTail: string;
    subtitle: string;
    cta: string;
  };
  profile: {
    titleLead: string;
    titleHighlight: string;
    bioLarge: string;
    bioDetail: string;
    universityTag: string;
    cards: {
      number: string;
      title: string;
      body?: string;
      list?: string[];
    }[];
  };
  work: {
    titleLead: string;
    titleHighlight: string;
    intro: string;
    projects: {
      number: string;
      category: string;
      title: string;
      description: string;
      link: string;
      cta: string;
    }[];
  };
  minigame: {
    titleLead: string;
    titleHighlight: string;
    description: string;
    score: string;
    status: string;
    statusEnded: string;
    statusActive: string;
    statusIdle: string;
    controls: string;
    gameOver: string;
    begin: string;
    restart: string;
  };
  footer: string;
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      home: 'Home',
      profile: 'Profile',
      work: 'Work',
      minigame: 'Mini Game',
    },
    langToggle: {
      label: '中文',
      aria: 'Switch to Traditional Chinese',
    },
    themeToggle: {
      toDark: 'Switch to dark theme',
      toLight: 'Switch to light theme',
    },
    intro: {
      kicker: 'Portfolio 2026',
      titleLead: 'The Intersection of ',
      titleHighlight: 'Intelligence',
      titleTail: ' & Design.',
      subtitle:
        "I'm 林新興, an aspiring Computer Science student building the future through code, AI, and creative digital experiences.",
      cta: 'Discover More',
    },
    profile: {
      titleLead: 'The ',
      titleHighlight: 'Profile',
      bioLarge:
        "I'm an undergraduate student exploring the exciting frontier of Computer Science with a deep focus on Artificial Intelligence and Machine Learning.",
      bioDetail:
        "My academic journey is driven by curiosity about how intelligent agents can learn, reason, and interact with complex environments. Whether it's developing new algorithms or researching agentic systems, I'm constantly seeking to understand how AI can extend beyond passive responses to become truly proactive and adaptive.",
      universityTag: 'Student at National Quemoy University',
      cards: [
        {
          number: '01',
          title: 'Currently Exploring',
          list: [
            'Machine Learning Models',
            'AI Agent Architectures',
            'Reinforcement Learning',
            'Natural Language Processing',
          ],
        },
        {
          number: '02',
          title: 'Technical Focus',
          body: 'Machine Learning: Building and training models for classification, regression, and pattern recognition. Experience with scikit-learn, TensorFlow, and PyTorch.',
        },
        {
          number: '03',
          title: 'Programming',
          body: 'Proficient in Python, with foundational knowledge of Java, C++, and JavaScript for diverse development projects.',
        },
        {
          number: '04',
          title: 'Data Analysis',
          body: 'Transforming raw data into actionable insights through statistical analysis, visualization, and data engineering techniques.',
        },
      ],
    },
    work: {
      titleLead: 'Selected ',
      titleHighlight: 'Work',
      intro:
        'A curated selection of projects where design intent meets engineering craft.',
      projects: [
        {
          number: '01',
          category: 'Website Design — Final Project',
          title: 'DocMind',
          description:
            'My Website Design final project: an intelligent document-focused web experience, designed and built end to end.',
          link: 'https://github.com/VinsOrl/DocMind',
          cta: 'See My Website Design Final Project',
        },
      ],
    },
    minigame: {
      titleLead: 'The ',
      titleHighlight: 'Intermission.',
      description:
        'A minimalist interpretation of the classic Snake. Navigate the grid with precision.',
      score: 'Score',
      status: 'Status',
      statusEnded: 'Ended',
      statusActive: 'Active',
      statusIdle: 'Idle',
      controls: 'Controls: W A S D / Arrows / Swipe',
      gameOver: 'Fin.',
      begin: 'Begin',
      restart: 'Restart',
    },
    footer: '© 2026 林新興. Built with intention.',
  },
  zh: {
    nav: {
      home: '首頁',
      profile: '簡介',
      work: '作品',
      minigame: '小遊戲',
    },
    langToggle: {
      label: 'EN',
      aria: '切換至英文',
    },
    themeToggle: {
      toDark: '切換至深色主題',
      toLight: '切換至淺色主題',
    },
    intro: {
      kicker: '作品集 2026',
      titleLead: '智慧 ',
      titleHighlight: '與設計',
      titleTail: ' 的交會。',
      subtitle:
        '我是林新興，一位充滿熱忱的資訊工程學生，透過程式、人工智慧與創意數位體驗來打造未來。',
      cta: '了解更多',
    },
    profile: {
      titleLead: '個人 ',
      titleHighlight: '簡介',
      bioLarge:
        '我是一名大學生，正在探索資訊工程這片令人興奮的前沿領域，並專注於人工智慧與機器學習。',
      bioDetail:
        '我的學習旅程源於對智慧代理如何學習、推理並與複雜環境互動的好奇心。無論是開發新的演算法，還是研究代理式系統，我都不斷探索人工智慧如何超越被動回應，真正成為主動且具適應力的存在。',
      universityTag: '國立金門大學 學生',
      cards: [
        {
          number: '01',
          title: '目前探索中',
          list: ['機器學習模型', 'AI 代理架構', '強化學習', '自然語言處理'],
        },
        {
          number: '02',
          title: '技術專長',
          body: '機器學習：建立並訓練用於分類、迴歸與模式辨識的模型。具備 scikit-learn、TensorFlow 與 PyTorch 的使用經驗。',
        },
        {
          number: '03',
          title: '程式開發',
          body: '精通 Python，並具備 Java、C++ 與 JavaScript 的基礎能力，可應用於多元開發專案。',
        },
        {
          number: '04',
          title: '資料分析',
          body: '透過統計分析、視覺化與資料工程技術，將原始資料轉化為可行的洞察。',
        },
      ],
    },
    work: {
      titleLead: '精選 ',
      titleHighlight: '作品',
      intro: '精選專案集結，呈現設計理念與工程實作的交會。',
      projects: [
        {
          number: '01',
          category: '網頁設計 — 期末專案',
          title: 'DocMind',
          description:
            '我的網頁設計期末專案：一個以文件為核心的智慧網頁體驗，由我從零到一完整設計與開發。',
          link: 'https://github.com/VinsOrl/DocMind',
          cta: '查看我的網頁設計期末專案',
        },
      ],
    },
    minigame: {
      titleLead: '小小 ',
      titleHighlight: '中場。',
      description: '經典貪食蛇的極簡詮釋。精準地穿梭於格線之間。',
      score: '分數',
      status: '狀態',
      statusEnded: '已結束',
      statusActive: '進行中',
      statusIdle: '待機中',
      controls: '操作：W A S D／方向鍵／滑動',
      gameOver: '結束。',
      begin: '開始',
      restart: '重新開始',
    },
    footer: '© 2026 林新興。以心打造。',
  },
};
