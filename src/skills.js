import "./cssfiles/skills.css"

function Skills() {
    return (
        <div className="skill-box">
            <Skill name="hello"/>
            <Skill name="Spring Boot"/>
            <Skill name="Blockchain Tech."/>
            <Skill name="hello"/>
            <Skill name="Spring Boot"/>
            <Skill name="Blockchain Tech."/>
            <Skill name="hello"/>
            <Skill name="Spring Boot"/>
            <Skill name="Blockchain Tech."/>
            <Skill name="hello"/>
            <Skill name="Spring Boot"/>
            <Skill name="Blockchain Tech."/>
            <Skill name="hello"/>
            <Skill name="Spring Boot"/>
            <Skill name="Blockchain Tech."/>
            <Skill name="hello"/>
            <Skill name="Spring Boot"/>
            <Skill name="Blockchain Tech."/>
        </div>
    )
}

function Skill(props) {
    return (
        <div className="skill">{props.name}</div>
    )
}

export default Skills;