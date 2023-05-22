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
        </div>
}

const techMap: { [key: string]: { logo: any, hover: string } } = {
    "node": {
        logo: NodeJsLogo,
        hover: "Node JS"
    },
    "express": {
        logo: ExpressLogo,
        hover: "Express JS"
    },
    "dialogflow": {
        logo: DialogFlowLogo,
        hover: "Dialogflow"
    },
    "mongodb": {
        logo: MongoLogo,
        hover: "MongoDB"
    },
    "rust": {
        logo: RustLogo,
        hover: "Rust"
    },
    "python": {
        logo: PythonLogo,
        hover: "Python"
    },
    "go": {
        logo: GoLogo,
        hover: "Go"
    },
    "js": {
        logo: JsLogo,
        hover: "JavaScript"
    },
    "bevy": {
        logo: BevyLogo,
        hover: "Bevy Game Engine"
    },
}

const ProjectList = [
    {
        title: "NodeJs Rest API",
        summary: summaries['NodeJs Rest API'],
        projectName: "user authentication api",
        codeUrl: "./userAuthCodeTest",
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
]

export default ProjectList
