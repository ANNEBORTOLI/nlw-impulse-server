import { SubmitFeedbackUseCase } from './submit-feedback-use-case';

const submitFeedback = new SubmitFeedbackUseCase(
  { create: async () => {} },
  { sendMail: async () => {} }
);

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'example comment',
        screenshot: 'data:image/png;base64,812hdgfuy432g5y2g5y2'
      })
    ).resolves.not.toThrow();
  });

  it('should not be able to submit a feedback without a type', async () => {
    await expect(
      submitFeedback.execute({
        type: '',
        comment: 'example comment',
        screenshot: 'data:image/png;base64,812hdgfuy432g5y2g5y2'
      })
    ).rejects.toThrow();
  });

  it('should not be able to submit a feedback without a comment', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: '',
        screenshot: 'data:image/png;base64,812hdgfuy432g5y2g5y2'
      })
    ).rejects.toThrow();
  });

  it('should not be able to submit a feedback with aN invalid screenshot', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'example comment',
        screenshot: 'test.jpg'
      })
    ).rejects.toThrow();
  });
});
