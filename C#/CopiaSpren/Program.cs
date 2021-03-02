using System;
using System.Collections.Generic;
using System.Linq;

namespace CopiaSpren
{
    class Program
    {
        static readonly DictionaryHandler dictionary = new DictionaryHandler(@"../../../data/galego.json");
        static char category;
        static int num;
        static List<string> used = new List<string>();
        static string userElem;
        static void Main(string[] args)
        {
            used.Add("ohno");
            Console.Write(dictionary);
            Console.Write("Elemento a proveer: (1, 2, 3)\n" +
                " -1 Suxeito\n" +
                " -2 Verbo\n" +
                " -3 Complemento circunstancial\n");
            category = Console.ReadLine().ToCharArray()[0];

            Console.Write("Elemento: ");
            userElem = Console.ReadLine();

            Console.Write("Veces: ");
            num = Int32.Parse(Console.ReadLine());

            for(int i = 0; i < num; i++)
            {
                Console.WriteLine(GetNewPhrase());
            }
        }

        static string FormPhrase(string elem1, string elem2, string elem3)
        {
            return elem1 + " " + elem2 + " " + elem3 + ".";
        }

        static string GetNewPhrase()
        {
            bool newPhrase = false;
            string phrase = "";

            while (!newPhrase)
            {
                switch (category)
                {
                    case '1':
                        phrase = FormPhrase(userElem, dictionary.GetRandomVerbo(), dictionary.GetRandomCC());
                        break;
                    case '2':
                        phrase = FormPhrase(userElem, dictionary.GetRandomVerbo(), dictionary.GetRandomCC());
                        break;
                    case '3':
                        phrase = FormPhrase(userElem, dictionary.GetRandomVerbo(), dictionary.GetRandomCC());
                        break;
                }

                for (int i = 0; i < used.Count(); i++)
                {
                    if (used[i].Equals(phrase))
                    {
                        break;
                    }
                    newPhrase = true;
                    used.Add(phrase);
                }
            }
            return phrase;
        }
    }
}
