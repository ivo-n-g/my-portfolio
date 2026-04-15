import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      navbar: {
        experience: "Experience",
        projects: "Projects",
        education: "Education",
        skills: "Skills"
      },
      header: {
        summary: "Ambitious and hardworking early-career professional with hands-on experience in banking operations and retail management, plus strong programming skills spanning Python, web technologies, and SQL.",
        location: "Kigali, Rwanda"
      },
      experience: {
        title: "Experience",
        brewbox: {
          role: "Manager",
          company: "Brew Box Coffee Shop",
          period: "August 2024 – January 2025",
          points: [
            "Managed day-to-day operations, staff scheduling, and cash reconciliation for a high-traffic coffee shop.",
            "Trained baristas on drink standards, service quality, and safety, improving consistency and customer satisfaction.",
            "Oversaw inventory, vendor coordination, and cost controls to reduce waste and maintain margins.",
            "Resolved customer issues promptly, maintaining a welcoming environment and repeat business."
          ]
        },
        zigama: {
          role: "Intern",
          company: "Zigama CSS Bank",
          period: "June 2022 – August 2022",
          points: [
            "Supported branch operations with account updates, document verification, and queue management.",
            "Assisted with data entry, basic reconciliations, and reporting using spreadsheets/SQL under supervision.",
            "Observed compliance procedures and customer KYC/AML workflows to ensure accurate records.",
            "Collaborated with teams to streamline routine tasks and improve turnaround time."
          ]
        }
      },
      projects: {
        title: "Projects",
        globalInsight: {
          name: "Global Insight",
          description: "A data-driven platform providing comprehensive global analytics and insights."
        },
        countryAggregate: {
          name: "Country Aggregate",
          description: "An analytical tool for aggregating and visualizing socio-economic data by country."
        },
        viewGithub: "View on GitHub"
      },
      education: {
        title: "Education",
        certifications: "Certifications",
        university: {
          name: "Adventist University of Central Africa",
          degree: "Bachelor in Software engineering (June 2024–Present)"
        },
        highschool: {
          name: "Greenhills Academy",
          degree: "High School Diploma (2023)"
        },
        cisco: {
          name: "Introduction to Networking",
          org: "Cisco Academy (2025)"
        }
      },
      skills: {
        technical: "Technical Skills",
        qualities: "Qualities",
        qualitiesList: ["Punctual", "Ambitious", "Hardworking"],
        other: "Other: Barista",
        leadership: "Leadership & Awards",
        award: {
          title: "Participant, 17th Standards Olympiads",
          org: "Representing Rwanda (2022)",
          description: "Competed on national stage demonstrating analytical rigor, teamwork, and standards literacy."
        }
      },
      footer: {
        rights: "All rights reserved.",
        builtWith: "Built with React & TypeScript"
      }
    }
  },
  fr: {
    translation: {
      navbar: {
        experience: "Expérience",
        projects: "Projets",
        education: "Éducation",
        skills: "Compétences"
      },
      header: {
        summary: "Professionnel en début de carrière, ambitieux et travailleur, avec une expérience pratique des opérations bancaires et de la gestion de détail, ainsi que de solides compétences en programmation (Python, technologies web et SQL).",
        location: "Kigali, Rwanda"
      },
      experience: {
        title: "Expérience",
        brewbox: {
          role: "Directeur",
          company: "Brew Box Coffee Shop",
          period: "Août 2024 – Janvier 2025",
          points: [
            "Gestion des opérations quotidiennes, de la planification du personnel et du rapprochement de trésorerie.",
            "Formation des baristas aux standards de boissons, à la qualité du service et à la sécurité.",
            "Supervision de l'inventaire, coordination des fournisseurs et contrôle des coûts.",
            "Résolution rapide des problèmes clients, maintenant un environnement accueillant."
          ]
        },
        zigama: {
          role: "Stagiaire",
          company: "Banque Zigama CSS",
          period: "Juin 2022 – Août 2022",
          points: [
            "Soutien aux opérations de succursale : mises à jour de comptes, vérification de documents.",
            "Aide à la saisie de données, rapprochements de base et rapports (tableurs/SQL).",
            "Observation des procédures de conformité et des flux KYC/AML.",
            "Collaboration pour rationaliser les tâches courantes et améliorer les délais."
          ]
        }
      },
      projects: {
        title: "Projets",
        globalInsight: {
          name: "Global Insight",
          description: "Une plateforme axée sur les données fournissant des analyses et des informations mondiales complètes."
        },
        countryAggregate: {
          name: "Country Aggregate",
          description: "Un outil analytique pour agréger et visualiser des données socio-économiques par pays."
        },
        viewGithub: "Voir sur GitHub"
      },
      education: {
        title: "Éducation",
        certifications: "Certifications",
        university: {
          name: "Université Adventiste d'Afrique Centrale",
          degree: "Licence en Génie Logiciel (Juin 2024–Présent)"
        },
        highschool: {
          name: "Académie Greenhills",
          degree: "Diplôme d'études secondaires (2023)"
        },
        cisco: {
          name: "Introduction au Réseautage",
          org: "Cisco Academy (2025)"
        }
      },
      skills: {
        technical: "Compétences Techniques",
        qualities: "Qualités",
        qualitiesList: ["Ponctuel", "Ambitieux", "Travaillant"],
        other: "Autre : Barista",
        leadership: "Leadership et Prix",
        award: {
          title: "Participant, 17ème Olympiades des Normes",
          org: "Représentant le Rwanda (2022)",
          description: "Compétition au niveau national démontrant rigueur analytique, travail d'équipe et maîtrise des normes."
        }
      },
      footer: {
        rights: "Tous droits réservés.",
        builtWith: "Construit avec React & TypeScript"
      }
    }
  },
  es: {
    translation: {
      navbar: {
        experience: "Experiencia",
        projects: "Proyectos",
        education: "Educación",
        skills: "Habilidades"
      },
      header: {
        summary: "Profesional ambicioso y trabajador al inicio de su carrera con experiencia práctica en operaciones bancarias y gestión minorista, además de sólidas habilidades de programación en Python, tecnologías web y SQL.",
        location: "Kigali, Ruanda"
      },
      experience: {
        title: "Experiencia",
        brewbox: {
          role: "Gerente",
          company: "Brew Box Coffee Shop",
          period: "Agosto 2024 – Enero 2025",
          points: [
            "Gestión de operaciones diarias, programación de personal y conciliación de caja.",
            "Capacitación de baristas en estándares de bebidas, calidad de servicio y seguridad.",
            "Supervisión de inventario, coordinación con proveedores y control de costos.",
            "Resolución oportuna de problemas de clientes, manteniendo un ambiente acogedor."
          ]
        },
        zigama: {
          role: "Pasante",
          company: "Banco Zigama CSS",
          period: "Junio 2022 – Agosto 2022",
          points: [
            "Apoyo en operaciones de sucursal con actualizaciones de cuentas y verificación de documentos.",
            "Asistencia en entrada de datos, conciliaciones básicas e informes usando SQL.",
            "Observación de procedimientos de cumplimiento y flujos de trabajo KYC/AML.",
            "Colaboración con equipos para agilizar tareas rutinarias y mejorar tiempos de respuesta."
          ]
        }
      },
      projects: {
        title: "Proyectos",
        globalInsight: {
          name: "Global Insight",
          description: "Una plataforma impulsada por datos que proporciona análisis y conocimientos globales completos."
        },
        countryAggregate: {
          name: "Country Aggregate",
          description: "Una herramienta analítica para agregar y visualizar datos socioeconómicos por país."
        },
        viewGithub: "Ver en GitHub"
      },
      education: {
        title: "Educación",
        certifications: "Certificaciones",
        university: {
          name: "Universidad Adventista de África Central",
          degree: "Grado en Ingeniería de Software (Junio 2024–Presente)"
        },
        highschool: {
          name: "Academia Greenhills",
          degree: "Diploma de Secundaria (2023)"
        },
        cisco: {
          name: "Introducción a Redes",
          org: "Cisco Academy (2025)"
        }
      },
      skills: {
        technical: "Habilidades Técnicas",
        qualities: "Cualidades",
        qualitiesList: ["Puntual", "Ambicioso", "Trabajador"],
        other: "Otro: Barista",
        leadership: "Liderazgo y Premios",
        award: {
          title: "Participante, 17ª Olimpiadas de Estándares",
          org: "Representando a Ruanda (2022)",
          description: "Competencia a nivel nacional demostrando rigor analítico, trabajo en equipo y alfabetización en estándares."
        }
      },
      footer: {
        rights: "Todos los derechos reservados.",
        builtWith: "Construido con React y TypeScript"
      }
    }
  },
  zh: {
    translation: {
      navbar: {
        experience: "工作经验",
        projects: "项目经验",
        education: "教育背景",
        skills: "技能专长"
      },
      header: {
        summary: "充满抱负、刻苦钻研的职场新人，在银行业务和零售管理方面拥有实践经验，并具备涵盖 Python、Web 技术和 SQL 的强大编程技能。",
        location: "卢旺达，基加利"
      },
      experience: {
        title: "工作经验",
        brewbox: {
          role: "经理",
          company: "Brew Box 咖啡店",
          period: "2024年8月 – 2025年1月",
          points: [
            "管理日常运营、员工排班以及高客流量咖啡店的现金对账。",
            "对咖啡师进行饮品标准、服务质量和安全方面的培训，提高一致性和客户满意度。",
            "监督库存、供应商协调和成本控制，以减少浪费并保持利润率。",
            "及时解决客户问题，维持温馨的环境 and 回头客。"
          ]
        },
        zigama: {
          role: "实习生",
          company: "Zigama CSS 银行",
          period: "2022年6月 – 2022年8月",
          points: [
            "通过账户更新、文件验证和排队管理支持分行运营。",
            "在监督下使用电子表格/SQL 协助数据输入、基本对账和报告。",
            "观察合规程序和客户 KYC/AML 工作流程，确保记录准确。",
            "与团队协作简化日常任务并缩短周转时间。"
          ]
        }
      },
      projects: {
        title: "项目经验",
        globalInsight: {
          name: "Global Insight",
          description: "一个数据驱动的平台，提供全面的全球分析和见解。"
        },
        countryAggregate: {
          name: "Country Aggregate",
          description: "一个用于按国家汇总和可视化社会经济数据的分析工具。"
        },
        viewGithub: "在 GitHub 上查看"
      },
      education: {
        title: "教育背景",
        certifications: "专业认证",
        university: {
          name: "中非基督复临安息日会大学",
          degree: "软件工程学士 (2024年6月至今)"
        },
        highschool: {
          name: "格林希尔斯学院",
          degree: "高中毕业证书 (2023年)"
        },
        cisco: {
          name: "网络基础入门",
          org: "思科网络学院 (2025年)"
        }
      },
      skills: {
        technical: "技术技能",
        qualities: "个人特质",
        qualitiesList: ["守时", "有抱负", "刻苦"],
        other: "其他：咖啡师",
        leadership: "领导力与奖项",
        award: {
          title: "第17届国际标准奥林匹克竞赛参赛者",
          org: "代表卢旺达 (2022年)",
          description: "在国家级舞台上竞技，展现了严密的分析能力、团队协作和标准素养。"
        }
      },
      footer: {
        rights: "版权所有。",
        builtWith: "使用 React 和 TypeScript 构建"
      }
    }
  },
  ko: {
    translation: {
      navbar: {
        experience: "경력사항",
        projects: "프로젝트",
        education: "학력사항",
        skills: "보유기술"
      },
      header: {
        summary: "은행 업무 및 소매 관리 분야의 실무 경험과 Python, 웹 기술, SQL을 아우르는 강력한 프로그래밍 능력을 갖춘 야심 차고 성실한 신입 전문가입니다.",
        location: "르완다 키갈리"
      },
      experience: {
        title: "경력사항",
        brewbox: {
          role: "매니저",
          company: "Brew Box 커피숍",
          period: "2024년 8월 – 2025년 1월",
          points: [
            "유동 인구가 많은 커피숍의 일상 운영, 직원 일정 관리 및 현금 정산 관리.",
            "음료 표준, 서비스 품질 및 안전에 대한 바리스타 교육을 통해 일관성 및 고객 만족도 향상.",
            "재고 관리, 공급업체 조율 및 비용 관리를 통해 낭비 감소 및 마진 유지.",
            "고객 문제를 신속하게 해결하여 환대하는 분위기와 재방문 고객 유지."
          ]
        },
        zigama: {
          role: "인턴",
          company: "Zigama CSS 은행",
          period: "2022년 6월 – 2022년 8월",
          points: [
            "계좌 업데이트, 문서 확인 및 대기열 관리를 통한 지점 운영 지원.",
            "감독하에 스프레드시트/SQL을 사용한 데이터 입력, 기본 정산 및 보고 지원.",
            "정확한 기록 보관을 위해 규정 준수 절차 및 고객 KYC/AML 워크플로 관찰.",
            "루틴한 업무를 간소화하고 처리 시간을 단축하기 위해 팀과 협업."
          ]
        }
      },
      projects: {
        title: "프로젝트",
        globalInsight: {
          name: "Global Insight",
          description: "포괄적인 글로벌 분석 및 통찰력을 제공하는 데이터 기반 플랫폼입니다."
        },
        countryAggregate: {
          name: "Country Aggregate",
          description: "국가별 사회 경제적 데이터를 집계하고 시각화하기 위한 분석 도구입니다."
        },
        viewGithub: "GitHub에서 보기"
      },
      education: {
        title: "학력사항",
        certifications: "자격증",
        university: {
          name: "중앙아프리카 재림교 대학",
          degree: "소프트웨어 공학 학사 (2024년 6월 – 현재)"
        },
        highschool: {
          name: "Greenhills Academy",
          degree: "고등학교 졸업 (2023년)"
        },
        cisco: {
          name: "네트워킹 입문",
          org: "Cisco Academy (2025년)"
        }
      },
      skills: {
        technical: "기술 스택",
        qualities: "강점",
        qualitiesList: ["시간 엄수", "야심 찬", "근면 성실"],
        other: "기타: 바리스타",
        leadership: "리더십 및 수상 내역",
        award: {
          title: "제17회 표준 올림피아드 참가",
          org: "르완다 대표 (2022년)",
          description: "분석적 엄밀성, 팀워크 및 표준 리터러시를 입증하며 국가 대표로 경쟁함."
        }
      },
      footer: {
        rights: "모든 권리 보유.",
        builtWith: "React 및 TypeScript로 구축됨"
      }
    }
  },
  rw: {
    translation: {
      navbar: {
        experience: "Uburambe",
        projects: "Imishinga",
        education: "Amashuri",
        skills: "Ubumenyi"
      },
      header: {
        summary: "Ndi umunyamwete mu ntangiriro z'umwuga wanjye, mfite uburambe mu mirimo ya banki no gucunga amaduka, hamwe n'ubumenyi bukomeye muri gahunda za mudasobwa nka Python, ikoranabuhanga rya web, na SQL.",
        location: "Kigali, u Rwanda"
      },
      experience: {
        title: "Uburambe mu kazi",
        brewbox: {
          role: "Umuyobozi",
          company: "Brew Box Coffee Shop",
          period: "Kanama 2024 – Mutarama 2025",
          points: [
            "Nacunze imirimo ya buri munsi, gahunda z'abakozi, no kugenzura amafaranga mu iduka ry'ikawa rikorerwamo n'abantu benshi.",
            "Nahaye amahugurwa abategura ikawa ku bijyanye n'ireme ry'ibinyobwa, serivisi nziza, n'umutekano, bituma serivisi irushaho kuba nziza.",
            "Nagenzuye ibikoresho, imikoranire n'abatanga ibicuruzwa, no kugabanya ibyangizwa kugira ngo inyungu igumeho.",
            "Nakemuye ibibazo by'abakiriya vuba, nshyira imbere uburyo bwo kubakirana urugwiro kugira ngo bagaruke."
          ]
        },
        zigama: {
          role: "Umumenyerezamwuga",
          company: "Zigama CSS Bank",
          period: "Kamena 2022 – Kanama 2022",
          points: [
            "Nafashije mu mirimo y'ishami nko kuvugurura konti, kugenzura inyandiko, no kuyobora imirongo y'abakiriya.",
            "Nafashije mu kwinjiza amakuru mu mashini, kugenzura imibare y'ibanze, no gukora raporo nifashishije spreadsheets/SQL ngenzurwa.",
            "Nize amategeko n'uburyo bwo kugenzura abakiriya (KYC/AML) kugira ngo inyandiko zibe zizewe.",
            "Nafatanyije n'ikipe mu koroshya imirimo ya buri munsi no kwihutisha serivisi."
          ]
        }
      },
      projects: {
        title: "Imishinga",
        globalInsight: {
          name: "Global Insight",
          description: "Urubuga rwibanda ku makuru rutanga isesengura ryimbitse ry'ibintu biba ku isi."
        },
        countryAggregate: {
          name: "Country Aggregate",
          description: "Igikoresho cy'isesengura cyifashishwa mu gukusanya no kwerekana amakuru y'imibereho n'ubukungu by'ibihugu."
        },
        viewGithub: "Reba kuri GitHub"
      },
      education: {
        title: "Amashuri",
        certifications: "Impamyabumenyi",
        university: {
          name: "Kaminuza y'Abadiventisti muri Afurika yo hagati (AUCA)",
          degree: "Impamyabumenyi y'icyiciro cya kabiri cya kaminuza muri Software Engineering (Kamena 2024–Kugeza ubu)"
        },
        highschool: {
          name: "Greenhills Academy",
          degree: "Impamyabumenyi y'amashuri yisumbuye (2023)"
        },
        cisco: {
          name: "Intangiriro z'imiyoboro (Networking)",
          org: "Cisco Academy (2025)"
        }
      },
      skills: {
        technical: "Ubumenyi mu bya tekiniki",
        qualities: "Imyitwarire",
        qualitiesList: ["Kubahiriza igihe", "Umunyamwete", "Umukozi ukomeye"],
        other: "Ibindi: Gutegura ikawa (Barista)",
        leadership: "Ubuyobozi n'Ibihembo",
        award: {
          title: "Uwitabiriye imikino ya 17 y'amajonjora (Standards Olympiads)",
          org: "Ahagarariye u Rwanda (2022)",
          description: "Narushanijwe ku rwego rw'igihugu nerekana ubushobozi bwo gusesengura, gukorera mu ikipe, n'ubumenyi ku bipimo ngenderwaho."
        }
      },
      footer: {
        rights: "Uburenganzira bwose ni ubw'uwagakoze.",
        builtWith: "Yubatswe nifashishije React & TypeScript"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
