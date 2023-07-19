import { useEffect } from "react";
import useSearchParams from "../../hooks/useSearchParams";
import GreyButton from "../Buttons/GreyButton";
import InputsWrapper from "../InputsWrapper";
import cls from './LanguagesTab.module.scss'

const LanguagesTab = (props) => {
    const [params, setSearchParams] = useSearchParams()

    useEffect(() => {
        if (!params.get('lang')) {
            setSearchParams({ lang: 'ru' })
        }
    }, [params.get('lang')])

    return (
        <InputsWrapper title='Выберите язык описания' {...props}>
            <div className={cls.body}>
                <GreyButton active={params.get('lang') === 'ru'} onClick={() => setSearchParams({ lang: 'ru' })}>Русский</GreyButton>
                <GreyButton active={params.get('lang') === 'uz'} onClick={() => setSearchParams({ lang: 'uz' })}>Uzbekcha</GreyButton>
                <GreyButton active={params.get('lang') === 'tr'} onClick={() => setSearchParams({ lang: 'tr' })}>Turkic</GreyButton>
                <GreyButton active={params.get('lang') === 'en'} onClick={() => setSearchParams({ lang: 'en' })}>English</GreyButton>
                <GreyButton active={params.get('lang') === 'tj'} onClick={() => setSearchParams({ lang: 'tj' })}>Tajik</GreyButton>
            </div>
        </InputsWrapper>
    );
}

export default LanguagesTab;
