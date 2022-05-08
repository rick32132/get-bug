import { SubmitFeedbackService } from "./SubmitFeedbackService"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackService(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy },
)

describe('Submit Feedback', () =>{
    it('should be able to submit feedback', async () => {
        await expect(submitFeedback.execute({
           type: 'BUG',
           comment: 'example comment',
           screenshot: 'data:image/png;base64,dh2387rgf23d327df',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    })

    it('should not be able to submit feedback without type', async () => {
        await expect(submitFeedback.execute({
           type: '',
           comment: 'example comment',
           screenshot: 'data:image/png;base64,dh2387rgf23d327df',
        })).rejects.toThrow();
    })

    it('should not be able to submit feedback without comment', async () => {
        await expect(submitFeedback.execute({
           type: 'BUG',
           comment: '',
           screenshot: 'data:image/png;base64,dh2387rgf23d327df',
        })).rejects.toThrow();
    })
    
    it('should not be able to submit feedback with an invalid screenshot', async () => {
        await expect(submitFeedback.execute({
           type: 'BUG',
           comment: 'example comment',
           screenshot: 'test.jpg',
        })).rejects.toThrow();
    })

    
})