/**
 * Projects Data Configuration
 *
 * Centralized registry of flagship software engineering projects by Mohamed Diarra.
 * All visual assets (screenshots, posters, and H.264 MP4 demonstration videos) are
 * organized by project inside `src/assets/projects/<project-id>/`.
 */

// ============================================================================
// SUGU-AI ORGANIZED MEDIA ASSETS
// ============================================================================
import suguPortalImg from '../assets/projects/sugu-ai/screenshots/01-platform-portal.png';
import suguDashboardImg from '../assets/projects/sugu-ai/screenshots/02-merchant-dashboard.png';
import suguPosCartImg from '../assets/projects/sugu-ai/screenshots/03-pos-active-cart.png';
import suguPosReceiptImg from '../assets/projects/sugu-ai/screenshots/04-pos-sale-receipt.png';
import suguStockImg from '../assets/projects/sugu-ai/screenshots/05-stock-inventory.png';
import suguOcrImg from '../assets/projects/sugu-ai/screenshots/06-arrivage-ocr-importer.png';
import suguArdoiseImg from '../assets/projects/sugu-ai/screenshots/07-ardoise-customer-credit.png';
import suguFarafinImg from '../assets/projects/sugu-ai/screenshots/08-farafin-ai-assistant.png';
import suguReportsImg from '../assets/projects/sugu-ai/screenshots/09-accounting-reports.png';
import suguSaasAdminImg from '../assets/projects/sugu-ai/screenshots/10-saas-admin-offline-license.png';

import suguWalkthroughPoster from '../assets/projects/sugu-ai/posters/01-merchant-walkthrough-poster.jpg';
import suguSaasAdminPoster from '../assets/projects/sugu-ai/posters/02-saas-admin-backoffice-poster.jpg';

import suguWalkthroughVideo from '../assets/projects/sugu-ai/videos/01-suguai-merchant-walkthrough.mp4';
import suguSaasAdminVideo from '../assets/projects/sugu-ai/videos/02-suguai-saas-admin-backoffice.mp4';

// ============================================================================
// AUTOSOS MALI ORGANIZED MEDIA ASSETS
// ============================================================================
import autoWelcomeImg from '../assets/projects/autosos-mali/screenshots/01-welcome-onboarding.png';
import autoHomeCopilotImg from '../assets/projects/autosos-mali/screenshots/02-home-copilot-ia.png';
import autoServicesHubImg from '../assets/projects/autosos-mali/screenshots/03-services-hub.png';
import autoMechanicsMapImg from '../assets/projects/autosos-mali/screenshots/04-nearby-mechanics-map.png';
import autoRoadsideReqImg from '../assets/projects/autosos-mali/screenshots/05-roadside-request-estimate.png';
import autoTowingPricingImg from '../assets/projects/autosos-mali/screenshots/06-towing-tiered-pricing.png';
import autoLiveTrackingImg from '../assets/projects/autosos-mali/screenshots/07-live-mechanic-tracking.png';
import autoChatTireEngineImg from '../assets/projects/autosos-mali/screenshots/08-chatbot-tire-engine-diag.png';
import autoChatSafetyImg from '../assets/projects/autosos-mali/screenshots/09-chatbot-driving-maintenance.png';
import autoAuthGpsImg from '../assets/projects/autosos-mali/screenshots/10-auth-gps-login.png';
import autoSimulatorImg from '../assets/projects/autosos-mali/screenshots/11-ios-simulator-preview.png';

import autoFullJourneyPoster from '../assets/projects/autosos-mali/posters/01-iphone-full-journey-poster.jpg';
import autoChatbotDemoPoster from '../assets/projects/autosos-mali/posters/02-breakdown-chatbot-demo-poster.jpg';
import autoOnboardingPoster from '../assets/projects/autosos-mali/posters/03-auth-mechanic-onboarding-poster.jpg';

import autoFullJourneyVideo from '../assets/projects/autosos-mali/videos/01-autosos-iphone-full-journey.mp4';
import autoChatbotDemoVideo from '../assets/projects/autosos-mali/videos/02-autosos-breakdown-chatbot-demo.mp4';
import autoOnboardingVideo from '../assets/projects/autosos-mali/videos/03-autosos-auth-mechanic-onboarding.mp4';

export const projectsData = [
  {
    id: "sugu-ai",
    title: "SuguAI",
    subtitle: "Intelligent Business, Inventory & Point-of-Sale (POS) Platform",
    tagline: "Empowering West African merchants and small businesses with an all-in-one suite combining touchscreen POS, offline-first reliability, and practical AI.",
    category: "Full Stack & AI",
    layoutType: "desktop",
    featured: true,
    statusBadge: "In Production & Evolution",
    currentStatus: "Live commercial platform (suguai.store) with multi-tenant SaaS administration, offline licensing, cross-platform Flutter client, and applied AI modules.",

    // Concise card-level summary
    cardSummary:
      "A resilient retail and inventory management platform tailored for West African merchants, combining fast touchscreen sales, offline data sync, and practical AI automation.",

    // Concise card-level problem & solution
    cardProblem:
      "Paper ledgers and unstable internet cause frequent checkout discrepancies, stockout surprises, and lost sales during outages.",
    cardSolution:
      "An offline-first SQLite POS engine paired with automated invoice OCR ingestion and bilingual commercial AI insights.",

    // 4 clean, scannable capability chips for the card
    cardCapabilities: [
      "Touchscreen POS",
      "Offline-First SQLite",
      "Bilingual AI (Farafin)",
      "Supplier Invoice OCR"
    ],

    // In-depth modal story
    summary:
      "SuguAI is a comprehensive business management platform engineered to modernize retail and wholesale operations across West Africa. It unifies fast checkout counters, real-time stock and valuation tracking, traditional customer credit accounting ('The Slate' / L'Ardoise), multi-tenant SaaS licensing, and applied AI for supplier invoice OCR and bilingual French/Bambara queries.",

    problemSolved:
      "Across West Africa, retail shops, grocery stores, wholesalers, and hardware businesses frequently rely on paper ledgers or disjointed spreadsheets. This leads to checkout discrepancies, untracked inventory shortages, and operational paralysis whenever local internet connections drop.",

    problemPoints: [
      "Fragmented paper records lead to daily checkout discrepancies and unaccounted stock loss.",
      "Unstable internet connectivity paralyzes standard cloud POS software during peak customer hours.",
      "Manual supplier invoice entry and informal credit books create costly accounting bottlenecks."
    ],

    solutionDeveloped:
      "SuguAI replaces fragmented record-keeping with a unified, responsive client interface and resilient multi-tenant backend. Merchants continue recording sales uninterrupted during internet cuts thanks to local SQLite storage and offline licensing, while integrated AI tools automate paper invoice scanning and answer natural-language business queries.",

    solutionPoints: [
      "Offline-First SQLite architecture & offline license generator enable continuous checkout with automatic sync.",
      "Arrivage AI automates inventory ingestion from paper or PDF supplier invoices via optical character recognition (OCR).",
      "Farafin AI provides instant conversational sales, stock, and margin insights in both French and Bambara."
    ],

    targetUsers:
      "Retail merchants, grocery store managers, wholesale distributors, hardware stores, and retail sales teams across West Africa.",

    targetUserList: [
      "Retail Shops & Minimarts",
      "Wholesale Distributors",
      "Hardware & Supply Stores",
      "Commercial Sales Teams"
    ],

    // Architecture & Technical choices
    architectureNote:
      "Decoupled and highly resilient full-stack SaaS architecture. The backend in Python and Django REST Framework (paired with a customized multi-tenant SaaS administration console) ensures relational transaction integrity, JWT security, Wave/Mobile Money subscription tracking, and asynchronous tasks via Celery and Redis. The Flutter/Dart client follows a strict Offline-First pattern: every sale is immediately committed to local SQLite storage before synchronizing seamlessly upon reconnection.",

    techCategories: {
      backend: ["Python", "Django 5", "Django REST Framework", "Multi-Tenant SaaS Admin", "Celery & Redis"],
      frontend: ["Flutter", "Dart", "Web, Desktop & Mobile Responsive UI"],
      database: ["PostgreSQL (Production Server)", "SQLite (Embedded Local Database)"],
      sync: ["Offline-First Architecture", "Offline License Generator & Bi-Directional Sync"],
      ai: ["Arrivage AI (Supplier Invoice OCR)", "Farafin AI (Bilingual NLP in French & Bambara)"],
      services: ["RESTful APIs", "JWT Authentication", "Thermal Receipt Printing & WhatsApp Sharing"]
    },

    techStack: [
      "Python",
      "Django",
      "Django REST",
      "Flutter",
      "Dart",
      "SQLite",
      "Celery & Redis",
      "Offline-First",
      "OCR AI",
      "Farafin NLP"
    ],

    // 7 Core Features mapped to real application screenshots
    features: [
      {
        id: "stock",
        number: "01",
        title: "Inventory & Product Management",
        badge: "Inventory & Traceability",
        screenshotId: "sugu-stock",
        summary: "Catalog creation, real-time quantity tracking, stock valuation & margin analytics, and automated critical low-stock alerts.",
        points: [
          "Rapid product catalog modeling with purchase pricing, selling pricing, profit margin calculation, and barcode identifiers.",
          "Real-time stock quantity tracking updated instantly with each checkout transaction.",
          "Visual reserve gauges and critical stock threshold alerts to prevent unexpected shelf stockouts.",
          "Full stock valuation metrics tracking total inventory cost basis and projected retail margin."
        ]
      },
      {
        id: "pos",
        number: "02",
        title: "Point of Sale (POS) & Fast Checkout",
        badge: "Checkout & Counter",
        screenshotId: "sugu-pos-cart",
        summary: "Responsive touchscreen sales counter with active barcode scanner integration, multi-payment settlement, and WhatsApp/thermal receipts.",
        points: [
          "Ergonomic cart building with one-touch quick additions, instant catalog search, and active handheld scanner ('Douchette Active') support.",
          "Multi-payment settlement workflows: Cash ('Espèces'), Orange Money / Wave, Moov Money, and Customer Credit.",
          "Automatic calculation of cart totals, custom discounts, amount tendered, and exact change to return.",
          "Instant receipt printing and one-click digital receipt sharing directly via WhatsApp."
        ]
      },
      {
        id: "offline",
        number: "03",
        title: "Offline-First Mode, Sync & SaaS Licensing",
        badge: "Operational Resilience",
        screenshotId: "sugu-saas-admin",
        summary: "Uninterrupted checkout without internet via local SQLite storage, backed by offline license provisioning and automatic cloud sync.",
        points: [
          "Complete, uninterrupted checkout operations even during extended grid or network outages.",
          "Instant local write-ahead commit of every sale directly to embedded SQLite storage.",
          "Dedicated Offline License Generator in the SaaS back-office for shops operating in low-connectivity zones.",
          "Automatic non-blocking background synchronization preserving strict accounting integrity."
        ]
      },
      {
        id: "farafin",
        number: "04",
        title: "Farafin — Bilingual AI Commercial Assistant",
        badge: "Conversational Business AI",
        screenshotId: "sugu-farafin",
        summary: "Intelligent conversational assistant communicating in French and Bambara, delivering live answers on sales, stockouts, and best-sellers.",
        points: [
          "Natural language understanding and dialogue in both French and Bambara to empower all shopkeepers and staff.",
          "One-tap and free-text business queries: stock status, daily sales, out-of-stock items, monthly profit, and merchandising advice.",
          "Actionable restocking recommendations synthesized directly from the store's real transaction history."
        ]
      },
      {
        id: "ocr",
        number: "05",
        title: "Arrivage AI — Supplier Invoice OCR",
        badge: "Computer Vision & OCR",
        screenshotId: "sugu-ocr",
        summary: "Automates inventory ingestion by scanning paper photos or ERP PDF supplier invoices to extract products, quantities, and unit costs.",
        points: [
          "Supports multiple ingestion modes: JPG/PNG invoice photos, digital ERP PDFs, live webcam capture, and USB/Bluetooth barcode scanners.",
          "Optical character recognition extracts item descriptions, received quantities, and purchase prices automatically.",
          "Guided scanning tips and interactive verification before committing bulk stock updates."
        ]
      },
      {
        id: "ardoise",
        number: "06",
        title: "Customer Credit Tracking — The Slate (L'Ardoise)",
        badge: "Local Credit Tradition",
        screenshotId: "sugu-ardoise",
        summary: "Digitizes informal commercial credit books to monitor active debtors, solvency status, credit ceilings, and installment repayments.",
        points: [
          " dedicated receivables dashboard tracking total granted credit across active debtors and settled accounts.",
          "Individual customer cards displaying solvency badges, credit ceiling utilization gauges, and full payment history.",
          "Streamlined partial or full debt repayment recording directly linked to shop accounting."
        ]
      },
      {
        id: "reports",
        number: "07",
        title: "Commercial Accounting & Team Governance",
        badge: "Analytics & Governance",
        screenshotId: "sugu-reports",
        summary: "Annual & monthly financial balance sheets, payment method breakdowns, top-product rankings, and role-based team access.",
        points: [
          "Comprehensive 12-month accounting ledger tracking monthly revenue, net profit, and margin percentages.",
          "Visual breakdown of settlements across Cash ('Espèces'), Customer Credit ('Ardoise'), and Mobile Money.",
          "Role-based team management ('Mon Équipe') separating Administrators, Managers, and Cashiers."
        ]
      }
    ],

    // Organized real videos and screenshots
    media: {
      coverImage: suguPosCartImg,
      videos: [
        {
          id: "sugu-video-walkthrough",
          title: "Complete Merchant Platform Walkthrough",
          subtitle: "Dashboard, Stock Valuation, Arrivage AI Invoice OCR, L'Ardoise Credit & Farafin AI",
          duration: "3m 26s",
          deviceTag: "Web & Desktop App",
          orientation: "landscape",
          width: 1280,
          height: 738,
          url: suguWalkthroughVideo,
          poster: suguWalkthroughPoster,
          type: "video/mp4"
        },
        {
          id: "sugu-video-saas-admin",
          title: "SuguAI Multi-Tenant SaaS Back-Office",
          subtitle: "Organizations, MRR & Wave Payments, Subscription Plans & Offline License Generator",
          duration: "0m 36s",
          deviceTag: "SaaS Admin Console",
          orientation: "landscape",
          width: 1280,
          height: 762,
          url: suguSaasAdminVideo,
          poster: suguSaasAdminPoster,
          type: "video/mp4"
        }
      ],
      screenshots: [
        {
          id: "sugu-pos-cart",
          group: "POS & Portal",
          orientation: "landscape",
          width: 1920,
          height: 1080,
          title: "Touchscreen POS & Multi-Payment Cart",
          caption: "Fast checkout counter with active barcode scanner ('Douchette Active'), live stock badges, and Cash / Orange / Wave / Credit payment modes.",
          src: suguPosCartImg
        },
        {
          id: "sugu-pos-receipt",
          group: "POS & Portal",
          orientation: "landscape",
          width: 1920,
          height: 1080,
          title: "Validated Sale, Thermal Receipt & WhatsApp Share",
          caption: "Instant checkout confirmation ('Vente Réussie !') displaying invoice reference, payment breakdown, thermal print trigger, and WhatsApp receipt sharing.",
          src: suguPosReceiptImg
        },
        {
          id: "sugu-portal",
          group: "POS & Portal",
          orientation: "landscape",
          width: 1920,
          height: 1080,
          title: "Store Creation & Multi-Platform Onboarding",
          caption: "Onboarding portal tailoring modules (Inventory, Fast POS, Farafin AI, OCR Invoices, Credit Slate) to each merchant's retail sector.",
          src: suguPortalImg
        },
        {
          id: "sugu-dashboard",
          group: "Analytics & SaaS",
          orientation: "landscape",
          width: 1920,
          height: 1080,
          title: "Merchant Dashboard & Live Bilingual Farafin Widget",
          caption: "Unified store KPIs (7-day revenue, sales count, low-stock alerts), recent activity feed, and embedded French/Bambara Farafin AI assistant.",
          src: suguDashboardImg
        },
        {
          id: "sugu-stock",
          group: "Inventory & AI",
          orientation: "landscape",
          width: 1920,
          height: 1106,
          title: "Inventory Catalog & Critical Stock Filters",
          caption: "Real-time product inventory with critical threshold badges, unit pricing, margin tracking, and quick-launch Arrivage IA button.",
          src: suguStockImg
        },
        {
          id: "sugu-ocr",
          group: "Inventory & AI",
          orientation: "landscape",
          width: 1920,
          height: 1106,
          title: "Arrivage AI — Supplier Invoice OCR Importer",
          caption: "Automated supplier invoice ingestion supporting JPG/PNG photos, digital ERP PDFs, webcam capture, and handheld barcode scanners.",
          src: suguOcrImg
        },
        {
          id: "sugu-farafin",
          group: "Inventory & AI",
          orientation: "landscape",
          width: 1920,
          height: 1106,
          title: "Farafin AI — Commercial Assistant & Best-Seller Insights",
          caption: "Dedicated conversational AI workspace analyzing live store margins and recommending high-velocity product restocking.",
          src: suguFarafinImg
        },
        {
          id: "sugu-ardoise",
          group: "Credit & Reports",
          orientation: "landscape",
          width: 1920,
          height: 1106,
          title: "The Slate (L'Ardoise) — Customer Credit Ledger",
          caption: "Digital receivable tracking with active debtor filters, customer solvency badges, credit limits, and repayment history.",
          src: suguArdoiseImg
        },
        {
          id: "sugu-reports",
          group: "Credit & Reports",
          orientation: "landscape",
          width: 1920,
          height: 1106,
          title: "Accounting Balance Sheet & Payment Breakdown",
          caption: "Annual 2026 accounting summary comparing monthly revenue and payment distribution across Ardoise credit and cash sales.",
          src: suguReportsImg
        },
        {
          id: "sugu-saas-admin",
          group: "Analytics & SaaS",
          orientation: "landscape",
          width: 1920,
          height: 1144,
          title: "Multi-Tenant SaaS Console & Offline License Generator",
          caption: "Centralized SaaS administration tracking active shops, estimated MRR, Wave subscription payments, and offline license provisioning.",
          src: suguSaasAdminImg
        }
      ]
    },

    links: {
      demoUrl: "https://suguai.store",
      demoLabel: "Official Live Website (suguai.store)",
      githubUrl: null,
      isPrivateRepo: true,
      repoStatusText: "Private Repository"
    },

    accentColor: "#6366f1",
    themeGradient: "linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.15) 100%)",
    icon: "store"
  },

  {
    id: "autosos-mali",
    title: "AutoSOS Mali",
    subtitle: "On-Demand Roadside Assistance, Geolocation Dispatch & Vehicle Towing Platform",
    tagline: "Connecting stranded motorists in real time with nearby mechanics and tow truck operators featuring AI diagnostics and transparent pricing.",
    category: "Mobile & Real-Time",
    layoutType: "mobile",
    featured: true,
    statusBadge: "Flutter Mobile App & Real-Time API",
    currentStatus: "Cross-platform Flutter mobile application verified on iOS & iPhone hardware, paired with Google Maps routing, AutoSOS Copilot AI, and Django real-time dispatch architecture.",

    cardSummary:
      "A real-time emergency roadside assistance and vehicle recovery platform connecting stranded motorists with verified nearby mechanics and tow truck operators.",

    cardProblem:
      "Breakdowns on unfamiliar roads leave motorists stranded with arbitrary towing charges, unverified mechanics, and zero arrival visibility.",
    cardSolution:
      "Instant GPS dispatch with live map tracking, upfront distance-based FCFA estimates, and AI diagnostic symptom assessment.",

    cardCapabilities: [
      "Live GPS Dispatch",
      "Tiered Towing Estimates",
      "Real-Time ETA Tracking",
      "AutoSOS Copilot AI"
    ],

    summary:
      "AutoSOS Mali is a mobile emergency roadside assistance platform built to modernize automotive rescue across Bamako and surrounding corridors (such as Kati). It combines automated GPS positioning, transparent FCFA breakdown and towing estimates, live mechanic route tracking with dynamic ETA, one-tap operator calling, and an intelligent diagnostic chatbot (AutoSOS Copilot AI).",

    problemSolved:
      "Experiencing a vehicle breakdown leaves motorists in a vulnerable, high-stress situation: no trusted mechanics nearby, zero visibility over arrival times, arbitrary and inflated towing charges, and difficulty articulating mechanical symptoms accurately.",

    problemPoints: [
      "Roadside breakdowns leave drivers stranded on urban or intercity corridors without verified nearby mechanics.",
      "Unregulated towing services result in arbitrary, unpredictable charges without upfront FCFA pricing transparency.",
      "Motorists struggle to diagnose mechanical symptoms, risking improper recovery equipment dispatch."
    ],

    solutionDeveloped:
      "AutoSOS Mali streamlines and secures roadside rescue from start to finish. Motorists are automatically geolocated upon sign-in, browse available nearby specialists on Google Maps, receive upfront transparent FCFA pricing for on-site repair or towing, track their rescuer live, and consult AutoSOS Copilot AI 24/7.",

    solutionPoints: [
      "High-accuracy Google Maps geolocation pinpoints stranded drivers and available mechanics with live availability badges.",
      "Upfront FCFA pricing for both distance-calculated roadside dispatch and tiered towing formulas ('Simple' vs 'Avec Réparation').",
      "AutoSOS Copilot AI & 24/7 Chatbot guide symptom triage, tire/engine emergencies, and preventive vehicle maintenance."
    ],

    targetUsers:
      "Private motorists, intercity commuters, taxi and rideshare drivers, delivery fleets, independent garages, and towing operators across Mali.",

    targetUserList: [
      "Everyday Private Motorists",
      "Taxi & Commercial Fleets",
      "Verified Garages & Mechanics",
      "Towing & Recovery Operators"
    ],

    architectureNote:
      "Mobile-first real-time dispatch architecture. The Flutter/Dart iOS & Android client integrates Geolocator for automatic GPS coordinate acquisition on authentication and the Google Maps SDK for route polylines, mechanic pin clustering, and Kati–Bamako distance calculation. The Python / Django 5 backend coordinates role-based client and mechanic accounts, pricing estimation, and real-time GPS tracking updates with live distance and ETA metrics.",

    techCategories: {
      frontend: ["Flutter", "Dart", "Google Maps SDK", "Geolocator & Live Route Polylines", "Dio HTTP Client"],
      backend: ["Python", "Django 5", "Django REST Framework", "Role-Based Client & Mechanic Auth"],
      realtime: ["Django Channels", "WebSockets (Live Rescuer Tracking & ETA)", "Timestamped Telemetry"],
      ai: ["AutoSOS Copilot IA (Quick Symptom Triage)", "24/7 Automotive Diagnostic & Maintenance Chatbot"],
      services: ["One-Tap Direct Mechanic Calling", "Verified Mechanic Onboarding ('Inscription Dépanneur')"],
      paymentsPlanned: ["Transparent FCFA Estimation Engine", "Mobile Money Settlement Architecture (Orange Money, Wave)"]
    },

    techStack: [
      "Flutter",
      "Dart",
      "Python",
      "Django 5",
      "Django Channels",
      "WebSockets",
      "Google Maps",
      "Geolocator",
      "Dio",
      "AutoSOS Copilot AI"
    ],

    features: [
      {
        id: "geoloc",
        number: "01",
        title: "Geolocation & Available Mechanics Map",
        badge: "GPS & Google Maps",
        screenshotId: "autosos-mechanics-map",
        summary: "Automated GPS lock with interactive Google Maps visualization of available nearby garages and roadside specialists in Bamako.",
        points: [
          "Automatic GPS coordinate acquisition ('Localisation obtenue') right from authentication and home launch.",
          "Interactive Google Maps view plotting available garages and mobile mechanics with green live pins.",
          "Real-time availability directory ('3 disponibles / Libre') listing specialty tags such as Engine Mechanics or Tire & Battery SOS."
        ]
      },
      {
        id: "assistance",
        number: "02",
        title: "Geolocated Breakdown Request & FCFA Estimate",
        badge: "Emergency Roadside Response",
        screenshotId: "autosos-roadside-request",
        summary: "Rapid dispatch for battery, tire, or engine breakdowns with automatic route calculation and upfront FCFA cost estimation.",
        points: [
          "Guided breakdown categorization (Battery, Flat Tire, Engine Overheating) paired with precise pickup coordinates.",
          "Automated route polyline rendering between the stranded client (e.g., Kati) and responding Bamako workshops.",
          "Upfront distance-computed FCFA estimate (e.g., 7,969 FCFA) displayed transparently before request validation."
        ]
      },
      {
        id: "towing",
        number: "03",
        title: "Customized Towing & Tiered Formula Pricing",
        badge: "Safe Vehicle Recovery",
        screenshotId: "autosos-towing",
        summary: "Dedicated towing workflow offering clear 'Simple Towing' vs 'Towing + Workshop Repair' packages and operator selection.",
        points: [
          "Clear side-by-side formula selection: Standard Towing ('Simple — 8 500 FCFA') or Towing with Repair ('Avec Réparation — 15 500 FCFA').",
          "Direct selection of verified towing specialists (e.g., 'Bakary Coulibaly - Remorquage') with problem description notes.",
          "Interactive map preview displaying exact motorist pickup pin and workshop destination."
        ]
      },
      {
        id: "tracking",
        number: "04",
        title: "Real-Time Mechanic Tracking & Live ETA",
        badge: "Live Telemetry & ETA",
        screenshotId: "autosos-tracking",
        summary: "Live en-route monitoring displaying remaining road distance in kilometers, estimated arrival minutes, and live route polylines.",
        points: [
          "Dedicated 'Suivi du dépanneur' live screen with active green 'Live' telemetry indicator.",
          "Real-time metric cards displaying exact remaining distance (e.g., 13.3 km), dynamic ETA (27 min), and last GPS sync timestamp.",
          "Full-screen Google Maps route visualization tracking the rescuer's journey toward the stranded motorist."
        ]
      },
      {
        id: "copilot",
        number: "05",
        title: "AutoSOS Copilot IA & 24/7 Diagnostic Chatbot",
        badge: "Applied Automotive AI",
        screenshotId: "autosos-home-copilot",
        summary: "Home-screen AI symptom triage chips paired with a 24/7 automotive chatbot advising on emergencies and preventive maintenance.",
        points: [
          "Instant home-screen symptom chips: Engine Overheating/Smoke, Dead Battery, Flat Tire, or Immobilized Vehicle.",
          "Conversational 24/7 AI Chatbot answering practical mechanical queries on tires, engine oil intervals, abnormal noises, and defensive driving.",
          "Guides drivers on immediate roadside safety steps and seamlessly directs critical faults to 24/7 dispatch."
        ]
      },
      {
        id: "comms",
        number: "06",
        title: "One-Tap Mechanic Calling & Partner Onboarding",
        badge: "Direct Coordination",
        screenshotId: "autosos-auth-login",
        summary: "Instant one-tap phone calling from the mechanic directory plus a dedicated verified registration portal for roadside professionals.",
        points: [
          "One-tap call buttons embedded directly on each available mechanic card for immediate voice coordination.",
          "Dedicated 'Connexion Dépanneur' & 'Inscription Dépanneur' workflow capturing company name, phone, GPS location, and primary specialty.",
          "Manual team verification and SMS confirmation workflow ensuring only trusted professionals join the network."
        ]
      },
      {
        id: "payment_reviews",
        number: "07",
        title: "Service Hub, History & Verified Driver Ratings",
        badge: "Trust & Quality Assurance",
        screenshotId: "autosos-services-hub",
        summary: "Unified 5-module emergency hub with intervention history tracking, verified client profiles, and post-service mechanic ratings.",
        points: [
          "Ergonomic 5-card service hub: On-Site Repair, Towing, Nearby Mechanics, Direct Emergency Call, and Driver Reviews ('Avis').",
          "Verified motorist profile ('Client Vérifié • Bamako') centralizing intervention history, safety tips, and ratings.",
          "Community rating loop elevating punctual, honest mechanics across the AutoSOS Mali platform."
        ]
      }
    ],

    media: {
      coverShowcaseImages: [
        autoHomeCopilotImg,
        autoLiveTrackingImg,
        autoTowingPricingImg
      ],
      coverImage: autoLiveTrackingImg,
      videos: [
        {
          id: "autosos-video-iphone-journey",
          title: "Complete Mobile Journey on iPhone",
          subtitle: "Verified Profile, Breakdown Estimate, Tiered Towing Dispatch, Live GPS Tracking & AI Chatbot",
          duration: "1m 41s",
          deviceTag: "iPhone Native Recording",
          orientation: "portrait",
          width: 720,
          height: 1558,
          url: autoFullJourneyVideo,
          poster: autoFullJourneyPoster,
          type: "video/mp4"
        },
        {
          id: "autosos-video-chatbot-demo",
          title: "Roadside Breakdown Dispatch & AI Chatbot Demo",
          subtitle: "Battery/Tire/Engine Categorization & Live Conversational Diagnostic Q&A",
          duration: "2m 42s",
          deviceTag: "iOS Simulator Demo",
          orientation: "portrait",
          width: 720,
          height: 1048,
          url: autoChatbotDemoVideo,
          poster: autoChatbotDemoPoster,
          type: "video/mp4"
        },
        {
          id: "autosos-video-onboarding",
          title: "GPS Sign-In, Theme Toggle & Mechanic Registration",
          subtitle: "Automatic Location Lock, Client Signup & Verified Partner Onboarding ('Inscription Dépanneur')",
          duration: "0m 42s",
          deviceTag: "Auth & Partner Flow",
          orientation: "portrait",
          width: 704,
          height: 1552,
          url: autoOnboardingVideo,
          poster: autoOnboardingPoster,
          type: "video/mp4"
        }
      ],
      screenshots: [
        {
          id: "autosos-home-copilot",
          group: "Copilot AI",
          orientation: "portrait",
          width: 828,
          height: 1792,
          title: "Home Screen & AutoSOS Copilot IA",
          caption: "Digital roadside hub localized to Bamako featuring one-tap AI symptom triage chips (overheating, flat battery, flat tire, immobilized vehicle).",
          src: autoHomeCopilotImg
        },
        {
          id: "autosos-tracking",
          group: "GPS & Dispatch",
          orientation: "portrait",
          width: 828,
          height: 1792,
          title: "Real-Time Mechanic Tracking & Live ETA",
          caption: "Live en-route dashboard showing exact distance (13.3 km), estimated arrival time (27 min), sync timestamp, and active Kati–Bamako route.",
          src: autoLiveTrackingImg
        },
        {
          id: "autosos-roadside-request",
          group: "GPS & Dispatch",
          orientation: "portrait",
          width: 828,
          height: 1792,
          title: "Geolocated Breakdown Request & Price Estimate",
          caption: "Google Maps client pin in Kati with automated Bamako dispatch routing, upfront 7,969 FCFA estimate, and instant validation controls.",
          src: autoRoadsideReqImg
        },
        {
          id: "autosos-towing",
          group: "GPS & Dispatch",
          orientation: "portrait",
          width: 828,
          height: 1792,
          title: "Towing Dispatch & Tiered Formula Pricing",
          caption: "Transparent towing configuration comparing 'Simple' (8,500 FCFA) and 'Avec Réparation' (15,500 FCFA) with direct operator selection.",
          src: autoTowingPricingImg
        },
        {
          id: "autosos-mechanics-map",
          group: "GPS & Dispatch",
          orientation: "portrait",
          width: 828,
          height: 1792,
          title: "Nearby Mechanics Map & Live Directory",
          caption: "Bamako Google Maps view plotting 3 available garages ('Libre') with specialty tags and one-tap green phone call buttons.",
          src: autoMechanicsMapImg
        },
        {
          id: "autosos-services-hub",
          group: "Onboarding & Auth",
          orientation: "portrait",
          width: 828,
          height: 1792,
          title: "5-Module Emergency Services Hub",
          caption: "Quick-access mobile grid covering On-Site Repair, Vehicle Towing, Nearby Mechanics, Emergency Hotline, and Driver Ratings.",
          src: autoServicesHubImg
        },
        {
          id: "autosos-chatbot-diag",
          group: "Copilot AI",
          orientation: "portrait",
          width: 828,
          height: 1792,
          title: "AI Chatbot — Tire & Engine Diagnostics",
          caption: "24/7 automotive assistant providing structured guidance on tire pressure, punctures, oil intervals, and abnormal engine noises.",
          src: autoChatTireEngineImg
        },
        {
          id: "autosos-chatbot-safety",
          group: "Copilot AI",
          orientation: "portrait",
          width: 828,
          height: 1792,
          title: "AI Assistant — Defensive Driving & Maintenance",
          caption: "Preventive maintenance checklists (filters, belts, brake & coolant fluids) and road safety recommendations inside the Tips & Chatbot view.",
          src: autoChatSafetyImg
        },
        {
          id: "autosos-auth-login",
          group: "Onboarding & Auth",
          orientation: "portrait",
          width: 828,
          height: 1792,
          title: "Authentication & Mechanic Portal Access",
          caption: "Sign-in screen confirming automatic GPS lock ('Localisation obtenue') with dedicated client signup and 'Connexion Dépanneur' entry.",
          src: autoAuthGpsImg
        },
        {
          id: "autosos-welcome",
          group: "Onboarding & Auth",
          orientation: "portrait",
          width: 828,
          height: 1792,
          title: "AutoSOS Mobile Welcome Screen (iPhone)",
          caption: "Clean native iPhone launch screen introducing fast, dependable roadside assistance at the motorist's fingertips.",
          src: autoWelcomeImg
        },
        {
          id: "autosos-simulator",
          group: "Onboarding & Auth",
          orientation: "portrait",
          width: 828,
          height: 1792,
          title: "iOS Simulator Cross-Platform Build",
          caption: "Flutter multi-platform build running inside the iPhone 17 iOS Simulator environment during UI and geolocation testing.",
          src: autoSimulatorImg
        }
      ]
    },

    links: {
      demoUrl: null,
      demoLabel: null,
      githubUrl: null,
      isPrivateRepo: true,
      repoStatusText: "Private Repository",
      demoStatusText: "3 Video Demos & 11 Live Screens Included"
    },

    accentColor: "#06b6d4",
    themeGradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(59, 130, 246, 0.15) 100%)",
    icon: "car"
  }
];

/**
 * Filter categories for project gallery
 */
export const projectCategories = [
  "All Projects",
  "Full Stack & AI",
  "Mobile & Real-Time"
];
