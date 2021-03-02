using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace CopiaSpren
{
    class DictionaryHandler
    {
        private Random random = new Random();
        private Dictionary dictionary;

        public DictionaryHandler(string path)
        {
            using (StreamReader jsonStream = File.OpenText(path))
            {
                var json = jsonStream.ReadToEnd();
                dictionary = JsonConvert.DeserializeObject<Dictionary>(json);
            }
        }

        public string GetRandomSujeto()
        {
            var randomIndex = random.Next(0, dictionary.sujetos.Length);
            string item = dictionary.sujetos[randomIndex];
            //dictionary.sujetos = dictionary.sujetos.Where(val => val != item).ToArray();
            return item;
        }

        public string GetRandomVerbo()
        {
            var randomIndex = random.Next(0, dictionary.verbos.Length);
            string item = dictionary.verbos[randomIndex];
            //dictionary.verbos = dictionary.verbos.Where(val => val != item).ToArray();
            return item;
        }

        public string GetRandomCC()
        {
            var randomIndex = random.Next(0, dictionary.ccs.Length);
            string item = dictionary.ccs[randomIndex];
            //dictionary.ccs = dictionary.ccs.Where(val => val != item).ToArray();
            return item;
        }

        public int SujetosLength()
        {
            return dictionary.sujetos.Length;
        }

        public int VerbosLength()
        {
            return dictionary.verbos.Length;
        }

        public int CCSLength()
        {
            return dictionary.ccs.Length;
        }

        public override string ToString()
        {
            return $"Diccionario: {dictionary.name}\n" +
                $"Autor: {dictionary.author}\n" +
                $"Descripción: {dictionary.description}\n" +
                $"Contidos:\n" +
                $" -{dictionary.sujetos.Length} sujetos\n" +
                $" -{dictionary.verbos.Length} verbos\n" +
                $" -{dictionary.ccs.Length} ccs\n";
        }
    }
}

