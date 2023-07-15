'use client'
import './Styles/styles.css'
import Database from "@/app/Components/Database";
import {FaTableCellsLarge} from "react-icons/fa6";
import {FaUniversity} from "react-icons/fa";
import React, {useEffect, useState} from "react";
import {BiCommentDetail} from "react-icons/bi";
import {HiOutlineClock} from "react-icons/hi";
import {FiStar} from "react-icons/fi";
import {BsFillTrash2Fill, BsPersonSquare, BsThreeDots} from "react-icons/bs";
import {AiFillPlusCircle, AiOutlineSearch} from "react-icons/ai";
import {RiSettings5Fill} from "react-icons/ri";
import SidebarButton from "@/app/Components/SidebarButton";
import {PageBlock, PageBlockContainer} from "@/app/Components/PageBlockContainer";
import {TbArrowBarToDown} from "react-icons/tb";

export default function Home() {

    const favoritePageBlocks = [
        {
            emojiPos: [54.2373, 62.7119],
            pageBlockTitle: "Horario",
        },
        {
            emojiPos: [49.1525, 33.8983],
            pageBlockTitle: "Actividades",
        },
    ]

    const privatePageBlocks = [
        {
            emojiPos: [49.1525, 28.8136],
            pageBlockTitle: "EPN Workspace",
        },
        {
            emojiPos: [11.8644, 57.6271],
            pageBlockTitle: "Universidad",
        },
    ]

    const databaseViews = [
        {
            icon: FaTableCellsLarge,
            viewTitle: "6to",
            href: "",
        },
        {
            icon: FaTableCellsLarge,
            viewTitle: "7mo",
            href: "",
        },
        {
            icon: FaTableCellsLarge,
            viewTitle: "8mo",
            href: "",
        },
        {
            icon: FaTableCellsLarge,
            viewTitle: "Todas las materias",
            href: "",
        },
    ]

    const databaseItems = [
        {
            coverURL: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
            emoji: AiFillPlusCircle,
            title: "Aplicaciones web avanzadas",
            href: "",
        },
        {
            coverURL: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
            emoji: AiFillPlusCircle,
            title: "Auditoría informática",
            href: "",
        },
        {
            coverURL: "https://images.unsplash.com/photo-1577741314755-048d8525d31e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
            emoji: AiFillPlusCircle,
            title: "Desarrollo de juegos interactivos",
            href: "",
        },
        {
            coverURL: "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
            emoji: AiFillPlusCircle,
            title: "Desarrollo de software seguro",
            href: "",
        },
        {
            coverURL: "https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
            emoji: AiFillPlusCircle,
            title: "Formulación y evaluación de proyectos",
            href: "",
        },
        {
            coverURL: "https://images.unsplash.com/photo-1515630278258-407f66498911?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
            emoji: AiFillPlusCircle,
            title: "Profesionalismo en informática - GR4",
            href: "",
        },
        {
            coverURL: "https://www.notion.so/images/page-cover/gradients_10.jpg",
            emoji: AiFillPlusCircle,
            title: "Diseño de trabajo de integración curricular",
            href: "",
        },
    ]

    const [color, setColor] = useState("white");
    const [inputContent, setInputContent] = useState("");
    const [syncBlockContent, setSyncBlockContent] = useState("Bloque sincronizado");

    useEffect(() => {
        const listener = (event: KeyboardEvent) => {
            if (event.key === "Enter") {
                event.preventDefault();
                if (inputContent == "/red") {
                    setColor("text-red-500")
                }
                if (inputContent == "/yellow") {
                    setColor("text-yellow-500")
                }
                if (inputContent == "/green") {
                    setColor("text-lime-700")
                }
                if (inputContent == "/white") {
                    setColor("text-white")
                }
                setInputContent("")
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, [color, inputContent]);

    return (
        <main className="flex h-screen">
            {/*Barra lateral*/}
            <div className="sidebar">
                <div className={"switcher"}>
                    <PageBlock emojiPos={[11.8644, 57.6271]} pageBlockTitle={"EPN"}/>
                </div>

                <SidebarButton icon={AiOutlineSearch} viewTitle={"Search"}/>
                <SidebarButton icon={HiOutlineClock} viewTitle={"Updates"}/>
                <SidebarButton icon={RiSettings5Fill} viewTitle={"Settings & members"}/>
                <SidebarButton icon={AiFillPlusCircle} viewTitle={"New page"}/>


                <div className={"scroller"}>
                    <nav style={{display: "block"}}>
                        <PageBlockContainer blockTitle={"Favorites"} pageBlocks={favoritePageBlocks}/>
                        <PageBlockContainer blockTitle={"Private"} pageBlocks={privatePageBlocks}/>
                        <SidebarButton icon={BsPersonSquare} viewTitle={"Create a teamspace"}/>
                        <SidebarButton icon={AiOutlineSearch} viewTitle={"Templates"}/>
                        <SidebarButton icon={TbArrowBarToDown} viewTitle={"Import"}/>
                        <SidebarButton icon={BsFillTrash2Fill} viewTitle={"Trash"}/>
                    </nav>
                </div>
                <div className={"col-resize"}/>
            </div>

            {/*Contenido de la página*/}
            <div className="workspace">
                <div className={"top-bar flex-row"}>
                    <div className={"page-block-container"}>
                        <div className={"emoji-container"}>
                            <img alt="📚" aria-label="📚" className={"notion-emoji"}
                                 src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4da.svg"/>
                        </div>
                        <div className={"text-container"}>
                            EPN Workspace
                        </div>
                    </div>
                    <div className={"text-container"} style={{marginRight: "8px"}}>
                        Share
                    </div>
                    <div>
                        <BiCommentDetail className={"icon-container"} size={20}/>
                    </div>
                    <div>
                        <HiOutlineClock className={"icon-container"} size={20}/>
                    </div>
                    <div>
                        <FiStar className={"icon-container"} size={20}/>
                    </div>
                    <div>
                        <BsThreeDots size={18}/>
                    </div>
                </div>
                <div className={"page-content-container"}>
                    <div className={"cover-container flex-row"}>
                        <img src={"https://www.notion.so/images/page-cover/nasa_earth_grid.jpg"} alt={""} className={"cover"}/>
                    </div>
                    <div className={"header-title-container z-10"}>
                        <div className={"page-icon-container"}>
                            <img alt="📚" aria-label="📚" className={"page-icon"}
                                 src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4da.svg"/>
                        </div>
                        <div role={"button"} className={"add-comment-container"}>
                            <div className={"add-comment"}>
                                Add comment
                            </div>
                        </div>
                        <div>
                            <div className={"text-[40px] font-bold h-[54px] py-[3px] leading-[1.2] opacity-80"}>
                                EPN Workspace
                            </div>
                        </div>
                        <div>
                            <Database
                                views={databaseViews}
                                databaseTitle={"Materias"}
                                databaseIcon={FaUniversity}
                                databaseItems={databaseItems}
                            />
                        </div>
                    </div>
                    <div className={"text-block-container"}/>
                    <div className={`text-block-container ${color}`}>
                        <div className={`flex min-w-fit items-center`}>Color de texto</div>
                        <div className={"flex"} style={{width: "100%"}}>
                            <input
                                className={"input"}
                                type={"text"}
                                value={inputContent}
                                onChange={event => {
                                    event.preventDefault()
                                    setInputContent(event.target.value)
                                }}
                            />
                        </div>
                    </div>
                    <div className={"text-block-container"}/>
                    <div className={"text-block-container"}>
                        <input
                            className={"input sync-block-container"}
                            type={"text"}
                            value={syncBlockContent}
                            onChange={event => {
                                event.preventDefault()
                                setSyncBlockContent(event.target.value)
                            }}
                        />
                    </div>
                    <div className={"text-block-container"}>
                        <input
                            className={"input sync-block-container"}
                            type={"text"}
                            value={syncBlockContent}
                            onChange={event => {
                                event.preventDefault()
                                setSyncBlockContent(event.target.value)
                            }}
                        />
                    </div>
                </div>
            </div>

        </main>
    )
}
