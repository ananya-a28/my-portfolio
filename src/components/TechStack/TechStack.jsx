// src/components/Experience.js
import React from "react";
import "./TechStack.css";
function TechStack() {
  return (
    <div className="techStack">
      <h1>TECH STACK &lt;/&gt;</h1>
      <div className="frontend">
        <span>FRONTEND</span>
        <ul>
          <li>
            Javascript <img src="/images/logo-javascript.svg" alt="js" />
          </li>
          <li>
            Angular <img src="/images/angular.svg" alt="angular" />
          </li>
          <li>
            React
            <img src="/images/react.svg" alt="react" />
          </li>
          <li>
            Next.js
            <img src="/images/nextjs.svg" alt="nextjs" />
          </li>
          <li>
            Redux
            <img src="/images/redux.svg" alt="redux" />
          </li>
          <li>
            Bootstrap
            <img src="/images/bootstrap.svg" alt="bootstrap" />
          </li>
          <li>
            Tailwind CSS
            <img src="/images/tailwind.svg" alt="tailwind" />
          </li>
        </ul>
      </div>
      <div className="backend">
        <span>BACKEND</span>
        <ul>
          <li>
            Java <img src="/images/java.svg" alt="java" />
          </li>
          <li>
            Spring Boot <img src="/images/springBoot.svg" alt="springBoot" />
          </li>
          <li>
            Node.js
            <img src="/images/nodejs.svg" alt="nodejs" />
          </li>
          <li>
            Express
            <img src="/images/express.svg" alt="express" />
          </li>
        </ul>
      </div>
      <div className="database">
        <span>DATABASE AND DEV OPS</span>
        <ul>
          <li>
            Git <img src="/images/git.svg" alt="git" />
          </li>
          <li>
            GitHub <img src="/images/gitHub.svg" alt="github" />
          </li>
          <li>
            Jenkins
            <img src="/images/jenkins.svg" alt="jenkins" />
          </li>
          <li>
            MySQL
            <img src="/images/mysql.svg" alt="mysql" />
          </li>
          <li>
            MongoDB
            <img src="/images/mongodb.svg" alt="mongodb" />
          </li>
          <li>
            PostgreSQL <img src="/images/postgreSQL.svg" alt="postgreSQL" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TechStack;
