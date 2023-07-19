import { useEffect } from 'react';
import { useState } from 'react';
import cls from './FileUpload.module.scss'

const FileUpload = ({
    children,
    className = '',
    onChange = () => { },
    ...other
}) => {
    const [file, setFile] = useState()

    useEffect(() => {
        if (file) {
            onChange(file)
        }
    }, [file])

    return !file ? (
        <label className={cls.label + ' ' + className}>
            {children}
            <input
                type="file"
                onChange={(e) => setFile(e.target.files?.[0])}
                {...other}
            />
        </label>
    ) : (
        <div className={cls.file}>
            {file.type?.split('/')?.[0] === 'image' && <img src={URL.createObjectURL(file)} />}
            {file.type?.split('/')?.[0] === 'video' && <video src={URL.createObjectURL(file)} />}
            <div className={cls.file__info}>
                <span className={cls.file__info__name}>{file?.name}</span>
                <span className={cls.file__info__edit} onClick={() => setFile(null)}>Изменить</span>
            </div>
        </div>
    );
}

export default FileUpload;
