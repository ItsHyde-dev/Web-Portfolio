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
    "flutter": {
        logo: FlutterLogo,
        hover: "Flutter"
    },
    "firebase": {
        logo: FirebaseLogo,
        hover: "Firebase"
    },
}

export default techMap
