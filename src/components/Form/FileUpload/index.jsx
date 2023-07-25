import { useEffect } from 'react';
import { useState } from 'react';
import cls from './FileUpload.module.scss'

const FileUpload = ({
    children,
    className = '',
    onChange = () => { },
    register = {},
    error = '',
    value = '',
    type = 'image',
    ...other
}) => {
    const [file, setFile] = useState()

    useEffect(() => {
        if (file) {
            onChange(file)
        }
    }, [file])

    useEffect(() => setFile(value), [value])

    return !file ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label className={cls.label + ' ' + className}>
                {children}
                <input
                    type="file"
                    {...register}
                    onChange={(e) => setFile(e.target.files?.[0])}
                    {...other}
                />
            </label>
            {error && <span>{error}</span>}
        </div>
    ) : (
        <div className={cls.file}>
            {typeof file === 'string' && type == 'image' && <img src={file} />}
            {typeof file === 'string' && type == 'video' && <video src={file} />}
            {file.type?.split('/')?.[0] === 'image' && <img src={URL.createObjectURL(file)} />}
            {file.type?.split('/')?.[0] === 'video' && <video src={URL.createObjectURL(file)} />}
            <div className={cls.file__info}>
                <span className={cls.file__info__name}>{file?.name || 'Файл'}</span>
                <span className={cls.file__info__edit} onClick={() => setFile(null)}>Изменить</span>
            </div>
        </div>
    );
}

export default FileUpload;
