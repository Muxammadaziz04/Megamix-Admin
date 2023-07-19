import cls from './FileUpload.module.scss'

const FileUpload = ({
    children,
    className = ''
}) => {
    return (
        <label className={cls.label + ' ' + className}>
            {children} 
            <input type="file" />
        </label>
    );
}

export default FileUpload;
