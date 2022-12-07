import React from 'react'
import { useParams } from 'react-router-dom'

const DeatailsPage = () => {
    const params = useParams()

    return (
        <>
            <div>DeatailsPage</div>
            {params.recipeId}
        </>
    )
}

export default DeatailsPage