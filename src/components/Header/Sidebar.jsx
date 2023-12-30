import React from 'react'
import lineE from '../../assets/line-E.png'
import line from '../../assets/line.png'
import project from '../../assets/project.png'
import sample from '../../assets/sample.png'
import intro from '../../assets/intro.png'
import help from '../../assets/help.png'
import feedback from '../../assets/feedback.png'
import collapse from '../../assets/collapse.png'
import Apps from '../../assets/apps.png'
import logo from '../../assets/logo.png'

import '../../App.css'

function Sidebar() {
    return (
        <div>
            <div class="bg-k8u">
            </div>
            <img class="line-fmf" src={lineE} />
            <img class="line-ynM" src={line} />
            <div class="frame-89-gRs">
                <img class="bxscoinstackicon-1-xPP" src={project} />
                <p class="my-projects-sWM">My Projects</p>
            </div>
            <div class="frame-88-16m">
                <img class="group-4-j2m" src={sample} />
                <p class="sample-projects-4aq">Sample Projects</p>
            </div>
            <div class="group-9-oHX">
                <img class="multimediamusicplayplayervideoicon-1-XzD" src={intro} />
                <p class="intro-to-necleo-Rph">Intro to Necleo</p>
            </div>
            <div class="frame-91-vmT">
                <img class="helpcircledicon-1-EGM" src={help} />
                <p class="help-support-xTF">Help &amp; Support</p>
            </div>
            <div class="frame-92-tbo">
                <img class="feedbackicicon-1-1-R5w" src={feedback} />
                <p class="feedback-Lyb">Feedback</p>
            </div>
            <div class="frame-93-4eh">
                <img class="icfluentpanelrightexpandicon-1-xk5" src={collapse} />
                <p class="collapse-dbK">Collapse</p>
            </div>
            <img class="group-5-mBj" src={logo} />
            <div class="frame-87-VNd">
                <img class="icfluentappsregularicon-1-zaH" src={Apps} />
                <p class="apps-797">Apps</p>
            </div>
            <div class="bg-FFK">
            </div>
            <div class="bg-zCu">
            </div>
        </div>
    )
}

export default Sidebar
