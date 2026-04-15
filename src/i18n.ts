import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      navbar: {
        experience: "Experience",
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
        other: "Other: Barista",
        leadership: "Leadership & Awards",
        award: {
          title: "Participant, 17th Standards Olympiads",
          org: "Representing Rwanda (2022)",
          description: "Competed on national stage demonstrating analytical rigor, teamwork, and standards literacy."
        }
      }
    }
  },
  fr: {
    translation: {
      navbar: {
        experience: "Expérience",
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
        other: "Autre : Barista",
        leadership: "Leadership et Prix",
        award: {
          title: "Participant, 17ème Olympiades des Normes",
          org: "Représentant le Rwanda (2022)",
          description: "Compétition au niveau national démontrant rigueur analytique, travail d'équipe et maîtrise des normes."
        }
      }
    }
  },
  es: {
    translation: {
      navbar: {
        experience: "Experiencia",
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
        other: "Otro: Barista",
        leadership: "Liderazgo y Premios",
        award: {
          title: "Participante, 17ª Olimpiadas de Estándares",
          org: "Representando a Ruanda (2022)",
          description: "Competencia a nivel nacional demostrando rigor analítico, trabajo en equipo y alfabetización en estándares."
        }
      }
    }
  },
  zh: {
    translation: {
      navbar: {
        experience: "工作经验",
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
            "及时解决客户问题，维持温馨的环境和回头客。"
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
        other: "其他：咖啡师",
        leadership: "领导力与奖项",
        award: {
          title: "第17届国际标准奥林匹克竞赛参赛者",
          org: "代表卢旺达 (2022年)",
          description: "在国家级舞台上竞技，展现了严密的分析能力、团队协作和标准素养。"
        }
      }
    }
  },
  ko: {
    translation: {
      navbar: {
        experience: "경력사항",
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
        other: "기타: 바리스타",
        leadership: "리더십 및 수상 내역",
        award: {
          title: "제17회 표준 올림피아드 참가",
          org: "르완다 대표 (2022년)",
          description: "분석적 엄밀성, 팀워크 및 표준 리터러시를 입증하며 국가 대표로 경쟁함."
        }
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
