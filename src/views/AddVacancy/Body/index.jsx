import Input from "../../../components/Form/Input";
import TextArea from "../../../components/Form/TextArea";
import InputsWrapper from "../../../components/InputsWrapper";
import LanguagesTab from "../../../components/LanguagesTab";
import useSearchParams from "../../../hooks/useSearchParams";
import cls from './Body.module.scss'

const Body = ({ useForm }) => {
    const [params] = useSearchParams()
    const { register, watch } = useForm
    const watchedFiles = watch()

    return (
        <div className={cls.body}>
            <LanguagesTab />
            <div className={cls.body__block}>
                <InputsWrapper title="Вакансия">
                    <TextArea
                        placeholder='Описание'
                        value={watchedFiles?.[params.get('lang')] || ''}
                        register={{ ...register((params.get('lang') || 'null'), { required: { value: true, message: 'Добавьте описание' } }) }}
                    />
                </InputsWrapper>
                <InputsWrapper title="Заработная плата">
                    <Input
                        placeholder="Зарплата"
                        register={{ ...register('salary') }}
                    />
                </InputsWrapper>
            </div>
        </div>
    );
}

export default Body;