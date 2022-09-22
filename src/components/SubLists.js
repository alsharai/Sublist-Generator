import React from 'react'

function SubLists(props) {
    const subListArray = []
    const value = props.val

    function generateSubLists(str, comb) {
       if (!str.length) {
        subListArray.push(comb)
        return
       }
       generateSubLists(str.slice(1), comb + str[0])
       generateSubLists(str.slice(1), comb)
    }

    generateSubLists(value, "")

    console.log(subListArray.length)


  return (
    <div>
        {subListArray.map(elm => {
            return (
                <h4>{`{${elm}}`}</h4>
            )
        })}
    </div>
  )
}

export default SubLists