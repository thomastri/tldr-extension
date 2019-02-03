import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class Handler implements RequestHandler<RequestWrapper, ResponseWrapper> {
    private final Summarizer summarizer = new DefaultSummarizer();
    public ResponseWrapper handleRequest(RequestWrapper input, Context context) {
        return new ResponseWrapper(context.getAwsRequestId(), summarizer.getSummary(input.getSummary(), input.getNumSentences()));
    }
}
