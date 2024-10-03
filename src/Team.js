import './Team.css';
import { useState } from 'react';
import { motion } from "framer-motion";
import Card from './Card';
import pic1 from './team_with_robot.png';
import pic2 from './deeshy.webp'
import pic3 from './rithvik.webp'
/*

            */
function Team () {
    
    const pics = [];
    
    pics.push(pic1, pic2, pic3)
    return (
        <>
        <div id="banner">
            <img className="team_photo" src={pics[0]} alt='Depicts all the members of Chai GPT'></img>
            <h1 className='team_title'>The Team</h1>
            <h1>Build</h1>
            <div className='card_container'>
                <motion.div 
                initial={{ opacity: 0, x:-50 }}
                whileInView={{ opacity: 1, x: "150%" }}
                viewport={{once: true, amount: 0.45}}
                transition={{duration: 1, delay: 0.1}}>
                    <Card src={pic3} name="Rithwik" desc="10/10 would elect team captain again"/>
                </motion.div>
            </div>
        </div>
            <div className='card_container'>
                <motion.div 
                initial={{ opacity: 0, x:-50 }}
                whileInView={{ opacity: 1, x: "4%" }}
                viewport={{once: true, amount: 0.45}}
                transition={{duration: 1, delay: 0.1}}>
                    <Card src={pic3} name="Rithwik" desc="10/10 would elect team captain again"/>
                </motion.div>
                <motion.div 
                initial={{ opacity: 0, x:-200 }}
                whileInView={{ opacity: 1, x: "50%" }}
                viewport={{once: true, amount: 0.45}}
                transition={{duration: 1, delay: 0.1}}>
                    <Card src={pic3} name="Rithwik" desc="10/10 would elect team captain again"/>
                </motion.div>
                <motion.div 
                initial={{ opacity: 0, x:-200 }}
                whileInView={{ opacity: 1, x: "85%" }}
                viewport={{once: true, amount: 0.45}}
                transition={{duration: 1, delay: 0.1}}>
                    <Card src={pic3} name="Rithwik" desc="10/10 would elect team captain again"/>
                </motion.div>
            </div>
            <h1>Programming</h1>
            <div className='card_container'>
                <motion.div 
                initial={{ opacity: 0, x:-50 }}
                whileInView={{ opacity: 1, x: "80%" }}
                viewport={{once: true, amount: 0.45}}
                transition={{duration: 1, delay: 0.1}}>
                    <Card src={pic3} name="Rithwik" desc="10/10 would elect team captain again"/>
                </motion.div>
                <motion.div 
                initial={{ opacity: 0, x:-200 }}
                whileInView={{ opacity: 1, x: "120%" }}
                viewport={{once: true, amount: 0.45}}
                transition={{duration: 1, delay: 0.1}}>
                    <Card src={pic3} name="Rithwik" desc="10/10 would elect team captain again"/>
                </motion.div>
            </div>
            <div className='card_container'>
                <motion.div 
                initial={{ opacity: 0, x:-50 }}
                whileInView={{ opacity: 1, x: "4%" }}
                viewport={{once: true, amount: 0.45}}
                transition={{duration: 1, delay: 0.1}}>
                    <Card src={pic3} name="Rithwik" desc="10/10 would elect team captain again"/>
                </motion.div>
                <motion.div 
                initial={{ opacity: 0, x:-200 }}
                whileInView={{ opacity: 1, x: "50%" }}
                viewport={{once: true, amount: 0.45}}
                transition={{duration: 1, delay: 0.1}}>
                    <Card src={pic3} name="Rithwik" desc="10/10 would elect team captain again"/>
                </motion.div>
                <motion.div 
                initial={{ opacity: 0, x:-200 }}
                whileInView={{ opacity: 1, x: "85%" }}
                viewport={{once: true, amount: 0.45}}
                transition={{duration: 1, delay: 0.1}}>
                    <Card src={pic3} name="Rithwik" desc="10/10 would elect team captain again"/>
                </motion.div>
            </div>
            <h1>Outreach</h1>
            <div className='card_container'>
                <motion.div 
                initial={{ opacity: 0, x:-50 }}
                whileInView={{ opacity: 1, x: "80%" }}
                viewport={{once: true, amount: 0.45}}
                transition={{duration: 1, delay: 0.1}}>
                    <Card src={pic3} name="Rithwik" desc="10/10 would elect team captain again"/>
                </motion.div>
                <motion.div 
                initial={{ opacity: 0, x:-200 }}
                whileInView={{ opacity: 1, x: "120%" }}
                viewport={{once: true, amount: 0.45}}
                transition={{duration: 1, delay: 0.1}}>
                    <Card src={pic3} name="Rithwik" desc="10/10 would elect team captain again"/>
                </motion.div>
            </div>
            <div className='card_container'>
                <motion.div 
                initial={{ opacity: 0, x:-50 }}
                whileInView={{ opacity: 1, x: "80%" }}
                viewport={{once: true, amount: 0.45}}
                transition={{duration: 1, delay: 0.1}}>
                    <Card src={pic3} name="Rithwik" desc="10/10 would elect team captain again"/>
                </motion.div>
                <motion.div 
                initial={{ opacity: 0, x:-200 }}
                whileInView={{ opacity: 1, x: "120%" }}
                viewport={{once: true, amount: 0.45}}
                transition={{duration: 1, delay: 0.1}}>
                    <Card src={pic3} name="Rithwik" desc="10/10 would elect team captain again"/>
                </motion.div>
            </div>
            <h1>Coaches</h1>
            <div className='card_container'>
                <motion.div 
                initial={{ opacity: 0, x:-50 }}
                whileInView={{ opacity: 1, x: "4%" }}
                viewport={{once: true, amount: 0.45}}
                transition={{duration: 1, delay: 0.1}}>
                    <Card src={pic3} name="Rithwik" desc="10/10 would elect team captain again"/>
                </motion.div>
                <motion.div 
                initial={{ opacity: 0, x:-200 }}
                whileInView={{ opacity: 1, x: "50%" }}
                viewport={{once: true, amount: 0.45}}
                transition={{duration: 1, delay: 0.1}}>
                    <Card src={pic3} name="Rithwik" desc="10/10 would elect team captain again"/>
                </motion.div>
                <motion.div 
                initial={{ opacity: 0, x:-200 }}
                whileInView={{ opacity: 1, x: "85%" }}
                viewport={{once: true, amount: 0.45}}
                transition={{duration: 1, delay: 0.1}}>
                    <Card src={pic3} name="Rithwik" desc="10/10 would elect team captain again"/>
                </motion.div>
            </div>
        </>
        
    );
}

export default Team;