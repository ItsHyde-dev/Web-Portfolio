import React from "react"
import NodeJsLogo from '../../assets/nodejs-transparent.png'
import ExpressLogo from '../../assets/express-logo.png'
import DialogFlowLogo from '../../assets/dialogflow-logo.png'
import MongoLogo from '../../assets/MongoDB_Spring-Green.svg'
import RustLogo from '../../assets/rust-logo.png'
import PythonLogo from '../../assets/python-logo.png'
import GoLogo from '../../assets/Go_Logo_Blue.svg'
import JsLogo from '../../assets/JavaScript-logo.png'
import BevyLogo from '../../assets/bevy_logo_dark.png'
import FlutterLogo from '../../assets/flutter-logo.png'
import FirebaseLogo from '../../assets/firebase-logo-sized.png'
import techMap from './techMap'

const summaries = {
    "NodeJs Rest API":
        <div>
            JWT authentication implemented using NodeJS, Express and MongoDb
            <br />
            Intent Detection and NLP using Dialogflow
        </div>,
    "Graph Traversal Algorithms":
        <div>
            Graph Traversal Algorithms implemented in:
            <br />
            JavaScript, Rust, Go and Python
        </div>,
    "2D RPG Game":
        <div>
            2D RPG Game implemented in Rust
        </div>,
    "Rest API in Golang":
        <div>
            Rest API implemented in Go using the fiber package
        </div>,
    "Helix":
        <div>
            Cross Platform application made using Flutter with audio and text editing functions
        </div>
}

const ProjectList = [
    {
        title: "NodeJs Rest API",
        summary: summaries['NodeJs Rest API'],
        projectName: "user authentication api",
        codeUrl: "/nodeApiTest",
        technologies: [techMap.node, techMap.express, techMap.dialogflow, techMap.mongodb],
    },
    {
        title: "Graph Traversal Algorithms",
        summary: summaries['Graph Traversal Algorithms'],
        projectName: "graph traversal",
        codeUrl: "./graphTraversal",
        technologies: [techMap.rust, techMap.go, techMap.python, techMap.js],
    },
    {
        title: "2D RPG Game",
        summary: summaries['2D RPG Game'],
        projectName: "bevy-game-1",
        codeUrl: "./bevy-game-1",
        technologies: [techMap.rust, techMap.bevy],
    },
    {
        title: "Rest API in Golang",
        summary: summaries['Rest API in Golang'],
        projectName: "golang-rest-api",
        codeUrl: "./golang-rest-api",
        technologies: [techMap.go],
    },
    {
        title: "Helix: Writing Application for Musicians",
        summary: summaries['Helix'],
        projectName: "helix",
        codeUrl: "./helix",
        technologies: [techMap.flutter, techMap.firebase],
    },
]

export default ProjectList
