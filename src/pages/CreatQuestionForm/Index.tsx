import { useForm } from 'react-hook-form';
import * as C from './Index.styles';
import { Question, QuestionForm } from '../../types/Question';
import {
	createDocument,
	updateDocument,
} from '../../services/firebaseService';

const CreateQuestionForm = () =>{
	const {
		register,
		handleSubmit,
		reset,
	} = useForm<QuestionForm>();

	const onSubmit = (data:QuestionForm) => {
		
		alert(JSON.stringify(data));
	};
	const createEspecialidadeHandler = async (data: QuestionForm) => {
		try {
			await createDocument('engSegTrab', { ...data,
				alternativas: [data.alternativa0,data.alternativa1,data.alternativa2,data.alternativa3,data.alternativa4],
			});
		}catch(e){
			console.log('erro na inserção do bd');
		}
		onSubmit(data);
		reset();
	};

	return (
		<C.Container>
			<C.Area>
				<C.Header>Galeria de Questões</C.Header>
				<form onSubmit={handleSubmit(createEspecialidadeHandler)}>
					<div>
						<label htmlFor='banca'>Banca</label>
						<input {...register('banca',{ required: false })} id='banca' name= 'banca' type='text'/>
					</div>
					<div>
						<label htmlFor='nivel'>Nível</label>
						<input {...register('nivel',{ required: false })} id='nivel' name= 'nivel' type='text'/>
					</div>
					<div>
						<label htmlFor='cargo'>Cargo</label>
						<input {...register('cargo',{ required: false })} id='cargo' name= 'cargo' type='text'/>
					</div>
					<div>
						<label htmlFor='concurso'>Concurso</label>
						<input {...register('concurso',{ required: false })} id='concurso' name= 'concurso' type='text'/>
					</div>
					<div>
						<label htmlFor='ano'>Ano</label>
						<input {...register('ano',{ required: false })} id='ano' name= 'ano' type='number'/>
					</div>
					<div>
						<label htmlFor='assunto'>Assunto</label>
						<input {...register('assunto',{ required: false })}id='assunto' name= 'assunto' type='text'/>
					</div>
					<div>
						<label htmlFor='enunciado'>Enunciado</label>
						<textarea {...register('enunciado',{ required: false})} id='enunciado' name= 'enunciado'/>
					</div>
					<div>
						<label htmlFor='alternativa0'>Alternativa0</label>
						<textarea {...register('alternativa0',{ required: false })} id='alternativa0' name= 'alternativa0'/>
					</div>
					<div>
						<label htmlFor='alternativa1'>Alternativa1</label>
						<textarea {...register('alternativa1',{ required: false })} id='alternativa1' name= 'alternativa1'/>
					</div>					
					<div>
						<label htmlFor='alternativa2'>Alternativa2</label>
						<textarea {...register('alternativa2',{ required: false })} id='alternativa2' name= 'alternativa2'/>
					</div>
					<div>
						<label htmlFor='alternativa3'>Alternativa3</label>
						<textarea {...register('alternativa3',{ required: false })} id='alternativa3' name= 'alternativa3'/>
					</div>
					<div>
						<label htmlFor='alternativa4'>Alternativa4</label>
						<textarea {...register('alternativa4',{ required: false })}id='alternativa4' name= 'alternativa4'/>
					</div>
					<div>
						<label htmlFor='resposta'>Resposta</label>
						<input {...register('resposta',{ required: false })}id='resposta' name= 'resposta' type='text'/>
					</div>
					<div>
						<label htmlFor='observacao'>Observação</label>
						<textarea {...register('observacao',{ required: false })} id='observacao' name= 'observacao'/>
					</div>
					<button type='submit'>Salvar</button>
					
				</form>

				{/*Área de upload*/}
			</C.Area>
		</C.Container>
	);
};

export default CreateQuestionForm;
