import { render } from "preact";

import preactLogo from "./assets/preact.svg";
import "./style.css";

export function App() {
  return (
    <div>
      <h1>Chat Window Example</h1>
      <section>
        <h2>Chat Log</h2>
        <div class="chat-log">
          <ChatItem
            question="What is Preact?"
            answer="Reduced version of React"
          ></ChatItem>
          <ChatItem question="question 2"></ChatItem>
        </div>
      </section>
      <section>
        <ChatInput />
      </section>
      {/* <section>
        <Resource
          title="Learn Preact"
          description="If you're new to Preact, try the interactive tutorial to learn important concepts"
          href="https://preactjs.com/tutorial"
        />
        <Resource
          title="Differences to React"
          description="If you're coming from React, you may want to check out our docs to see where Preact differs"
          href="https://preactjs.com/guide/v10/differences-to-react"
        />
        <Resource
          title="Learn Vite"
          description="To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation"
          href="https://vitejs.dev"
        />
      </section> */}
    </div>
  );
}

function ChatItem(props) {
  return (
    <>
      <div class="question">
        <p>{props.question}</p>
      </div>
      <div class="answer">
        <p>{props.answer ?? "..."}</p>
      </div>
    </>
  );
}

function ChatInput(props) {
  return (
    <div class="chat-input">
      <input type="text" />
      <button>Send</button>
    </div>
  );
}

function Resource(props) {
  return (
    <a href={props.href} target="_blank" class="resource">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
}

render(<App />, document.getElementById("app"));
