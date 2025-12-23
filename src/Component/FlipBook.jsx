import { useState, useEffect } from "react";
import Page from "./Page";
import ProjectCard from "./ProjectCard";
import SkillBar from "./SkillBar";
import resume from "../assets/resume.pdf";
import { IoMdDownload } from "react-icons/io";
import { FaLinkedin ,FaGithub,FaPhoneAlt  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


import profile from "../assets/profile.jpg";

const FlipBook = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const pages = [
        (
            <>
                <h1 style={{ fontSize: "32px" }}>Aman Verma</h1>
                <p>MERN Stack Developer</p>

                <p style={{ marginTop: "30px" }}>📖 My Portfolio</p>

                {/* DOWNLOAD RESUME BUTTON */}
                <a
                    href={resume}
                    download="Aman_Verma_Resume"
                    style={{ textDecoration: "none" }}
                >
                    <button
                        style={{
                            marginTop: "15px",
                            padding: "10px 18px",
                            borderRadius: "6px",
                            border: "none",
                            background: "#0b151cff",
                            color: "white",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            fontWeight:500,
                            gap: "8px",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    >
                        <IoMdDownload size={18} />
                        Download Resume
                    </button>
                </a>
            </>
        ),
        // ABOUT
        (
            <>
                <h2>About Me</h2>
                <img
                    src={profile}
                    alt="Aman"
                    style={{
                        width: "100px",
                        height: "110px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        marginTop: "12px",
                        marginBottom: "12px",
                    }}
                />
                <p
                    style={{
                        fontSize: "14px",
                        lineHeight: "1.6",
                        textAlign: "left",
                    }}
                >
                    Hello, My name is <b style={{ color: "rgba(62, 132, 141, 1)" }}>Aman Verma</b>, currently living in Indore (India).
                    I have completed my Bachelor's degree in B.Tech (Computer Science) at
                    <b style={{ color: "rgba(62, 132, 141, 1)" }}> Mathura Devi Institute of Technology and Management, Indore </b>,
                    which is affiliated with RGPV University, Bhopal (Madhya Pradesh).
                    I have gained valuable skills in <b style={{ color: "rgba(62, 132, 141, 1)" }}> HTML | CSS | JavaScript | MongoDB |
                        Express.js | React | Node.js </b>.
                </p>
            </>
        ),

        // SKILLS
        (
            <>
                <h2>Skills</h2>
                <SkillBar skill="HTML" level="90%" />
                <SkillBar skill="CSS" level="85%" />
                <SkillBar skill="JavaScript" level="80%" />
                <SkillBar skill="React" level="75%" />
                <SkillBar skill="Node.js" level="70%" />
                <SkillBar skill="Express js" level="70%" />
                <SkillBar skill="MongoDB" level="70%" />
            </>
        ),
        (
            <>
                <h2>Projects</h2>
                <ProjectCard
                    title="Flip Book Portfolio"
                    description="A 3D flip-book style portfolio built using React."
                />

                <ProjectCard
                    title="E-Commerce Website"
                    description="Shopping website with cart and product listing."
                />

                <ProjectCard
                    title="API Project"
                    description="REST API built using Node.js and Express."
                />
            </>
        ),


        // CONTACT
        (
            <>
                <h2>Contact</h2>

                <p style={{ marginTop: "50px", marginLeft: "60px", textAlign: "left" }}>
                    <MdEmail /> <strong>Email:</strong><br />
                    av478136@gmail.com
                </p>

                <p style={{ marginTop: "20px", marginLeft: "60px", textAlign: "left" }}>
                    <FaPhoneAlt /> <strong>Phone:</strong><br />
                    +91 8435856067
                </p>

                <p style={{ marginTop: "10px", marginLeft: "60px", textAlign: "left" }}>
                    <FaGithub /> <strong>GitHub:</strong><br />
                    <p style={{ color: "blue", marginTop: "-1.5px" }}>https://github.com/amanverma45
                    </p>
                </p>

                <p style={{ marginTop: "10px", marginLeft: "60px", textAlign: "left" }}>
                    <FaLinkedin /> <strong>LinkedIn:</strong><br />
                    <p style={{ color: "blue", marginTop: "-1.5px" }}>www.linkedin.com/in/aman-verma-2b1216350</p>
                </p>
            </>
        ),


        // BACK PAGE
        (
            < >
                <div style={{ marginTop: "100px", textAlign: "center" }}>
                    <h2>Thank You</h2>
                    <p>Thanks for visiting my portfolio</p>
                    <p><b>—Aman Verma</b></p>
                </div>
            </>
        ),
    ];

    // ⌨️ Keyboard navigation
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "ArrowRight") {
                setCurrentPage((p) =>
                    p < pages.length ? p + 1 : p
                );
            }

            if (e.key === "ArrowLeft") {
                setCurrentPage((p) =>
                    p > 0 ? p - 1 : p
                );
            }
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [pages.length]);

    return (
        <div style={{ textAlign: "center" }}>
            {/* BOOK */}
            <div
                style={{
                    width: "360px",
                    height: "500px",
                    position: "relative",
                    perspective: "2000px",
                    background: "#f5f5f5",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                    borderRadius: "8px",
                    margin: "auto",
                }}
            >
                {pages.map((content, index) => (
                    <Page
                        key={index}
                        flipped={index < currentPage}
                        zIndex={pages.length - index}
                    >
                        {content}
                    </Page>
                ))}
            </div>

            {/* BUTTONS */}
            <div style={{ marginTop: "15px" }}>
                <button
                    style={{
                        padding: "8px 16px",
                        borderRadius: "6px",
                        border: "none",
                        cursor: "pointer",
                    }}
                    onClick={() =>
                        setCurrentPage((p) => (p > 0 ? p - 1 : p))
                    }
                >
                    Prev
                </button>

                <button
                    style={{
                        padding: "8px 16px",
                        borderRadius: "6px",
                        border: "none",
                        cursor: "pointer",
                        marginLeft: "10px",
                    }}
                    onClick={() =>
                        setCurrentPage((p) =>
                            p < pages.length - 1 ? p + 1 : p
                        )
                    }
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default FlipBook;
