# from sumy.parsers.html import HtmlParser
# from sumy.parsers.plaintext import PlaintextParser
#from sumy.nlp.tokenizers import Tokenizer
import pkgutil
import sumy
# from sumy.summarizers.lsa import LsaSummarizer as Summarizer
# from sumy.nlp.stemmers import Stemmer
# from sumy.utils import get_stop_words

def main_handler(event, context):
	url = event['summary']
	language = "english"
	package = sumy
	print(package.__path__)
	for importer, modname, ispkg in pkgutil.iter_modules(package.__path__):
		print(str(modname))
		print(str(ispkg))
	return "hello"
	#return Tokenizer(language)
	#parser = HtmlParser.from_url(url, Tokenizer(language))
	# return parser
	# stemmer = Stemmer(language)
	# summarizer = Summarizer(stemmer)
	# summarizer.stop_words = get_stop_words(language)
	# return " ".join(summarizer(parser.document, 3))
	# return "It'sa me! Mario from python!"
