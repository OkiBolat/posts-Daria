import React, { useState } from "react";
import { cn } from "../../helpers/reactBem";
import './Bar.scss'

const bar = cn('bar')

const Bar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={isOpen === false ? { left: "-600px" } : {}} className={bar()}>
      <button className={bar("toogleBtn")} onClick={() => setIsOpen(!isOpen)}>
        {isOpen === false ? "Add post" : "Close bar"}
      </button>
      <div className={bar('addForm')}>
        <form action="">
          <input placeholder="Что у вас нового?" className={bar("textArea")} type="text" />
          <button>
            Publish
          </button>
        </form>
      </div>
    </div>
  )
};

export default Bar;