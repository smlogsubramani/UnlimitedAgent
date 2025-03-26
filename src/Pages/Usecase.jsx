import Navbar from "../components/Navbar";

const Usecase = () => {
    return(
        <div>
            <Navbar/>
            <div className="container">
            <div className="row">
                <p className="usecasepara">Reinvent your organization</p>
                <h2 className="usecaseheader">
                Products
                </h2>
                <p className="subcontentusecase">At UnlimitedAI, our solutions have transformed the operation of the leading companies across various industries. Our innovative AI-driven products have enabled these organization to streamline process, enhance customers experience, and achieve remarkable results.Below are some of the usecases that shows how our technology make a difference.</p>
            </div>
            <div id="servicecontainers" className="row">
                {/* <div className="col-md-4">
                    <div className="cardcontainer">
                        <h1 className="card-number">01</h1>
                        <h1 className="cardheader">Voice Agent</h1>
                        <p className="cardpara-usecase">Our Speech-to-Text AI model is designed to seamlessly convert spoken language into accurate and efficient text, enhancing accessibility and productivity. It's the perfect solution for unlocking the power of voice in real time</p>
                        <button className="cardbtn">See details</button>
                    </div>
                </div> */}
                {/* <div className="col-md-4">
                    <div className="cardcontainer">
                    <h1 className="card-number">02</h1>
                    <h1 className="cardheader">Marketing Agent</h1>
                    <p className="cardpara-usecase">"Our Marketing Copilot model leverages AI-driven insights to streamline campaigns, optimize strategies, and enhance audience engagement. It's your trusted companion for smarter, data-powered marketing decisions.</p>
                    <button className="cardbtn">See details</button>
                    </div>
                </div> */}
                {/* <div className="col-md-4">
                    <div className="cardcontainer">
                    <h1 className="card-number">03</h1>
                    <h1 className="cardheader">ModelDriven Agent</h1>
                    <p className="cardpara-usecase">Our Model-Driven Copilot empowers businesses with data-driven insights, automating workflows and enhancing decision-making. It's a tailored solution designed to drive precision and innovation in every process.</p>
                    <a href="https://copilotstudio.microsoft.com/environments/e3ce6a5b-ed6e-e60e-af3e-95da64019813/bots/crd5b_modelDrivenAgent/canvas?__version__=2&enableFileAttachment=true"><button className="cardbtn">See details</button></a> 
                    </div>
                </div> */}
                {/* <div className="col-md-4">
                    <div className="cardcontainer">
                        <h1 className="card-number">04</h1>
                        <h1 className="cardheader">Invoice Agent</h1>
                        <p className="cardpara-usecase">Transform your invoicing process with the Asset Management Copilot model—effortlessly create and update invoices with unmatched accuracy and efficiency. Streamline your operations and save valuable time, all in one smart solution!</p>
                        <a href="https://copilotstudio.microsoft.com/environments/Default-008502d6-3f79-46f0-ab37-9354e3fe80ff/bots/cr28f_agent1_KK3RZL/canvas?__version__=2&enableFileAttachment=true"><button className="cardbtn">See details</button></a> 
                    </div>
                </div> */}
                <div className="col">
                    <div className="cardcontainer">
                    <h1 className="card-number">01</h1>
                    <h1 className="cardheader">Legal Agent</h1>
                    <p className="cardpara-usecase">"Revolutionize your legal processes with the Legal Chain AI Copilot model—designed to streamline, automate, and enhance accuracy in managing legal documentation and workflows. Empower your operations with smart, efficient solutions! </p>
                    <a href="https://copilotstudio.microsoft.com/environments/Default-008502d6-3f79-46f0-ab37-9354e3fe80ff/bots/cr28f_lawAiAssistant/canvas?__version__=2&enableFileAttachment=true"><button className="cardbtn">See details</button></a> 
                    </div>
                </div>
                {/* <div className="col-md-4">
                    <div className="cardcontainer">
                    <h1 className="card-number">06</h1>
                    <h1 className="cardheader">AIMatch Agent</h1>
                    <p className="cardpara-usecase">Enhance your processes with the Dabur Copilot model, delivering accurate and efficient solutions for seamless product alignment and improved decision-making in your business operations.</p>
                    <button className="cardbtn">See details</button>
                    </div>
                </div> */}
            </div>
            </div>
        </div>
    )
}

export default Usecase;