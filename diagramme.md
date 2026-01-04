```mermaid
usecaseDiagram

actor Utilisateur as U
actor "Aidant / Accompagnateur" as A
actor Administrateur as AD
actor "Système IA" as IA

rectangle "Application Dima M3ak" {

  (Créer un compte / Se connecter) as UC1
  (Utiliser la commande vocale) as UC2
  (Speech-to-Text) as UC2_1
  (Écouter le contenu) as UC3
  (Text-to-Speech) as UC3_1
  (Rechercher des services accessibles) as UC4
  (Consulter les services) as UC5
  (Donner un feedback) as UC6
  (Analyse intelligente des feedbacks) as UC6_1

  (Gérer les utilisateurs) as UC7
  (Gérer les services) as UC8
  (Surveiller la qualité des services) as UC9
}

%% Utilisateur
U --> UC1
U --> UC2
U --> UC3
U --> UC4
U --> UC6

%% Aidant
A --> UC4
A --> UC5
A --> UC6

%% Administrateur
AD --> UC7
AD --> UC8
AD --> UC9

%% include
UC2 ..> UC2_1 : <<include>>
UC3 ..> UC3_1 : <<include>>
UC6 ..> UC6_1 : <<include>>

%% IA
IA --> UC2_1
IA --> UC3_1
IA --> UC6_1
usecaseDiagram

actor Utilisateur as U
actor "Aidant / Accompagnateur" as A
actor Administrateur as AD
actor "Système IA" as IA

rectangle "Application Dima M3ak" {

  (Créer un compte / Se connecter) as UC1
  (Utiliser la commande vocale) as UC2
  (Speech-to-Text) as UC2_1
  (Écouter le contenu) as UC3
  (Text-to-Speech) as UC3_1
  (Rechercher des services accessibles) as UC4
  (Consulter les services) as UC5
  (Donner un feedback) as UC6
  (Analyse intelligente des feedbacks) as UC6_1

  (Gérer les utilisateurs) as UC7
  (Gérer les services) as UC8
  (Surveiller la qualité des services) as UC9
}

%% Utilisateur
U --> UC1
U --> UC2
U --> UC3
U --> UC4
U --> UC6

%% Aidant
A --> UC4
A --> UC5
A --> UC6

%% Administrateur
AD --> UC7
AD --> UC8
AD --> UC9

%% include
UC2 ..> UC2_1 : <<include>>
UC3 ..> UC3_1 : <<include>>
UC6 ..> UC6_1 : <<include>>

%% IA
IA --> UC2_1
IA --> UC3_1
IA --> UC6_1

```
```mermaid
 useCaseDiagram
    actor "Utilisateur" as U
    actor "Aidant / Accompagnateur" as A
    actor "Administrateur" as AD
    actor "Système IA" as IA <<System>>

    package "Application Dima M3ak" {
        usecase "Créer un compte / Se connecter" as UC1
        usecase "Utiliser la commande vocale" as UC2
        usecase "Speech-to-Text" as UC2_sub
        usecase "Écouter le contenu (TTS)" as UC3
        usecase "Text-to-Speech" as UC3_sub
        usecase "Rechercher des services" as UC4
        usecase "Consulter les services" as UC5
        usecase "Donner un feedback" as UC6
        usecase "Analyse intelligente des feedbacks" as UC6_sub
        
        usecase "Gérer les utilisateurs" as UC7
        usecase "Gérer les services" as UC8
        usecase "Surveiller la qualité" as UC9
    }

    %% Relations Utilisateur
    U --> UC1
    U --> UC2
    U --> UC3
    U --> UC4
    U --> UC6

    %% Relations Aidant
    A --> UC4
    A --> UC5
    A --> UC6

    %% Relations Admin
    AD --> UC7
    AD --> UC8
    AD --> UC9

    %% Inclusions
    UC2 ..> UC2_sub : <<include>>
    UC3 ..> UC3_sub : <<include>>
    UC6 ..> UC6_sub : <<include>>

    %% Système IA
    UC2_sub -- IA
    UC3_sub -- IA
    UC6_sub -- IA
useCaseDiagram
    actor "Utilisateur" as U
    actor "Aidant / Accompagnateur" as A
    actor "Administrateur" as AD
    actor "Système IA" as IA <<System>>

    package "Application Dima M3ak" {
        usecase "Créer un compte / Se connecter" as UC1
        usecase "Utiliser la commande vocale" as UC2
        usecase "Speech-to-Text" as UC2_sub
        usecase "Écouter le contenu (TTS)" as UC3
        usecase "Text-to-Speech" as UC3_sub
        usecase "Rechercher des services" as UC4
        usecase "Consulter les services" as UC5
        usecase "Donner un feedback" as UC6
        usecase "Analyse intelligente des feedbacks" as UC6_sub
        
        usecase "Gérer les utilisateurs" as UC7
        usecase "Gérer les services" as UC8
        usecase "Surveiller la qualité" as UC9
    }

    %% Relations Utilisateur
    U --> UC1
    U --> UC2
    U --> UC3
    U --> UC4useCaseDiagram
    actor "Utilisateur" as U
    actor "Aidant / Accompagnateur" as A
    actor "Administrateur" as AD
    actor "Système IA" as IA <<System>>

    package "Application Dima M3ak" {
        usecase "Créer un compte / Se connecter" as UC1
        usecase "Utiliser la commande vocale" as UC2
        usecase "Speech-to-Text" as UC2_sub
        usecase "Écouter le contenu (TTS)" as UC3
        usecase "Text-to-Speech" as UC3_sub
        usecase "Rechercher des services" as UC4
        usecase "Consulter les services" as UC5
        usecase "Donner un feedback" as UC6
        usecase "Analyse intelligente des feedbacks" as UC6_sub
        
        usecase "Gérer les utilisateurs" as UC7
        usecase "Gérer les services" as UC8
        usecase "Surveiller la qualité" as UC9
    }

    %% Relations Utilisateur
    U --> UC1
    U --> UC2
    U --> UC3
    U --> UC4
    U --> UC6

    %% Relations Aidant
    A --> UC4
    A --> UC5
    A --> UC6

    %% Relations Admin
    AD --> UC7
    AD --> UC8
    AD --> UC9

    %% Inclusions
    UC2 ..> UC2_sub : <<include>>
    UC3 ..> UC3_sub : <<include>>
    UC6 ..> UC6_sub : <<include>>

    %% Système IA
    UC2_sub -- IA
    UC3_sub -- IA
    UC6_sub -- IA
useCaseDiagram
    actor "Utilisateur" as U
    actor "Aidant / Accompagnateur" as A
    actor "Administrateur" as AD
    actor "Système IA" as IA <<System>>

    package "Application Dima M3ak" {
        usecase "Créer un compte / Se connecter" as UC1
        usecase "Utiliser la commande vocale" as UC2
        usecase "Speech-to-Text" as UC2_sub
        usecase "Écouter le contenu (TTS)" as UC3
        usecase "Text-to-Speech" as UC3_sub
        usecase "Rechercher des services" as UC4
        usecase "Consulter les services" as UC5
        usecase "Donner un feedback" as UC6
        usecase "Analyse intelligente des feedbacks" as UC6_sub
        
        usecase "Gérer les utilisateurs" as UC7
        usecase "Gérer les services" as UC8
        usecase "Surveiller la qualité" as UC9
    }

    %% Relations Utilisateur
    U --> UC1
    U --> UC2
    U --> UC3
    U --> UC4
    U --> UC6

    %% Relations Aidant
    A --> UC4
    A --> UC5
    A --> UC6

    %% Relations Admin
    AD --> UC7
    AD --> UC8
    AD --> UC9

    %% Inclusions
    UC2 ..> UC2_sub : <<include>>
    UC3 ..> UC3_sub : <<include>>
    UC6 ..> UC6_sub : <<include>>

    %% Système IA
    UC2_sub -- IA
    UC3_sub -- IA
    UC6_sub -- IA

    U --> UC6

    %% Relations Aidant
    A --> UC4
    A --> UC5
    A --> UC6

    %% Relations Admin
    AD --> UC7
    AD --> UC8
    AD --> UC9

    %% Inclusions
    UC2 ..> UC2_sub : <<include>>
    UC3 ..> UC3_sub : <<include>>
    UC6 ..> UC6_sub : <<include>>

    %% Système IA
    UC2_sub -- IA
    UC3_sub -- IA
    UC6_sub -- IA
    
```mermaid
 useCaseDiagram
    actor "Utilisateur" as U
    actor "Aidant / Accompagnateur" as A
    actor "Administrateur" as AD
    actor "Système IA" as IA <<System>>

    package "Application Dima M3ak" {
        usecase "Créer un compte / Se connecter" as UC1
        usecase "Utiliser la commande vocale" as UC2
        usecase "Speech-to-Text" as UC2_sub
        usecase "Écouter le contenu (TTS)" as UC3
        usecase "Text-to-Speech" as UC3_sub
        usecase "Rechercher des services" as UC4
        usecase "Consulter les services" as UC5
        usecase "Donner un feedback" as UC6
        usecase "Analyse intelligente des feedbacks" as UC6_sub
        
        usecase "Gérer les utilisateurs" as UC7
        usecase "Gérer les services" as UC8
        usecase "Surveiller la qualité" as UC9
    }

    %% Relations Utilisateur
    U --> UC1
    U --> UC2
    U --> UC3
    U --> UC4
    U --> UC6

    %% Relations Aidant
    A --> UC4
    A --> UC5
    A --> UC6

    %% Relations Admin
    AD --> UC7
    AD --> UC8
    AD --> UC9

    %% Inclusions
    UC2 ..> UC2_sub : <<include>>
    UC3 ..> UC3_sub : <<include>>
    UC6 ..> UC6_sub : <<include>>

    %% Système IA
    UC2_sub -- IA
    UC3_sub -- IA
    UC6_sub -- IA
useCaseDiagram
    actor "Utilisateur" as U
    actor "Aidant / Accompagnateur" as A
    actor "Administrateur" as AD
    actor "Système IA" as IA <<System>>

    package "Application Dima M3ak" {
        usecase "Créer un compte / Se connecter" as UC1
        usecase "Utiliser la commande vocale" as UC2
        usecase "Speech-to-Text" as UC2_sub
        usecase "Écouter le contenu (TTS)" as UC3
        usecase "Text-to-Speech" as UC3_sub
        usecase "Rechercher des services" as UC4
        usecase "Consulter les services" as UC5
        usecase "Donner un feedback" as UC6
        usecase "Analyse intelligente des feedbacks" as UC6_sub
        
        usecase "Gérer les utilisateurs" as UC7
        usecase "Gérer les services" as UC8
        usecase "Surveiller la qualité" as UC9
    }

    %% Relations Utilisateur
    U --> UC1
    U --> UC2
    U --> UC3
    U --> UC4useCaseDiagram
    actor "Utilisateur" as U
    actor "Aidant / Accompagnateur" as A
    actor "Administrateur" as AD
    actor "Système IA" as IA <<System>>

    package "Application Dima M3ak" {
        usecase "Créer un compte / Se connecter" as UC1
        usecase "Utiliser la commande vocale" as UC2
        usecase "Speech-to-Text" as UC2_sub
        usecase "Écouter le contenu (TTS)" as UC3
        usecase "Text-to-Speech" as UC3_sub
        usecase "Rechercher des services" as UC4
        usecase "Consulter les services" as UC5
        usecase "Donner un feedback" as UC6
        usecase "Analyse intelligente des feedbacks" as UC6_sub
        
        usecase "Gérer les utilisateurs" as UC7
        usecase "Gérer les services" as UC8
        usecase "Surveiller la qualité" as UC9
    }

    %% Relations Utilisateur
    U --> UC1
    U --> UC2
    U --> UC3
    U --> UC4
    U --> UC6

    %% Relations Aidant
    A --> UC4
    A --> UC5
    A --> UC6

    %% Relations Admin
    AD --> UC7
    AD --> UC8
    AD --> UC9

    %% Inclusions
    UC2 ..> UC2_sub : <<include>>
    UC3 ..> UC3_sub : <<include>>
    UC6 ..> UC6_sub : <<include>>

    %% Système IA
    UC2_sub -- IA
    UC3_sub -- IA
    UC6_sub -- IA
useCaseDiagram
    actor "Utilisateur" as U
    actor "Aidant / Accompagnateur" as A
    actor "Administrateur" as AD
    actor "Système IA" as IA <<System>>

    package "Application Dima M3ak" {
        usecase "Créer un compte / Se connecter" as UC1
        usecase "Utiliser la commande vocale" as UC2
        usecase "Speech-to-Text" as UC2_sub
        usecase "Écouter le contenu (TTS)" as UC3
        usecase "Text-to-Speech" as UC3_sub
        usecase "Rechercher des services" as UC4
        usecase "Consulter les services" as UC5
        usecase "Donner un feedback" as UC6
        usecase "Analyse intelligente des feedbacks" as UC6_sub
        
        usecase "Gérer les utilisateurs" as UC7
        usecase "Gérer les services" as UC8
        usecase "Surveiller la qualité" as UC9
    }

    %% Relations Utilisateur
    U --> UC1
    U --> UC2
    U --> UC3
    U --> UC4
    U --> UC6

    %% Relations Aidant
    A --> UC4
    A --> UC5
    A --> UC6

    %% Relations Admin
    AD --> UC7
    AD --> UC8
    AD --> UC9

    %% Inclusions
    UC2 ..> UC2_sub : <<include>>
    UC3 ..> UC3_sub : <<include>>
    UC6 ..> UC6_sub : <<include>>

    %% Système IA
    UC2_sub -- IA
    UC3_sub -- IA
    UC6_sub -- IA

    U --> UC6

    %% Relations Aidant
    A --> UC4
    A --> UC5
    A --> UC6

    %% Relations Admin
    AD --> UC7
    AD --> UC8
    AD --> UC9

    %% Inclusions
    UC2 ..> UC2_sub : <<include>>
    UC3 ..> UC3_sub : <<include>>
    UC6 ..> UC6_sub : <<include>>

    %% Système IA
    UC2_sub -- IA
    UC3_sub -- IA
    UC6_sub -- IA
```mermaiduseCaseDiagram
    actor "Utilisateur" as U
    actor "Aidant / Accompagnateur" as A
    actor "Administrateur" as AD
    actor "Système IA" as IA <<System>>

    package "Application Dima M3ak" {
        usecase "Créer un compte / Se connecter" as UC1
        usecase "Utiliser la commande vocale" as UC2
        usecase "Speech-to-Text" as UC2_sub
        usecase "Écouter le contenu (TTS)" as UC3
        usecase "Text-to-Speech" as UC3_sub
        usecase "Rechercher des services" as UC4
        usecase "Consulter les services" as UC5
        usecase "Donner un feedback" as UC6
        usecase "Analyse intelligente des feedbacks" as UC6_sub
        
        usecase "Gérer les utilisateurs" as UC7
        usecase "Gérer les services" as UC8
        usecase "Surveiller la qualité" as UC9
    }

    %% Relations Utilisateur
    U --> UC1
    U --> UC2
    U --> UC3
    U --> UC4
    U --> UC6

    %% Relations Aidant
    A --> UC4
    A --> UC5
    A --> UC6

    %% Relations Admin
    AD --> UC7
    AD --> UC8
    AD --> UC9

    %% Inclusions
    UC2 ..> UC2_sub : <<include>>
    UC3 ..> UC3_sub : <<include>>
    UC6 ..> UC6_sub : <<include>>

    %% Système IA
    UC2_sub -- IA
    UC3_sub -- IA
    UC6_sub -- IA
useCaseDiagram
    actor "Utilisateur" as U
    actor "Aidant / Accompagnateur" as A
    actor "Administrateur" as AD
    actor "Système IA" as IA <<System>>

    package "Application Dima M3ak" {
        usecase "Créer un compte / Se connecter" as UC1
        usecase "Utiliser la commande vocale" as UC2
        usecase "Speech-to-Text" as UC2_sub
        usecase "Écouter le contenu (TTS)" as UC3
        usecase "Text-to-Speech" as UC3_sub
        usecase "Rechercher des services" as UC4
        usecase "Consulter les services" as UC5
        usecase "Donner un feedback" as UC6
        usecase "Analyse intelligente des feedbacks" as UC6_sub
        
        usecase "Gérer les utilisateurs" as UC7
        usecase "Gérer les services" as UC8
        usecase "Surveiller la qualité" as UC9
    }

    %% Relations Utilisateur
    U --> UC1
    U --> UC2
    U --> UC3
    U --> UC4useCaseDiagram
    actor "Utilisateur" as U
    actor "Aidant / Accompagnateur" as A
    actor "Administrateur" as AD
    actor "Système IA" as IA <<System>>

    package "Application Dima M3ak" {
        usecase "Créer un compte / Se connecter" as UC1
        usecase "Utiliser la commande vocale" as UC2
        usecase "Speech-to-Text" as UC2_sub
        usecase "Écouter le contenu (TTS)" as UC3
        usecase "Text-to-Speech" as UC3_sub
        usecase "Rechercher des services" as UC4
        usecase "Consulter les services" as UC5
        usecase "Donner un feedback" as UC6
        usecase "Analyse intelligente des feedbacks" as UC6_sub
        
        usecase "Gérer les utilisateurs" as UC7
        usecase "Gérer les services" as UC8
        usecase "Surveiller la qualité" as UC9
    }

    %% Relations Utilisateur
    U --> UC1
    U --> UC2
    U --> UC3
    U --> UC4
    U --> UC6

    %% Relations Aidant
    A --> UC4
    A --> UC5
    A --> UC6

    %% Relations Admin
    AD --> UC7
    AD --> UC8
    AD --> UC9

    %% Inclusions
    UC2 ..> UC2_sub : <<include>>
    UC3 ..> UC3_sub : <<include>>
    UC6 ..> UC6_sub : <<include>>

    %% Système IA
    UC2_sub -- IA
    UC3_sub -- IA
    UC6_sub -- IA
useCaseDiagram
    actor "Utilisateur" as U
    actor "Aidant / Accompagnateur" as A
    actor "Administrateur" as AD
    actor "Système IA" as IA <<System>>

    package "Application Dima M3ak" {
        usecase "Créer un compte / Se connecter" as UC1
        usecase "Utiliser la commande vocale" as UC2
        usecase "Speech-to-Text" as UC2_sub
        usecase "Écouter le contenu (TTS)" as UC3
        usecase "Text-to-Speech" as UC3_sub
        usecase "Rechercher des services" as UC4
        usecase "Consulter les services" as UC5
        usecase "Donner un feedback" as UC6
        usecase "Analyse intelligente des feedbacks" as UC6_sub
        
        usecase "Gérer les utilisateurs" as UC7
        usecase "Gérer les services" as UC8
        usecase "Surveiller la qualité" as UC9
    }

    %% Relations Utilisateur
    U --> UC1
    U --> UC2
    U --> UC3
    U --> UC4
    U --> UC6

    %% Relations Aidant
    A --> UC4
    A --> UC5
    A --> UC6

    %% Relations Admin
    AD --> UC7
    AD --> UC8
    AD --> UC9

    %% Inclusions
    UC2 ..> UC2_sub : <<include>>
    UC3 ..> UC3_sub : <<include>>
    UC6 ..> UC6_sub : <<include>>

    %% Système IA
    UC2_sub -- IA
    UC3_sub -- IA
    UC6_sub -- IA

    U --> UC6

    %% Relations Aidant
    A --> UC4
    A --> UC5
    A --> UC6

    %% Relations Admin
    AD --> UC7
    AD --> UC8
    AD --> UC9

    %% Inclusions
    UC2 ..> UC2_sub : <<include>>
    UC3 ..> UC3_sub : <<include>>
    UC6 ..> UC6_sub : <<include>>

    %% Système IA
    UC2_sub -- IA
    UC3_sub -- IA
    UC6_sub -- IA
```