import React, { useState, useRef } from 'react'
import style from './CreateNews.module.css'
import { useForm } from 'react-hook-form'
import Button from '../../../Reusable/Button'
import FileInput from '../../../Reusable/FileInput'
import { AdminImages } from '../../../../constants/icons'


function BannerNews() {
    const [file, setFile] = useState(null)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const inputFile = useRef(null)

    const submitBanner = data => {
        console.log(data)
        // setFile(data)
        // console.log(file)
        // console.log(URL)
    }

    const handleFile = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]))
        console.log(file)
    }

    const onEdit = () => {
        inputFile.current.click();
    }

    const onDelete = () => {
        setFile('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitBanner)}>
                <span className="form_section_title">Важная новость</span>
                <div className="mt-32">
                    <div className="d-flex align-center">
                        <div className="file-content">
                            <FileInput refInput={inputFile} label="Банер новость" register={register} name="banner" onChange={handleFile} errors={errors} />
                            {file ? (
                                <div className="file-actions d-flex">
                                    <div className="mr-8">
                                        <Button icon={AdminImages.EditIcon} onClick={onEdit} height="27px" padding="2px 5px" />
                                    </div>
                                    <div>
                                        <Button icon={AdminImages.TrashIcon} onClick={onDelete} height="27px" padding="2px 5px" backgroundColor="#EB6D73" />
                                    </div>
                                </div>
                            ) : ''}
                        </div>
                        <div className="file-img ml-64">
                            <img src={file} alt="" />

                        </div>
                    </div>
                    {/* {file ? <span>Выбранный файл:<span className="success"> {file.banner[0].name}</span></span> : ""} */}
                    <div className={`${style.news_btn_block} d-flex justify-end`}>

                        <button type="submit" className="btn-main btn-main--dark mr-8">Опубликовать</button>

                    </div>

                </div>
            </form>
        </div>
    )
}

export default BannerNews
