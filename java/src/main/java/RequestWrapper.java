public class RequestWrapper {
    private String summary;
    private int numSentences;
    public RequestWrapper(){}
    public RequestWrapper(String summary, String numSentences) {
        this.summary = summary;
        try {
            this.numSentences = Integer.parseInt(numSentences);
        } catch(NumberFormatException | NullPointerException nfpe) {
            this.numSentences = 3;
        }
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public void setNumSentences(int numSentences) {
        this.numSentences = numSentences;
    }

    public String getSummary() {
        return summary;
    }

    public int getNumSentences() {
        return numSentences;
    }
}
